import { Context, Controller, Joi, Post } from '@icekuma/node-server'
import { ObjectId } from 'mongodb'
import * as db from '../db'
import stats from '../stats'
import { IThoughts } from '../types'
import * as thoughtsService from '../services/thoughts'

@Controller('/api/v1/thoughts')
export default class thoughtApi {
  @Post(
    '/add',
    Joi.object({
      img: Joi.string().required(),
      userName: Joi.string().required(),
      personLabel: Joi.string().required(),
      content: Joi.string().required(),
      time: Joi.string().required()
    })
  )
  async add(ctx: Context) {
    const thought = ctx.body
    const data = await thoughtsService.add(thought)
    ctx.json({
      stat: 'OK',
      data
    })
  }

  @Post('/list')
  async list(ctx: Context) {
    const data = await thoughtsService.list({})
    ctx.json({
      stats: 'OK',
      data
    })
  }

  @Post(
    '/del',
    Joi.object({
      img: Joi.string(),
      userName: Joi.string(),
      personLabel: Joi.string(),
      content: Joi.string(),
      time: Joi.string()
    })
  )
  async del(ctx: Context) {
    const query = ctx.body
    const data = await thoughtsService.del(query)
    ctx.json({
      stats: 'OK',
      data
    })
  }
}
