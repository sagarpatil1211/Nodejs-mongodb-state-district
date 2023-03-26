let express = require("express");
let Town =require("../models/Town");
let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let town = new Town(body);
    town.save().then((result)=>{
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

    Town.aggregate([{$group: {_id: "$talukaid"}},])
    .then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })

});


router.get("/:talukaid",(req,res)=>{
    // Town.find({stateid:req.params.id}).sort({name:1}).then((result)=>{
    //     res.end(JSON.stringify({status:"success", data:result}));
    // },(err)=>{
    //     res.end(JSON.stringify({status:"failed", data:err}));
    // })

    Town.find({talukaid : req.params.talukaid }).sort({name:1}).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:talukaid/:id",(req,res)=>{
    Town.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.put("/:id",(req,res)=>{
    let body = req.body;
    Town.findByIdAndUpdate(req.params.id, body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id",(req,res)=>{
    Town.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});


module.exports = router;