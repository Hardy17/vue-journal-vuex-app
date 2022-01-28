export default{

    name:'daybook',
    component:()=>import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children:[
        {
            path:'',
            name:'no-entry',
            component:()=>import(/* webpackChunkName: "noEntrySelected" */ '@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path:':id',
            name:'entry',
            component:()=>import(/* webpackChunkName: "noEntrySelected" */ '@/modules/daybook/views/EntryView.vue')
        }
    ]

}