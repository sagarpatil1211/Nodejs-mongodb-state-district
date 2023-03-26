let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name:{type:String, required:true},
        stateid:{type:Schema.Types.ObjectId, ref:"states"},
        
    }
)

let District = mongoose.model("districts",schema);
module.exports = District;