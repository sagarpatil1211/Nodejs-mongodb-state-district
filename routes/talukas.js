let express = require("express");
let Taluka =require("../models/Taluka");
let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let taluka = new Taluka(body);
    taluka.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    });
});

router.get("/",(req,res)=>{
    // Taluka.find().populate({path:"stateid", select: {name:1}}).sort({name:1}).then((result)=>{
    //     res.end(JSON.stringify({status:"success", data:result}));
    // },(err)=>{
    //     res.end(JSON.stringify({status:"failed", data:err}));
    // })

    Taluka.aggregate([{$group: {_id: "$districtid"}},])
    .then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })

});


router.get("/:districtid",(req,res)=>{
    // Taluka.find({stateid:req.params.id}).sort({name:1}).then((result)=>{
    //     res.end(JSON.stringify({status:"success", data:result}));
    // },(err)=>{
    //     res.end(JSON.stringify({status:"failed", data:err}));
    // })

      Taluka.find({districtid : req.params.districtid }).sort({name:1}).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:districtid/:id",(req,res)=>{
    Taluka.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.put("/:id",(req,res)=>{
    let body = req.body;
    Taluka.findByIdAndUpdate(req.params.id, body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id",(req,res)=>{
    Taluka.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});


module.exports = router;