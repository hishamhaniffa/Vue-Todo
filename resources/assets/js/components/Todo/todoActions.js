export const getTodos = function(store) {

	this.$http.get('api/v1/todos').then((response) => {
		var dispatch = store.dispatch;
		dispatch('GET_TODOS', response.data);
	});
}

export const saveTodo = function(store, postData) {

	this.$http.post('api/v1/todo', postData).then( (response) => {
		if(response.status == 201)
		{
			var dispatch = store.dispatch;
			dispatch('ADD_TODO', response.data);
		}
		
	}).catch( (err) => {
		console.log(err);
		if(err.status == 422)
		{
			this.error = err.data;
		}
	});
}

export const deleteTodo = function(store, todo) {
	var postData = {id: todo.id};
	this.$http.post('api/v1/todo-delete', postData).then( (response) => {
		if(response.status == 200)
		{
			var dispatch = store.dispatch;
			dispatch('DELETE_TODO', todo);
		}
	} ).catch((err) => {
		console.log(err);
	});
}

export const updateTodo = function(store, todo) {
	var postData = {id:todo.id};
	this.$http.post('api/v1/todo-status', postData).then( (response) => {
		if(response.status == 200)
		{
			var dispatch = store.dispatch;
			dispatch('UPDATE_TODO', todo);
		}
	} ).catch((err) => {
		console.log(err);
	});
}

