const connection=require("mysql2")
const express=require("express") ;
const cors = require("cors");

const app = express();
app.use(express.json())

app.use(cors())

const db = connection.createConnection({
    host: "localhost",
    user: "root",
    password: "23647619rbk",
    database: "pets"
})

db.connect(function(err) {
    if(err) console.log("Error to connect to database", err)
    else console.log("Database connected");
})

app.get('/',(req,res)=>{
    res.send("ines")
})

app.get("/pets",(req,res)=>{
    const q="select * from petss"
    db.query(q,(err,data)=>{
        if(err){
   res.send(err)}
   console.log(data)
return res.send(data)
     } )
    })
    
     app.post("/pets",(req,res)=>{
       const q="insert into petss(`name`,`type`,`description`) values(?)"
         const values=[req.body.name,req.body.type,req.body.description]
         
         db.query(q, [values], (err, data) => {
            if (err) return res.send(err);
            return res.json("created");
          });
        });
        
       

        app.delete("/pets/:id",(req,res)=>{
            const petsid = req.params.id ;
            const q = "DELETE FROM petss WHERE id=?"
            db.query(q, [petsid], (err, data) => {
                if (err) return res.send(err);
                return res.json(data);
        })
    })
     
   


app.put("/pets/:id", (req, res) => {
    const petsid = req.params.id;
    const q = "UPDATE petss SET `name`= ?, `type`= ?, `description`= ?";
  
    const values = [
      req.body.name,
      req.body.type, 
      req.body.description,
    ];
  
    db.query(q, [...values,petsid], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
app.listen(3000,()=>{
    console.log('listening on');
})