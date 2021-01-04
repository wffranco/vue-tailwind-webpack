<template>
  <transition v-bind="props">
    <slot />
  </transition>
</template>

<script>
export const props = {
  'enter-active-class': 'transition ease-out duration-200',
  'enter-from-class': 'opacity-0 translate-y-1',
  'enter-to-class': 'opacity-100 translate-y-0',
  'leave-active-class': 'transition ease-in duration-150',
  'leave-from-class': 'opacity-100 translate-y-0',
  'leave-to-class': 'opacity-0 translate-y-1',
};

export const mixin = {
  computed: {
    transitionFly: () => props,
  },
};

export default {
  setup: () => ({props}),
};
</script>
