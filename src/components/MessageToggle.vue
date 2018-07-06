<template>
  <div>
    <message :msg="msg" />
    <button id="toggle-message" @click="toggleMessage">
      Change message
    </button>
  </div>
</template>

<script>
import Message from '@/components/Message'
export default {
  name: 'message-toggle',
  components: {
    Message
  },
  data () {
    return {
      msg: null
    }
  },
  methods: {
    toggleMessage() {
      this.msg = this.msg === 'message' ? 'toggled message' : 'message'
    }
  }
}
</script>

<style>
</style>
