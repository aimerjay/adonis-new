import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import User from "App/Models/User";
// import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite';

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {

    const user = new User()
    user.email = request.input('email');
    user.password = request.input('password');
    user.fname = request.input('fname');
    user.lname = request.input('lname');
    
    const avatar = request.file('avatar', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif'],
    })!
    
    await avatar.move(Application.tmpPath('uploads'))
    
    // Get the name of the saved file; to store it in your database, for example.
    const fileName = avatar.fileName;
    user.avatar = fileName || '';
    await user.save();
    response.created({ message: 'data is successfully created', data: user})
  }

  public async show({request, response}: HttpContextContract) {

    // let id = request.id;
    // const user = await User.findOrFail({params.id});

    const user = await User.findOrFail(request.param("id"));
    response.status(200).json({message: 'data is successfully fetched', data: user})

    // const user = await User.query().preload('users').where('id', params.id)
    // response.status(200).json({message: 'data is successfully shown', data: users})

  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params}: HttpContextContract) {

    let id = params.id;
    const updateduser = await User.findOrFail(id);
    updateduser.fname = request.input('fname');
    updateduser.lname = request.input('lname');
    await updateduser.save();
    return response.status(200).json({message: 'data is successfully updated', data:updateduser});

  }

  public async destroy({request,response}: HttpContextContract) {
    const user = await User.findOrFail(request.param("id"));
    user.delete();
    return response.status(200).json({message: 'data is successfully deleted', success: true});

  }
}
