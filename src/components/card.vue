<template>
  <div>
    <v-card flat>
      <v-img :src="url"></v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["url"]
};
</script>

<style></style>
