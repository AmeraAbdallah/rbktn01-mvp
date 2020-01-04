const express = require('express');
const Todo = require('../models/Todo');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
    try{
        let todoData = {
            title: req.body.text,
            user: req.user._id,

        }
        const todo = new Todo(todoData);
        await todo.save();
        res.status(201).json({todo});
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;