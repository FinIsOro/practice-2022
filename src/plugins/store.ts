import { App } from 'vue'
import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'
import includer from '@/utils/includer'
import Chat from '@/models/Chat'
import faker from '@faker-js/faker'
import User from '@/models/User'
import Message from '@/models/Message'

export default {
  install (app: App)
  {
    const database = new VuexORM.Database()

    includer.context(
      require.context('@/models', true, /^\.\/[^\/]+(?:\/index)?\.(js|ts)$/i),
      module => database.register(module.default),
    )

    const store = createStore({
      state: { },
      mutations: { },
      actions: { },
      modules: { },
      plugins: [ VuexORM.install(database) ],
    })

    app.use(store)

    User.insert({
      data: Array(faker.datatype.number({ min: 20, max: 50 })).fill(null).map(() => {
        const name = faker.name.findName()

        return {
          avatar: Math.random() < 0.25 ? null : faker.internet.avatar(),
          name,
          username: faker.internet.userName(name),
        }
      })
    })

    Chat.insert({
      data: User.all().map(user => ({
        userId: user.$id,
        messages: Array(50).fill(null).map(() => ({
          authorId: faker.random.arrayElement([ user.$id, User.current.$id ]),
          content: faker.lorem.sentences(),
        }))
      }))
    })
  },
}
