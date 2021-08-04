<template>
  <div class="footer-page">
    <div class="footer-top">
      <img
        src="https://assets.website-files.com/60f05dbf1d8b772819778341/60f05dbf1d8b774015778377_cta-logo.svg"
        loading="lazy"
        alt=""
        class="footer-logo"
      />
      <h2 class="footer-h2">
        Become a <span class="footer-span">Superpeer</span>
      </h2>
      <button class="footer-button">
        <router-link class="footer-link" :to="{ name: 'Cr' }"
          >CREATE ACCOUNT</router-link
        >
      </button>
    </div>
    <div class="footer-bottom">
      <div class="first-column">
        <ul v-show="!mobile" class="first-column-list">
          <li>
            <router-link class="button-text" :to="{ name: '' }"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link class="button-text" :to="{ name: '' }"
              >FAQ</router-link
            >
          </li>
          <li>
            <router-link class="button-text" :to="{ name: '' }"
              >Privacy</router-link
            >
          </li>
          <li>
            <router-link class="button-text" :to="{ name: '' }"
              >Terms</router-link
            >
          </li>
        </ul>
      </div>
      <div class="second-column">
        <img
          src="../assets/icons/twitter.png"
          alt="twitter"
          class="footer-icon-image"
        />
        <img
          src="../assets/icons/instagram (1).png"
          alt="insta"
          class="footer-icon-image"
        />
      </div>
      <div class="third-column">
        <span class="third-column-span">Brand Assets</span>
        <span class="third-column-span">Superpeer, Inc.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* element.style {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  opacity: 1;
} */
.footer-page {
    margin-top: 10%;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-top {
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
  height: 70%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-logo {
  height: 35%;
  width: 40%;
}
.footer-h2 {
  margin-top: 2%;
  font-size: 3rem;
}
.footer-span {
  background-image: url(https://assets.website-files.com/60f05dbf1d8b772819778341/60f05dbf1d8b7701af778365_special-text-decoration-02.svg);
  position: relative;
  display: inline-block;
  margin-bottom: -0.4583333333333333em;
  padding-bottom: 0.4583333333333333em;
  background-position: 50% 100%;
  background-size: 100% 0.5208333333333334em;
  background-repeat: no-repeat;
}
/* .button-div {
  color: black;
} */
.footer-button {
  background-color: #ffd338;
  width: 16%;
  padding: 1rem;
  border-radius: 0.3rem;
  margin: 1rem;
  transition: 0.2s ease-in-out;
}
.footer-button:hover {
  background-color: rgb(255, 179, 74);
}
.footer-link {
  font-size: 1.2rem;
  font-weight: bold;
}
.footer-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
  margin-top: 5%;
}
.first-column {
  /* display: flex;
  flex-direction: row; */

  width: 20%;
}
.first-column-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  list-style-type: none;
}
.button-text {
  font-weight: bolder;
  /* margin-right: 5%; */
  padding-left: 0;
  white-space: nowrap;
  color: grey;
  transition: 0.1s ease-in-out;
  font-weight: normal;
  font-size: 1.3rem;
  cursor: pointer;
  text-decoration: none;
}
.second-column {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 8%;
}
.footer-icon-image {
  height: 100%;
  width: 25%;
  object-fit: contain;
}
.third-column {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 18%;
}
.third-column-span {
  white-space: nowrap;
  font-size: 1.2rem;
  line-height: 1.8rem;
}
</style>
