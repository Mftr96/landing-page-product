import { reactive } from 'vue';

const data = {
    //link foto card per il ciclo v-for
    offcanvasLinks: ['Home', 'I punti di forza', 'Recensioni', 'Paperelle', 'FAQs', 'Newsletter'],
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
    downDescriptionParagraphs: [
        {
            title: `Resistenza agli Spruzzi (d'acqua) `,
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
    ],
    faqs: [
        {
            question: 'Come posso utilizzare la paperella di gomma per il debugging?',
            answer: 'Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri.'
        },
        {
            question: 'Quali sono i vantaggi di usare una paperella di gomma per i programmatori?',
            answer: 'La paperella di gomma aiuta i programmatori a pensare in modo critico e a verbalizzare i problemi. Questo processo può portare a nuove intuizioni e soluzioni. Inoltre, è un ottimo strumento antistress e aggiunge un tocco di personalità alla scrivania.'
        },
        {
            question: 'Posso usare la paperella di gomma indipendentemente dal linguaggio di programmazione che utilizzo?',
            answer: 'Assolutamente sì! La paperella di gomma è universale e funziona con qualsiasi linguaggio di programmazione. Non importa se stai scrivendo in Python, Java, C++ o qualsiasi altro linguaggio, la paperella sarà sempre pronta ad ascoltarti.'
        },
        {
            question: 'Quanto dettagliatamente devo spiegare il mio codice alla paperella di gomma?',
            answer: 'Quanto dettagliatamente devo spiegare il mio codice alla paperella di gomma?'
        },

    ],
    faqsDescriptions:[
       {icon:'balloon', 
        h : "100% Prodotto Di Qualità",
        p:"Abbiamo anche la possibilità di ritiro direttamente dallo stagno"
       },
       {icon:'bag-heart',
         h : "Spedizione Gratuita",
        p:"Dal magazzino alla scrivania"
       },
       { 
        icon:'wishlist',
        h : "Rimborso Garantito",
        p:"Ti rimborsiamo se la paperella fa quack"
       },
    ],
    testimonials: [
        {
            review: `La paperella di gomma è diventata il mio strumento di debugging preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. È anche un ottimo antistress nelle giornate difficili!`,
            starCount: 5,
            author: 'David William',
            date_review: 'Feb 22, 2023',
        },
        {
            review: `Non avrei mai immaginato quanto una semplice paperella di gomma potesse fare la differenza. È incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non notavo. Inoltre, è carinissima sulla mia scrivania!`,
            starCount: 4,
            author: 'Emma Turner',
            date_review: 'April 5, 2023',
        },
        {
            review: `Da quando ho adottato la paperella di gomma, il mio processo di debugging è migliorato notevolmente. La trovo molto utile per schiarirmi le idee e trovare errori nascosti. La porto sempre con me, ovunque vada!`,
            starCount: 5,
            author: 'Rachel Bryan ',
            date_review: 'April 18, 2023',
        },
        {
            review: `La mia paperella di gomma è il miglior collega che potessi chiedere. Sempre pronta ad ascoltare, mai giudicante. È sorprendente come qualcosa di così semplice possa essere così efficace nel risolvere problemi complessi. E non dimentichiamo che è anche adorabile!`,
            starCount: 4,
            author: 'Park C ',
            date_review: 'May 22, 2023',
        },
    ],
    icons: [
        "cart"
        , "wishlist"
        , "balloon"
        , "bag-heart"
        , "handiplast"
        , "send",
    ],
    socials: ['facebook',
        'twitter',
        'youtube',
        'linkedin',
        'instagram'],
    photos: [
        {
            path: "product-item1.png",
            title: 'Cool-duck',
            price: 15
        },
        {
            path: "product-item2.png",
            title: 'Classic-duck',
            price: 29,
        },
        {
        path: "product-item3.png",
        title: 'Bat-duck',
        price: 69,
        },
    ],

};

const myData = reactive(data);

export default myData;