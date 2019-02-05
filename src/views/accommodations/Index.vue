<template lang="pug">
  accommodation-list(:accommodations="accommodations")

</template>

<script>
import AccommodationList from "../../components/AccommodationList"
import axios from 'axios'

export default {
  components: {
    AccommodationList
  },
  mounted() {
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
        }
      )
  },

  data () {
    return {
      accommodations: []
    }
  }
}
</script>

