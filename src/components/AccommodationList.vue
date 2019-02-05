<template lang="pug">

.container-fluid(:class="{detail: activeId >= 0}")
  .row
    .col-lg-9(:class='{"position-static": activeId >= 0}')
      fade-up-accommodations
        .accommodation__feed.p-2.mb-3(v-for="(accommodation, index) in accommodations" :key="accommodation.id"  :class="{active: activeId === index}")
          b-link(:to="{name: 'accommodation', params: { id: accommodation.id }}" @click.native="setActive(accommodation.id)")
            accommodation-card(:accommodation="accommodation" class="h-100")
    .col-lg-3

  .accommodation-detail-wrapper(v-if="activeId >= 0 && isLoading === false")
    progressive-img(
      :src="activeAccommodation.featuredImage"
      :placeholder="activeAccommodation.featuredImagePlaceholder"
      :aspect-ratio="0.68"
      class="img-cover-wrapper"
    )
    accommodation-detail(:accommodation="activeAccommodation")
    b-link.close(:to="{name: 'accommodations'}"  @click.native="setActive(undefined)")
      font-awesome-icon(icon="times")

</template>

<script>
  /* eslint-disable no-console */
  import AccommodationCard from "./AccommodationCard"
  import AccommodationDetail from "./AccommodationDetail"
  import FadeUpAccommodations from "./Transitions/fadeUpAccommodations"
  import axios from 'axios'

  export default {
    components: {
      AccommodationCard,
      AccommodationDetail,
      FadeUpAccommodations
    },
    data () {
      return {
        activeId: parseInt(this.$route.params.id),
        accommodations: [],
        activeAccommodation: undefined,
        isLoading: true
      }
    },
    watch: {
      '$route.params.id' (id) {
        this.setActive(id)
        if (id != undefined) {
          this.fetchData(id)
        }
        else {
          if (!this.accommodations.length) {
            this.fetchAllData()
          }
        }
      }
    },
    methods: {
      setActive (id) {
        this.activeId = parseInt(id)
      },
      fetchData (id) {
        this.isLoading = true

        console.log('fetchData '+id)

        axios
          .get(`/api/accommodation-${id}.json`)
          .then( response => {
            console.log(response.data)
            this.activeAccommodation = response.data
            this.isLoading = false
            }
          )
      },
      fetchAllData() {
        console.log('fetchAllData')
        this.isLoading = true
        axios
          .get('/api/accommodations.json')
          .then( response => {
            console.log(response.data)
            let interval
            interval = setInterval(() => {
              this.accommodations.push(response.data.shift())

              if (!response.data.length) {
                clearInterval(interval)
              }
            }, 125)
            this.isLoading = false
            }
          )
      }
    },
    mounted () {
      if (this.$route.params.id != undefined) {
        this.fetchData(this.$route.params.id)
      }
      else {
        this.fetchAllData()
      }
    }
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
    svg
      width: 3rem !important
      height: 3rem
      color: white

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
    position: relative
    margin-left: -1rem
    margin-right: -1rem
    margin-top: -2rem

    .img-cover-wrapper
      animation: fade 0ms ease $duration forwards
      opacity: 0
      position: absolute
      left: 0
      top: 0



  @keyframes fade
    0%
      opacity: 0
    100%
      opacity: 1


</style>



