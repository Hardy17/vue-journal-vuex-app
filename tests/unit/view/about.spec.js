
import {shallowMount} from '@vue/test-utils';
import About from '@/views/About.vue';


describe('Pruebas en el About.view', () => {
    test('hace match con el snapshot', () => {
      const wrapper = shallowMount(About)
      expect(wrapper.html()).toMatchSnapshot()
    })

  })
  