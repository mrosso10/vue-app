// Importar Vue y el componente que se está probando.
import Vue from 'vue'
import moxios from 'moxios'
import Index from '@/pages/proyectos/index.vue'

// Aquí hay algunas pruebas de Jasmine 2.0, aunque puede
// usar cualquier librería que prefiera
describe('Index', () => {
  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })
  // Inspeccionar las opciones de componentes en bruto
  // it('tiene un hook creado', () => {
  //   expect(typeof Index.created).toBe('function')
  // })

  // // Evaluar los resultados de las funciones en
  // // las opciones de componentes en bruto
  // it('establece los datos correctos por defecto', () => {
  //   expect(typeof Index.data).toBe('function')
  //   const defaultData = Index.data()
  //   expect(defaultData.loading).toBeTruthy()
  //   expect(defaultData.proyectos.length).toBe(0)
  // })

  // // // Inspeccionar la instancia del componente en el montaje
  // it('establece correctamente el mensaje cuando se crea', () => {
  //   const vm = new Vue(Index).$mount()
  //   expect(vm.count).toBe(0)
  // })
  it('establece correctamente el mensaje cuando se crea', (done) => {
    moxios.stubRequest('/proyectos', {
      status: 200,
      response: [{ nombre: 'proy' }],
    })
    console.log('stubbed')
    const vm = new Vue(Index).$mount()
    moxios.wait(function () {
      expect(vm.count).toBe(2)
      done()
    })
  })

  // // Montar una instancia e inspeccionar la salida del render
  // it('emite el mensaje correcto', () => {
  //   const Constructor = Vue.extend(Index)
  //   const vm = new Constructor().$mount()
  //   expect(vm.$el.textContent).toBe('Chau!')
  // })
})
