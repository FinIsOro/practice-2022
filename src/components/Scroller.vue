<script lang="ts" setup>
import * as CSS from 'csstype'
import { $mc } from '@/utils/style'

interface Props {
  x: CSS.OverflowXProperty,
  y: CSS.OverflowYProperty,
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
}
</style>
