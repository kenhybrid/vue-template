<template>
  <div class="about">
    <div class="paralax">
      <v-layout column align-center justify-center class="top">
        <!-- <img src="../assets/about.svg" alt="alt" height="200" /> -->
        <div
          class="pink--text mb-2 text-center head wow fadeInUp "
          data-wow-duration="0.3s"
          data-wow-delay="0.3s"
        >
          ARU
        </div>
        <h1
          class="sub mb-3 text-center text-capitalize pink--text lighten-4 wow fadeInUp "
          data-wow-duration="0.3s"
          data-wow-delay="0.5s"
        >
          ARuKenya a home of fashion
        </h1>
        <v-btn class="pink  mt-5  " dark to="/arukenya-projects">
          <span left>see what we do</span>
          <v-icon class="px-3" right small>mdi-arrow-right</v-icon>
        </v-btn>
      </v-layout>
    </div>
    <br />
    <v-container class="py-5 my-5">
      <h3 class="head1 text-center topic">About ARuKenya</h3>
      <p class="sub1 text-center pink--text  text-capitalize">
        this is all about us?
      </p>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm3 md3 class="mt-5">
          <v-card
            class="pa-2 ma-3 shadow wow fadeInUp "
            data-wow-duration="0.7s"
            data-wow-delay="0.5s"
          >
            <v-subheader class="pink--text topic">VISSION</v-subheader>
            <div class="px-3 pb-3 text">
              To create phenomenal designs and set the trends in styling.
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-card
            class="pa-2 ma-3 shadow wow fadeInUp "
            data-wow-duration="0.8s"
            data-wow-delay="0.5s"
          >
            <v-subheader class="pink--text topic">ABOUT</v-subheader>
            <div class="px-3 pb-3 text">
              House of Aru is a style and design patnership that came together
              courtesy of two best friends Molly Ajando Keya and Ruchale Milka
              Wameyo, who are great lovers of fashion. ARuKenya in inspired by
              the difrent kinds of people who are obsessed with looking good and
              feeling good with themselves. It`s all about facing inner fears
              and addressing insecurities,stepping out of the shell and showing
              off the fashion game to anyone. It`s for the ones who want to wear
              whatever they like and still look amazing,it`s here to extend
              confidence levels for all ages and to showcase fashion in a
              beautiful way.
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm3 md3 class="mt-5">
          <v-card
            class="pa-2 ma-3 shadow wow fadeInUp "
            data-wow-duration="0.9s"
            data-wow-delay="0.5s"
          >
            <v-subheader class="pink--text topic">MISSION</v-subheader>
            <div class="px-3 pb-3 text">
              To empower,motivate and inovate every person who loves fashion and
              to give the quality products and services that surpass various
              fashion trends.
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="px mt-5 pt-5"></div>

    <section class=" color pt-5 pb-5">
      <v-container class="py-5 my-5 ">
        <h3 class="head1 text-center">Look At Us</h3>
        <p class="sub1 text-center pink--text lighten-2 text-capitalize">
          glamor,fashion and style
        </p>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm3 md3 class="mt-5">
            <v-card
              class="pa-2 ma-3 shadow wow fadeInUp "
              data-wow-duration="0.5s"
              data-wow-delay="0.5s"
            >
              <div class="inner">
                <v-img
                  src="../assets/us3.jpg"
                  class="img"
                  alt="co-founders of arukenya"
                ></v-img>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 md4>
            <v-card
              class="pa-2 ma-3 shadow wow fadeInUp "
              data-wow-duration="0.6s"
              data-wow-delay="0.5s"
            >
              <div class="inner">
                <v-img src="../assets/us2.jpg" class="img" alt="us"></v-img>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 sm3 md3 class="mt-5">
            <v-card
              class="pa-2 ma-3 shadow wow fadeInUp "
              data-wow-duration="0.7s"
              data-wow-delay="0.5s"
            >
              <div class="inner">
                <v-img src="../assets/us1.jpg" class="img" alt="us"></v-img>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="top">
      <v-container>
        <h3 class="head1 text-center">Follow Us</h3>
        <p class="sub1 text-center pink--text lighten-2 text-capitalize">
          follow,like and share
        </p>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 md6 class="px-2">
            <v-card
              class="px-2 shadow wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.5s"
            >
              <v-layout row wrap>
                <v-flex xs12 sm6 md6 class="pa-3">
                  <v-container fill-height>
                    <v-row justify="center" align="center">
                      <v-list-item
                        v-for="item in ruh"
                        :key="item.icon"
                        link
                        router
                        :href="item.link"
                      >
                        <v-list-item-icon>
                          <v-icon :color="item.color">{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-list-item-title
                                :color="item.color"
                                v-bind="attrs"
                                v-on="on"
                                >{{ item.name }}</v-list-item-title
                              >
                            </template>

                            <span>follow me @{{ item.name }}</span>
                          </v-tooltip>
                        </v-list-item-content>
                      </v-list-item>
                    </v-row>
                  </v-container>
                </v-flex>
                <v-flex xs12 sm6 md6 class="pa-3">
                  <v-img
                    src="../assets/us4.jpg"
                    class="fluid  "
                    alt="ruchale"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md6 class="px-2">
            <v-card
              class="px-2 shadow wow fadeInLeft "
              data-wow-duration="0.5s"
              data-wow-delay="0.5s"
            >
              <v-layout row wrap>
                <v-flex xs12 sm6 md6 class="pa-3">
                  <v-img
                    src="../assets/us8.jpg"
                    class="fluid "
                    alt="molly ajando"
                  ></v-img>
                </v-flex>
                <v-flex xs12 sm6 md6 class="pa-3">
                  <v-container fill-height>
                    <v-row justify="center" align="center">
                      <v-list-item
                        v-for="item in molly"
                        :key="item.icon"
                        link
                        router
                        :href="item.link"
                      >
                        <v-list-item-icon>
                          <v-icon :color="item.color">{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-list-item-title
                                :color="item.color"
                                v-bind="attrs"
                                v-on="on"
                                >{{ item.name }}</v-list-item-title
                              >
                            </template>

                            <span>follow me @{{ item.name }}</span>
                          </v-tooltip>
                        </v-list-item-content>
                      </v-list-item>
                    </v-row>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <foot />
  </div>
</template>

<script>
const foot = () => import("../components/footer");
export default {
  name: "Home",
  data() {
    return {
      molly: [
        {
          icon: "mdi-whatsapp",
          link: "https://wa.me/254721261664",
          color: "success",
          name: "Ajando"
        },
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/ajando.keya.5",
          color: "blue",
          name: "Ajando Keya"
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/p/CFcqmj9hpzU/?igshid=10ueoca8868rw",
          color: "pink",
          name: "a.j.a.n.d.o_k"
        },
        {
          icon: "mdi-phone",
          link: "",
          color: "black",
          name: "0725365485"
        }
      ],
      ruh: [
        {
          icon: "mdi-whatsapp",
          link: "https://wa.me/254732894414",
          color: "success",
          name: "Ruchale"
        },
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/aj.ru.33",
          color: "blue",
          name: "itslady_ru"
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/p/CFaYZGXBLO0/?igshid=1bdienyhozppi",
          color: "pink",
          name: "itslady_ru"
        },
        {
          icon: "mdi-phone",
          link: "",
          color: "black",
          name: "0715964463"
        }
      ]
    };
  },
  components: {
    foot
  },
  metaInfo: {
    titleTemplate: "%s | home"
  }
};
</script>

<style scoped>
.color {
  background-color: rgb(247, 203, 203);
}

.fluid {
  width: 100%;
  max-height: auto;
  border-radius: 5px;
}

.topic {
  font-family: "Lobster", cursive;
  letter-spacing: 2px;
}

.px {
  background-image: url("../assets/dark.jpg");
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.top {
  padding-top: 80px;
}

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
  font-size: 74px;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: "Lobster", cursive;
}

.sub {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 5px;
}

.shadow {
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.18) !important;
  border-radius: 6px;
}

.inner {
  overflow: hidden;
}

.img {
  transition: 1.5s ease-in-out;
}

.shadow:hover .img {
  transition: 1.5s ease-in-out;

  transform: scale(1.2);
}

.text {
  font-size: 15px;
  font-weight: 400;

  line-height: 1.6;
  text-align: left;
}

.head1 {
  font-size: 40px;
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
