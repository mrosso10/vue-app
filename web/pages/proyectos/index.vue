<template lang="pug">
  div
    v-btn(@click="get_proyectos")
      | Re-cargar
    .proyectos
      h1 Proyectos ({{count}})
      v-simple-table
        tbody
          tr(v-for="proyecto in proyectos")
            td {{ proyecto.nombre }}
            td
              v-btn(text
                    color="error"
                    @click="borrar(proyecto)")
                v-icon mdi-delete
      v-btn(to="/proyectos/new")
        v-icon(dark) mdi-plus
        | Crear
</template>

<style>
table {
  table-layout: fixed;
}
</style>

<script>
import { create } from 'apisauce'

export default {
  data: () => ({
    proyectos: [],
  }),

  computed: {
    count() {
      return this.proyectos.length
    },
  },
  created() {
    this.get_proyectos()
  },
  methods: {
    get_proyectos() {
      const api = create({
        baseURL: 'https://private-b26ea7-programando.apiary-mock.com',
        headers: { Accept: 'application/json' },
      })

      api.get('/proyectos').then((response) => (this.proyectos = response.data))
    },
    borrar(proyecto) {
      this.$store.commit('proyectos/remove', proyecto)
    },
  },
}
</script>
