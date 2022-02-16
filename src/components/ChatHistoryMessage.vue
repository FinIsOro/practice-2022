<script lang="ts" setup>
import Flex from '@/components/Flex.vue'
import FlexItem from '@/components/FlexItem.vue'
import { $mc } from '@/utils/style'
import { toRefs } from 'vue'

export interface Props {
  side: 'left' | 'right'
  content?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'left',
  content: '',
})

const { side, content } = toRefs(props)


</script>

<template>
  <Flex
    dir="row"
    :justify="
      side == 'left'
        ? 'start'
        : 'end'
    "
  >
    <div :class="$mc('content', `content--${side}`)">
      {{ content }}
    </div>
  </Flex>
</template>

<style lang="scss" module>
.content {
  flex: unset;
  max-width: min(85%, 30rem);

  border-radius: $border-radius-lg;

  padding: 1rem;

  &--left {
    background-color: $gray-400;
    border-bottom-left-radius: 0;
  }

  &--right {
    background-color: $gray-500;
    border-bottom-right-radius: 0;
  }
}
</style>
