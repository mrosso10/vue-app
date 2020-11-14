<template lang="pug">
  div
    center(v-if="loading")
      | Cargando...
    div(v-else)
      //- v-btn(@click="get_proyectos")
      //-   | Re-cargar
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
                  //- v-icon mdi-delete
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
import API from '@/components/API.js'
// import apisauce from 'apisauce'

// const api = API.create()
// const api = apisauce.create({
//   baseURL: 'https://private-b26ea7-programando.apiary-mock.com',
//   headers: { Accept: 'application/json' },
// })

export default {
  // api,
  data: () => ({
    loading: false,
    proyectos: [],
  }),
  computed: {
    count() {
      return this.proyectos.length
    },
  },
  created() {
    // this.get_proyectos()
    // const baseURL = 'https://private-b26ea7-programando.apiary-mock.com'

    // const response = await this.api().get('/proyectos')
    API.getProyectos().then((response) => {
      this.proyectos = response.data
    })
  },
  methods: {
    // api() {
    //   return api
    // },
    // get_proyectos() {
    //   this.loading = true
    //   this.get_proyectos_do()
    // },
    // set_proyectos(proyectos) {
    //   this.proyectos = proyectos
    //   this.loading = false
    // },
    // get_proyectos_do() {
    //   api.getProyectos().then((response) => {
    //     this.set_proyectos(response.data)
    //   })
    // },
    // borrar(proyecto) {
    //   this.$store.commit('proyectos/remove', proyecto)
    // },
  },
}
</script>
