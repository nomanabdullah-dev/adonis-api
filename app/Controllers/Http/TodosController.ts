import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Todo from "App/Models/Todo";

export default class TodosController {
  async index()
  {
    return Todo.all()
  }

  async store({request, response}: HttpContextContract)
  {
    Todo.create({title:request.input('title'),is_completed:0})
    return response.status(201).json({'created':true})
  }
}
