const JSONServer=require('json-server')
const Mpserver=JSONServer.create()
const router=JSONServer.router('db.json')
const middleware=JSONServer.defaults()

const PORT=3000||process.env.PORT

Mpserver.use(middleware)
Mpserver.use(router)

Mpserver.listen(PORT,()=>{
    console.log(`Media-player server started running ar PORT:${PORT} & waiting for the client request`);
})