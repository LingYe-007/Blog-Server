import { Stream, Controller, Context, Post, Joi } from '@icekuma/node-server'

import stats from '../stats'
import * as fileService from '../services/fileService'

@Controller('/api/v1/file')
export default class FileApi {
  @Stream('/upload')
  async upload(ctx: Context) {
    const { name, acticleId } = ctx.query
    if (!name) throw stats.ErrBadParams
    const id = await fileService.upload(ctx.req, name, acticleId)
    ctx.json({
      stat: 'OK',
      id
    })
  }

  @Stream('/download')
  async download(ctx: Context) {
    const acticleId = ctx.query.id
    if (!acticleId) throw stats.ErrBadParams
    const file = await fileService.find(acticleId)
    let type = 'application/octet-stream'
    const filename = file.name.toLowerCase()
    if (filename.endsWith('.md') || filename.endsWith('.mdx')) {
      type = 'text/plain'
    }
    if (filename.endsWith('.png')) type = 'text/plain'
    ctx.res.setHeader('Content-Type', type)
    ctx.res.setHeader(
      'Content-Disposition',
      'attachment;filename' + encodeURIComponent(file.name)
    )

    ctx.res.end(file.data.buffer)
  }
}
