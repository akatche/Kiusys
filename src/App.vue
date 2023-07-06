<template>
  <MainApp id="app">
    <ShowList />
  </MainApp>
</template>

<script>
import ShowList from "@/components/ShowList/Index.vue";
import MainApp from "@/App.styles";
export default {
  name: "App",
  components: {
    ShowList,
    MainApp
  },
};
</script>
