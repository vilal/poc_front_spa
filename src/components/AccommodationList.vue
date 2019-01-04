<template lang="pug">

.container-fluid
  .row
    .col-lg-9
      fade-up-accommodations
        .accommodation__feed.w-100.w-md-33.p-2.mb-3(v-for="(accommodation, index) in accommodations" :key="accommodation.id")
          accommodation-card( :accommodation="accommodation" class="h-100")
    .col-lg-3

</template>

<script>
  import AccommodationCard from "./AccommodationCard"
  import FadeUpAccommodations from "./Transitions/fadeUpAccommodations"

  export default {
    components: {
      AccommodationCard,
      FadeUpAccommodations
    },
    props: {
      accommodations: {
        type: Array,
        default: () => []
      }
    }
  }
</script>



