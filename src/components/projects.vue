<template>
  <div class="projects">
    <div class="paralax">
      <v-layout column align-center justify-center class="top">
        <!-- <img src="../assets/nobg2.jpg" alt="alt" height="200" /> -->
        <h1
          class="pink--text mb-2 text-center head  wow fadeInUp "
          data-wow-duration="0.3s"
          data-wow-delay="0.3s"
        >
          PROJECTS
        </h1>
        <div
          class="sub mb-3 text-center text-capitalize pink--text lighten-4 wow fadeInUp "
          data-wow-duration="0.3s"
          data-wow-delay="0.4s"
        >
          have a look at how ARuKenya styles and designs
        </div>
      </v-layout>
    </div>
    <!-- projects -->
    <v-container class="my-5 py-5">
      <h3 class="head1 text-center">Design & Style</h3>
      <p
        class="sub1 text-center pink--text lighten-2 text-capitalize mb-5 pb-5"
      >
        click on aproject to view more details
      </p>

      <v-layout row wrap>
        <v-flex xs12 sm6 md6 v-for="project in projects" :key="project.id">
          <v-card class="ma-3 shadow " :to="'/project/' + project.id">
            <div class="inner">
              <v-img
                :src="project.img"
                class="img"
                :alt="project.poweredby"
              ></v-img>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- modal -->
    <foot />
  </div>
</template>

<script>
const foot = () => import("../components/footer");

export default {
  components: { foot },
  data() {
    return {
      dialog: false,
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
  computed: {
    // projects() {
    //   return this.$store.getters.projects;
    // }
  },
  name: "projects",
  metaInfo: {
    titleTemplate: "%s | design and style projects"
  }
};
</script>

<style scoped>
.paralax {
  background-attachment: fixed;
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/projects.jpg");
  background-size: cover;
}

.head {
  font-size: 54px;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: "Lobster", cursive;
}

.sub {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 5px;
}

.top {
  padding-top: 150px;
}

.shadow {
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.18) !important;
  border-radius: 6px;
}

.inner {
  overflow: hidden;
  background-color: pink;
}

.img {
  transition: 1.5s ease-in-out;
}

.shadow:hover .img {
  transition: 1.5s ease-in-out;

  transform: scale(1.2);
}

.head1 {
  font-size: 34px;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: "Lobster", cursive;
}

.sub1 {
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 5px;
}
</style>
