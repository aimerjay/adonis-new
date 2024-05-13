import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'virk@adonisjs.com',
        password: 'secret',
        fname: 'mark',
        lname: 'mark',
        status: 'regular',
        rank: 'sophomore',
        college: 'College of Engineering'
      },
      {
        email: 'romain@adonisjs.com',
        password: 'supersecret',
        fname: 'john',
        lname: 'john',
        status: 'irregular',
        rank: 'junior',
        college: 'College of Chemistry'
      }
    ])
  }
}
