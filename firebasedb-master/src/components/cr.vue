<template>
  <div>
    <section>
      <div class="big">
        <div class="first-page">
         
          <div class="left-profile">
            <img
              height="100"
              width="100"
              class="creator-image"
              src="https://firebasestorage.googleapis.com/v0/b/chatpoint1-16505.appspot.com/o/me.jpg?alt=media&token=42b91205-d0da-4b2c-bb19-6710bcdc5a1d"
              alt="creator"
            />
            <button class="subscribe">Subscribe</button>
           <br>
          <input class="share"
        type="button"
        label="Share Your Profile"
        style="height:50px;"
      
        
       
        v-on:click=shareViaWebShare()
      />
            </div>

         
         
          <div class="right-profile">
            <div class="user-info">
              <h2 class="creator-name" v-for="ToDo in ToDos" :key="ToDo.id">
                {{ ToDo.name }}
              </h2>
              <p class="creator-history" v-for="ToDo in ToDos" :key="ToDo.id">
                {{ ToDo.bio }}
              </p>
              <p class="location">
                <span class="location-detail"
                  ><img
                    class="loc-image"
                    height="20"
                    width="20"
                    src="../assets/location.png"
                    alt="location"
                /></span>
                <span
                  class="location-detail"
                  v-for="ToDo in ToDos"
                  :key="ToDo.id"
                  >{{ ToDo.location }}</span
                >
              </p>
            </div>
            <div class="info-container">
              <div class="description">
                <p
                  class="creator-description"
                  v-for="ToDo in ToDos"
                  :key="ToDo.id"
                >
                  {{ ToDo.description }}
                </p>
              </div>
              <div class="help">
                <p class="help-line">How can I help?</p>
                <div class="creator-features">
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button1 }}</span
                    >
                  </router-link>
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button2 }}</span
                    >
                  </router-link>
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button3 }}</span
                    >
                  </router-link>
                </div>
              </div>
            </div>
            <div class="coupons">
              <img
                class="donation-image"
                src="../assets/badge.png"
                alt="donation"
              />
              <p class="donate-text">10% goes to Black Girls CODE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="second-container">
        SERIES
      </h2>
      <Series />
    </section>
  </div>
</template>
<script>
import { db } from "../firebase/db";
import Series from "./Series.vue";
export default {
  data() {
    return {
      ToDos: [],
      newItem: "",
    };
  },

  methods: {
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ name: this.newItem });
        await db.collection("ToDos").add({ bio: this.newItem });
        await db.collection("ToDos").add({ location: this.newItem });
        await db.collection("ToDos").add({ description: this.newItem });
        await db.collection("ToDos").add({ button1: this.newItem });
        await db.collection("ToDos").add({ button2: this.newItem });
        await db.collection("ToDos").add({ button3: this.newItem });
        await db.collection("ToDos").add({ button3: this.newItem });

        this.newItem = "";
      }
    },
shareViaWebShare() {
  navigator.share({
    title: 'Title to be shared',
    text: 'Text to be shared',
    url: ""
  })
}

  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },

  components: { Series },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
* {
  font-family: "Karla", sans-serif;
}

//

h2.creator-name {
  padding: 0;
}

h2.second-container {
  margin-top: 2%;
  margin-left: 20%;
  text-align: start;
  padding: 0;
}

//
.big {
  display: flex;
  flex-direction: column;
  margin-top: 0%;
  @media (max-width: 468px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    min-width: 460px;
  }
  .first-page {
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
    @media (max-width: 468px) {
      display: flex;
      flex-direction: column;
    }

    .left-profile {
      flex: 1;
      // border: solid black 1px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: 150px;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;
      }

      .creator-image {
        border-radius: 100%;
        height: 350px;
        width: 350px;
        padding: 8px;
        border: 6px solid #ffdf70;
        object-fit: contain;
      }
      .subscribe {
        width: 148px;
        margin-top: 1.5rem;
        height: 35px;
        width: 150px;
        padding: 0.5rem 1.5rem;
        line-height: 1rem;
        font-weight: 500;
        border-radius: 8px;
        border: 1px solid #0967d2 !important;
        color: #0967d2;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;

        transition: 0.5s ease-in-out;
        &:hover {
          color: white;
          background-color: #0967d2;
        }
        @media (max-width: 468px) {
          width: 70%;
          margin-left: auto;
          font-size: 120%;
          font-weight: bolder;
          border-radius: 10px;
        }
      }
    }
    .right-profile {
      display: flex;
      flex-direction: column;
      flex: 2;
      padding-top: 1.5rem;
      margin-left: 0%;
      padding-left: 1.75rem;

      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 0%;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        min-width: 440px;
        align-items: flex-start;
        margin-bottom: 5%;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
        }
        .creator-name {
          font-size: 2rem;
          color: #222;
          margin-bottom: 7px;
          margin-top: 0px;
          font-weight: 600;
          @media (max-width: 468px) {
            font-size: 1.8rem;
            margin-top: 2%;
          }
        }
        .creator-history {
          color: #515151;
          margin-bottom: 8px;
          margin-top: 1px;
          font-size: 120%;
          text-align: justify;
          @media (max-width: 468px) {
            font-size: 120%;
            margin-top: 0px;
            text-align: center;
          }
        }

        .location {
          display: flex;
          font-size: 120%;
          color: #9e9e9e;
          margin-top: 0px;
          @media (max-width: 468px) {
            justify-content: center;
          }
        }
      }
      .description {
        margin-top: 0px;
        display: flex;
        width: 80%;
        margin-bottom: 3%;
        flex-wrap: wrap;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5%;
          width: 100%;
        }
        .creator-description {
          align-items: flex-start;
          line-height: 1.5em;
          text-align: justify;
          font-size: 120%;
          @media (max-width: 468px) {
            font: size 10%;
            margin-top: auto;
          }
        }
      }
      .help {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0px;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          margin-top: 5%;

          align-items: center;
        }
        .help-line {
          text-align: start;
          margin-top: 0%;
          font-size: 120%;
          font-weight: bolder;
          margin-bottom: 0%;
          @media (max-width: 468px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: bolder;
          }
        }

        .creator-features {
          margin-top: 0px;
          display: flex;
          flex-wrap: wrap;
          @media (max-width: 468px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .button {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 1.5rem;
            height: 40px;
            width: 270px;
            padding: 0.6rem 1.5rem;
            line-height: 1rem;
            font-weight: 500;
            border-radius: 8px;
            border: 1px solid #0967d2 !important;
            background-color: #0967d2;
            color: blanchedalmond;
            font-size: 120%;
            outline: none;

            cursor: pointer;
            margin-right: 29px;
            transition: 0.5s ease-in-out;
            &:hover {
              color: white;
              background-color: #064288;
            }
            @media (max-width: 468px) {
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              margin-left: auto;
              margin-right: auto;
              line-height: 130%;
              height: 50px;
              width: 290px;
              font-size: 120%;
            }
          }
        }
      }
      .coupons {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        border-radius: 8px;
        max-width: 180px;
        padding: 0.5rem;
        border: 1px solid #e1e1e1;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: row;
          margin-top: 20px;
        }
        .donation-image {
          height: 28px;
          width: 28px;
        }
        .donate-text {
          color: #626262;
          font-size: 0.75rem;
          margin-left: 5px;
          margin-top: 0px;
        }
      }
    }
  }
}
.second-container {
  font-size: 130%;
  color: #7e7e7e;
}
 .share{
                background: url('../assets/share.png') no-repeat;
                cursor:pointer;
                border: none;
                display:block;
                width: 80px;
            }
</style>
