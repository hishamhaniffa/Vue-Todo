<script type="text/javascript">
	export default {

		created(){
			this.$http.get('api/v1/todos').then((response) => {
				console.log(response);
				if(response.status == 200)
				{
					this.todos = response.data;
				}
			});
		},

		data(){
			return {
				todos: {}
			}
		},

		methods: {
			deleteTodo(todo){
				this.todos.$remove(todo);
			},

			todoCompleted(todo){
				todo.completed = !todo.completed;
			}
		}
	}
</script>

<template>
	<ul class="list-group">
		<li 
		class="list-group-item" 
		v-bind:class="{'completed': todo.completed }"
		v-for="todo in todos | orderBy 'title' 1">
		{{ todo.title }}
		<button class="btn btn-danger btn-xs pull-right" v-on:click="deleteTodo(todo)">delete</button>
		<button 
		class="btn btn-xs pull-right margin-right-10" 
		v-bind:class="{'btn-success' : todo.completed, 'btn-warning' : !todo.completed}"
		v-on:click="todoCompleted(todo)">{{ todo.completed ? 'Completed' : 'Pending' }}</button>
	</li>
</ul>
</template>