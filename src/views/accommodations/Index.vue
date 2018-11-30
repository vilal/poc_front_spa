<template lang="pug">
  .about
    h1 This is an accommodation page
    router-link(:to="{name: 'accommodation', params: { id: 1 }}") Accommodations
</template>

<style lang="sass" scoped>
  .about
    background: red
</style>

