import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
// import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public fname: string;

  @column()
  public lname: string;

  @column()
  public status: string;

  @column()
  public rank: string;

  @column()
  public college: string;

  @column()
  public avatar: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
