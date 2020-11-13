import apisauce from 'apisauce'

const create = (baseURL = 'https://private-b26ea7-programando.apiary-mock.com') => {
  const api = apisauce.create({
    baseURL: baseURL,
    headers: { Accept: 'application/json' },
  })
  const getProyectos = () => api.get('/proyectos')

  return {
    getProyectos,
    axiosInstance: api.axiosInstance
  }
}

// let's return back our create method as the default.
export default {
  create
}
