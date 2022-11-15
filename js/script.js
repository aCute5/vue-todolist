const app = new Vue(
    {
        el:"#app",
        data:{
            toDo: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Il cibo dei gatti',
                    done: false,
                },
                {
                   text: "Fare il bucato",
                   done : false,
                },
           ],
           newTodo: "",
        },
        methods:{
            addTodo(){
                this.toDo.push(this.newTodo);
                this.newTodo = "";
            },
            deleteTodo(){
                this.toDo.splice(index,1);
            },
        }
})