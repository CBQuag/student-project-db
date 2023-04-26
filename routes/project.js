var express = require('express');
var router = express.Router();

const Project = require("../models/").project;


/* GET home page. */
router.get('/', function(req, res, next) {
  return Project.findAll()
  .then((project) => res.status(200).send(project))
  .catch((error) => res.status(400).send(error));
});

router.get('/:id', (req, res)=>{
  return Project.findByPk(req.params.id)
  .then((project) => {
    if(!project){
      return res.status(404).send({
        message: '404: Nobody here but us chickens!'
      });
    }
    return res.status(200).send(project)
  })
  .catch((error) => res.status(400).send(error));
})


//POST

router.post('/', (req, res)=>{
  const project={
    name:req.body.name,
    description:req.body.description
}

Project.create(project)
.then((data) => res.status(200).send(data))
.catch((error) => res.status(400).send(error));
})


//PUT

router.put('/:id', (req, res)=>{
  return Project.findByPk(req.params.id)
    .then((project) => {
      if (!project) {
        return res.status(404).send({
          message: '404: Nobody here but us chickens!',
        });
      }
      return project
        .update({
            name: req.body.name || project.name,
            description: req.body.description || project.description,
        })
        .then(() => res.status(200).send(project))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
})


//DELETE

router.delete('/:id', (req, res)=>{
  return Project.findByPk(req.params.id).then((project) => {
    if (!project) {
      return res.status(404).send({
        message: "Classroom not found",
      });
    }
    return project
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  })
  .catch(error => res.status(400).send(error))
})

module.exports = router;
