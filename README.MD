# TITLE: landing-page-product
questo esercizio fa parte delle esercitazioni del coding training organizzate da Boolean nel post-corso di full stack web developer.
Nella consegna di questa settimana è prevista la realizzazione di una landing page.

## Indice
1. [considerazioni_pre-progetto](#considerazioni-pre-progetto)
2. [consegna](#consegna)
3. [milestone](#milestone)

## Considerazioni pre-progetto
qui ci sono le mie considerazioni personali sul come voglio pianificare il lavoro su questo progetto in data 03/12/2024.
Come tecnologia di sviluppo penso di utilizzare vite per l'impalcatura del progetto e utilizzare vue.js per la gestione del front end.
Scelgo vue.js perchè è il framework che ho studiato durante il percorso di Boolean, al momento preferisco concentrarmi su questo framework per vederne effettivamente le potenzialità e dove riesco ad arrivare.
Sebbene la pagina sia realizzabile anche senza un' impalcatura, con Vite mi permette di separare le singole sezioni della pagina permettendomi un approccio di lavoro più gestibile soprattutto dovendoci lavorare individualmente.
Le librerie che ho preso in considerazione per questo progetto sono: Bootstrap, Fontawesome e Google fonts. 
Sto valutando se iniziare ad usare Vuetify per vedere se può semplificare di molto la costruzione di un sito.
Per i Bonus tengo in considerazione swiper per eventuale carosello.
Considerando l'utilizzo di Vue.js, vado quindi a definire i componenti per la pagina:
- AppHeader
- AppJumbotron
- AppDescription
- AppAbout
- AppFaq
- AppFooter

## Consegna
<aside>
nome repo: landing-page-product

Vogliamo creare una *landing page* del nostro prodotto preferito 👩🏻‍💻.
Una Landing Page (o pagina di atterraggio) di un prodotto è una pagina web specificamente progettata per promuovere un prodotto o un servizio e convertire i visitatori in clienti. Questa pagina è spesso utilizzata come punto di arrivo per campagne di marketing online, come annunci pubblicitari, email marketing, social media e altri canali di marketing digitale.

🎯 **Obiettivo**

Segui le indicazioni del *designer* per riprodurre il layout del prototipo che ti è stato fornito (`prototype.pdf`). Il prototipo è un file pdf ad alta risoluzione quindi potete fare zoom e leggere i dettagli. Ci sono le indicazioni da sinistra verso destra su come realizzare la versione mobile e desktop della stessa pagina unica (Landing Page), trovate la sequenza di quello che deve essere mostrato a schermo come se stesse navigando con il dito o con il mouse dall’alto verso il basso. Ci sono inoltre le indicazioni per i colori e la tipografia.

Nella stessa cartella ci sono anche le icone (SVG) e due gruppi di testi (Recensioni e FAQs), il resto va estrapolato dal prototipo, così come la disposizione delle icone e le funzionalità avanzate come il menu su mobile e lo slider delle recensioni

</aside>

## Reference

- [Google Fonts](https://fonts.google.com/)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [Netilify](https://www.netlify.com/) oppure [GitHub Pages](https://pages.github.com/) (per l’hosting del vostro sito statico)
- [Swiper](https://swiperjs.com/) (Bonus: per uno slider)
- [Mailchimp](https://mailchimp.com/) oppure [Netlify Forms](https://www.netlify.com/platform/core/forms/) (Bonus: per una form di messaggi)

### Milestone

1️⃣ **Milestone 1 (Struttura HTML & CSS)**

Inizia individuando le macroaree del layout e identificando le aree simili per poter riutilizzare il codice, garantendo una struttura HTML semplice e semantica. Passa poi al CSS, riproducendo fedelmente il layout assegnato per posizionare gli elementi affiancati. Crea classi riutilizzabili per mantenere il codice ordinato e ridurre la duplicazione. Infine, assicurati che il codice CSS sia pulito e facile da mantenere per facilitare eventuali aggiornamenti futuri.

2️⃣ **Milestone 2 (Contenuto)**

Una volta realizzata la base, passa all'inserimento del contenuto seguendo fedelmente le istruzioni del `prototype.pdf`

3️⃣ **Milestone 3 (Interattività)**

Aggiungi interattività alla pagina utilizzando JavaScript. In particolare, implementa la funzionalità di apertura e chiusura del menù mobile, la sezione FAQs e lo slider delle recensioni (se vuoi, prova ad usare la libreria **Swiper** per creare uno slider con le recensioni del prodotto).

🌟 **Bonus (Email)**

Lo scopo principale di una landing page è quello di catturare i contatti dei visitatori, quindi nel nostro caso bisognerebbe far funzionare il form di iscrizione alla newsletter, provaci.

Buon kata! 🥷
