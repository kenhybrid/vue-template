<template>
  <div>
    <v-container>
      <!-- <v-subheader>EMAILS</v-subheader> -->
      <v-expansion-panels accordion tile>
        <v-expansion-panel v-for="email in emails" :key="email.id">
          <v-expansion-panel-header class>
            <v-layout row wrap>
              <v-flex xs2 sm1 md1 class="px-2 my-1">
                <v-icon color="error">mdi-email-outline</v-icon>
              </v-flex>
              <v-flex xs10 sm11 md11 class>
                <div>
                  <b> {{ email.subject }}</b>
                </div>
                <small>@{{ email.email }}</small>
              </v-flex>
            </v-layout>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider class="mb-2"></v-divider>
            <div>
              <b>Message:</b>
              {{ email.message }}
            </div>
            <div>
              <b>Date:</b>
              {{ email.date | date }}
            </div>
            <div class="float">
              <v-btn icon color="error" @click="deleteemail(email)">
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyDxEvg0HrI7DGYaqhEwWQflrmMuCPKJal4",
  authDomain: "aru-1234.firebaseapp.com",
  databaseURL: "https://aru-1234.firebaseio.com",
  projectId: "aru-1234",
  storageBucket: "aru-1234.appspot.com",
  messagingSenderId: "824983978258",
  appId: "1:824983978258:web:556151dc07e0639b7bb3cb",
  measurementId: "G-Z6KZ304RE9"
};

const db = firebase.initializeApp(config).firestore();
export default {
  data() {
    return {
      emails: [],
      deletedialog: false
    };
  },
  metaInfo: {
    titleTemplate: "%s | admin"
  },
  created() {
    db.collection("emails")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            message: doc.data().message,
            subject: doc.data().subject,
            date: doc.data().date
          };
          this.emails.push(data);

          //console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  filters: {
    date(value) {
      return new Date(value).toLocaleString(["en-Us"], {
        month: "long",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  },
  methods: {
    deleteemail(email) {
      console.log(email.message);
      db.collection("emails")
        .doc(email.id)
        .delete()
        .then(() => {
          console.log("successfully deleted");
          this.deletedialog = false;
          this.$router.go("/admin");
        })
        .catch(() => {
          console.log("error while deleting");
        });
    }
  }
};
</script>

<style></style>
