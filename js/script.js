const app = new Vue(
    {
        el:"#app",
        data:{
            toDo: [
                {
                    text: 'Fare la spesa',
                    checked: true,
                },
                {
                    text: 'Il cibo dei gatti',
                    checked: true,
                },
                {
                   text: "Fare il bucato",
                   checked : true,
                },
           ],
           newTodo:{
             text:"",
             checked: true,
           }
        },
        methods:{
            addTodo(){
                if(this.newTodo.trim()){
                    this.ToDo.push({
                        text: this.newTodo,
                    });
                    this.newTodo = '';
                }
            },
            deleteTodo(index){
                this.toDo.splice(index,1);
            },
            checkList(element){
                if (element.checked) {
                    element.checked = false
                }else{
                    element.checked = true
                }
            }
        }
})