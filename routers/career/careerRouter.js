//skill
// router.use('/skill', require('./skillRouter'))
// //sub skill
// router.use('/sub-skill', require('./subSkillRouter'))
// //question
// router.use('/question', require('./questionRouter'))


const express = require('express')
const Controller = require('../../controllers/Controller')
const router = express.Router()

//base url: http://localhost:2727/career/-----

/**
 * @post
 * @description 1. create a new skill/sub_skill/questioin by department
 * @param {table=skill/sub_skill/question,sub_skill,question}
 * @endpoint http://localhost:2727/career/create/:table
 * 
 * @example_Skill http://localhost:2727/career/create/skill -- Skill body{title,intro_url}
 * @example_SubSkill http://localhost:2727/career/create/sub_skill -- Sub skill body{skill_id,title,type,task,pass_mark}
 * @example_Question http://localhost:2727/career/create/question -- Question body{sub_skill_id,title,op_1,op_2,op_3,op_4,ans}
 */
router.post(`/create/:table`, Controller.common_add)

/**
 * @put
 * @description 2. update skill/sub_skill/question by department
 * @param {table=skill/sub_skill/question,field="id",value="1,2,3,4....."}
 * @endpoint http://localhost:2727/career/update/:table/:field/:value
 * 
 * @example_Skill http://localhost:2727/career/update/skill/id/1 -- Skill body{title,intro_url}
 * @example_SubSkill http://localhost:2727/career/update/sub_skill/id/1 -- Sub skill body{skill_id,title,type,task,pass_mark}
 * @example_Question http://localhost:2727/career/update/question/id/1 -- Question body{sub_skill_id,title,op_1,op_2,op_3,op_4,ans}
 */
router.put(`/update/:table/:field/:value`, Controller.common_update)

/**
 * @delete
 * @description 3. delete skill/sub_skill/question by department
 * @param {table=skill/sub_skill/question,field="id",value="1,2,3,4....."}
 * @body {empty for all} =req.body
 * @endpoint http://localhost:2727/career/delete/:table/:field/:value
 * 
 * @example http://localhost:2727/career/delete/skill/id/1
 * @example http://localhost:2727/career/delete/sub_skill/id/1
 * @example http://localhost:2727/career/delete/question/id/1
 */
router.delete(`/delete/:table/:field/:value`, Controller.common_delete)

/**
 * @get
 * @description 4. get all skill(student,paginate)
 * @param {table=skill,page=1,2,3...}
 * @body {empty} =req.body
 * @endpoint http://localhost:2727/career/skill/get-paginate/:table/:page
 * @example http://localhost:2727/career/skill/get-paginate/skill/1
 */
router.get(`/get-paginate/:table/:page`, Controller.common_get_all_paginate)


/**
 * @get
 * @description 5. get all sub_skill(student,no paginate)
 * @param {table=sub_skill,page=1,2,3...}
 * @body {empty} =req.body
 * @endpoint http://localhost:2727/career/get-all/:table
 * @example http://localhost:2727/career/get-all/sub_skill
 */
router.get(`/get-all/:table`, Controller.common_get_all)

/**
 * @get
 * @description 6. get 10 random question
 * @param {table=question,limit=10,15,...}
 * @body {empty} =req.body
 * @endpoint http://localhost:2727/career/random/:table/:limit
 * @example http://localhost:2727/career/random/question/10
 */
router.get(`/random/:table/:limit`, Controller.common_get_random)


/**
 * @get
 * @description 7. get a single skill/sub_skill(student)
 * @param {table=skill/sub_skill}
 * @body {empty} =req.body
 * @endpoint http://localhost:2727/career/get-one/:table/:field/:value
 * @example http://localhost:2727/career/get-one/skill/id/10
 */
router.get(`/get-one/:table/:field/:value`, Controller.common_get)
module.exports = router
