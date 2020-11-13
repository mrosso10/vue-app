export const state = () => ({
  all: [],
})

export const mutations = {
  // TODO: borrar esto
  add(state, proyecto) {
    state.all.push(proyecto)
  },
  remove(state, proyecto) {
    state.all.splice(state.all.indexOf(proyecto), 1)
  },
}
