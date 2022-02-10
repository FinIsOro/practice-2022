<script lang="ts" setup>
import * as CSS from 'csstype'
import { $mc } from '@/utils/style'

interface Props {
  id: string
  size: CSS.WidthProperty<string | number> & CSS.HeightProperty<string | number>
}

const { id, size } = defineProps<Props>()
</script>

<template>
  <svg :class="$mc('root')">
    <use :href="`${require('@/assets/icons.svg')}#${id}`"></use>
  </svg>
</template>

<style lang="scss" module>
.root {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
