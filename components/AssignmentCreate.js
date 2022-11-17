export default {
  template: `
    <div class="input-area">
      <form @submit.prevent="add">
        <input type="text" v-model="new_todo_name" placeholder="name">
        <input type="text" v-model="new_major" placeholder="major">
        <button type="submit">
          Add Your Works
        </button>
      </form>
    </div>
  `,
  data() {
    return {
      new_todo_name: "",
      new_major: "",
    }
  },
  methods: {
    add() {
      this.$emit("add", this.new_todo_name, this.new_major)

      this.new_todo_name = ""
      this.new_major = ""
    },
  },
}