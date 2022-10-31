const {app,port} = require("../server")

const index = require("./routes/index")(app)

app.listen(port, ()=>{
    console.log(`escutando em http://localhost:${port}`)
})