<template>
  <div>
    <main>
      <h1>Sorry!</h1>
      <p>
        page not found
      </p>
      <v-btn dark color="pink" router to="/">Go home</v-btn>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fontdiner+Swanky&family=Roboto:wght@500&display=swap");

$lime: #f8938c;
$rasp: #f36a6f;
$seed: #383838;
$sm: 1rem;
$md: 2.5rem;
$lg: 4rem;

main {
  text-align: center;

  h1 {
    margin-top: 40px;
    font-family: "Fontdiner Swanky", cursive;
    font-size: $lg;
    color: $lime;
    margin-bottom: $sm;
  }

  p {
    margin-bottom: $md;
    letter-spacing: 3px;
  }
}
</style>
