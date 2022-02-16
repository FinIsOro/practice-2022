import { Model } from '@vuex-orm/core'
import User from '@/models/User'
import Chat from '@/models/Chat'

export default class Message extends Model {
  static entity = 'messages'
  
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.uid(),

      authorId: this.string(null).nullable(),
      author: this.belongsTo(User, 'authorId'),

      chatId: this.string(null).nullable(),
      chat: this.belongsTo(Chat, 'chatId'),

      content: this.string(''),

      createdAt: this.attr(() => new Date().toISOString()),
    }
  }
}
