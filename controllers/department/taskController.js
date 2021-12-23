
const TaskController={
    getAll:(req, res) => {
        const { publisher_id, title, description } = req.body
        try {
            //validate
            if (!Helper.validateField(publisher_id, title, description)) {
                throw new Error("insert publisher_id, title,description")
            }
            //make the object
            const notice = {
                publisher_id: parseInt(publisher_id), title, description
            }
            //inset into db
            new NoticeModel().addData(DB_Define.NOTICE_TABLE, notice, (err, results) => {
                if (err) {
                    let response = new Response(true, err.message, err);
                    return res.send(response);
                }
    
                notice.id = results.insertId
                let response = new Response(false, "New Notice Created Succesfully", notice);
                res.send(response);
            })
        } catch (e) {
            let response = new Response(true, e.message, e);
            res.send(response);
        }
    }
    ,
    add:()=>{
        
    }
}
module.exports=TaskController