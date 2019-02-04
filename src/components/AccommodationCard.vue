<template lang="pug">
  b-card(
    class="shadow border-0 overflow-hidden"
    no-body
  )
    //- b-link(:to="{name: 'accommodation', params: { id: accommodation.id }}")
    progressive-img(
      :src="accommodation.featuredImage"
      :placeholder="accommodation.featuredImagePlaceholder"
      :aspect-ratio="0.68"
      class="img-cover-wrapper"
      ref="featuredImage"
      @onLoadPlaceholder="setBoundingRect"
    )
    p.z-index-md.position-absolute.pin-l.pin-t.pin-r.pl-3.pt-2.pb-2.text-uppercase.text-sm.linear-gradient.text-white {{ accommodation.contract_type }}
    b-card-body(class="p-3" )
      .d-flex.flex-column.justify-content-between.h-100
        div
          h2.mb-0.text-sm {{ accommodation.title }}
          p.text-sm.text-muted.font-weight-light {{ accommodation.city }}

          ul.d-flex.flex-wrap.list-unstyled.-mb2
            li.text-muted.text-xs.bg-light.py-2.px-3.rounded.mr-2.mb-2.line-height-sm.text-truncate.max-w-33(v-for="tag in accommodation.tags") {{ tag }}

        p.text-primary {{ accommodation.price | currency }}

    //- div(v-show="isOver" ref="clonedImage" class="transition-all")
    //-   b-link(:to="{name: 'accommodation', params: { id: accommodation.id }}")
    //-     img( :src="accommodation.featuredImage" class="img-cover" )

</template>

<script>
  export default {
    props: {
      accommodation: {
        type: Object,
        default: () => []
      }
    },

    beforeDestroy() {
      // this.handleEnter()
    },

    data() {
      return {
        isOver: false,
        boudingRect: {}
      }
    },

    methods: {
      setBoundingRect() {
        const element = this.$refs.featuredImage.$el
        const { top, left, width, height } = element.getBoundingClientRect()
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0
        const scrollLeft =
          window.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0

        this.boudingRect = {
          top: top + scrollTop,
          left: left + scrollLeft,
          width,
          height
        }
      },

      // handleEnter () {
      //   this.isOver = true

      //   let { top, left, width, height } = this.boudingRect

      //   let el = this.$refs.clonedImage

      //   el.style.position = "fixed"
      //   el.style.top = `${top}px`
      //   el.style.left = `${left}px`
      //   el.style.height = `${height}px`
      //   el.style.width = `${width}px`
      //   el.style.zIndex = `100`

      //   setTimeout(() => {
      //     el.classList.add('transitioned')
      //     el.style.width = `${window.innerWidth}px`
      //     el.style.height = `${window.innerHeight}px`
      //   }, 125)
      // },

      // handleLeave() {
      //   this.isOver = false
      //   this.$refs.clonedImage.classList.remove('transitioned')
      // }
    }
  }
</script>


<style lang="sass" scoped>
.transition-all
  transition: all 325ms

.transitioned
  top: 20px!important
  left: 0!important
</style>
