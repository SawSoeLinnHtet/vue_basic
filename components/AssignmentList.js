import Assignment from "./Assignment.js"

export default{
  template:`
    <section v-if="todolists.length">
      <h3 class="header">
        {{ title }}
      </h3>
      <div class="list-container">
        <ul v-for="todolist in todolists" :key="todolist.id">
          <assignment :list="todolist"></assignment>
        </ul>
      </div>
    </section>
  `,
  props:{
    title:{
      type: String,
      tequired: true
    },
    todolists:{
      type: Array,
      required: true
    }
  },
  components:{ Assignment }
}