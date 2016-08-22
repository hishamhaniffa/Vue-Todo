<script type="text/javascript">
	import {getTodos, deleteTodo, updateTodo} from './todoActions';
	export default {

		created() {
			this.getTodos();
		},

		methods: {
			deleteTodo(todo){
				this.deleteTodo(todo);
			},

			todoCompleted(todo){
				this.updateTodo(todo);
			}
		},

		vuex: {
			getters: {
				todoStore: state => state.todoStore.todos
			},
			actions: {
				getTodos, deleteTodo, updateTodo
			}
		}
	}
</script>

<template>
	<ul class="list-group">
		<li 
		class="list-group-item" 
		v-bind:class="{'completed': todo.completed }"
		v-for="todo in todoStore | orderBy 'title' 1">
		{{ todo.title }}
		<button class="btn btn-danger btn-xs pull-right" v-on:click="deleteTodo(todo)">delete</button>
		<button 
		class="btn btn-xs pull-right margin-right-10" 
		v-bind:class="{'btn-success' : todo.completed, 'btn-warning' : !todo.completed}"
		v-on:click="todoCompleted(todo)">{{ todo.completed ? 'Completed' : 'Pending' }}</button>
	</li>
</ul>
</template>