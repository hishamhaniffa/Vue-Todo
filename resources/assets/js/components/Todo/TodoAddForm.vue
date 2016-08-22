<script>
	import {saveTodo} from './todoActions';
	export default {
		
		  data(){
		  	return {
		    	todo: {id:null, title: '', completed: false},
		    	error : {}
		    }
		  },
		  
		  methods: {
		  	addNewTodo(){
		  		this.saveTodo(this.todo);
		  		this.todo = {id:null, title: '', completed: false};
		    }
		  },

		  vuex: {
		  	getters: {
		  		todoStore: state => state.todoStore.todos
		  	},
		  	actions: {
		  		saveTodo
		  	}
		  }
	}
</script>

<template>
	<form v-on:submit.prevent="addNewTodo()">
        <div
        	v-bind:class="{'has-warning' : error.title}" 
        	class="form-group"
        	>
          <input 
          	type="text" 
          	class="form-control"
          	placeholder="Add new todo" 
          	v-model="todo.title">
          	<span class="help-block" v-if="error.title">{{ error.title }}</span>
      </div>
      <input type="submit" class="btn btn-success" value="Add todo">
  </form>
</template>