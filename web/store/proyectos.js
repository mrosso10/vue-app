export const state = () => ({
  all: [],
})

export const mutations = {
  add(state, proyecto) {
    state.all.push(proyecto)
  },
  remove(state, proyecto) {
    state.all.splice(state.all.indexOf(proyecto), 1)
  },
}
