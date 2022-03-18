import cloudinary from 'cloudinary';
import uploadImage from '@/modules/daybook/helpers/uploadImage';
import axios from 'axios';

cloudinary.config({
    cloud_name:'drol4t61r',
    api_key:'765461475365694',
    api_secret:'dY-gZDKxfNilU1_bplnAjn5T5vI'
})

describe('pruebas sobre el helper de uploadImage',()=>{

    test('debe cargar un archivo y debe retornar el url',async(done)=>{

        const {data}=await axios.get('https://res.cloudinary.com/drol4t61r/image/upload/v1645541616/rxuhpypxg840z5wpxhua.jpg',{
            responseType:'arraybuffer'
        })

        const file = new File([data],'foto.jpg')
        
        const url = await uploadImage(file)

        expect(typeof url).toBe('string')

        //tomar Id
        const segments= url.split('/')
        const imageId = segments[segments.length-1].replace('.jpg','')
        cloudinary.v2.api.delete_resources(imageId,{},()=>{
            done()
        })
    })
})