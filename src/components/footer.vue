<template>
  <div class="footer ">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
          <center class="py-2">
            <v-btn
              flat
              icon
              color="primary"
              class="mx-3 hover"
              href="https://www.facebook.com/aj.ru.33"
            >
              <v-icon large>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              flat
              icon
              color="green"
              class="mx-3 hover"
              href="https://wa.me/254732894414"
            >
              <v-icon large>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn
              flat
              icon
              color="pink"
              class="mx-3 hover"
              href="https://www.instagram.com/p/CFacq-Lg9m8/?igshid=182oeuavda90j"
            >
              <v-icon large>mdi-instagram</v-icon>
            </v-btn>
          </center>
          <!-- <hr class="mt-3 black"> -->
          <div class="white--text text-center pt-4">
            aru &copy; {{ new Date().getFullYear() }}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: rgb(32, 28, 28);
  color: pink;
}
.hover {
  transition: 0.8s ease-in-out;
}
.hover:hover {
  transform: scale(1.2) rotate(360deg);
}

.contact {
  font-size: 18px;
  padding: 3px;
}
</style>
