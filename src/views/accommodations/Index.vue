<template lang="pug">
  accommodation-list(:accommodations="accommodations")

</template>

<script>
import AccommodationList from "../../components/AccommodationList"

export default {
  components: {
    AccommodationList
  },

  data () {
    return {
      accommodations: [
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 1,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 2,
          title: 'coucou',
          price: 12,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [
            'piscine avec debordement de la mort qui tue',
            'belle vue'
          ],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
        {
          id: 3,
          title: 'Maison',
          price: 10000,
          city: 'Lyon',
          contract_type: 'Offre en cours',
          tags: [],
          featuredImage: 'https://source.unsplash.com/random/1920x1080',
          featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108'
        },
      ]
    }
  }
}
</script>
