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
        throw new Error ("Invalid information");
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
};

module.exports = TaskController;
