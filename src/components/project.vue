<template>
  <div>
    <v-container class=" pa-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6>
          <v-carousel hide-delimiter-background :cycle="2" class=" shadow">
            <v-carousel-item
              v-for="img in project.images"
              :key="img.id"
              :src="img.i"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs12 sm6 md6 class="pa-3 ">
          <v-card
            class="ma-2 pa-2 wow fadeInUp "
            data-wow-duration="0.4s"
            data-wow-delay="0.6s"
          >
            Model
            <br />
            <b>{{ project.model }}</b>
          </v-card>
          <v-card
            class="ma-2 pa-2 wow fadeInUp "
            data-wow-duration="0.5s"
            data-wow-delay="0.7s"
          >
            Outfit
            <br />
            <b>{{ project.outfit }}</b>
          </v-card>
          <v-card
            class="ma-2 pa-2 wow fadeInUp "
            data-wow-duration="0.6s"
            data-wow-delay="0.8s"
          >
            Styled By
            <br />
            <b>{{ project.styledby }}</b>
          </v-card>
          <v-card
            class="ma-2 pa-2 wow fadeInUp "
            data-wow-duration="0.7s"
            data-wow-delay="0.9s"
          >
            Powered By
            <br />
            <b>{{ project.poweredby }}</b>
          </v-card>
          <v-card
            class="ma-2 pa-2 wow fadeInUp "
            data-wow-duration="0.8s"
            data-wow-delay="1s"
          >
            Inspiration
            <br />
            <b>{{ project.inspiration }}</b>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn
      fab
      bottom
      right
      fixed
      dark
      small
      color="pink"
      to="/arukenya-projects"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
// import card from "./card";
export default {
  components: {
    // card
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
            "This outfit is inspired by the cheetah print vibe with a little bit of chic and sass added in. It`s a funky wear which you can rock for a weekend out."
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
            "Fur coats are always a must have in a closet in this case we showcased how one can style a fur coat. This look is for a girl who wants to wear light clothes during winter and still look stylish."
        }
      ]
    };
  },
  // beforeRouteEnter (to, from, next) {

  //       next(this.$router.go() )
  //   },
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
    titleTemplate: "%s |  style and design project"
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
