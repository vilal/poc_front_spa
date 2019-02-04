<template lang="pug">

.container-fluid(:class="{detail: accommodationActiveId >= 0}")
  .row
    .col-lg-9(:class='{"position-static": accommodationActiveId >= 0}')
      fade-up-accommodations
        .accommodation__feed.p-2.mb-3(v-for="(accommodation, index) in accommodations" :key="accommodation.id"  :class="{active: accommodationActiveId === index}")
          //- a(:to="{name: 'accommodation', params: { id: accommodation.id }}")
          a(@click="transitionClick(accommodation.id, index)")
            accommodation-card(:accommodation="accommodation" class="h-100")
    .col-lg-3

  .accommodation-detail-wrapper(v-if="accommodationActiveId >= 0")
    accommodation-detail(:accommodation="accommodations[accommodationActiveId]")
    b-link.close(:to="{name: 'accommodations'}")
      font-awesome-icon(icon="times" @click="accommodationActiveId = undefined")

</template>

<script>
  /* eslint-disable no-console */
  import AccommodationCard from "./AccommodationCard"
  import AccommodationDetail from "./AccommodationDetail"
  import FadeUpAccommodations from "./Transitions/fadeUpAccommodations"

  export default {
    components: {
      AccommodationCard,
      AccommodationDetail,
      FadeUpAccommodations
    },
    props: {
      accommodations: {
        type: Array,
        default: () => []
      },
      accommodationActiveId: {
        type: Number,
        default: undefined
      }
    },
    // data () {
    //   return {
    //     accommodationActiveId: undefined
    //   }
    // },
    methods: {
      transitionClick (id) {
        // event.preventDefault()
        // console.log(event)
        // console.log(id)
        // console.log(index)
        // console.log(this.accommodations)
        // console.log(this.accommodations[id - 1])
        this.accommodationActiveId = id - 1
        this.$router.push({ name: 'accommodation', params: { id: this.accommodationActiveId } })
      }
    },
    beforeRouteLeave: function (to, from, next) {
      console.log(to)
      console.log(from)
      console.log(next)
    },
    beforeRouteUpdate: function (to, from, next) {
      console.log(to)
      console.log(from)
      console.log(next)
    },
    // beforeRouteLeave: function (to, from, next) {
    //   conso
    //   // var self = this;
    //   // self.save( { callback: proceed } );

    //   // function proceed() {
    //   //     if (self.validationErrors.length === 0) {
    //   //         next();
    //   //     } else {
    //   //         next(false);
    //   //     }
    //   // }
    // },

  }
</script>

<style lang="sass">
  $duration: 500ms
  .close
    position: fixed
    right: 2rem
    top: 2rem
    z-index: 12
    color: black
    font-size: 3rem

  .accommodation__feed,
  .accommodation__feed .card-body
    transition: all $duration ease 0s, visibility 0ms linear $duration

  .accommodation__feed
    position: absolute
    width: 33.3333%
    &:nth-child(3n+1)
      left: 0%
    &:nth-child(3n+2)
      left: 33.3333%
    &:nth-child(3n+3)
      left: 66.6666%
    &:nth-child(3n+4),
    &:nth-child(3n+5),
    &:nth-child(3n+6)
      top: 28vw
    .card,
    .h-100
      transition: all $duration ease 0s

  .detail
    .accommodation__feed:not(.active)
      opacity: 0
      visibility: hidden

    .accommodation__feed.active
      top: 0
      left: 0
      right: 0
      width: 100%
      .card
        box-shadow: none !important
        height: auto !important
      .card-body
        opacity: 0
        visibility: hidden
        padding: 0 !important
        .h-100
          display: none !important
          height: 0% !important

  .accommodation-detail-wrapper
    padding-top: 67vw

</style>



