<template lang="pug">
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

<script>
export default {
  computed: {
    proyectos() {
      return this.$store.state.proyectos.all
    },
    count() {
      return this.$store.state.proyectos.all.length
    },
  },
  methods: {
    borrar(proyecto) {
      this.$store.commit('proyectos/remove', proyecto)
    },
  },
}
</script>
