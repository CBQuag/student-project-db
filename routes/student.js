var express = require('express');
var router = express.Router();

const Student = require("../models").student;

//GET

router.get('/', (req, res, next)=>{
    return Student.findAll()
    .then((stud) => res.status(200).send(stud))
    .catch((error) => res.status(400).send(error));
})

router.get('/:id', (req, res)=>{
    return Student.findByPk(req.params.id)
    .then((Student) => {
      if(!Student){
        return res.status(404).send({
          message: '404: Nobody here but us chickens!'
        });
      }
      return res.status(200).send(Student)
    })
    .catch((error) => res.status(400).send(error));
  })
  
  
//POST
  
router.post('/', (req, res)=>{
    const student={
        group_id:req.body.group_id,
        name:req.body.name,
        ssn:req.body.ssn
    }

    Student.create(student)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
})  
  
  
//PUT
  
router.put('/:id', (req, res)=>{
return Student.findByPk(req.params.id)
    .then((Student) => {
    if (!Student) {
        return res.status(404).send({
        message: '404: Nobody here but us chickens!',
        });
    }
    return Student
        .update({
            name: req.body.name || Student.name,
            ssn: req.body.ssn || Student.ssn,
        })
        .then(() => res.status(200).send(Student))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
})


//DELETE

router.delete('/:id', (req, res)=>{
return Student.findByPk(req.params.id).then((Student) => {
    if (!Student) {
    return res.status(404).send({
        message: "Classroom not found",
    });
    }
    return Student
    .destroy()
    .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
})
.catch(error => res.status(400).send(error))
})

module.exports = router;

