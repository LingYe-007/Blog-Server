import { Context, Controller, Joi, Post } from '@icekuma/node-server'

import * as acticleService from '../services/acticleService'

@Controller('/api/v1/acticle')
export default class ActicleApi {
  @Post(
    '/add',
    Joi.object({
      title: Joi.string().required(),
      userName: Joi.string().required(),
      content: Joi.string(),
      type: Joi.string(),
      img: Joi.string(),
      labels: Joi.array().required(),
      likes: Joi.number().required(),
      browseNumber: Joi.number().required()
    })
  )
  async add(ctx: Context) {
    const acticle = ctx.body
    const data = await acticleService.add(acticle)
    ctx.json({
      stat: 'OK',
      data
    })
  }

  @Post(
    '/update',
    Joi.object({
      _id: Joi.string().required(),
      title: Joi.string(),
      userId: Joi.string(),
      content: Joi.string(),
      pubulishTime: Joi.string(),
      labels: Joi.array(),
      likes: Joi.number(),
      browseNumber: Joi.number()
    })
  )
  async update(ctx: Context) {
    const acticle = ctx.body
    const data = await acticleService.update(acticle)
    ctx.json({
      stats: 'OK',
      data
    })
  }

  @Post(
    '/list'
  )
  async list(ctx: Context) {
    const query = ctx.body
    const data = await acticleService.list(query)
    ctx.json({
      stats: 'OK',
      data
    })
  }

  @Post(
    '/del',
    Joi.object({
      _id: Joi.string(),
      title: Joi.string(),
      userId: Joi.string(),
      content: Joi.string(),
      pubulishTime: Joi.string(),
      labels: Joi.array(),
      likes: Joi.number(),
      browseNumber: Joi.number()
    })
  )
  async del(ctx: Context) {
    const query = ctx.body
    const data = await acticleService.del(query)
    ctx.json({
      stats: 'OK',
      data
    })
  }
}
