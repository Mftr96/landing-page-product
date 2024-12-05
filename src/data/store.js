import { reactive } from 'vue';

const data = {
    //link foto card per il ciclo v-for
    links: ['Home', 'I punti di forza', 'Recensioni', 'Paperelle', 'FAQs', 'Newsletter'],
    upDescriptionParagraphs: [
        {
            title: 'Lunga durata della batteria ',
            p: 'Goditi ore di assistenza continua nella risoluzione dei bug grazie alla lunga durata della  \"batteria\"  (ovvero, la tua pazienza) della paperella di gomma.', 
        },
        {
            title: 'Compatibilità Universale ',
            p: 'Funziona con tutti i linguaggi di programmazione e sistemi operativi, la paperella di gomma è l\'unico strumento didebugging che non necessita di aggiornamenti.', 
        },
        {
            title: 'Design Elegante ',
            p: 'Mostra con orgoglio il design elegante e raffinato della tua paperella di gomma, disponibile in vari colori per abbinarsi altuo stile di programmatore.', 
        },
    ],
    downDescriptionParagraphs:[
        {
            title: 'Resistenza agli Spruzzi ',
            p: 'Perfetta per resistere ai piccoli incidenti con caffè e bevande, la tua paperella di gomma non teme schizzi, mantenendoti sempre pronto per il debugging.', 
        },
        {
            title: 'Portabilità ',
            p: 'Leggera e facile da trasportare, la paperella di gomma può essere il tuo compagno di lavoro ovunque tu vada. Portala con te per un supporto costante.', 
        },
        {
            title: 'Promemoria Anti-Stress ',
            p: 'Quando Io stress del codice diventa troppo, spremi la tua paperella di gomma per un rapido sollievo anti-stress, senza bisogno di software complicati.', 
        },
    ]



};

const myData = reactive(data);

export default myData;