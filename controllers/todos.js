const Todo = require('../models/todo');

module.exports = {
    create,
    index,
    delete: removeTodo
}

function create(req, res) {
    Todo.create(req.body, function(err, todo) {
        console.log(todo);
        res.redirect('/todos');
    });
}

function index(req, res) {
    Todo.find({}, function(err, todos) {
        res.render('todos/index', {todos});
    });
}

function removeTodo(req, res) {
    Todo.findByIdAndDelete(req.params.id, function(err, todo) {
        res.redirect('/todos');
    });
}