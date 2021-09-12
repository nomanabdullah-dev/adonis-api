import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index')
Route.group(()=>{
  Route.get('/todo', 'TodosController.index')
  Route.post('/todo', 'TodosController.store')
}).prefix('api')
