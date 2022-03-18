import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import EntryList from '@/modules/daybook/components/EntryList.vue'

//import {getEntriesByTerm} from '@/modules/daybook/store/journal/getters'
import journalModule from "@/modules/daybook/store/journal"
import {journalState} from '../mocks/test-journal-state'

const createVuexStore = (initialState) =>
createStore({
    modules: {
    journalModule: {
        ...journalModule,
        state: { ...initialState },
    },
    },
});


describe('Pruebas en el EntryList',()=>{
    
    /* Primera Forma de realizar el store 
    
    const journalMockModule ={
        namespaced:true,
        getters:{
            //getEntriesByTerm: jest.fn()//primera forma de llamar  a las funciones
            getEntriesByTerm// Segunda Manera de hacerlo es llamando fisicamente a la funcion a traves del path
        },
        state:()=>({
            isLoading:false,
            entries:journalState.entries
        })
    }
   
    const store = createStore({
        modules:{
            journalModule:{...journalMockModule}
        }
    })*/

    /**Segunda Manera de hacer Mock al store **/
    const store= createVuexStore(journalState)
    const mockRouter={
        push:jest.fn()
    }    
    let wrapper 
    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallowMount(EntryList,{
            global:{
                mocks:{
                    $router:mockRouter
                },
                plugins:[store]
            }
        })
    })
    test('debe de llamar  el getEntriesByTerm sin termino y mostrar 2 entradas',()=>{
       expect(wrapper.findAll('entry-stub').length).toBe(2)
       expect(wrapper.html()).toMatchSnapshot()
    })
    test('debe llamar el getEntriesByTerm y filrar las entradas',async()=>{
        const input = wrapper.find('input')
        await input.setValue('aprender')
        expect(wrapper.findAll('entry-stub').length).toBe(1)
    })
    
    test('El bonton de nuevo debe redireccionar a /new',()=>{
        wrapper.find('button').trigger('click')
        expect(mockRouter.push).toHaveBeenCalledWith({name:'entry',params:{id:'new'}})
    })
})