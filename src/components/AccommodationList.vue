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
        this.getDatas(id)
      }
    },
    methods: {
      setActive (id) {
        this.activeId = parseInt(id)
      },
      fetchActiveAccommodation (id) {
        this.isLoading = true
        axios
          .get(`/api/accommodation-${id}.json`)
          .then( response => {
            this.activeAccommodation = response.data
            this.isLoading = false
            }
          )
      },
      fetchAccommodations() {
        this.isLoading = true
        axios
          .get('/api/accommodations.json')
          .then( response => {
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
      },
      getDatas(id) {
        if (id != undefined) {
          this.fetchActiveAccommodation(id)
        }
        else {
          if (!this.accommodations.length) {
            this.fetchAccommodations()
          }
        }
      }
    },
    mounted () {
      this.getDatas(this.$route.params.id)
    }
  }
</script>



