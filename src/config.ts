import * as fs from 'fs'
import * as path from 'path'

interface Config {
  port: number;
  mongoUrl: string;
  mongoDb: string;
  authServer: string;
  tokenExpires: number;
  uploadSizeLimit: number;
  uploadTypes: string[];
}

const config: Config = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../config.json'), 'utf-8')
)
export default config
