import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Badge from "App/Models/Badge";
import Application from '@ioc:Adonis/Core/Application'

export default class BadgesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {

    try {
      const badge = new Badge()
      badge.title = request.input('title');
      badge.description = request.input('description');
      badge.tier = request.input('tier');

      const image = request.file('image', {
        size: '2mb',
        extnames: ['jpg', 'png', 'gif'],
      })!
      
      await image.move(Application.tmpPath('uploads'))
      
      // Get the name of the saved file; to store it in your database, for example.
      const fileName = image.fileName;
      badge.image = fileName || '';

      await badge.save();

      return response.json({
          status: 'Badge successfully created',
          message: 'Badge successfully created!',
          data: badge
      })
  } catch (error) {
      return response.status(400).json({
          status: 'Error creating Badge',
          message: 'There was a problem creating Badge, please try again.'
      })
  }

  }

  public async show({request, response}: HttpContextContract) {

    const badge = await Badge.findOrFail(request.param("id"));
    response.status(200).json({message: 'data is successfully fetched', data: badge})

  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params}: HttpContextContract) {

    let id = params.id;
    try {
      const updatedbadges = await Badge.findOrFail(id);
      updatedbadges.title = request.input('title');
      updatedbadges.description = request.input('description');
      updatedbadges.tier = request.input('tier');
    
    await updatedbadges.save();

      return response.json({
        status: 'Badge successfully updated',
        message: 'Badge successfully updated!',
          data: updatedbadges
      })
  } catch (error) {
      return response.status(400).json({
          status: 'Error updating Badge',
          message: 'There was a problem updating Badge, please try again.'
      })
  }

  }

  public async destroy({request, response}: HttpContextContract) {

    const badge = await Badge.findOrFail(request.param("id"));
    badge.delete();
    return response.status(200).json({message: 'Badge is successfully deleted', success: true});

  }
}
