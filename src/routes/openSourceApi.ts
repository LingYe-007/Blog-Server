import { Context, Controller, Joi, Post } from '@icekuma/node-server'
import * as openSourceService from '../services/openSource'

@Controller('/api/v1/opensource')
export default class OpenSourceApi {
  @Post(
    '/add',
    Joi.object({
      image: Joi.string(),
      title: Joi.string(),
      introduce: Joi.string(),
      status: Joi.string(),
      github: Joi.string(),
      preview: Joi.string(),
      supplement: Joi.string()
    })
  )
  async add(ctx: Context) {
    const openSource = ctx.body
    const data = await openSourceService.add(openSource)
    ctx.json({
      stat: 'OK',
      data
    })
  }

  @Post('/list')
  async list(ctx: Context) {
    const data = await openSourceService.list({})
    ctx.json({
      stats: 'OK',
      data
    })
  }

  @Post(
    '/del',
    Joi.object({
      _id: Joi.string(),
      image: Joi.string(),
      title: Joi.string(),
      introduce: Joi.string(),
      status: Joi.string(),
      github: Joi.string(),
      preview: Joi.string(),
      supplement: Joi.string()
    })
  )
  async del(ctx: Context) {
    const query = ctx.body
    const data = await openSourceService.del(query)
    ctx.json({
      status: 'OK',
      data
    })
  }
}
