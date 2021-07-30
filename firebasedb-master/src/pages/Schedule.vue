<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1>Provide Your Details</h1>
      <label>First Name</label>
      <input type="text" required v-model="firstname" />
      <label>Last Name</label>
      <input type="text" required v-model="lastname" />

      <label>Email</label>
      <input type="email" required v-model="email" />
      <label>Phone Number</label>
      <input type="text" v-model="number" />
      <div>
        <input type="text" v-model="fromDateVal" placeholder="select date" />
        <v-date-picker
          locale="en-in"
          :min="minDate"
          :max="maxDate"
          v-model="fromDateVal"
          no-title
          @input="fromDateMenu = false"
        ></v-date-picker>
      </div>
      <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept terms and conditions</label>
      </div>
      <div class="submit">
        <input
          type="button"
          style="background-color: lightgreen; height: 50px; width: 150px"
          id="rzpbutton"
          value="Payment Checkout"
          v-on:click="event;"
        />
      </div>
    </form>
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
    event() {
      var options = {
        key: "rzp_test_astk95KRrqNO0x",
        // key_secret : "mVybwVFhZAqr6Eg1OPGP3Rcs",
        amount: this.cartValue * 100, // 2000 paise = INR 20
        name: "Alconomy Technologies",
        description: "Buy safe and secure crypto.",
        image: "/your_logo.png",
        handler: function(response) {
          alert(
            "Save This Payment ID For Future Referce  " +
              " " +
              response.razorpay_payment_id
          );
        },
        prefill: {
          name: this.user.displayName,
          email: this.user.email,
        },
        notes: {
          address: "Hello World",
        },
        theme: {
          color: "#0EB9F2",
        },
      };
      var rzp1 = new options();

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
</style>
