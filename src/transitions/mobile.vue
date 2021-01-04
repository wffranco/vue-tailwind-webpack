<template>
  <transition v-bind="props">
    <slot />
  </transition>
</template>

<script>
export const props = {
  'enter-active-class': 'transition ease-out duration-200',
  'enter-from-class': 'opacity-0 scale-95',
  'enter-to-class': 'opacity-100 scale-100',
  'leave-active-class': 'transition ease-in duration-100',
  'leave-from-class': 'opacity-100 scale-100',
  'leave-to-class': 'opacity-0 scale-95',
};

export const mixin = {
  computed: {
    transitionMobile: () => props,
  },
};

export default {
  setup: () => ({props}),
};
</script>
