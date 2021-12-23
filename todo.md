1. insert coures instruction from admin panel

   1. skill table
   1. subskill talbes
   1. question table

   report:

```
SELECT students.student_id,students.name,student_skill_list.skill_id,skill.title

from student_skill_list
inner join skill on skill.id=student_skill_list.skill_id
INNER JOIN students on students.student_id=student_skill_list.stu_id

WHERE student_skill_list.stu_id="17303024"
```

Fahim

1. Database design
2. Create router and add to index.js
3. Create controller
   3.1 Get data from req.body, req.params
   3.2 Data Validation
   3.3 Make the object (insert or update)
   3.4 DB operation (CRUD)
   3.5 res.send
   3.6 wrap everything inside try catch block
   3.7 res.send error from catch block
