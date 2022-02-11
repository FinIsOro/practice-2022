<script lang="ts" setup>
import Overlay from '@/components/Overlay'
import Scroller from '@/components/Scroller'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import { $mc } from '@/utils/style'
</script>

<template>
  <Scroller y="auto">
    <Flex class="d-flex min-w-100 min-h-100" gap="5rem" dir="row" wrap="nowrap" align="center" justify="center" style="height: 150vh;">
      <Icon id="message" variant="alpha" size="1rem" />
      <Icon id="location" variant="beta" size="1.5rem" />
      <Overlay>
        <Icon id="calendar" variant="gamma" size="10rem" />
        
        <template #cover>
          <Flex class="w-100 h-100" align="center" justify="space-between">
            <Icon :class="$mc('arrow--prev')" id="arrow" variant="beta" size="1rem" role="button" />
            <Icon :class="$mc('arrow--next')" id="arrow" variant="beta" size="1rem" role="button" />
          </Flex>
        </template>
      </Overlay>
    </Flex>
  </Scroller>
</template>

<style lang="scss" module>
.arrow--prev {
  transform: rotate(90deg);
}

.arrow--next {
  transform: rotate(-90deg);
}
</style>