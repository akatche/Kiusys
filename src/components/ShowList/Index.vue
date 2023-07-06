<template>
  <IndexContainer class="container">
    <Genres :genres="genres" v-model="selectedGenres" @add-to-filter="addToFilter" @remove-from-filter="removeFromFilter"/>
    <Shows :shows="filteredShows" />
  </IndexContainer>
</template>

<script>
import { getShowsByPage } from "@/services/ShowsService.js";
import GenreSelection from "@/components/ShowList/components/Genres/GenreSelection.vue";
import Shows from "@/components/ShowList/components/Shows/Shows.vue";
import {IndexContainer} from "@/components/ShowList/Index.styles";
import Genres from "@/components/ShowList/components/Genres/Genres.vue";
import {filterData} from "@/components/ShowList/shared/helpers";
export default {
  name: "ShowList",

  components: {
    Genres,
    GenreSelection,
    IndexContainer,
    Shows
  },

  data() {
    return {
      shows: [],
      genres: [],
      selectedGenres: [],
      filters:[]
    };
  },

  async mounted() {
    const {shows, genres} = await getShowsByPage(1);
    this.shows = shows;
    this.genres = genres;
  },

  methods: {
    addToFilter(data){
     this.filters.push(data);
    },

    removeFromFilter(data){
      const index = this.filters.findIndex(filter => filter.key === data.key && filter.value === data.value);
      this.$delete(this.filters, index);
    }
  },

  computed: {
    filteredShows: function () {
      return filterData(this.shows,this.filters);
    }
  },
};
</script>
