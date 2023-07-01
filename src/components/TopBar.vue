<template>
  <v-app-bar color="orange" density="compact">
    <v-app-bar-title>Vogelhaus</v-app-bar-title>

    <template v-slot:append>
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-dots-vertical"></v-btn>
        </template>

        <v-list>
          <v-list-item :to="item.path" :title="item.title" v-for="item in items"> </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    items: [{ title: 'logout', path: '/' }]
  })
}
</script>
