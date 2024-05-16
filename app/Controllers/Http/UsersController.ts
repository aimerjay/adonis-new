import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import User from "App/Models/User";
import Hash from '@ioc:Adonis/Core/Hash'
import Badge from 'App/Models/Badge';
import Certificate from 'App/Models/Certificate';
// import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite';

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {

    try {
      const user = new User()
      user.email = request.input('email');

      const hashedPassword = await Hash.make(request.input('password'));
      user.password = hashedPassword;
      user.fname = request.input('fname');
      user.lname = request.input('lname');
      user.status = request.input('status');
      user.rank = request.input('rank');
      user.college = request.input('college');

      const avatar = request.file('avatar', {
        size: '2mb',
        extnames: ['jpg', 'png', 'gif'],
      })!
      
      await avatar.move(Application.tmpPath('uploads'))
      
      // Get the name of the saved file; to store it in your database, for example.
      const fileName = avatar.fileName;
      user.avatar = fileName || '';
      await user.save();

      return response.json({
          status: 'User Profile successfully created',
          message: 'Profile successfully created!',
          data: user
      })
  } catch (error) {
      return response.status(400).json({
          status: 'Error creating User Profile',
          message: 'There was a problem creating user profile, please try again.'
      })
  }
    
    // const user = new User()
    // user.email = request.input('email');
    // user.password = request.input('password');
    // user.fname = request.input('fname');
    // user.lname = request.input('lname');
    // user.status = request.input('status');
    // user.rank = request.input('rank');
    // user.college = request.input('college');

    // const avatar = request.file('avatar', {
    //   size: '2mb',
    //   extnames: ['jpg', 'png', 'gif'],
    // })!
    
    // await avatar.move(Application.tmpPath('uploads'))
    
    // // Get the name of the saved file; to store it in your database, for example.
    // const fileName = avatar.fileName;
    // user.avatar = fileName || '';
    // await user.save();
    // response.created({ message: 'data is successfully created', data: user})
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
    updateduser.status = request.input('status');
    updateduser.rank = request.input('rank');
    updateduser.college = request.input('college');
    await updateduser.save();
    return response.status(200).json({message: 'data is successfully updated', data:updateduser});

  }

  public async destroy({request,response}: HttpContextContract) {
    const user = await User.findOrFail(request.param("id"));
    user.delete();
    return response.status(200).json({message: 'data is successfully deleted', success: true});

  }


  public async acquireBadge({request, response}: HttpContextContract) 
  {
    const user_id = request.input('userID');
    const badge_id = request.input('badgeID')

  const user = await User.find(user_id)
  if (!user){
    throw new Error('Role not found')
  }
  const badge = await Badge.find(badge_id)
  if (!badge){
    throw new Error('Badge not found')
  }
  // Performs insert query inside the pivot table
  await user.related('badges').attach([badge_id])
  return response.json({
    status: 'Pivot Table successfully created',
    message: 'Successfuly acquired a new badge!'
  })
  }

  public async acquireCert({request, response}: HttpContextContract) 
  {
    const user_id = request.input('userID');
    const cert_id = request.input('certID');

  const user = await User.find(user_id)
  if (!user){
    throw new Error('Role not found')
  }
  const cert = await Certificate.find(cert_id)
  if (!cert){
    throw new Error('Certificate not found')
  }
  // Performs insert query inside the pivot table
  await user.related('certificates').attach([cert_id])
  return response.json({
    status: 'Pivot Table successfully created',
    message: 'Successfuly acquired a new certificate!'
  })
  }

  public async getbadges({request, response}: HttpContextContract) {

    const userId = request.param("id");

    const user = await User.query().where('id', userId).preload('badges').first()
    // const user = await User.findOrFail(request.param("id"));
    const userdata =  user.fname.concat(" ", user.lname)
    const badgedata = user.badges.map(badges=>badges.title, badges=>badges.acquired_at)
    
    response.status(200).json({User: userdata, Badges: badgedata})

    // response.status(200).json({User: userdata, Badges: badgedata, data: user.badges})

    console.log('User', user.fname, user.lname)
    console.log('Badges:', user.badges.map(badges=>badges.title))
  }

  public async getcertificates({request, response}: HttpContextContract) {

    const userId = request.param("id");

    const user = await User.query().where('id', userId).preload('certificates').first()
    // const user = await User.findOrFail(request.param("id"));
    const userdata =  user.fname.concat(" ", user.lname)
    const certificatedata = user.certificates.map(certificates=>certificates.title)
    
    response.status(200).json({User: userdata, Certificates: certificatedata})

    // response.status(200).json({User: userdata, Certificates: certificatedata, data: user.certificates})

    console.log('User: ', user.fname, user.lname)
    console.log('Certificates:', user.certificates.map(certificates=>certificates.title))
  }


}
