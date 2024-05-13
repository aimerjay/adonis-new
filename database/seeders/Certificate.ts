import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Certificate from 'App/Models/Certificate'

export default class extends BaseSeeder {
  public async run () {
    await Certificate.createMany([
      {
        title: 'Course Completed: Learning PHP 101',
        description: 'This certificate is awarded to you upon completing the stated course above. Congratulations!',
        tier: 'Easy'
      },
      {
        title: 'Course Completed: Learning REACT 101',
        description: 'This certificate is awarded to you upon completing the stated course above. Congratulations!',
        tier: 'Easy'
      },
      {
        title: 'Course Completed: Learning MYSQL 101',
        description: 'This certificate is awarded to you upon completing the stated course above. Congratulations!',
        tier: 'Easy'
      },
      {
        title: 'Course Completed: Learning TYPESCRIPT 101',
        description: 'This certificate is awarded to you upon completing the stated course above. Congratulations!',
        tier: 'Easy'
      },
      {
        title: 'Course Completed: Learning REDIS 101',
        description: 'This certificate is awarded to you upon completing the stated course above. Congratulations!',
        tier: 'Easy'
      },
      {
        title: 'Course Completed: Learning ADONISJS 101',
        description: 'This certificate is awarded to you upon completing the stated course above. Congratulations!',
        tier: 'Easy'
      }
    ])
  }
}
