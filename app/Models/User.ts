import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel , ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Badge from 'App/Models/Badge'
import Certificate from './Certificate'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

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

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @manyToMany(() => Badge, {
    pivotTable: 'user_badges',
    pivotTimestamps: {
      createdAt: 'acquired_at',
      updatedAt: 'updated_at'
    }
  })
  public badges: ManyToMany<typeof Badge>

  @manyToMany(() => Certificate, {
    pivotTable: 'user_certificates',
    pivotTimestamps: {
      createdAt: 'acquired_at',
      updatedAt: 'updated_at'
    }
  })
  public certificates: ManyToMany<typeof Certificate>
}
