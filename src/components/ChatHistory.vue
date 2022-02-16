<script lang="ts" setup>
import ChatHistoryMessage from '@/components/ChatHistoryMessage.vue'
import Flex from '@/components/Flex.vue'
import FlexItem from '@/components/FlexItem.vue'
import { toRefs } from 'vue'

export interface Props {
  messages?: any[]
}

const props = withDefaults(defineProps<Props>(), {
  messages: () => [ ],
})

const { messages } = toRefs(props)
</script>

<template>
  <Flex
    dir="column"
    wrap="nowrap"
    gap="1rem"
  >
    <FlexItem
      v-for="message of messages"
      :key="message.id"
      grow="0"
      basis="auto"
    >
      <ChatHistoryMessage
        :content="message.content"
        :side="message.side"
      />
    </FlexItem>
  </Flex>
</template>

<style lang="scss" module>

</style>
