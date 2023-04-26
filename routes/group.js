var express = require('express');
var router = express.Router();

const Group = require("../models").group;

//GET

router.get('/', (req, res, next)=>{
    return Group.findAll()
    .then((group) => res.status(200).send(group))
    .catch((error) => res.status(400).send(error));
})

router.get('/:id', (req, res)=>{
    return Group.findByPk(req.params.id)
    .then((Group) => {
      if(!Group){
        return res.status(404).send({
          message: '404: Nobody here but us chickens!'
        });
      }
      return res.status(200).send(Group)
    })
    .catch((error) => res.status(400).send(error));
  })
  
  
//POST
  
router.post('/', (req, res)=>{
    const group={
        project_id:req.body.project_id,
        name:req.body.name      
    }

    Group.create(group)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
})  
  
  
//PUT
  
router.put('/:id', (req, res)=>{
return Group.findByPk(req.params.id)
    .then((Group) => {
    if (!Group) {
        return res.status(404).send({
        message: '404: Nobody here but us chickens!',
        });
    }
    return Group
        .update({
            name: req.body.name || Group.name,
        })
        .then(() => res.status(200).send(Group))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
})


//DELETE

router.delete('/:id', (req, res)=>{
return Group.findByPk(req.params.id).then((Group) => {
    if (!Group) {
    return res.status(404).send({
        message: "Classroom not found",
    });
    }
    return Group
    .destroy()
    .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
})
.catch(error => res.status(400).send(error))
})

module.exports = router;

