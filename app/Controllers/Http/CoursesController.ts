import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Application from '@ioc:Adonis/Core/Application'
import Course from "App/Models/Course";

export default class CoursesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {

    try {
      const course = new Course()
      course.title = request.input('title');
      course.description = request.input('description');

      await course.save();

      return response.json({
          status: 'Course successfully created',
          message: 'Course successfully created!',
          data: course
      })
  } catch (error) {
      return response.status(400).json({
          status: 'Error creating Course',
          message: 'There was a problem creating Course, please try again.'
      })
  }
  }

  public async show({request, response}: HttpContextContract) {

    const user = await Course.findOrFail(request.param("id"));
    response.status(200).json({message: 'data is successfully fetched', data: user})

  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params}: HttpContextContract) {

    let id = params.id;
    try {
      const updatedcourse = await Course.findOrFail(id);
      updatedcourse.title = request.input('title');
      updatedcourse.description = request.input('description');
    
    await updatedcourse.save();

      return response.json({
        status: 'Course successfully updated',
        message: 'Course successfully updated!',
          data: updatedcourse
      })
  } catch (error) {
      return response.status(400).json({
          status: 'Error updating Course',
          message: 'There was a problem updating course, please try again.'
      })
  }
  }

  public async destroy({request, response}: HttpContextContract) {

    const course = await Course.findOrFail(request.param("id"));
    course.delete();
    return response.status(200).json({message: 'Course is successfully deleted', success: true});

  }
}
