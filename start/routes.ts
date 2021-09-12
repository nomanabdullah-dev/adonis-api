import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index')

Route.group(()=>{
  Route.group(()=>{
    Route.get('/todo', 'TodosController.index')
    Route.post('/todo', 'TodosController.store')
    Route.patch('/todo/:id', 'TodosController.update')
    Route.delete('/todo/:id', 'TodosController.destroy')
  }).middleware('auth')
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.get('/logout', 'AuthController.logout')
}).prefix('api')
