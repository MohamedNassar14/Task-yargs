const fs = require("fs")
const readDataFromJson = (fileName) =>{
    let data = []
    try{
        data = JSON.parse(fs.readFileSync(fileName))
        if(!Array.isArray(data)) throw new Error("")
    }
    catch(e){
       data= []
    }
    return data
}
const writeDataToJson = (fileName, data) =>{
    try{
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports={
    readDataFromJson,
    writeDataToJson
}