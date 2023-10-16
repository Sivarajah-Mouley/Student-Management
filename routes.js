const express = require('express');
const Student= require('./student');

const router = express.Router();

router.post('/students', async (req,res) => {
    const{stuNo,name,age} = req.body;

    try{
        const student = new Student({stuNo, name, age});
        await student.save();
        res.send(student);   
    }
    catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find({}); 
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


router.put('/students/:id', async (req,res) =>{
    const {id} = req.params;
    const{ stuNo,name,age} = req.body;
    try{
        const student = await Student.findByIdAndUpdate(id);
        res.send(student);
    }
    catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});

router.delete('/student/:id', async (req,res)=>{
    const{id} = req.params;
    try{
        const student = await Student.findByIdAndDelete(id);
        res.send(student);
    }
    catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router