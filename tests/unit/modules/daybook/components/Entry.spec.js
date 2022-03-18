import { shallowMount } from "@vue/test-utils"
import Entry from '@/modules/daybook/components/Entry'
import { journalState } from "../mocks/test-journal-state"
describe('Pruebas en el entry componet',()=>{
    
    const mockRouter={
        push:jest.fn()
    }
    const wrapper=shallowMount(Entry,{
        props:{
            entry:journalState.entries[0]
        },
        global:{
            mocks:{
                $router:mockRouter
            }
        }
    })
  
    test('Debe Hacer el Match con el snapshot',()=>{
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('Debe redireccionar al hacer el click en el entry-container',()=>{
       const entryContainer= wrapper.find('.entry-container')
       entryContainer.trigger('click')
       expect(mockRouter.push).toHaveBeenCalledWith({
           name:'entry',
           params:{
               id:journalState.entries[0].id
           }
       })
    })
    test('pruebas en las propiedades computadas',()=>{
        //wrapper.vm ------>ver las propiedas computadas
        //day:23
        //month:Julio
        //yearDay:'2021,Viernes'
        expect(wrapper.vm.day).toBe(22)
        expect(wrapper.vm.month).toBe('Febrero')
        expect(wrapper.vm.yearDate).toBe('2022, Martes')
    })
})