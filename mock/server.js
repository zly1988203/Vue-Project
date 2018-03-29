const jsonServer = require('json-server')
const server = jsonServer.create()

// Support middleware
const middleware = jsonServer.defaults()
server.use(middleware)

// 支持加载多个db json文件
const _ = require('underscore')
const path = require('path')
const fs = require('fs')
const mockDir = path.join(__dirname, 'data')
const base = {}
const files = fs.readdirSync(mockDir)
files.forEach(function (file) {
  _.extend(base, require(path.resolve(mockDir, file)))
})
const router = jsonServer.router(base)
server.use(router)

// 返回自定义格式数据
router.render = (req, res) => {
  let data = {}
  let blackList = ['/dashboard', '/dashboard/weekly_data']
  let localData = res.locals.data
  if (localData instanceof Array && !blackList.includes(req.originalUrl)) {
    data = {
      list: localData,
      total: 20
    }
  } else {
    data = localData
  }
  res.jsonp({
    data: data,
    status: 0,
    message: ''
  })
}

server.listen(8088, () => {
  console.log('JSON Server is running')
})

// 处理登录逻辑
server.post('/account/login', function (req, res) {
  let db = router.db
  let data = db.get('login').value()
  res.jsonp({
    data: data,
    status: 0,
    message: ''
  })
})
