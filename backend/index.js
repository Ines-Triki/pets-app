import Express  from "express";
import mysql from "mysql";
const app = Express();
app.use(Express.json())
const db = mysql.createConnection({
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
            return res.json(data);
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
     app.put("/pets/:petsid", (req, res) => {
      const petsid = req.params.petsid
      const q= "Update pets set `name`=?,`type`=?,`description`=? where id=?"
      const values = [req.body.name, req.body.type, req.body.description, ]
      db.query(q, [values, petsid], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
})
app.listen(3000,()=>{
    console.log('listening on');
})