import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/proyectos/index.vue'
import API from '@/components/API.js'
import MockAdapter from 'axios-mock-adapter'

Vue.use(Vuetify)

describe('Index', () => {
  it('tiene un hook creado', () => {
    expect(typeof Index.created).toBe('function')
  })
  it('mock adapter', (done) => {
    const mock = new MockAdapter(API.axiosInstance)
    mock.onGet('/proyectos').reply(200, [{ nombre: 'prueba' }])
    const wrapper = shallowMount(Index)
    setTimeout(() => {
      try {
        expect(wrapper.vm.count).toBe(1)
        done()
      } catch (error) {
        done(error)
      }
    }, 0)
  })
})
