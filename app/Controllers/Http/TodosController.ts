import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Todo from "App/Models/Todo";

export default class TodosController {
  async index({request})
  {
    const page = request.input('page', 1)
    const limit = request.input('per_page', 2)

    return Todo.query().paginate(page, limit)
  }

  async store({request, response}: HttpContextContract)
  {
    Todo.create({title:request.input('title'),is_completed:0})
    return response.status(201).json({'created':true})
  }

  async update({request,response,params}: HttpContextContract)
  {
    const todo = await Todo.findOrFail(params.id)
    todo.is_completed = request.input('is_completed')
    todo.save()
    return response.status(202).send(todo)
  }
}
