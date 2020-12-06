<template>
  <v-app>
    <navbar />
    <keep-alive>
      <v-main>
        <router-view></router-view>
      </v-main>
    </keep-alive>
  </v-app>
</template>

<script>
const navbar = () => import("./components/navbar");
export default {
  name: "App",

  components: {
    navbar
  },

  data: () => ({
    //
  }),
  metaInfo: {
    title: "aru",
    titleTemplate: "%s | home",
    meta: [
      {
        charset: "utf-8"
      },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "keyword",
        content: "aru,fashion,arukenya,design,style,"
      }
    ]
  }
};
</script>
