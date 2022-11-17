import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  template: `
    <div>
      <h2 style="text-align: center;margin-top: 10px;color:white;">
        ToDo List
      </h2>
      <assignment-create @add="addNewList"></assignment-create>
      <assignment-list title="In Progress:" :lists="filters.inProgress">
      </assignment-list>
      <assignment-list title="Complete:" :lists="filters.completed">
      </assignment-list>
    </div>
  `,
  components: {
    AssignmentList,
    AssignmentCreate,
  },
  data() {
    return {
      todoLists: [
        {
          id: 1,
          name: "Blah",
          active: false,
          major: "math",
        },
        {
          id: 2,
          name: "Dah",
          active: false,
          major: "math",
        },
        {
          id: 3,
          name: "Di",
          active: false,
          major: "english",
        },
      ],
    }
  },
  methods: {
    addNewList(listName, major) {
      let new_list = {
        id: this.todoLists.length + 1,
        name: listName,
        active: false,
        major: major
      }
      this.todoLists.push(new_list)
    },
    deleteList(id) {
      let deletedLists = this.todoLists.filter((list) => list.id !== id)
      this.todoLists = deletedLists
    },
  },
  computed: {
    filters() {
      return {
        completed: this.todoLists.filter((a) => a.active == true),
        inProgress: this.todoLists.filter((a) => a.active == false),
      }
    },
  },
}