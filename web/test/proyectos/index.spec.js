// Importar Vue y el componente que se está probando.
import Vue from 'vue'
import Index from '@/pages/proyectos/index.vue'
import MockAdapter from 'axios-mock-adapter'

// Aquí hay algunas pruebas de Jasmine 2.0, aunque puede
// usar cualquier librería que prefiera
describe('Index', () => {

  test('mock adapter', async () => {
    const api = API.create()
    const mock = new MockAdapter(api.axiosInstance)
    mock.onGet('/rate_limit').reply(201, {
      x: 'hello'
    })
    const response = await api.getRate()
    expect(response.ok).toBe(true)
    expect(response.status).toBe(201)
    expect(response.data).toEqual({ x: 'hello' })
  })
})
