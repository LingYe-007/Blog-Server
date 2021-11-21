import { ReqStat } from '@icekuma/node-server'

export default {
  ErrNotLogin: new ReqStat('ERR_NOT_LOGIN', '用户未登录'),
  ErrBadParams: new ReqStat('ERR_BAD_PARAMS', '参数错误'),
  ErrAuthFailed: new ReqStat('ERR_AUTH_FAILED', '身份验证失败'),
  ErrForbidden: new ReqStat('ERR_FORBIDDEN', '没有权限访问'),
  ErrInvalidStatus: new ReqStat('ERR_INVALID_STATUS', '无效的状态'),
  ErrPayloadTooLarge: new ReqStat('ERR_PAYLOAD_SIZE', '文件过大', 413),
  ErrInvalidFileType: new ReqStat('ERR_INVALID_FILE_TYPE', '不支持的文件类型'),
  ErrNotFound: new ReqStat('ERR_NOT_FOUND', '找不到指定记录'),
  ErrAdminCount: new ReqStat('ERR_ADMIN_COUNT', '至少需要有一个管理员')
}
