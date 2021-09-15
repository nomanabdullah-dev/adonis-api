import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index')

// Route.group(()=>{
//   Route.group(()=>{

//   }).middleware('auth')
//   Route.post('/register', 'AuthController.register')
//   Route.post('/login', 'AuthController.login')
//   Route.get('/logout', 'AuthController.logout')
// }).prefix('api')

Route.get('todo', 'TodosController.index')
Route.post('todo', 'TodosController.store')
Route.put('todo/:id', 'TodosController.update')
Route.delete('todo/:id', 'TodosController.destroy')
