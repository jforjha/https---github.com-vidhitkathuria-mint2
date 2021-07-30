<template>
  <div class="total">
    <div class="details">
      <form @submit.prevent="handleSubmit">
        <h1>Provide Your Details</h1>
        <label>First Name</label>
        <input id="name" type="text" required v-model="firstname" />
        <label>Last Name</label>
        <input type="text" required v-model="lastname" />

        <label>Email</label>
        <input type="email" id="email" required v-model="email" />
        <label>Phone Number</label>
        <input type="text" id="number" v-model="number" />
        <label for="date">select date</label>
        <input type="text" v-model="fromDateVal" />

        <div class="terms">
          <input type="checkbox" required v-model="terms" class="box" />
          <label class="accept">Accept terms and conditions</label>
        </div>
        <div class="submit">
          <input
            type="button"
            style="background-color: lightblue; height: 50px; width: 150px"
            class="pay"
            id="rzpbutton"
            value="Payment Checkout"
            v-on:click="makepayment"
          />
        </div>
      </form>
    </div>
    <div class="calender">
      <label for="date">Choose Date</label>
      <v-date-picker
        class="date"
        locale="en-in"
        :min="minDate"
        :max="maxDate"
        v-model="fromDateVal"
        no-title
        @input="fromDateMenu = false"
      ></v-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromDateVal: null,
    };
  },
  methods: {
    makepayment: function() {
      var options = {
        key: "rzp_test_astk95KRrqNO0x",
        // key_secret : "mVybwVFhZAqr6Eg1OPGP3Rcs",
        amount: 500 * 100,
        name: "GuruMint",
        description: "Pay Your Educator",
        image: "../assets/alconomy.png",
        handler: function(response) {
          alert(
            "Save This Payment ID For Future Referce  " +
              " " +
              response.razorpay_payment_id
          );
        },
        prefill: {
          name: this.name,
          email: this.email,
          contact: this.number,
        },
        notes: {
          address: "Hello World",
        },
        theme: {
          color: "#0EB9F2",
        },
      };
      const rzp1 = new window.Razorpay(options);

      rzp1.open();
      // event.preventDefault();
    },
    // total: function(){

    //   let total = [];

    //   Object.entries(this.cartValue).forEach(([key, val]) => {
    //       total.push(val.cartValue) // the value of the current key.
    //   });

    //   return total.reduce(function(total, num){ return total / 1000}, 0);

    // },
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format date, apply validations, etc. Example below.
      // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    },
  },
};
</script>

<style>
.total {
  display: flex;
  flex-direction: row;
}

.details {
  flex: 2;
  /* border: solid black 1px; */
  max-width: 60%;
}
.calender {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100%;
  margin-left: 0%;
  align-items: flex-start;
  margin-top: auto;
  margin-bottom: auto;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
.pay {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}
.terms {
  margin-top: 10%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: auto;
}
.accept {
  margin-top: 0%;
}
@media (max-width: 468px) {
  .total {
    display: flex;
    flex-direction: column;
  }
  .details {
    max-width: 100%;
  }
}
</style>
