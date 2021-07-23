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
              src="../assets/creator.jpg"
              alt="creator"
            />
            <button class="subscribe">Subscribe</button>
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
            <div class="info-containe">
              <div class="description">
                <p
                  class="creator-description"
                  v-for="ToDo in ToDos"
                  :key="ToDo.id"
                >
                  <!-- I've built and sold 2 startups. Invested $30M as a VC in
                  Silicon Valley. Spent way too much time on ProductHunt (top
                  hunter in upvotes/hunt ratio). I owe the value I've created to
                  growing communities and building network movements around
                  products, customers, and thought leadership. Mission-driven
                  first and always. Let's bring more positive impact into
                  technology. Net worth = your lifetime positive impact on the
                  world. Here to help you grow more in your life than you can
                  ever expect from you. -->
                  {{ ToDo.description }}
                </p>
              </div>
              <div class="help">
                <p class="help-line">How can I help?</p>
                <div class="creator-features">
                  <button class="button">
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button1 }}</span
                    >
                  </button>
                  <button class="button">
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button2 }}</span
                    >
                  </button>
                  <button class="button">
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button3 }}</span
                    >
                  </button>
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
    <Series />
    <Series />
    <Series />
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
    deleteToDo(id) {
      db.collection("ToDos").doc(id);
    },
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ name: this.newItem });
        await db.collection("ToDos").add({ bio: this.newItem });
        await db.collection("ToDos").add({ location: this.newItem });
        await db.collection("ToDos").add({ description: this.newItem });
        await db.collection("ToDos").add({ button1: this.newItem });
        await db.collection("ToDos").add({ button2: this.newItem });
        await db.collection("ToDos").add({ button3: this.newItem });

        this.newItem = "";
      }
    },
  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },
  components: { Series },
};
</script>
<style lang="scss" scoped>
.big {
  display: flex;
  flex-direction: column;
  margin-top: 0%;
  @media (max-width: 468px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    min-width: 440px;
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
      //   border: solid black 1px;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      margin-left: 150px;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        margin: auto;
      }

      .creator-image {
        border-radius: 100%;
        height: 230px;
        width: 230px;
        padding: 5px;
        border: 5px solid #ffdf70;
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
        margin-right: 50px;
        transition: 0.5s ease-in-out;
        &:hover {
          color: white;
          background-color: #0967d2;
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
      }
      .user-info {
        display: flex;
        flex-direction: column;
        min-width: 440px;
        align-items: flex-start;
        margin-bottom: 0px;
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
          }
        }
        .creator-history {
          color: #515151;
          margin-bottom: 8px;
          margin-top: 1px;
          font-size: 15px;
          text-align: justify;
          @media (max-width: 468px) {
            font-size: 13px;
            margin-top: 0px;
            min-width: 300px;
            margin-right: 10%;
          }
        }

        .location {
          display: flex;
          font-size: 0.875rem;
          color: #9e9e9e;
          //   margin-bottom: 1.5rem;
          margin-top: 0px;
        }
      }
      .description {
        margin-top: 0px;
        display: flex;
        flex-wrap: wrap;
        max-width: 550px;
        //  border: solid black 1px;
        @media (max-width: 468px) {
          margin-right: 20px;
        }
        .creator-description {
          align-items: flex-start;
          line-height: 1.5em;
          text-align: justify;
          @media (max-width: 468px) {
            font-size: 15px;
            // border: solid black 1px;
            margin-top: auto;
            margin-left: 0px;
          }
        }
      }
      .help {
        margin-top: 0px;
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
          margin-top: 0%;
          font-size: 14px;
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
            margin-top: 1.5rem;
            height: 40px;
            width: 250px;
            padding: 0.5rem 1.5rem;
            line-height: 1rem;
            font-weight: 500;
            border-radius: 8px;
            border: 1px solid #0967d2 !important;
            background-color: #0967d2;
            color: blanchedalmond;
            font-size: 1rem;
            outline: none;
            cursor: pointer;
            margin-right: 45px;
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
</style>
