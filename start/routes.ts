/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|cd
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

// Route.get('/users', () => {
//   return 'List of posts'
// })

// Route.get('/users/:id', () => {
//   return 'Return a single post'
// })
// Route.post('/store', async () => {
//   return 'Handle post creation form request'
// })

// Route.get('/users', () => {
//   return 'List of Users'
// })
// Route.post("/store", "UsersController.store");
// Route.get("/users/:id", "UsersController.show");
// Route.put("/users/:id", "UsersController.update");
// Route.delete("/users/:id", "UsersController.destroy");


// Route.get('/courses', () => {
//   return 'List of Courses'
// })
// Route.post("courses/store", "CoursesController.store");
// Route.get("/courses/:id", "CoursesController.show");
// Route.put("/courses/:id", "CoursesController.update");
// Route.delete("/courses/:id", "CoursesController.destroy");


// Route.get('/certificates', () => {
//   return 'List of Certificates'
// })
// Route.post("certificates/store", "CertificatesController.store");
// Route.get("/certificates/:id", "CertificatesController.show");
// Route.put("/certificates/:id", "CertificatesController.update");
// Route.delete("/certificates/:id", "CertificatesController.destroy");


// Route.get('/badges', () => {
//   return 'List of Badges'
// })
// Route.post("badges/store", "BadgesController.store");
// Route.get("/badges/:id", "BadgesController.show");
// Route.put("/badges/:id", "BadgesController.update");
// Route.delete("/badges/:id", "BadgesController.destroy");

// Route.post("/acquirebadge", "UsersController.acquireBadge");

// Route.post("/acquirecert", "UsersController.acquireCert");

// Route.resource('user','UsersController');
// Route.get('/users/:id', async ({ params }) => {
//   return `Viewing post with id ${params.id}`
// })

// Route.get("/getbadges/:id", "UsersController.getbadges");
// Route.get("/getcertificates/:id", "UsersController.getcertificates");
// ----------------------------------------------------------------------------------
Route.post('login', async ({ auth }) => {
  // const email = request.input('email')
  // const password = request.input('password')

  await auth.use('basic').authenticate()
  return `You are logged in as ${auth.user!.email}. Hello ${auth.user!.fname}!`
})
// ----------------------------------------------------------------------------------
Route.get('/users', () => {
  return 'List of Users'
})
Route.get('/courses', () => {
  return 'List of Courses'
})
Route.get('/certificates', () => {
  return 'List of Certificates'
})
Route.get('/badges', () => {
  return 'List of Badges'
})
// ----------------------------------------------------------------------------------
Route.group(() => {
    Route.get("/getbadges/:id", "UsersController.getbadges");
    Route.get("/getcertificates/:id", "UsersController.getcertificates");

    Route.post("/acquirebadge", "UsersController.acquireBadge");
    Route.post("/acquirecert", "UsersController.acquireCert");
}).middleware('auth')
// ----------------------------------------------------------------------------------
Route.group(() => {
    Route.post("/store", "UsersController.store");
    Route.get("/users/:id", "UsersController.show");
    Route.put("/users/:id", "UsersController.update");
    Route.delete("/users/:id", "UsersController.destroy");
}).middleware('auth')
// ----------------------------------------------------------------------------------
Route.group(() => {
    Route.post("courses/store", "CoursesController.store");
    Route.get("/courses/:id", "CoursesController.show");
    Route.put("/courses/:id", "CoursesController.update");
    Route.delete("/courses/:id", "CoursesController.destroy");
}).middleware('auth')
// ----------------------------------------------------------------------------------
Route.group(() => {
    Route.post("certificates/store", "CertificatesController.store");
    Route.get("/certificates/:id", "CertificatesController.show");
    Route.put("/certificates/:id", "CertificatesController.update");
    Route.delete("/certificates/:id", "CertificatesController.destroy");
}).middleware('auth')
// ----------------------------------------------------------------------------------
Route.group(() => {
    Route.post("badges/store", "BadgesController.store");
    Route.get("/badges/:id", "BadgesController.show");
    Route.put("/badges/:id", "BadgesController.update");
    Route.delete("/badges/:id", "BadgesController.destroy");
}).middleware('auth')
// ----------------------------------------------------------------------------------
Route.group(() => {

}).middleware('auth')