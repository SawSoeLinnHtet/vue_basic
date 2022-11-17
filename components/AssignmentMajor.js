export default {
  template: `
    <div class="major">
      <button
          @click="$emit('change', major)"
          v-for="major in majors">
          {{ major }}
      </button>
    </div>
  `,
  props: {
    majorLists: {
      type: Array,
      required: true
    },
  },
  computed: {
    majors() {
      return ["all", ...new Set(this.majorLists)]
    },
  },

}