<script>
	export default {
		props: ['newtodo'],
  
		  data(){
		  	return {
		    	tempTodo: {id:null, title: '', completed: false}
		    }
		  },
		  
		  methods: {
		  	addNewTodo(){
		    	this.newtodo = this.tempTodo;
		      this.tempTodo = {id: null, title: '', completed: false};
		    }
		  }
	}
</script>

<template>
	<form v-on:submit.prevent="addNewTodo()">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Add new todo" v-model="tempTodo.title">
      </div>
      <input type="submit" class="btn btn-success" value="Add todo">
  </form>
</template>