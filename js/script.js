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
             checked: false,
           }
        },
        methods:{
            addTodo(){
                if(this.newTodo.text.trim()){
                    newTodo.text = this.newTodo.text.trim();
                    this.toDo.push({...this.newTodo});
                       this.newTodo.text="";ù
                    }
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
)