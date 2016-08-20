import Vue from 'vue';
import TodoItems from './components/Todo/TodoItems.vue';
import TodoAddForm from './components/Todo/TodoAddForm.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.component('todo-item', TodoItems);
Vue.component('todo-add-form', TodoAddForm);

new Vue({
	el: '#vue-app',
  data: {
    newTodo: {},
    
  },
  
  watch: {
  	newTodo: function(newvalue, oldvalue){
    	this.todos.push({
      	id: Math.floor(Date.now()),
        title: newvalue.title,
        completed: false
      })
    }
  }
})