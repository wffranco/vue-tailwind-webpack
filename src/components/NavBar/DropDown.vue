<template>
  <div v-clickaway="show ? close : null" :class="{relative, disabled}">
    <div :class="disabled ? nav.option.disabled : [nav.option.enabled, show ? nav.option.active : nav.option.main]">
      <slot name="button" :toggle="toggle">
        <button
          type="button"
          class="group rounded-md p-1 -m-1 inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
          :disabled="disabled"
          @click="toggle"
        >
          <span>{{ text }}</span>
          <Icon type="dropdown-arrow" class="ml-2 h-5 w-5" />
        </button>
      </slot>
    </div>

    <transition v-bind="currentTransition">
      <div v-if="show" :class="dropdownClass" class="absolute z-10 mt-3 transform px-2 max-w-md sm:px-0">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <slot :close="close" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed } from 'vue';
import Icon from '@/components/Icon';
import { useTheme } from '@/theme';
import { clickaway } from '@/directives/clickaway';
import { props as fly } from '@/transitions/fly';
import { props as mobile } from '@/transitions/mobile';

export default {
  components: { Icon },
  directives: { clickaway },
  props: {
    disabled: Boolean,
    dropdownClass: {type: [String, Array, Object], default: 'w-screen -ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'},
    relative: Boolean,
    text: String,
    transition: String,
  },
  setup() {
    const theme = useTheme();
    const nav = computed(() => theme.NavBar);

    return { nav };
  },
  data: () => ({
    show: false,
  }),
  computed: {
    currentTransition() {
      return this.transitions[this.transition] || null;
    },
    transitions: () => ({
      fly,
      mobile,
    }),
  },
  methods: {
    close() {
      this.show = false;
    },
    toggle(value) {
      this.show = value === false || value === true ? value : !this.show;
    },
    open() {
      this.show = true;
    },
  },
};
</script>

<style>

</style>
