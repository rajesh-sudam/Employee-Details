const pool=require('../../db');
const queries=require('./queries');
// const multer=require('./mutler');
// const upload = multer({ dest: 'uploads/' });

const getreg=(req,res)=>{
    pool.query(queries.getregister,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
        // console.log("empty");
        // res.send("nothing");
    });
};
const addreg=(req,res)=>{
    const {id,name,email,password,phone_no}=req.body;
    // const images=req.file;
    pool.query(queries.addreg,[id,name,email,password,phone_no],(error,result)=>{
            if(error) throw error;
            res.status(200).send("Registration done");
        })
}

const getById=(req,res)=>{
    const id=parseInt(req.params.id)
    pool.query(queries.getById,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);

    })
}

const deleteId=(req,res)=>{
    const id=parseInt(req.params.id)
    pool.query(queries.deletId,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("ID DELETED");
    })
}


const updateId=(req,res)=>{
    const id=parseInt(req.params.id);
    const {name,email,phone_no}=req.body;
    pool.query(queries.updateId,[name,email,phone_no,id],(error,result)=>{
        if(error) throw error;
        res.send(200).send("UPDATED ID");
    })
}

module.exports={
    getreg,
    addreg,
    getById,
    deleteId,
    updateId
}