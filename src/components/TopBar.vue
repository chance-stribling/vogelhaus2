<!-- eslint-disable vue/valid-v-for -->
<template>
  <v-app-bar color="#2f4a66" class="text-white" density="compact">
    <v-app-bar-title>Update Manager</v-app-bar-title>
    <template v-slot:prepend>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      class="text-black"
      temporary
      
    >
      <v-list
        :items="items"
      ></v-list>
    </v-navigation-drawer>
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
    drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
