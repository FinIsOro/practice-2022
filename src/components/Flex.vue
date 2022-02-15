<script lang="ts" setup>
import { Property } from 'csstype'
import { $mc } from '@/utils/style'

interface Props {
  dir: Property.FlexDirection
  wrap: Property.FlexWrap
  gap: Property.Gap
  align: Property.AlignItems
  justify: Property.JustifyContent
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
