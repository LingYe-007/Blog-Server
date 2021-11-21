import { RouteDecorator } from '@icekuma/node-server'
import stats from '../stats'
import { IUser } from '../types'

export default RouteDecorator(async (ctx) => {
  const user: IUser = ctx.env.user
  if (user.username === '') throw stats.ErrForbidden
})
