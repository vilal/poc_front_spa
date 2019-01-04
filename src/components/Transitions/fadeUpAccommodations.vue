<template lang="pug">
  transition-group(tag="div" name="accommodation__feed" class="d-flex flex-row flex-wrap -mx-2")
    slot
</template>

<style lang="sass" scoped>

$easings: (default: cubic-bezier(.4, .25, .3, 1), in: cubic-bezier(.6, .1, .8, .7), out: cubic-bezier(.2, .3, .4, .9), in-out: cubic-bezier(.5, .15, .4, 1), bounce: cubic-bezier(.4, .25, .3, 1.4))

// cubic-bezier
@function cb($fn: default) 
  @return map-get($easings, $fn)

/deep/
  .accommodation__feed-move
    transition: all 325ms cb()
  .accommodation__feed-enter-active
    transition: all 325ms cb(out) 175ms
  .accommodation__feed-appear-enter-active
    transition: all 325ms cb(out) 200ms

  .accommodation__feed-leave-active
    transition: all 325ms cb(in)
    position: absolute
    z-index: -1

  .accommodation__feed-enter,
  .accommodation__feed-leave-to,
  .accommodation__feed-appear-enter
    opacity: 0
    transform: translate3d(0, -2.5rem, 0)
</style>
