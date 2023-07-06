<script>
import {GenreItem, GenreListContainer} from "@/components/ShowList/components/Genres/GenreList.style";

export default {
  name: 'GenreList',

  props: {
    genres: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selected: '',
    };
  },

  components:{
    GenreListContainer,
    GenreItem
  },

  methods: {
    removeGenre(genre) {
      this.$emit('remove-genre',genre);
    }
  }
}
</script>

<template>
  <GenreListContainer>
    <GenreItem v-for="(genre,index) in genres" v-bind:value="genre" :key="index">
      {{ genre }} <button @click="removeGenre(genre)">X</button>
    </GenreItem>
  </GenreListContainer>
</template>
