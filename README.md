### 知询-数据结构约定

```js
user User[] #用户信息
username string
nickname string
password string
avatar string
introduce string

acticle Acticle[] #文章系统
title string
useId string #用来关联用户
content string
banner string?[] #可选
publishTime long 
labels string[]
likes number
browseNumber number

likeRelation LikeRelation[] #点赞关联关系
userId string
acticleId string

userRelation UserRelation[] #用户之间的关联关系
focusId string
beFocusId string

token Token[] #记录用户登陆状态
username: string
token: string
createdAt: Date
```
### 知询Api设定

```javascript
/api/v1/acticle
	/add 
		title:string
		userId:string
		content:string
		pubulishTime:string
        labels:array
        likes:number
        browseNumber:number
   	/update
		_id:string.required
		title:string
        userId:string
        content:string
        pubulishTime:string
        labels:array
        likes:number
        browseNumber:number
    /list
		title：string
        userId:string
        content:string
        pubulishTime:string
        labels:array
        likes:number
        browseNumber:number
    /del
		_id:string.required
		title：string
        userId:string
        content:string
        pubulishTime:string
        labels:array
        likes:number
        browseNumber:number
        
/api/v1/likeRelation
	/add
		userId:string.required
		acticleId:string.required
	/query
		userId:string
        acticleId:string
    /del
		_id:string
        userId:string
		acticleId:string
        
 /api/v1/user
	/register
		username:string.required
		nickname:string.required
		password:string.required
		avatar:string.required
	/login
		username：string.required
        password: string.required
```



