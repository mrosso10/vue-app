// Importar Vue y el componente que se está probando.
// import { Index } from '@/pages/proyectos/index.vue'
// import { Index } from '@/pages/proyectos/index.vue'

import Vue from 'vue'
import Vuetify from 'vuetify'

import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/proyectos/index.vue'
import API from '@/components/API.js'
// import api from '@/pages/proyectos/index.vue'
import MockAdapter from 'axios-mock-adapter'

Vue.use(Vuetify)
// import API from '@/components/API.js'

// Aquí hay algunas pruebas de Jasmine 2.0, aunque puede
// usar cualquier librería que prefiera

// jest.mock('axios', () => ({
//   get: () => Promise.resolve({ data: [{ val: 1 }] }),
// }))
// jest.mock('API', () => ({
//   get: () => Promise.resolve({ data: [{ val: 1 }] }),
// }))
describe('Index', () => {
  it('tiene un hook creado', () => {
    expect(typeof Index.created).toBe('function')
  })
  // it('tiene un hook creado', () => {
  //   expect(typeof Index.api).toBe('object')
  // })
  it('mock adapter', (done) => {
    // it('mock adapter', () => {
    // console.log(Index)
    // debugger
    // const response = await api.getRate()

    // const api = wrapper.vm.api()
    const mock = new MockAdapter(API.axiosInstance)
    mock.onGet('/proyectos').reply(200, [{ nombre: 'prueba' }])
    const wrapper = shallowMount(Index)
    // jest.mock('api', () => ({
    //   get: () => Promise.resolve({ data: [{ val: 1 }] }),
    // }))
    // console.log(Index.api.axiosInstance)
    // console.log(wrapper.vm.api().axiosInstance)
    // const vm = new Vue(Index).$mount()
    // debugger
    // wrapper.vm.get_proyectos_do()
    setTimeout(() => {
      try {
        expect(wrapper.vm.count).toBe(1)
        done()
      } catch (error) {
        done(error)
      }
    }, 0)
    // wrapper.vm.$nextTick(() => {
    // await Vue.nextTick()
    // wrapper.vm.$nextTick(() => {
    // try {
    //   expect(wrapper.vm.count).toBe(1)
    //   done()
    // } catch (error) {
    //   done(error)
    // }
    // })
    // const response2 = await wrapper.vm.count
    // moxios.wait(function () {
    //   expect(vm.count).toBe(2)
    //   done()
    // })

    // expect(response2).toBe(0)
    // expect(response.status).toBe(201)
    // expect(response.data).toEqual({ x: 'hello' })
  })
})
