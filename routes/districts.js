var express = require("express");
let District = require("../models/District");

let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let district = new District(body);
    district.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    });
});

router.get("/",(req,res)=>{
    // District.find().populate({path:"stateid", select: {name:1}}).sort({name:1}).then((result)=>{
    //     res.end(JSON.stringify({status:"success", data:result}));
    // },(err)=>{
    //     res.end(JSON.stringify({status:"failed", data:err}));
    // })

    District.aggregate([{$group: {_id: "$stateid"}},])
    .then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })

});


router.get("/:stateid",(req,res)=>{
    // District.find({stateid:req.params.id}).sort({name:1}).then((result)=>{
    //     res.end(JSON.stringify({status:"success", data:result}));
    // },(err)=>{
    //     res.end(JSON.stringify({status:"failed", data:err}));
    // })

      District.find({stateid : req.params.stateid }).sort({name:1}).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:stateid/:id",(req,res)=>{
    District.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.put("/:id",(req,res)=>{
    let body = req.body;
    District.findByIdAndUpdate(req.params.id, body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id",(req,res)=>{
    District.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});


module.exports = router;