import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Badge from 'App/Models/Badge'

export default class extends BaseSeeder {
  public async run () {
    await Badge.createMany([
      {
        title: 'Welcome To The Class',
        description: 'When users first register to create an account on your site, they are awarded this badge.',
        tier: 'Easy'
      },
      {
        title: 'E-learning Newbie ',
        description: 'This badge is awarded to your online course students upon completing their first lesson on the site.',
        tier: 'Easy'
      }
      ,
      {
        title: 'A+ Student',
        description: 'Earned by students that obtain an over 90% grade on a course’s final exam.',
        tier: 'Medium'
      }
      ,
      {
        title: 'Brainiac In The Making',
        description: 'This achievement is awarded to users when they pass their first quiz.',
        tier: 'Medium'
      }
      ,
      {
        title: 'Knowledge Knight',
        description: 'This badge is awarded to students that pass 10 quizzes.',
        tier: 'Hard'
      }
      ,
      {
        title: 'Ultimate Quiz Taker',
        description: 'This award is given to users that have passed all quizzes in a specific course with a percentage grade of over 90%.',
        tier: 'Hard'
      }
    ])
  }
}
