let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {

        name:{type:String, required:true, unique:true},
        talukaid:{type:Schema.Types.ObjectId, ref:"talukas"},
        
    }
)

let Town = mongoose.model("towns",schema);
module.exports = Town;
