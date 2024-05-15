import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany} from '@ioc:Adonis/Lucid/Orm'
import User from './User';
export default class Badge extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public tier: string;

  @column()
  public image: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User)
  public users: ManyToMany<typeof User>
}
