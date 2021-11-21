import { Binary, ObjectId, Long } from 'mongodb'

export interface IThoughts {
  img?: string;
  userName?:string;
  personLabel?:string;
  content?:string;
  time?:string;
}

export interface IOpenSource {
  _id?:any;
  image?: string;
  title?: string;
  introduce?: string;
  status?: string;
  github?: string;
  preview?: string;
  supplement?: string;
}

export interface IUser {
  username: string
  nickname?: string
  password?: string
  avatar?: string
  introduce?: string
}

export interface IActicle {
  _id?: any
  title?: string
  userName?: string
  content?: string
  pubulishTime?: string
  labels?: string[]
  type?:string
  likes?: number
  img?:string
  browseNumber?: number
}

export interface IToken {
  userId: string
  token: string
  createdAt: Date
}

export interface IFile {
  name: string
  data: Binary
  size: number
  createdAt: Long
}
