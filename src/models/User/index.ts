import { Model } from '@vuex-orm/core'
import Chat from '@/models/Chat'
import { computed } from 'vue'

const currentUser = computed(() => User.query().withAllRecursive().first())

export default class User extends Model {
  static entity = 'users'
  
  static primaryKey = 'id'

  static get current () {
    return currentUser.value!
  }

  get initiatives () {
    const model = this as any as typeof User

    return model.name.split(' ').slice(0, 2).map(name => name.charAt(0)).join('')
  }

  static fields () {
    return {
      id: this.uid(),

      chat: this.hasOne(Chat, 'userId'),

      avatar: this.attr(null),

      name: this.string(''),
      username: this.string(''),
    }
  }
}
