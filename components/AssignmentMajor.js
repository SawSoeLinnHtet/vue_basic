export default {
  template: `
    <div class="major">
      <button
          @click="$emit('change', major)"
          v-for="major in majors"
          :class="{ 'active' : major == cMajor }">
          {{ major }}
      </button>
    </div>
  `,
  props: {
    cMajor: String,
    majorLists: {
      type: Array,
      required: true,
    },
  },
  computed: {
    majors() {
      return ["all", ...new Set(this.majorLists)]
    },
  },
}