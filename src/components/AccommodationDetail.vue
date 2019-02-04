<template lang="pug">
    div
      h1 {{ accommodation.title }}

      div {{ accommodation.description }}

</template>

<script>
  /* eslint-disable no-console */
  export default {
    props: {
      accommodation: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="sass" scoped>
  // .position-fixed
  //   top: 0
  //   left: 0
  //   bottom: 0
  //   right: 0
  //   z-index: 10

</style>




