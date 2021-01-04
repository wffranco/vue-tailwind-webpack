<template>
  <div v-clickaway="show ? close : null" :class="{relative, disabled}">
    <div :class="disabled ? nav.option.disabled : [nav.option.enabled, show ? nav.option.active : nav.option.main]">
      <slot name="button" :toggle="toggle">
        <button
          type="button"
          class="group rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
          :disabled="disabled"
          @click="toggle"
        >
          <span>{{ text }}</span>
          <svg
            class="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </slot>
    </div>

    <transition v-bind="currentTransition">
      <div v-if="show" :class="dropdownClass" class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <slot :close="close" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useTheme } from '@/theme';
import { clickaway } from '@/directives/clickaway';
import { props as fly } from '@/transitions/fly';
import { props as mobile } from '@/transitions/mobile';

export default {
  directives: { clickaway },
  props: {
    disabled: Boolean,
    dropdownClass: [String, Array, Object],
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
