<script lang="ts" setup>
import Flex from '@/components/Flex.vue'
import FlexItem from '@/components/FlexItem.vue'
import Scroller from '@/components/Scroller.vue'
import Avatar from '@/components/Avatar.vue'
import ChatList from '@/components/ChatList.vue'
import ChatHistory from '@/components/ChatHistory.vue'
import Chat from '@/models/Chat'
import User from '@/models/User'
import { $mc } from '@/utils/style'
import { computed, watch } from '@vue/runtime-core'
import { ref } from 'vue'

const search = ref('')
const activeChatId = ref('')
const message = ref('')

const chScroller = ref(null)

const chats = computed(() => Chat.query().withAllRecursive().get())

const chatItems = computed(() =>
  chats.value
    .map((chat: any) => ({
      id: chat.$id as string,
      avatar: chat.user.avatar as string,
      name: chat.user.name as string,
    }))
    .filter(chatItem =>
      chatItem.name.indexOf(search.value) != -1 &&
      chatItem.id != User.current.chat.$id
    )
)

const activeChat = computed(() => chats.value.find(chat => chat.$id == activeChatId.value))

const activeChatMessages = computed(() =>
  (activeChat.value?.messages ?? [ ])
    .map(message => ({
      id: message.id,
      content: message.content,
      side: message.author.$id == User.current.$id
        ? 'right'
        : 'left'
    }))
)

watch(activeChat, () => chScroller.value?.scrollYToEnd())

function sendMessage () {
  if (message.value.length == 0) {
    return
  }

  activeChat.value?.send(message.value)
  message.value = ''

  chScroller.value?.scrollYToEnd()
}
</script>

<template>
  <Flex
    class="w-100 h-100 p-2"
    :class="$mc('selected', activeChat)"
    dir="row"
    wrap="nowrap"
    gap="0.5rem"
  >
    <Flex
      class="w-100 h-100"
      :class="$mc('sidebar')"
      dir="column"
      wrap="nowrap"
      gap="0.5rem"
    >
      <FlexItem grow="0" basis="auto" class="card card-body">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1"><fa icon="search" /></span>
          <input v-model="search" type="text" class="form-control" placeholder="Search...">
        </div>
      </FlexItem>
      <div class="card card-body overflow-auto pe-1">
        <Scroller y="scroll">
          <ChatList
            :items="chatItems"
            v-model="activeChatId"
          />
        </Scroller>
      </div>
    </Flex>
    <Flex
      class="w-100 h-100"
      :class="$mc('main')"
      dir="column"
      wrap="nowrap"
      gap="0.5rem"
    >
      <FlexItem v-if="activeChat" grow="0" basis="auto" class="card card-body">
        <Flex
          dir="row"
          wrap="nowrap"
          gap="1rem"
          align="center"
        >
          <FlexItem
            :class="$mc('back-button')"
            grow="0"
            basis="auto"
          >
            <button
              class="btn"
              @click="activeChatId = ''"
            >
              <fa icon="arrow-left" />
            </button>
          </FlexItem>
          <FlexItem grow="0" basis="auto">
            <Avatar :url="activeChat.user.avatar" :alt="activeChat.user.initiatives" size="4rem" />
          </FlexItem>
          <div>
            {{ activeChat.user.name }}
          </div>
        </Flex>
      </FlexItem>
      <div class="card card-body overflow-auto pe-1">
        <Flex
          class="w-100 h-100"
          v-if="!activeChat"
          align="center"
          justify="center"
        >
          <h5 class="text-center m-0 user-select-none">
            Please, select any chat
          </h5>
        </Flex>
        <Scroller
          ref="chScroller"
          v-else
          y="auto"
          y-to-end
        >
          <ChatHistory
            class="w-100 h-100"
            :messages="activeChatMessages"
          />
        </Scroller>
      </div>
      <FlexItem v-show="activeChat" grow="0" basis="auto" class="card card-body">
        <div class="input-group">
          <input
            v-model="message"
            type="text"
            class="form-control"
            placeholder="Type something..."
            @keyup.enter="sendMessage"
          >
          <button
            class="btn btn-outline-secondary"
            @click="sendMessage"
          >
            <fa icon="paper-plane" />
          </button>
        </div>
      </FlexItem>
    </Flex>
  </Flex>
</template>

<style lang="scss" module>
.sidebar {
  @include media-breakpoint-up(sm) {
    flex: 0 0 18.75rem;
  }
}

.back-button {
  display: none;
}

@include media-breakpoint-down(sm) {
  .main {
    display: none;
  }

  .selected {
    .back-button {
      display: unset;
    }

    .main {
      display: flex;
    }

    .sidebar {
      display: none;
    }
  }
}
</style>
