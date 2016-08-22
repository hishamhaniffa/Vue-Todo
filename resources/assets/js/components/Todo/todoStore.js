const state = {
	todos: []
}

const mutations = {
	GET_TODOS (state, todos) {
		state.todos = todos;
	},

	ADD_TODO (state, todo) {
		state.todos.push((todo));
	},

	DELETE_TODO (state, todo) {
		state.todos.$remove((todo));
	},

	UPDATE_TODO (state, todo) {
		todo.completed = !todo.completed;
	}
}

export default {
	state, mutations
}