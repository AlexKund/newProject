// set up ========================
var express = require('express'),
 	app = express(),
 	mongoose = require('mongoose'),
 	logger = require('morgan'),
 	bodyParser = require('body-parser');


// configuration =================
mongoose.connect('mongodb://localhost:27017/userlist');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser());

// define model =================
var Todo = mongoose.model('toDo', {
	text: String
});

// routes ======================================================================

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {

	// create a todo, information comes from AJAX request from Angular
	Todo.create({
		text : req.body.text,
		done : false
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});

});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});
});

// view one entry
app.get("/api/todos/:id",function (req,res) {
	var id = req.params.id;
	Todo.find({"_id":id}, function(err,todo){
		if(err != null) {
			res.json(err);
		}else {
			if(todo.length > 0) {
				res.json(todo[0])
			} else {
				res.send('not found');
			}
		}
	}) 
});

// application -------------------------------------------------------------
app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
	
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log('App listening on port 8080');