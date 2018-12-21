<template lang="pug">


  b-card(
    class="shadow border-0 overflow-hidden"
    no-body
  )
    b-link(:to="{name: 'accommodations', params: { id: accommodation.id }}")
      progressive-img(
        :src="accommodation.featuredImage"
        :placeholder="accommodation.featuredImagePlaceholder"
        aspect-ratio="0.68"
        class="img-cover-wrapper"
      )
      p.z-index-md.position-absolute.pin-l.pin-t.pin-r.pl-3.pt-2.pb-2.text-white.text-uppercase.text-sm.linear-gradient {{ accommodation.contract_type }}
    b-card-body(class="p-3")
      .d-flex.flex-column.justify-content-between.h-100
        div
          h2.mb-0.text-sm {{ accommodation.title }}
          p.text-sm.text-muted.font-weight-light {{ accommodation.city }}

          ul.d-flex.flex-wrap.list-unstyled.-mb2
            li.text-muted.text-xs.bg-light.py-2.px-3.rounded.mr-2.mb-2.line-height-sm(v-for="tag in accommodation.tags") {{ tag }}

        p.text-primary {{ accommodation.price | currency}}

</template>

<script>
  export default {
    props: {
      accommodation: {
        type: Object,
        default: () => []
      }
    }
  }
</script>


<style lang="sass" scoped>

</style>



