<script lang="ts" setup>
import { Property } from 'csstype'
import { $mc } from '@/utils/style'

interface Props {
  id: string
  size: Property.Width | Property.Height
  variant: string
}

const { id, size, variant } = withDefaults(defineProps<Props>(), {
  variant: '',
})
</script>

<template>
  <svg :class="[
    ...$mc('root'),
    { [`icon-${variant}`]: variant.length != '' },
  ]">
    <use :href="`${require('@/assets/icons.svg')}#${id}`"></use>
  </svg>
</template>

<style lang="scss" module>
.root {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
