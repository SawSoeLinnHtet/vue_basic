export default{
  template:`
  <li>
    <div>
      <label>
        <input type="checkbox" v-model="list.active" name="" id="" style="margin-right: 10px;">
          <p>
            {{ list.name }}
          </p>
      </label>
      <button class="del-button">
        x
      </button>
    </div>
  </li>
  `,
  props:{
    list:{
      type: Object,
      required: true
    }
  }
}