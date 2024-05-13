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

Route.get('/users', () => {
  return 'List of posts'
})

// Route.get('/users/:id', () => {
//   return 'Return a single post'
// })
// Route.post('/store', async () => {
//   return 'Handle post creation form request'
// })

Route.post("/store", "UsersController.store");
Route.get("/users/:id", "UsersController.show");
Route.put("/users/:id", "UsersController.update");
Route.delete("/users/:id", "UsersController.destroy");

// Route.resource('user','UsersController');
// Route.get('/users/:id', async ({ params }) => {
//   return `Viewing post with id ${params.id}`
// })

