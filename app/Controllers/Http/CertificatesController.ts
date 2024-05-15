import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Certificate from "App/Models/Certificate";
import Application from '@ioc:Adonis/Core/Application'

export default class CertificatesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {

    try {
      const certificate = new Certificate()
      certificate.title = request.input('title');
      certificate.description = request.input('description');
      certificate.tier = request.input('tier');

      const image = request.file('image', {
        size: '2mb',
        extnames: ['jpg', 'png', 'gif'],
      })!
      
      await image.move(Application.tmpPath('uploads'))
      
      // Get the name of the saved file; to store it in your database, for example.
      const fileName = image.fileName;
      certificate.image = fileName || '';

      await certificate.save();

      return response.json({
          status: 'Certificate successfully created',
          message: 'Certificate successfully created!',
          data: certificate
      })
  } catch (error) {
      return response.status(400).json({
          status: 'Error creating Certificate',
          message: 'There was a problem creating Certificate, please try again.'
      })
  }

  }

  public async show({request, response}: HttpContextContract) {

    const certificate = await Certificate.findOrFail(request.param("id"));
    response.status(200).json({message: 'data is successfully fetched', data: certificate})

  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params}: HttpContextContract) {

    let id = params.id;
    try {
      const updatedcertificates = await Certificate.findOrFail(id);
      updatedcertificates.title = request.input('title');
      updatedcertificates.description = request.input('description');
      updatedcertificates.tier = request.input('tier');
    
    await updatedcertificates.save();

      return response.json({
        status: 'Certificate successfully updated',
        message: 'Certificate successfully updated!',
          data: updatedcertificates
      })
  } catch (error) {
      return response.status(400).json({
          status: 'Error updating Certificate',
          message: 'There was a problem updating Certificate, please try again.'
      })
  }

  }

  public async destroy({request, response}: HttpContextContract) {
    
    const certificate = await Certificate.findOrFail(request.param("id"));
    certificate.delete();
    return response.status(200).json({message: 'Certificate is successfully deleted', success: true});


  }
}
