import { App } from '@icekuma/node-server'

import * as db from './db'
import config from './config'

import ActicleApi from './routes/acticleApi'
import fileApi from './routes/fileApi'
import thoughtApi from './routes/thoughtsApi'
import OpenSourceApi from './routes/openSourceApi'

const app = new App()
app.route(OpenSourceApi)
app.route(thoughtApi)
app.route(fileApi)
app.route(ActicleApi)

db.connect().then(() => app.listen(config.port))
