<template>
  <nav>
    <v-app-bar app color="white" dense>
      <v-app-bar-nav-icon
        class=" hidden-sm-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-subheader class="hidden-xs-only">ARuKenya</v-subheader>

      <v-spacer></v-spacer>
      <v-subheader class="hidden-sm-and-up">ARuKenya</v-subheader>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text class="--text" router to="/">
          <span>home</span>
          <!-- <v-icon>mdi-folder-cog-outline</v-icon> -->
        </v-btn>
        <v-btn tile text class="--text" router to="/arukenya-projects">
          <span>projects</span>
          <!-- <v-icon>mdi-folder-cog-outline</v-icon> -->
        </v-btn>

        <v-btn tile text class="--text" router to="/arukenya-contact">
          <span>contact</span>
          <!-- <v-icon>mdi-folder-cog-outline</v-icon> -->
        </v-btn>
        <v-btn text icon @click="administrator">
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="white" app temporary>
      <div>
        <v-list-item
          v-for="item in menu"
          :key="item.name"
          link
          router
          :to="item.link"
          active-class="pink--text"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="administrator">
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>
    <v-layout row justify-center>
      <v-dialog v-model="admin" max-width="350">
        <v-card>
          <v-card-title class=" text--center error--text"></v-card-title>
          <v-card-text class="text-center">
            <p>Enter the passcode to login</p>
            <v-form>
              <v-text-field
                label="passcode"
                v-model="passcode"
                type="password"
                color="pink lighten-2"
                append-icon="mdi-key-outline"
              ></v-text-field>
              <v-btn color="pink lighten-2" dark @click="login">
                <span left>login</span>
                <v-icon right>mdi-lock-open-outline</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      admin: false,
      passcode: "",
      menu: [
        { name: "Home", link: "/", icon: "mdi-home-outline" },
        {
          name: "Projects",
          link: "/arukenya-projects",
          icon: "mdi-folder-settings-outline"
        },
        {
          name: "Contact",
          link: "/arukenya-contact",
          icon: "mdi-phone-outline"
        }
      ]
    };
  },
  methods: {
    administrator() {
      this.drawer = false;
      this.admin = true;
      this.$router.push("/");
    },
    login() {
      if (this.passcode == "arukenya1234") {
        this.admin = false;
        this.$router.push("/arukenya-emails");
        this.passcode = "";
      } else {
        this.admin = false;
        this.passcode = "";
      }
    }
  }
};
</script>

<style scoped></style>
