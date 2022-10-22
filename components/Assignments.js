import AssignmentList from "./AssignmentList.js";

export default {
  template:`
    <div>
      <h2 style="text-align: center;margin-top: 10px;color:white;">
        ToDo List
      </h2>
      <div class="input-area">
        <input type="text" v-model="new_todo">
        <button @click="addNewList">
          Add Your Works
        </button>
      </div>
      <assignment-list title="In Progress:" :todolists=filters.inProgress></assignment-list>
      <assignment-list title="Complete:" :todolists=filters.completed></assignment-list>
    </div>
  `,
  components:{
    AssignmentList
  },
  data(){
    return{
      todolists:[
        {
          id: 1,
          name: "Blah",
          active: false
        },
        {
          id: 2,
          name: "Dah",
          active: false
        },
        {
          id: 3,
          name: "Di",
          active: false
        }
      ],
      new_todo: ''
    }
  },
  methods:{
    addNewList(){
      let new_list = {
        id: this.todolists.length + 1,
        name: this.new_todo,
        active: false
      }
      this.todolists.push(new_list);
      this.new_todo= ''
    },
    deleteList(id){
      
    }
  },
  computed:{
    filters(){
      return{
        completed: this.todolists.filter((a)=>a.active == true),
        inProgress: this.todolists.filter((a)=>a.active == false)
      }
    }
  }
}