<template lang="pug">
  .proyectos
    h1 Proyectos
    div(v-for="proyecto in proyectos")
      h2 {{ proyecto.nombre }}
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
  },
}
</script>
