<script>
import {GenreSelectionContainer} from "@/components/ShowList/components/Genres/GenresSelection.styles";

export default {
  name: 'GenreSelection',

  props: {
    genres: {
      type: Array,
      required: true
    }
  },

  components:{
    GenreSelectionContainer
  },

  data() {
    return {
      selected: ""
    };
  },

  methods: {
    changedData(){
      this.$emit('input', this.selected);
      this.selected = "";
    },
  },
}
</script>

<template>
  <GenreSelectionContainer>
    <label for="genre-select">Géneros</label>
    <select v-model="selected" @change="changedData" id="genre-select">
      <option disabled value="">Seleccione un género</option>
      <option v-for="genre in genres" :value="genre">
        {{ genre }}
      </option>
    </select>
  </GenreSelectionContainer>
</template>
