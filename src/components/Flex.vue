<script lang="ts" setup>
import * as CSS from 'csstype'
import { $mc } from '@/utils/style'

interface Props {
  dir: CSS.FlexDirectionProperty
  wrap: CSS.FlexWrapProperty
  gap: CSS.GapProperty<string | number>
  align: CSS.AlignItemsProperty
  justify: CSS.JustifyContentProperty
}

const { dir, wrap, gap, align, justify } = withDefaults(defineProps<Props>(), {
  dir: 'row',
  wrap: 'unset',
  gap: 0,
  align: 'unset',
  justify: 'unset',
})
</script>

<template>
  <div :class="$mc('root')">
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: v-bind(dir);
  flex-wrap: v-bind(wrap);
  gap: v-bind(gap);
  align-items: v-bind(align);
  justify-content: v-bind(justify);
}
</style>
