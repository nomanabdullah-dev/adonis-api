// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  async index()
  {
    return {hello:"Hello API"}
  }
}
