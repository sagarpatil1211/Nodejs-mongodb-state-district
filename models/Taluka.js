let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name : { type : String, required : true},
        districtid : { type:Schema.Types.ObjectId, ref:"districts"},
    }
)

let Taluka = mongoose.model("talukas", schema);


module.exports = Taluka;
