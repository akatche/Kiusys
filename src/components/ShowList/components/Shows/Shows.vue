<script>
import {sortByVowels} from "@/components/ShowList/shared/helpers";
import {
  DataContainer,
  ImageContainer,
  ShowCard,
  ShowContainer,
  ShowFooter,
  ShowInnerContainer,
  ShowNetwork,
  ShowTitle,
  ShowType
} from "@/components/ShowList/components/Shows/Shows.styles";
import VLazyImage from "v-lazy-image/v2";

export default {
  name: 'Shows',

  props: {
    shows: {
      type: Array,
      required: true
    }
  },

  components:{
    ShowCard,
    ShowContainer,
    ShowInnerContainer,
    DataContainer,
    ShowFooter,
    ImageContainer,
    ShowTitle,
    ShowType,
    ShowNetwork,
    VLazyImage
  },

  computed: {
    sortedShows: function () {
      return sortByVowels(this.shows)
    }
  },
}
</script>

<template>
  <ShowContainer>
    <ShowCard class="card" v-for="(show, index) in sortedShows" :key="index">
      <ShowInnerContainer>
        <ImageContainer>
          <v-lazy-image :src="show.image" :alt="show.name" />
        </ImageContainer>
        <DataContainer>
          <ShowTitle>{{ show.name }}</ShowTitle>
          <ShowType class="type">{{ show.type }}</ShowType>
          <ShowNetwork>Network: {{ show.network }}</ShowNetwork>
        </DataContainer>
      </ShowInnerContainer>
      <ShowFooter :href="show.officialSite ?? show.url">
        Official Site
      </ShowFooter>
    </ShowCard>
  </ShowContainer>
</template>
