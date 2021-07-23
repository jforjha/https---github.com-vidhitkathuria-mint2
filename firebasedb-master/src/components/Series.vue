<template>
  <section>
    <div class="second-page">
      <div class="second-container">
        SERIES
      </div>
      <div class="card">
        <div class="image">
          <img src="../assets/card.png" alt="card" class="card-image" />
        </div>
        <div class="information">
          <div class="name">
            <h1 class="heading">
              Movement Building: Mission-Driven Growth Hacking
            </h1>
          </div>
          <div class="about">
            <p class="para">
              Hey there future movement builder, it’s me, Tristan, your friendly
              course creator. I created this class because I want to share my
              learnings from a...
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
              <p class="subs">$295</p>
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
export default {};
</script>
<style lang="scss">
section {
  //   height: 100vh;
  margin-bottom: 10px;
  margin-top: 0px;
  padding-bottom: 10px;
  padding-top: 10px;

  .second-page {
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    @media (max-width: 468px) {
      display: block;
      min-width: 440px;
    }

    .second-container {
      font-size: 14px;
      color: #7e7e7e;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 25px;
      margin-left: 10px;
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
          font-size: 11px;
          font-weight: bolder;
          margin-bottom: 0px;

          text-align: justify;
        }
        .about {
          .para {
            margin-top: 2px;
            margin-left: 0px;
            font-size: 13px;
            text-align: justify;
          }
        }
        .course-info {
          display: flex;
          flex-direction: row;
          width: 400px;
          .info {
            display: flex;
            flex-direction: row;
            margin-left: 2px;

            .globe {
              margin-right: 10px;
              height: 18px;
              width: 18px;
              object-fit: contain;
            }
            .subs {
              margin-top: 0%;
              margin-right: 15px;
              font-size: 13px;
            }
          }
        }
        .seats {
          font-size: 12px;
          .limit {
            margin-top: 0%;
          }
        }
      }
    }
  }
}
</style>
