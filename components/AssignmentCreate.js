export default {
  template: `
    <div class="input-area">
      <form @submit.prevent="add">
        <input type="text" v-model="new_todo">
        <button type="submit">
          Add Your Works
        </button>
      </form>
    </div>
  `,
  data() {
    return {
      new_todo: '',
    }
  },
  methods: {
    add() {
      this.$emit('add', this.new_todo)

      this.new_todo=""
    },
    
  }
}