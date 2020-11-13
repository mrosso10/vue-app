<template lang="pug">
  div
    center(v-if="loading")
      | Cargando...
    div(v-else)
      v-btn(@click="get_proyectos")
        | Re-cargar
      .proyectos
        h1 Proyectos ({{proyectos.length}})
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
// import { create } from 'apisauce'
import { API } from '@/components/API.js'

export default {
  data: () => ({
    loading: true,
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
      this.loading = true
      this.get_proyectos_do()
    },
    set_proyectos(proyectos) {
      this.proyectos = proyectos
      this.loading = false
    },
    get_proyectos_do() {
      API.getProyectos().then((response) => {
        this.set_proyectos(response.data)
      })
    },
    // borrar(proyecto) {
    //   this.$store.commit('proyectos/remove', proyecto)
    // },
  },
}
</script>
