<template lang="pug">
.container
  b-card-group(deck)
    b-card(
      v-for="accommodation in accommodations"
      :img-src="accommodation.featuredImage"
      :class=""
    )
      .d-flex.flex-column.justify-content-between.h-100
        div
          p {{ accommodation.contract_type }}
          h2.mb-0 {{ accommodation.title }}
          p.text-muted.font-weight-light {{ accommodation.city }}

          ul.d-flex.flex-wrap.list-unstyled.-mb2
            li.text-sm.text-muted.bg-light.p-2.rounded.mr-2.mb-2(v-for="tag in accommodation.tags") {{ tag }}

        p.text-primary {{ accommodation.price | currency}}


</template>

<script>
  export default {
    props: {
      accommodations: {
        type: Array,
        default: []
      }
    }
  }
</script>



