<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" class="logo1" />
    </div>
    <!-- Desktop-View -->
    <div class="screen-view">
      <div class="buttons">
        <ul v-if="!mobile" class="navigation">
          <li>
            <router-link class="button-text" :to="{ name: 'Landing' }"
              ><span class="button-span">HOME</span></router-link
            >
          </li>
          <li>
            <router-link class="button-text" :to="{ name: 'Features' }"
              ><span class="button-span">FEATURES</span></router-link
            >
          </li>
          <li>
            <router-link class="button-text" :to="{ name: 'About' }"
              ><span class="button-span">ABOUT US</span></router-link
            >
          </li>
        </ul>
      </div>
      <div v-if="!mobile" class="dashboard">
        <button class="dash" style="white-space:nowrap">
          GO TO DASH-BOARD
        </button>
      </div>

      <i
        @click="toggleMobileNav"
        class="far fa-bars"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
      ></i>
    </div>
    <!-- Desktop-View -->

    <!-- Mobile-view -->
    <transition name="mobile-nav">
      <div class="mobile-view" v-if="mobile" v-show="mobileNav">
        <ul class="navigation">
          <li>
            <router-link class="button-text" :to="{ name: 'Landing' }"
              ><span class="button-span">HOME</span></router-link
            >
          </li>
          <li>
            <router-link class="button-text" :to="{ name: 'Features' }"
              ><span class="button-span">FEATURES</span></router-link
            >
          </li>
          <li>
            <router-link class="button-text" :to="{ name: 'About' }"
              ><span class="button-span">ABOUT US</span></router-link
            >
          </li>
        </ul>

        <div class="dashboard">
          <button class="dash" style="white-space:nowrap">
            GO TO DASH-BOARD
          </button>
        </div>
      </div>
    </transition>

    <!-- Mobile-view -->
    <!-- {{ mobile }}
    {{ mobileNav }}
    {{ windowWidth }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  color: black;
}

.mobile-view {
    border: 1px solid red;
   min-width: 1100px;
  display: flex;
  flex-direction: column;

  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
</style>