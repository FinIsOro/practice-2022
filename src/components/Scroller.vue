<script lang="ts" setup>
import { Property } from 'csstype'
import { $mc } from '@/utils/style'

interface Props {
  x?: Property.OverflowX,
  y?: Property.OverflowY,
}

const { x, y } = withDefaults(defineProps<Props>(), {
  x: 'hidden',
  y: 'hidden',
})
</script>

<template>
  <div :class="$mc('root')">
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100%;

  overflow-x: v-bind(x);
  overflow-y: v-bind(y);

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background: rgba(23, 26, 37, 0.25);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #283E6F;
  }
}
</style>
