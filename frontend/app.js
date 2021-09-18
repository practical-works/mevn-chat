//==============================================================================
// ■ App (app.js)
//------------------------------------------------------------------------------
//     Frontend application main entry point.
//==============================================================================
const socket = io();
const messagesApiUrl = "./api/messages";

//------------------------------------------------------------------------------
// ● App
//------------------------------------------------------------------------------
new Vue({
  el: "#app",
  async mounted() {
    socket.on("new-message", this.addPostedMessage);
    this.setName();
    this.focusMessageInput();
    await this.getMessages();
    this.scrollDownMessages();
  },
  data() {
    return {
      newMessage: {
        name: "",
        content: "",
      },
      messages: [],
      pending: true,
      error: "",
    };
  },
  watch: {
    "newMessage.name"(value) {
      localStorage.setItem("name", value);
    },
  },
  methods: {
    async getMessages() {
      const response = await fetch(messagesApiUrl);
      if (response.ok) {
        this.messages = await response.json();
      }
    },
    async postMessage() {
      if (!this.newMessage.content) {
        return;
      }
      fetch(messagesApiUrl, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newMessage),
      });
      this.newMessage.content = "";
    },
    addPostedMessage(postedMessage) {
      this.messages.push(postedMessage);
      this.$nextTick(() => this.scrollDownMessages());
    },
    setName() {
      this.newMessage.name = localStorage.getItem("name");
      if (!this.newMessage.name) this.generateName();
    },
    generateName() {
      this.newMessage.name = `Person${Math.round(Math.random() * 100000)}`;
    },
    scrollDownMessages() {
      const messagesElement = this.$el.querySelector("#messages");
      messagesElement.scrollTop = messagesElement.scrollHeight;
    },
    focusMessageInput() {
      this.$el.querySelector("#message-input").focus();
    },
  },
});
