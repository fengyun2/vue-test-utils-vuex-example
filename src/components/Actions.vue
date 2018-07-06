<template>
  <div class="text-align-center">
    <input type="text" @input="actionInputIfTrue">
    <button @click="actionClick">Click</button>
    <p>{{clicks}}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['clicks'])
  },
  methods: {
    ...mapActions([
      'actionClick',
      'actionInput'
    ]),
    actionInputIfTrue(event) {
      const inputValue = event.target.value
      if(inputValue === 'input') {
        this.actionInput({inputValue})
      }
    }
  }
}
</script>
