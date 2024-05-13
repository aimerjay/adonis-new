import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Course from 'App/Models/Course'

export default class extends BaseSeeder {
  public async run () {
    await Course.createMany([
      {
        title: 'Learning PHP 101',
        description: 'is a fullstack Web framework with focus on ergonomics and speed . It takes care of much of the Web development hassles, offering you a clean and stable',
        
      },
      {
        title: 'Learning REACT 101',
        description: 'superis a fullstack Web framework with focus on ergonomics and speed . It takes care of much of the Web development hassles, offering you a clean and stable',
      },
      {
        title: 'Learning MYSQL 101',
        description: 'superis a fullstack Web framework with focus on ergonomics and speed . It takes care of much of the Web development hassles, offering you a clean and stable',
      },
      {
        title: 'Learning TYPESCRIPT 101',
        description: 'superis a fullstack Web framework with focus on ergonomics and speed . It takes care of much of the Web development hassles, offering you a clean and stable',
      },
      {
        title: 'Learning REDIS 101',
        description: 'superis a fullstack Web framework with focus on ergonomics and speed . It takes care of much of the Web development hassles, offering you a clean and stable',
      },
      {
        title: 'Learning ADONISJS 101',
        description: 'superis a fullstack Web framework with focus on ergonomics and speed . It takes care of much of the Web development hassles, offering you a clean and stable',
      }
    ])
  }
}
