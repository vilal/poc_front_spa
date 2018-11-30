<template lang="pug">
  #app
    router-link(to="/") Home
    router-link(:to="{name: 'accommodations'}") Accommodations

    router-view
</template>
