import { Model } from '@vuex-orm/core'
import User from '@/models/User'
import Message from '@/models/Message'

export default class Chat extends Model {
  static entity = 'chats'
  
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.uid(),

      userId: this.string(null).nullable(),
      user: this.belongsTo(User, 'userId'),

      messages: this.hasMany(Message, 'chatId'),
    }
  }

  async send (content: string) {
    await Message.insert({
      data: {
        chatId: this.$id,
        authorId: User.current.$id,
        content,
      }
    })
  }
}
