import { createStore } from 'vuex'
import journalModule from "@/modules/daybook/store/journal"
import { journalState } from "../../mocks/test-journal-state"
const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journalModule: {
        ...journalModule,
        state: { ...initialState },
      },
    },
  });

describe("Vuex -Pruebas en el journal Module", () => {
  test("este es el estado inicial, debe tener este state ", () => {
    const store = createVuexStore(journalState)
    const { isLoading, entries } = store.state.journalModule
    expect(isLoading).toBeFalsy();
    expect(entries).toEqual(journalState.entries)
  });

  /*Mutations */
  test("set entries", () => {
    const store = createVuexStore({ isLoading: true, entries: [] })
    store.commit("journalModule/setEntries", journalState.entries)
    expect(store.state.journalModule.entries.length).toBe(2)
    expect(store.state.journalModule.isLoading).toBeFalsy()
  });

  test("update entries", () => {
    //create store con entries
    const store = createVuexStore(journalState);
    //updateEntry copiar una de las entradas
    const updatedEntry = {
      id: "-MwWv5wWZYBwjzGyFUZ0",
      date: 1645541703386,
      text: "Hola mundo desde pruebas",
    }
    // commit de la mutacion
    store.commit("journalModule/updateEntry", updatedEntry)
    const storeState = store.state.journalModule.entries
    expect(storeState.length).toBe(2);
    expect(storeState.find((e) => e.id === updatedEntry.id)).toEqual(
      updatedEntry
    )
    // entries == tiene que existir el updateEntry toequal
  })

  test("mutation addEntry, deleteEntry", () => {
    /*AddEntries mutation*/
    const store = createVuexStore(journalState)
    store.commit("journalModule/addEntry", {
      id: "ABC-123",
      text: "Hola Mundo",
    })
    const storeState = store.state.journalModule.entries
    expect(storeState.length).toBe(3);
    expect(storeState.find((e) => e.id === "ABC-123")).toBeTruthy()
    /*deleteEntries mutation*/
    store.commit("journalModule/deleteEntry", "ABC-123");
    expect(store.state.journalModule.entries.length).toBe(2)
    expect(
      store.state.journalModule.entries.find((e) => e.id !== "ABC-123")
    ).toBeTruthy()
  })

  /*=====Getters===== */
  test("getters: getEntriesByTerm,getEntryById", () => {
    const store = createVuexStore(journalState);
    const [entry1, entry2] = journalState.entries;
    expect(store.getters["journalModule/getEntriesByTerm"]("").length).toBe(2);
    expect(
      store.getters["journalModule/getEntriesByTerm"]("React").length
    ).toBe(1)
    expect(store.getters["journalModule/getEntriesByTerm"]("React")).toEqual([
      entry2,
    ])

    expect(store.getters["journalModule/getEntryById"](entry1.id)).toEqual(
      entry1
    )
  })

  /*=====Actions===== */
  test("Actions: loadEntries", async () => {
    const store = createVuexStore({ isLoading: true, entries: [] })

    await store.dispatch("journalModule/loadEntries")
    expect(store.state.journalModule.entries.length).toBe(2)

  })
  test("Action: Update entry", async () => {
    const store = createVuexStore(journalState)
    const updatedEntry = {
      id: "-MwWv5wWZYBwjzGyFUZ0",
      date: 1645541703386,
      text: "Hola el proximo paso es aprende Nuxt para vue y serve side redering",
      otroCampo:true,
      otroMas:{a:1}
    };
    await store.dispatch("journalModule/updateEntry",updatedEntry)
    expect(store.state.journalModule.entries.length).toBe(2)
    expect(store.state.journalModule.entries.find(e=>e.id===updatedEntry.id)).toEqual({
      id: "-MwWv5wWZYBwjzGyFUZ0",
      date: 1645541703386,
      text: "Hola el proximo paso es aprende Nuxt para vue y serve side redering"
    })

  })

  test('Action:createEntry and deleteEntry',async()=>{
    
    //CreateStore
    const store = createVuexStore(journalState)
    //newEntry ={date:, text:'Nueva entrada desde las pruebas}
    const newEntry = {
      date: 1645541703386,
      text: "Nueva entrada desde las pruebas",
    };
    //dispatch de la accion createEntry
    const id=await store.dispatch("journalModule/createEntry",newEntry)
    //optener el id  de la nueva entrada
     
    //asegurarse de que sea string
    expect(typeof id).toBe('string')
    //la nueva entrada debe existir en el state journal.entries....
     expect(store.state.journalModule.entries.find((e) => e.id === id)).toBeTruthy()
    //Segunda parte
    //dispatch del delete
    await store.dispatch("journalModule/deleteEntry",id)
    //la nueva entrada no debe de existir en el state.entries
    expect(store.state.journalModule.entries.find((e) => e.id === id)).toBeFalsy()
  })

})
