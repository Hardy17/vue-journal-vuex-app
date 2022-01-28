

//creamos en formato de funcion para  que el state sea reactivo
export default ()=>({
    isLoading:true,
    entries:[
    {
        id:new Date().getTime(),
        date: new Date().toDateString(),
        text: 'Consequat non tempor id aliqua consequat aliquip. Ullamco id aute quis deserunt enim commodo. Lorem ut tempor non ipsum ad mollit exercitation dolore enim labore duis sit esse culpa. Nostrud ut qui nisi id veniam mollit et sint nisi. Voluptate ipsum ea dolor ad.',
        pricture:null
    },
    {
        id:new Date().getTime()+1000,
        date: new Date().toDateString(),
        text:'Et ullamco esse dolor officia pariatur nisi et laboris non reprehenderit in id. Non nisi irure ut cillum exercitation ea incididunt commodo consectetur. Ut commodo cillum adipisicing dolor qui. Deserunt dolor ullamco anim sint culpa anim aliquip cupidatat. Officia dolor laboris amet eiusmod excepteur culpa aliqua qui quis proident. Consequat dolore minim consectetur laboris commodo fugiat. Et reprehenderit ex voluptate Lorem cillum velit esse ut est voluptate dolor officia.',
        pricture:null
    },
    {
        id:new Date().getTime()+2000,
        date: new Date().toDateString(),
        text:'Eiusmod laboris ut mollit non aute irure elit amet officia aliqua. Dolor duis dolor labore laborum. Eu anim cupidatat ullamco occaecat mollit aliqua nulla officia deserunt quis. Elit ad tempor cupidatat reprehenderit qui exercitation dolore consectetur. Fugiat nisi adipisicing consequat reprehenderit occaecat cupidatat est aliquip. Elit dolor ut esse velit reprehenderit consequat nisi sit ut irure. Magna et exercitation nostrud sunt ad dolore amet in eiusmod dolore.',
        pricture:null
    },
 ]
})