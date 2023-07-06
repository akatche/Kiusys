<script>
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
      selected: [],
    };
  },
}
</script>

<template>
  <select :value="selected" @change="$emit('input', $event.target.value)" multiple>
    <option disabled value="">Seleccione un género</option>
    <option v-for="genre in genres" v-bind:value="genre">
      {{ genre }}
    </option>
  </select>
</template>
