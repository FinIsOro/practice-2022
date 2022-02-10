<script lang="ts" setup>
import Scroller from '@/components/Scroller'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
</script>


<template>
  <Scroller y="auto">
    <Flex class="d-flex min-w-100 min-h-100" gap="5rem" dir="row" wrap="nowrap" align="center" justify="center">
      <Icon id="message" size="1rem" />
      <Icon id="location" size="1.5rem" />
      <Icon id="calendar" size="10rem" />
    </Flex>
  </Scroller>
</template>
