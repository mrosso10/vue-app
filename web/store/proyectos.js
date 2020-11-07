export const state = () => ({
  all: [
    {
      nombre: 'Proyecto 1',
    },
    {
      nombre: 'Proyecto 2',
    },
  ],
})

export const mutations = {
  add(state, proyecto) {
    state.all.push(proyecto)
  },
}
