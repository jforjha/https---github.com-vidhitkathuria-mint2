<template>
  <section>
    <div class="second-page">
      <div class="card">
        <div class="image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chatpoint1-16505.appspot.com/o/cardImage.jpeg?alt=media&token=564b5ffe-6b8b-4db5-aa56-7adba9150e30"
            alt="card"
            class="card-image"
          />
        </div>
        <div class="information">
          <div class="name">
            <h1 class="heading" v-for="ToDo in ToDos" :key="ToDo.id">
              {{ ToDo.courseName }}
            </h1>
          </div>
          <div class="about">
            <p class="para" v-for="ToDo in ToDos" :key="ToDo.id">
              {{ ToDo.courseDesc }}
            </p>
          </div>
          <div class="course-info">
            <div class="info">
              <img
                src="../assets/internet.png"
                alt="globe"
                class="globe"
                height="20"
                width="20"
              />
              <p class="subs">All Subscribers</p>
            </div>
            <div class="info">
              <img
                src="../assets/menu.png"
                alt=""
                class="globe"
                height="20"
                width="20"
              />
              <p class="subs">3 Ports</p>
            </div>
            <div class="info">
              <img
                src="../assets/ticket.png"
                alt="ticket"
                height="20"
                width="20"
                class="globe"
              />
              <p class="subs" v-for="ToDo in ToDos" :key="ToDo.id">
                {{ ToDo.coursePrice }}
              </p>
            </div>
          </div>
          <div class="seats">
            <p class="limit">Limited Seats</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "../firebase/db";
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
        await db.collection("ToDos").add({ courseName: this.newItem });
        await db.collection("ToDos").add({ courseDesc: this.newItem });
        await db.collection("ToDos").add({ coursePrice: this.newItem });

        this.newItem = "";
      }
    },
  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
* {
  font-family: "Karla", sans-serif;
}
section {
  //   height: 100vh;
  margin-bottom: 10px;
  margin-top: 0px;
  padding-bottom: 10px;
  padding-top: 10px;

  .second-page {
    margin-left: 25%;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
    @media (max-width: 468px) {
      display: block;
      min-width: 440px;
      margin-left: auto;
      margin-right: auto;
    }

    .card {
      padding-top: 30px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: row;
      justify-items: center;
      background-color: #fffaf0;
      box-shadow: 2px 8px 8px #f7ebd8;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .image {
        flex: 1;
        display: flex;
        flex-direction: column;
        object-fit: contain;
        max-width: 250px;
        max-height: 170px;
        @media (max-width: 468px) {
          align-items: center;
          min-width: 330px;
          min-height: 200px;
          object-fit: contain;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
        }

        .card-image {
          margin-left: 20%;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          vertical-align: top;

          @media (max-width: 468px) {
            //   display: flex;
            //   flex-direction: column;
            //   align-items: center;
            margin-left: auto;
          }
        }
      }
      .information {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10%;
        align-items: flex-start;
        margin-right: 5%;
        .name {
          display: flex;
          font-size: 13px;
          font-weight: bolder;
          margin-bottom: 3px;

          text-align: justify;
        }
        .about {
          .para {
            margin-top: 2px;
            margin-left: 0px;
            font-size: 100%;
            text-align: justify;
            margin-bottom: 3%;
            line-height: 120%;
          }
        }
        .course-info {
          display: flex;
          flex-direction: row;
          width: 400px;
          margin-bottom: 4px;
          .info {
            display: flex;
            flex-direction: row;
            margin-left: 2px;

            .globe {
              margin-right: 13px;
              height: 18px;
              width: 18px;
              object-fit: contain;
            }
            .subs {
              margin-top: 0%;
              margin-right: 15px;
              font-size: 15px;
            }
          }
        }
        .seats {
          font-size: 15px;
          .limit {
            margin-top: 9%;
          }
        }
      }
    }
  }
}
</style>
