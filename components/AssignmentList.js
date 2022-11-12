import Assignment from "./Assignment.js"

export default {
  template: `
    <section v-if="lists.length">
      <h3 class="header">
        {{ title }}
      </h3>
      <div class="major">
        <button
           @click="changeCurrent(major)"
           v-for="major in majors">
           {{ major }}
        </button>
      </div>
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
      currentMajor: "",
    }
  },
  components: { Assignment },
  methods: {
    deleteTodo(id) {
      this.$emit("delete", id)
    },
    changeCurrent(major) {
      this.currentMajor = major
    }
  },
  computed: {
    filteredToDos() {
      return this.lists
    },
    majors() {
      return ["all", ...new Set(this.lists.map((a) => a.major))]
    },
  },
}