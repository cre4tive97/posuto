<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-box">
      <label for="username">Username</label>
      <input class="input" id="username" type="text" v-model="username" />
      <p
        style="color: red; position: relative"
        v-if="!isUsernameValid && username !== ''"
      >
        이메일을 입력해주세요.
      </p>
    </div>
    <div class="form-box">
      <label for="password">Password</label>
      <input class="input" id="password" type="text" v-model="password" />
    </div>
    <div class="form-box">
      <label for="nickname">Nickname</label>
      <input class="input" id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      class="btn"
      :disabled="!isUsernameValid || !username || !password || !nickname"
    >
      Sign up
    </button>
    <transition name="modalAnimation">
      <SignupModal v-if="signupSuccess" :nickname="registerdNickname" />
    </transition>
  </form>
</template>

<script>
import { registerUser } from '@/api/auth';
import SignupModal from '@/components/SignupModal.vue';
import FormMixin from '@/mixins/FormMixin';
export default {
  name: 'SignUpForm',
  components: {
    SignupModal,
  },
  data() {
    return {
      //form data
      username: '',
      password: '',
      nickname: '',
      registerdNickname: '',
      signupSuccess: false,
    };
  },
  mixins: [FormMixin],
  methods: {
    async submitForm() {
      try {
        const { data } = await registerUser({
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        });
        this.registerdNickname = data.nickname;
        this.signupSuccess = true;
      } catch (error) {
        console.log(error.response.data);
      } finally {
        this.initForm();
      }
    },
  },
};
</script>

<style scoped>
.modalAnimation-enter {
  opacity: 0;
}
.modalAnimation-enter-active {
  transition: opacity 0.5s;
}
</style>
