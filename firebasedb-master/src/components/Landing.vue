<template>
  <div class="gurumint">
    <!-- First Page -->
    <div class="hero">
      <div class="all">
        <!-- Navbar -->
        <Nav />
        <div class="content">
          <div class="content-two">
            <h1 class="host">
              Host cohort-based courses, live events, or 1:1 sessions
            </h1>
            <p class="para">
              Superpeer is an all-in-one video platform
              <strong> </strong>
              that gives you
              <strong></strong>
              the tools you need to engage with your audience through video, and
              connect in a more authentic way.
            </p>
          </div>
          <div class="become">
            <button class="but">
              <img src="../assets/superpeer.png" alt="super" class="super" />
              <span class="peer">BECOME A SUPERPEER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- First Page -->

    <!-- Video-Image/Second-Page -->
    <div class="video">
      <img src="../assets/video.png" alt="" class="video-image" />
    </div>
    <!-- Video-Image/Second-Page -->

    <!-- Third-Page -->
    <svg
      preserveAspectRatio="none"
      width="100%"
      height="53"
      viewBox="0 0 1440 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 36.2V0h1440v39.46c-20.05-2.19-43.76-5.94-71.65-11.8-145.43-30.56-374.66-6.72-557.2 17.96C682.92 62.96 559.62 46.63 424.2 28.7c-57.34-7.59-116.85-15.47-179.83-21.2C146.2-1.43 61.9 14.8 0 36.2z"
        fill="currentcolor"
      />
    </svg>
    <div class="second-page">
      <svg
        width="3.5em"
        height="3.5em"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9585 16.6684C18.4299 16.4208 17.8137 16.4475 17.3085 16.7399C16.8142 17.0169 16.5058 17.5372 16.5 18.1039V25.8937C16.5051 26.4605 16.8128 26.9814 17.3067 27.2595C17.812 27.5513 18.428 27.578 18.9567 27.331L26.2662 23.8789C27.0139 23.5532 27.4974 22.8153 27.4974 21.9997C27.4974 21.1842 27.0139 20.4462 26.2662 20.1205L18.9585 16.6684Z"
          stroke="#FFD338"
          stroke-width="2.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="8.25"
          y="5.5"
          width="27.5"
          height="33"
          rx="1.42817"
          stroke="#FFD338"
          stroke-width="2.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.54572 9.625C2.96613 9.62888 2.41182 9.86284 2.00473 10.2754C1.59765 10.688 1.37115 11.2454 1.37505 11.825V32.175C1.37115 32.7546 1.59765 33.312 2.00473 33.7246C2.41182 34.1372 2.96613 34.3711 3.54572 34.375"
          stroke="#FFD338"
          stroke-width="2.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.4551 9.625C41.0347 9.62888 41.589 9.86284 41.9961 10.2754C42.4031 10.688 42.6296 11.2454 42.6257 11.825V32.175C42.6296 32.7546 42.4031 33.312 41.9961 33.7246C41.589 34.1372 41.0347 34.3711 40.4551 34.375"
          stroke="#FFD338"
          stroke-width="2.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="third-section">
        <div class="third-content">
          <h1 class="third-h1">
            <span class="block">See What Magic Our</span>
            <br />
            <span class="block"> Community Is Creating</span>
          </h1>
          <p class="third-p">
            Explore these examples of <strong>Series</strong>, created by our
            Superpeers, and reserve your spot today
          </p>
        </div>
        <Profile />
      </div>
    </div>
    <!-- Third-Page -->

    <!-- Fourth-Page -->
    <div class="fourth-page">
      <svg
        class="wave"
        preserveAspectRatio="none"
        width="100%"
        height="53"
        viewBox="0 0 1440 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 36.2V0h1440v39.46c-20.05-2.19-43.76-5.94-71.65-11.8-145.43-30.56-374.66-6.72-557.2 17.96C682.92 62.96 559.62 46.63 424.2 28.7c-57.34-7.59-116.85-15.47-179.83-21.2C146.2-1.43 61.9 14.8 0 36.2z"
          fill="currentcolor"
        />
      </svg>
      <div class="fourth-section">
        <div class="fourth-content">
          <h1 class="fourth-h1">What can Superpeer do for you?</h1>
          <p class="fourth-p">
            Turn your audience into loyal, paying followers with our seamless
            video experience and subscriber management tools.
          </p>
        </div>
        <Service />
        <button class="fourth">
          <router-link :to="{ name: 'Cr' }">ALL FEATURES —></router-link>
        </button>
      </div>
    </div>
    <!-- Fourth-Page -->

    <!-- Quotation Page/Fifth-Page -->
    <Quote />
    <!-- Quotation Page/Fifth-Page -->

    <!-- Super Series/Sixth-Page -->
    <div class="super-series">
      <svg
        class="super-svg"
        preserveAspectRatio="none"
        width="100%"
        height="53"
        viewBox="0 0 1440 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 36.2V0h1440v39.46c-20.05-2.19-43.76-5.94-71.65-11.8-145.43-30.56-374.66-6.72-557.2 17.96C682.92 62.96 559.62 46.63 424.2 28.7c-57.34-7.59-116.85-15.47-179.83-21.2C146.2-1.43 61.9 14.8 0 36.2z"
          fill="currentcolor"
        />
      </svg>
      <div class="super-section">
        <h1 class="super-h1">
          Introducing <span class="super-span">Superpeer Series</span>
        </h1>
        <p class="super-p">
          With series, you can create and sell any combination of on-demand
          video and live stream content. With cohort-based classes you can
          interact with your audience in a more engaging way.
        </p>
        <img src="../assets/Emma.png" alt="" class="super-img" />
      </div>
      <SuperpeerSeries />
      <!-- Super Series/Sixth-Page -->

      <!-- Footer/Seventh-Page -->
      <Footer />
      <!-- Footer/Seventh-Page -->
    </div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Service from "./Service.vue";
import Quote from "./Quote.vue";
import SuperpeerSeries from "./SuperpeerSeries.vue";
import Footer from "./Footer.vue";
import Nav from "./Nav.vue"
export default {
  components: { Profile, Service, Quote, SuperpeerSeries, Footer, Nav },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300;400;700&display=swap");
/* Mobile-view */
@media only screen and (max-width: 468px) {
  .gurumint {
    min-width: 1400px;
    margin-left: auto;
    border: solid red;
  }
  .hero {
    border: #fad964 solid;
    min-width: 1200px;
  }
  .all {
    border: solid red;
  }
  .nav {
    border: solid black;
  }
  .screen-view {
    border: solid violet;
  }
  .buttons {
    border: turquoise solid;
    min-width: 60%;
  }
  .navigation {
    border: steelblue solid;
  }
  .dashboard {
    border: tomato solid;
    min-height: 100px;
    padding-top: 12px;

  }
  .dash{
    border: solid black;
  
  }
  .button-text {
    border: brown solid;
    
  }
  .logo {
    /* min-width: 150px; */
    min-height: 100px;
    border: chartreuse solid;
  }
  .logo1 {
    min-height: 100px;
  }
  .button-span {
    font-size: 2rem;
  }

  .third-content{
    border: black solid;
    
  }
  .third-h1{
    border: solid red;
    width: 100%;
    
  }


}

/* Mobile-view */

/* First-Page */
.gurumint {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  background-image: linear-gradient(
      180deg,
      #fffbf0,
      hsla(40, 0%, 100%, 0) 74%,
      hsla(0, 0%, 100%, 0)
    ),
    url("https://assets.website-files.com/60f05dbf1d8b772819778341/60f05dbf1d8b776d0f778379_hero-circles.svg");
  background-repeat: repeat, no-repeat;
  padding-top: 2.5rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  background-position: 0 0, 50% -447px;
  background-size: auto, auto;
  height: 80vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}
.all {
  display: flex;
  flex-direction: column;
  /* border: solid black 1px; */
}
.nav {
  display: flex;
  flex-direction: row;
  /* border: solid black 1px; */
  align-items: center;
}
.screen-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.buttons {
  display: flex;
  /* flex-direction: row; */
  /* border: solid black 1px; */

  width: 40%;
  align-items: center;
}
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: solid black 1px; */
  width: 100%;
  list-style-type: none;
}
.dashboard {
  margin-right: auto;
  display: flex;
  flex-direction: row;
  margin-left: auto;
}
.logo {
  margin-top: 0%;
  /* border: solid black 1px; */
  margin-right: 5%;
  margin-left: 10%;
}
.logo1 {
  height: 80%;
  width: 90%;
  object-fit: contain;
  margin-top: 0%;
  vertical-align: top;
}

.button-text {
  font-weight: bolder;
  padding-left: 0;
  white-space: nowrap;
  color: grey;
  transition: 0.1s ease-in-out;
  font-weight: normal;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
}
.button-text:hover {
  color: black;
}

.dash {
  width: 100%;
  margin-top: 2%;
  height: 70%;
  padding: 1rem 1rem;
  line-height: 1rem;
  font-weight: normal;
  border-radius: 8px;
  border: 1.2px solid black;
  color: black;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  transition: 0.1s ease-in-out;
  background-color: transparent;
  font-weight: bolder;
  display: flex;
  align-items: center;
}

.dash:hover {
  background-color: black;
  color: white;
}
.content {
  margin-bottom: 5.5rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-two {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
}

.host {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #222;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: bolder;
  font-family: "Karla", sans-serif;
  letter-spacing: -0.015625em;
}
.para {
  max-width: 770px;
  font-size: 1.375rem;
  line-height: 1.3;
  margin-top: 0px;
  font-weight: 400;
}
.become {
  padding-top: 3%;
  /* display: flex;
  flex-direction: row; */
  /* justify-items: center; */
}
.but {
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 110%;
  justify-content: center;
  background-color: #ffd338;
  color: black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 8px;
  transition: 0.1s ease-in-out;
}
.but:hover {
  background-color: #fad964;
}
.super {
  height: 100%;
  width: 25%;
  object-fit: contain;
  /* border: black solid 1px; */
}
.peer {
  height: 100%;
  padding-top: 2%;
  padding-bottom: 3%;
  font-size: 1.5rem;
  white-space: nowrap;
  line-height: 1.1rem;
  /* border: black solid 1px; */
  margin-right: 2%;
  font-weight: bold;
}
/* First-Page */

/*Video Image */
.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
}
.video-image {
  border: solid transparent 3px;
  width: 80%;
  height: 80%;
  object-fit: contain;
  transition: 0.3s ease-in-out;
}
.video-image:hover {
  border: solid #fad964 5px;
  border-radius: 2px;
}
/*Video Image */

/* Second-Page/Profile Section */
.svg {
  margin-top: 4%;
  margin-bottom: -1px;
  color: #fffce4;
  transform: rotate(180deg);
}
.second-page {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 252, 228, 1),
    rgba(255, 252, 228, 0)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
/* Second-Page/Profile Section */

/* Third-Page/Profile Section */
.third-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.third-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 678px;
  margin-top: 2%;
  margin-bottom: 7%;
}
.third-h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
}
.third-p {
  margin-top: 2.5%;
  font-size: 1.2rem;
  text-align: center;
}
/* Third-Page/Profile Section */

/* Fourth-Page */

.wave {
  color: #fff4f4;
  transform: rotate(180deg);
  margin-top: 4%;
  margin-bottom: -1px;
}
.fourth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fourth-section {
  background-image: linear-gradient(
    to bottom,
    rgba(256, 244, 244, 1),
    rgba(256, 244, 244, 0)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.fourth-content {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fourth-h1 {
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 2%;
}

.fourth-p {
  font-size: 1.3rem;
  width: 55%;
  font-weight: bold;
}
button.fourth {
  background-color: blanchedalmond;
  padding: 1rem 1.8rem;
  border-radius: 0.3rem;
  transition: 0.2s ease-in-out;
  color: black;
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: 0.1px;
}
.fourth:hover {
  background-color: rgb(255, 210, 143);
}

/* Fourth Page */

/* Fifth-Page/Super-Section */
.super-series {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.super-svg {
  color: #f0ecff;
  transform: rotate(180deg);
  margin-top: 4%;
  margin-bottom: -1px;
}
.super-section {
  background-image: linear-gradient(180deg, #f0ecff, hsla(0, 100%, 98%, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.super-h1 {
  margin-top: 7%;
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 2%;
}
.super-span {
  background-image: url(https://assets.website-files.com/60f05dbf1d8b772819778341/60f05dbf1d8b773d9d778366_special-text-decoration-01.svg);
  position: relative;
  display: inline-block;
  margin-bottom: -0.4583333333333333em;
  padding-bottom: 0.4583333333333333em;
  background-position: 50% 100%;
  background-size: 100% 0.5208333333333334em;
  background-repeat: no-repeat;
}
.super-p {
  width: 47%;
  font-size: 1.4rem;
  font-weight: normal;
  margin-bottom: 8%;
}

/* Fifth-Page/Super-Section */
</style>