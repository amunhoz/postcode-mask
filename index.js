const list = require("./data/ziplist.json")
const mask = require("string-mask")
module.exports = function(data, country){
    if (list[country]) {
        let format = list[country].format
        if (data.length != format.length ) {
            return mask.apply(data, format)
        }        
    } 
    return data
}