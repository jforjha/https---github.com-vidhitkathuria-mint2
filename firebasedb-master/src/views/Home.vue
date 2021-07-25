<template>
  <div class="ToDo.id">
    <Cr />
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../firebase/db";
import Cr from "../components/cr.vue";
export default {
  name: "ToDo.id",
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
  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },
  components: { Cr },
};
</script>
