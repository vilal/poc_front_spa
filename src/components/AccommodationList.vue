<template lang="pug">

.container-fluid
  .row
    .col-lg-9
      .d-flex.flex-row.flex-wrap.-mx-2
        .w-100.w-md-33.p-2.mb-3(v-for="accommodation in accommodations")
          accommodation-card( :accommodation="accommodation" class="h-100")
    .col-lg-3

</template>

<script>
  import AccommodationCard from "./AccommodationCard"

  export default {
    components: {
      AccommodationCard
    },
    props: {
      accommodations: {
        type: Array,
        default: () => []
      }
    }
  }
</script>


<style lang="sass" scoped>


</style>



