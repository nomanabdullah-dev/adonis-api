import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import authConfig from 'Config/auth'

export default class AuthController {
  async register({request, response}:HttpContextContract)
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

  async login({request, auth}: HttpContextContract)
  {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.attempt(email, password)

    return token.toJSON()
  }
}
