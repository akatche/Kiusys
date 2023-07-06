<script>
import GenreSelection from "@/components/ShowList/components/Genres/GenreSelection.vue";
import GenreList from "@/components/ShowList/components/Genres/GenreList.vue";
import {GenreContainer} from "@/components/ShowList/components/Genres/Genres.styles";

export default {
  name: 'Genres',

  components:{
    GenreList,
    GenreSelection,
    GenreContainer
  },

  props: {
    genres: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selectedGenres: []
    };
  },

  methods: {
    addGenres(genre) {

      if(this.selectedGenres.includes(genre)){
        return;
      }

      this.selectedGenres.push(genre);
      this.$emit('input',this.selectedGenres);
      this.$emit('add-to-filter', {
        key:'genres',
        value:genre
      });
    },
    removeGenre(genre) {
      const index = this.selectedGenres.findIndex(item => item === genre);
      this.$delete(this.selectedGenres, index);
      this.$emit('remove-from-filter', {
        key:'genres',
        value:genre
      });
    }
  }
}
</script>

<template>
  <GenreContainer>
    <GenreSelection :genres="genres" @input="addGenres"/>
    <GenreList :genres="selectedGenres" @remove-genre="removeGenre" />
  </GenreContainer>
</template>
