import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class RegistersController {
  async index({request, response}:HttpContextContract)
  {
    const validations = schema.create({
      email: schema.string({}, [
        rules.email()
        rules.unique({table: 'users', column: 'email'})
      ]),
      password: schema.string({}, [
        rules.confirmed()
      ])
    })

    const data = await request.validate({schema:validations})

    const user = await User.create(data)

    return response.created(user)
  }
}
