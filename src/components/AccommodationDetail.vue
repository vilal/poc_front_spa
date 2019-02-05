<template lang="pug">
    div
      h1 {{ accommodation.title }}

      div {{ accommodation.description }}

</template>

<script>
  export default {
    props: {
      accommodation: {
        type: Object,
        required: true
      }
    }
  }
</script>



