<template>
  <div class="contact">
    <v-snackbar v-model="success" :timeout="4000" top right>
      {{ text }}
      <v-btn color="pink" small text @click="success = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="err" :timeout="4000" top right>
      {{ error }}
      <v-btn color="pink" small text @click="err = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-container>
      <h3 class="head text-center">Contct Us</h3>
      <p class="sub text-center pink--text lighten-2 text-capitalize">
        what can we do for you today?
      </p>

      <v-layout row wrap>
        <v-flex xs12 sm4 md5></v-flex>
        <v-flex xs12 sm8 md7>
          <v-card class="ma-2 pa-5 form">
            <v-form class="py-2" @submit.prevent="">
              <v-text-field
                label="name"
                dense
                outlined
                color="pink lighten-2"
                append-icon="mdi-face"
                v-model="name"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                type="email"
                v-model="email"
                label="email"
                color="pink lighten-2"
                append-icon="mdi-email-outline"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                type="text"
                v-model="subject"
                label="subject"
                color="pink lighten-2"
                append-icon="mdi-book-outline"
              ></v-text-field>
              <v-textarea
                v-model="message"
                dense
                autocomplete
                label="message"
                rows="6"
                no-resize
                outlined
                color="pink lighten-2"
                append-icon="mdi-pencil"
              ></v-textarea>
              <v-btn
                block
                color
                tile
                class="pink lighten-2 white--text"
                @click="submit"
                :loading="loading"
              >
                <span left>send</span>
                <v-icon small right>mdi-send</v-icon>
              </v-btn>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap></v-layout>
    </v-container>
    <v-btn
      fab
      fixed
      right
      bottom
      small
      color="green"
      router
      href="https://api.whatsapp.com/send?phone=254732894414&text=Hi%20there%2C
%20i%20am%20a%20client%20intrested%20in%20your%20products%20can%20we%20talk..."
    >
      <v-icon color="white">mdi-whatsapp</v-icon>
    </v-btn>

    <foot />
  </div>
</template>

<script>
const foot = () => import("../components/footer");

import firebase from "../database/firebase";
const db = firebase.firestore();
export default {
  components: {
    foot
  },
  name: "contact",
  metaInfo: {
    titleTemplate: "%s | contact us"
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      error: "",
      err: false,
      loading: false,
      success: false,
      text: "",
      date: new Date().toISOString()
    };
  },
  methods: {
    submit() {
      if (
        !this.name == "" &&
        !this.email == "" &&
        !this.message == "" &&
        !this.subject == ""
      ) {
        this.loading = true;
        db.collection("emails")
          .doc()
          .set({
            name: this.name,
            email: this.email,
            message: this.message,
            subject: this.subject,
            date: this.date
          })
          .then(() => {
            this.loading = false;
            console.log("Document successfully written!");
            this.success = true;
            this.text = "Email has been sent successfuly.";
            // this.$refs.form.reset();
            // this.$router.push({ path: "/" });
            this.name = "";
            this.email = "";
            this.message = "";
            this.subject = "";
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      } else {
        this.error = "Input all fields!!";
        this.err = true;
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.head {
  font-size: 34px;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.sub {
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 3px;
}

.form {
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.28) !important;
  border-radius: 4px;
}

.contact {
  background-image: url("../assets/mail.svg");
  background-size: 47%;
  background-repeat: no-repeat;
  background-position: left 150px;
  height: 100vh;
  padding-top: 20px;
}
</style>
