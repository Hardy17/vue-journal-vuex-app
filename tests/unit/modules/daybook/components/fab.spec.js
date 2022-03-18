import { shallowMount } from "@vue/test-utils"
import Fab from '@/modules/daybook/components/Fab';


describe('pruebas unitarias sobre el boton de save',()=>{

    test('debe de tener el icono por defecto fa-fa-plus',()=>{
        const wrapper = shallowMount(Fab)
        const iTag = wrapper.find('i')
        expect(iTag.classes('fa-plus')).toBeTruthy()
    })

    test('debe de tener el icono por defecto fa-fa-circle',()=>{
        const wrapper = shallowMount(Fab,{
            props:{
                icon:'fa-circle'
            }
        })
        const iTag = wrapper.find('i')
        expect(iTag.classes('fa-circle')).toBeTruthy()
    })

    test('debe emitir el evento on:click cuando se hace click',()=>{

        const wrapper = shallowMount(Fab)
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('on:click')
    })
})