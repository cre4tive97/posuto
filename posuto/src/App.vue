<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
    <transition name="settingAnimation">
      <AppSetting v-if="settingState" />
    </transition>
    <button class="setting__btn" @click="settingState = !settingState">
      <i class="fas fa-cog"></i>
    </button>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppSetting from '@/components/common/AppSetting.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppSetting,
  },
  data() {
    return {
      settingState: false,
    };
  },
};
</script>

<style>
@import './css/reset.css';
@import './css/style.css';
.settingAnimation-enter,
.settingAnimation-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.settingAnimation-enter-active,
.settingAnimation-leave-active {
  transition: all 0.5s;
}
</style>
