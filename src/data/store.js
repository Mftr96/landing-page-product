import { reactive } from 'vue';

const data = {
    //link foto card per il ciclo v-for
    links:['home','i punti di forza','Recensioni','Paperelle','FAQs','Newsletter'],
    
      
};

const myData = reactive(data);

export default myData;