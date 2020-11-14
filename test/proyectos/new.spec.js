import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import New from '@/pages/proyectos/new.vue'

Vue.use(Vuetify)

describe('New', () => {
  it('mock adapter', (done) => {
    const wrapper = shallowMount(New)
    setTimeout(() => {
      try {
        expect(wrapper.vm.items.length).toBe(2)
        done()
      } catch (error) {
        done(error)
      }
    }, 0)
  })
})
