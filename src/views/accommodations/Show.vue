<template lang="pug">
  div
    progressive-img(
      :src="accommodation.featuredImage"
      :placeholder="accommodation.featuredImagePlaceholder"
      :aspect-ratio="0.68"
      class="img-cover-wrapper"
    )

    .container
      h1 {{ accommodation.title }}

      div {{ accommodation.description }}
</template>


<script>
export default {
  data() {
    return {
      accommodation: {
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
        featuredImagePlaceholder: 'https://source.unsplash.com/random/192x108',

        description: "Charbonnières, dans secteur résidentiel à 1 km du village, maison de plain-pied de 219 m2 dans magnifique parc paysager et boisé de 5072 m2 au calme absolu et sans vis à vis. Elle comprend au rez-de-chaussée un hall d’entrée, triple espace de vie très lumineux avec salon coin TV de 44m2 avec baies vitrées ouvertes sur spacieuse terrasse de 200 m2 exposée plein sud, salle à manger avec cheminée, espace Lecture ou Bridge, cuisine équipée avec coin repas, cellier, buanderie, 4 chambres avec placards dont suite parentale, salle de bains, 2 sanitaires. Sous-sol complet avec atelier, bureau de 31 m2, local technique et pièce de stockage, garage double. Piscine en mosaïque à filtration sable équipée d’un rideau. Cabane de Jardin. Maison parfaitement entretenue à deux pas du parc Lacroix- Laval et de la Gare (accès St Paul), à proximité des ramassages pour Blaise Pascal et St Joseph. Possibilité d’agrandissement."
      }
    }
  }
}
</script>
