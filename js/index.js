new Vue({
  el: 'main',
  data: {
    chatView: true,
  },
  methods: {
    closeChat() {
      this.chatView = false;
    }
  }
})