const Response = require("../../models/Response");
const TaskModel = require("../../models/task/TaskModel");
const DB_Define = require("../../utils/DB_Define");
const Helper = require("../../utils/Helper");

const TaskController = {
  createTask: (req, res) => {
    try {
      const {
        deadline,
        progress_rate,
        privacy,
        assigned_by,
        assigned_to,
        priority,
        description,
        title,
      } = req.body;

      console.log(req.body)

      // Validation
      if (
        !Helper.validateField(
          deadline,
          progress_rate,
          privacy,
          assigned_by,
          assigned_to,
          priority,
          description,
          title
        )
      ) {
        throw new Error("Invalid information");
      }
      //creating an object
      let task = {
        deadline,
        progress_rate,
        privacy,
        assigned_by,
        assigned_to,
        priority,
        description,
        title,
      };
      new TaskModel().addData(
        DB_Define.FACULTY_TASK_TABLE,
        task,
        (err, results) => {
          if (err) {
            let response = new Response(true, err.message, err);
            return res.send(response);
          }

          task.id = results.insertId;
          let response = new Response(
            false,
            "New Task Created Succesfully",
            task
          );
          res.send(response);
        }
      );
    } catch (e) {
      let response = new Response(true, e.message, e);
      res.send(response);
    }
  },
  viewTasks: (req, res) => {
    new TaskModel().getAll(
      DB_Define.FACULTY_TASK_TABLE,
      DB_Define.CREATED_AT,
      (err, results) => {
        if (err) {
          let response = new Response(true, err.message, err);
          res.send(response);
        } else {
          if (results && results.length > 0) {
            let response = new Response(
              false,
              " Data list get Successfully",
              results
            );
            res.status(200).send(response);
          } else {
            let response = new Response(true, " Data list NOT FOUND", []);
            res.status(200).send(response);
          }
        }
      }
    );
  },
  deleteTask:(req,res)=>{
    const id=req.params.id
    new TaskModel().deleteByField(DB_Define.FACULTY_TASK_TABLE,"id",id,(err, results) => {
      if (err) {
        let response = new Response(true, err.message, err);
        res.send(response);
      } else {
        res.status(200).send(new Response(false,"data deleted",{id:id}));
      }
    })
  }
};

module.exports = TaskController;
