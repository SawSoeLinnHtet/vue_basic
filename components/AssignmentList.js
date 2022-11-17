import Assignment from "./Assignment.js"
import AssignmentMajor from "./AssignmentMajor.js"

export default {
  template: `
    <section v-if="lists.length">
      <h3 class="header">
        {{ title }}
      </h3>
      <assignment-major :major-lists="lists.map(a => a.major)" @change="currentMajor = $event" v-model:cMajor="currentMajor"/>
      <div class="list-container">
        <ul>
          <assignment v-for="todoList in filteredToDos" :key="todoList.id" :list="todoList"></assignment>
        </ul>
      </div> 
    </section>
  `,
  props: {
    title: {
      type: String,
      required: true,
    },
    lists: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentMajor: 'all'
    }
  },
  components: { Assignment, AssignmentMajor },
  methods: {
    deleteTodo(id) {
      this.$emit("delete", id)
    },
  },
  computed: {
    filteredToDos() {
      if(this.currentMajor === 'all') {
        return this.lists;
      }else {
        return this.lists.filter(a => a.major == this.currentMajor);
      }
    },
  },
}