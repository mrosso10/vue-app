import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import { mount, createLocalVue } from '@vue/test-utils'
import New from '@/pages/proyectos/new.vue'

// import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

// shallowMount(Component, {
//   localVue,
//   router
// })

Vue.use(Vuetify)
Vue.use(VueRouter)

describe('New', () => {
  // it('mock adapter', () => {
  //   const wrapper = mount(New)
  //   expect(wrapper.vm.items.length).toBe(2)
  // })
  it('mock adapter', async () => {
    const wrapper = mount(New, {
      localVue,
      router,
    })
    // const botones = wrapper.findAll('button').at(0)
    // const submit = wrapper.findComponent({ ref: 'submita' })
    await wrapper.findComponent({ ref: 'submit' }).trigger('click')
    await wrapper.findComponent({ ref: 'clear' }).trigger('click')
    // done()
    // setTimeout(() => {
    //   try {
    //     // expect(botones).toHaveLength(2)
    //     done()
    //   } catch (error) {
    //     done(error)
    //   }
    // }, 2000)
  })
})
