
import daybookIndex from '@/modules/daybook/router';

describe('Pruebas sobre el router de mi daybook',()=>{

    test('El router debe tener esta configuracion', async()=>{
        expect(daybookIndex).toMatchObject({
            name:'daybook',
            component:expect.any(Function),
            children:[
                {
                    path:'',
                    name:'no-entry',
                    component:expect.any(Function)
                },
                {
                    path:':id',
                    name:'entry',
                    component:expect.any(Function),
                    props:expect.any(Function)
                }
            ]
        })
        const promiseRoutes=[]
        daybookIndex.children.forEach(child => promiseRoutes.push(child.component()))

        const routeName = (await Promise.all(promiseRoutes)).map(element=>element.default.name)
        
        expect(routeName).toContain('EntryView')
        expect(routeName).toContain('NoEntrySelected')

    })
    
    test('debe de retornar el id de la ruta',()=>{
        const route={
            params:{
                id:'ABC-123'
            }
        }
        //console.log(daybookIndex.children[1].props(route));
        const entryRoute=daybookIndex.children.find(route=>route.name=='entry')
        expect(entryRoute.props(route)).toEqual({id:'ABC-123'})
    })
   
})