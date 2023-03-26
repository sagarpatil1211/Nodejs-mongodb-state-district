var express = require("express");
var State = require("../models/State");
let District = require("../models/District");


let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let state = new State(body);
    state.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    });
});

router.get("/",(req,res)=>{
    State.find({}).sort({name:1}).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:id",(req,res)=>{
    State.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.put("/:id",(req,res)=>{
    
    let body = req.body;
    State.findByIdAndUpdate(req.params.id, body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id",(req,res)=>{
    State.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

// router.post("/district", (req, res)=>{
//     let district = new District(req.body);
//     district.save().then((result)=>{
//         res.end(JSON.stringify({status:"success", data:result}))
//     },(err)=>{
//         res.end(JSON.stringify({status:"failed", data:err}))
//     })
// });
// router.put("/district/:id", (req, res)=>{
//     let id = req.params.id
//     let body = req.body;
//     console.log(id);
//     console.log(body);
//     // let district = new District(req.body);
//     District.findByIdAndUpdate(id,body).then((result)=>{
//         res.end(JSON.stringify({status:"success", data:result}))
//     },(err)=>{
//         res.end(JSON.stringify({status:"failed", data:err}))
//     })
// });

// router.get("/district/:statesid", (req, res)=>{
//     District.find({stateid:req.params.statesid}).then((result)=>{
//         res.end(JSON.stringify({status:"success", data:result}));
//     },(err)=>{
//         res.end(JSON.stringify({status:"failed", data:err}));
//     })
// });

// router.get("/district/:id", (req, res)=>{
//     District.findById(id).then((result)=>{
//         res.end(JSON.stringify({status:"success", data:result}));
//     },(err)=>{
//         res.end(JSON.stringify({status:"failed", data:err}));
//     })
// });

// router.delete("/district/:id", (req, res)=>{
//     District.findByIdAndDelete(req.params.id).then((result)=>{
//         res.end(JSON.stringify({status:"success", data:result}));
//     },(err)=>{
//         res.end(JSON.stringify({status:"failed", data:err}));
//     })
// });

module.exports = router;