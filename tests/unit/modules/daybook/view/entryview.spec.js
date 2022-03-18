import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import EntryView from "@/modules/daybook/views/EntryView"
import Swal from "sweetalert2"
import journalModule from "@/modules/daybook/store/journal"
import { journalState } from "../mocks/test-journal-state"


const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journalModule: {
        ...journalModule,
        state: { ...initialState }
      }
    }
  })

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
  showLoading: jest.fn(),
  close: jest.fn()
}))
describe("pruebas sobre el entryview", () => {
  const store = createVuexStore(journalState)
  store.dispatch=jest.fn()
  const mockRouter = {
    push: jest.fn()
  }
  let wrapper
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallowMount(EntryView, {
      props: {
        id: journalState.entries[0].id
      },
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [store]
      }
    })
  })
  test("debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test("debe sacar al usuario porque el id no existe", () => {
    const wrapper = shallowMount(EntryView, {
      props: {
        id: "Este ID no existe"
      },
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [store]
      }
    })
    
    expect(mockRouter.push).toHaveBeenCalledWith({ name: "no-entry" })
  })
  test("debe mostrar la entrada correctamente", () => {
    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  test("debe de borrar la entrada  y salir", (done) => {
    Swal.fire.mockReturnValueOnce(Promise.resolve({ isConfirmed: true }))

    wrapper.find(".btn-danger").trigger("click");

    expect(Swal.fire).toHaveBeenCalledWith({
      title: "¿Estas seguro?",
      text: "Una vez borrado, no se puede recuperar!!",
      showDenyButton: true,
      confirmButtonText: "Si, estoy seguro"
    })

    setTimeout(() => {
        expect(store.dispatch).toHaveBeenCalledWith('journalModule/deleteEntry', '-MwWv5wWZYBwjzGyFUZ0')
        expect(mockRouter.push).toHaveBeenCalled()
        done()
    }, 1)
  })
})
