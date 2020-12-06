<template>
  <div>
    <v-container class=" pa-5">
      <v-btn
        text
        color="pink lighten-2"
        class="mx-5 px-5 py-4 my-4"
        to="/projects"
      >
        <span right>back</span>
      </v-btn>
      <v-layout row wrap>
        <v-flex xs12 sm6 md6>
          <v-layout align-center wrap>
            <v-flex xs10 sm10 md10>
              <v-card class="shadow">
                <card :url="active" class="img" v-if="active" />
                <v-img :src="project.img" v-else></v-img>
              </v-card>
            </v-flex>
            <v-flex xs2 sm2 md2>
              <v-layout column justify-center wrap>
                <v-flex sm3 md3 xs3 v-for="i in project.images" :key="i.i">
                  <v-card class="shadow mx-2">
                    <v-img :src="i.i" width @click="image(i.i)"></v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6 md6 class="pa-3">
          <v-card class="ma-2 pa-2">
            Model
            <br />
            <b>{{ project.model }}</b>
          </v-card>
          <v-card class="ma-2 pa-2">
            Outfit
            <br />
            <b>{{ project.outfit }}</b>
          </v-card>
          <v-card class="ma-2 pa-2">
            Styled By
            <br />
            <b>{{ project.styledby }}</b>
          </v-card>
          <v-card class="ma-2 pa-2">
            Powered By
            <br />
            <b>{{ project.poweredby }}</b>
          </v-card>
          <v-card class="ma-2 pa-2">
            Inspiration
            <br />
            <b>{{ project.inspiration }}</b>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import card from "./card";
export default {
  components: {
    card
  },
  props: ["id"],
  data() {
    return {
      active: "",

      projects: [
        {
          id: "1",
          img: require("../assets/projects/project1.jpg"),
          images: [
            { id: "1", i: require("../assets/projects/p1.jpg") },
            { id: "2", i: require("../assets/projects/p1-1.jpg") },
            { id: "3", i: require("../assets/projects/p1-2.jpg") },
            { id: "4", i: require("../assets/projects/p1-3.jpg") }
          ],
          model: "@ri.hanna",
          outfit: "custom made by @itslady_ru",
          styledby: "@itslady_ru",
          poweredby: "house_of_aru",
          inspiration:
            "This outfit is inspired by the cheta prit vibe with a little bit of chic and sass added in.It`s a funky wear which you can rock for a weekend out."
        },
        {
          id: "2",
          img: require("../assets/projects/project2.jpg"),
          images: [
            { id: "1", i: require("../assets/projects/p2.jpg") },
            { id: "2", i: require("../assets/projects/p2-1.jpg") },
            { id: "3", i: require("../assets/projects/p2-2.jpg") },
            { id: "4", i: require("../assets/projects/p2-3.jpg") }
          ],
          model: "@ri.hanna",
          outfit: "thrifted",
          styledby: "@itslady_ru",
          poweredby: "house_of_aru",
          inspiration:
            "Fur coats are always a must have in a closet in this case we showcased how one can style a fur coat.This look is for a girl who wants to wear light clothes during winter and still look stylish."
        }
      ]
    };
  },
  computed: {
    project() {
      return this.projects.find(project => {
        return project.id == this.id;
      });
    }
    // project() {
    //   return this.$store.getters.project(this.id);
    // }
  },
  methods: {
    image(i) {
      this.active = i;
    }
  },
  metaInfo: {
    titleTemplate: "%s | a style project by aru fashion"
  }
};
</script>

<style>
.img {
  width: 100%;
  max-height: auto;
}

.shadow {
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.18) !important;
  border-radius: 6px;
  padding: 8px;
}
</style>
