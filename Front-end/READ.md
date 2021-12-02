# Front-End: Applicazione React js
  | Versione | Descrizione   | Redattore      |
  | -------- | ------------- | -------------- |
  | 1.0      | Prima release | Andrea Cinelli |
  ## Introduzione
  Questa applicazione React js ha lo scopo di visualizzare due grafici, un istogramma e un grafico a torta, utilizzando i dati contenuti in un file json a cui vengono 
  effetuate le richieste di Rest.
  Prima di passare al download dei file che compongono il progetto è necessario creare la directory che conterrà i file.
   ### Creazione app React js
   Per creare un'applicazione React js bisogna prima scegliere la directory in cui scaricare i file.
   Dopo aver scelto la directory inserire il comando **npx create-react-app *nome app***, successivamente spostarsi in quella directory tramite il comando **cd *nome app***.
   Infine è necessario eliminare i file presenti nella directory *src* per fare spazio a quelli che verranno scaricati attraverso il repository GitHub.
  ## Scaricare e avviare il progetto
  Per scaricare il front-end dell'applicazione react bisogna accedere al repository GitHub: [training-2022](https://github.com/prometeia-public/training-2022.git).
  Nella directory dell'applicazione creata in precedenza sarà già presente un file  *package.json* sostituire questo file con quello presente nel repository.
  Una volta scaricati i file presenti nella directory *src* dal repository, copiare i file dell'omonima directory *src* precedentemente svuotata presente nell'applicazione.
   ### Installazione Recharts 
   Per poter modificare il codice dell'applicazione sarà necessario installare la libreria *Recharts* tramite il comando bash ***npm install recharts***, non è necessario che 
   la directory sia la stessa in cui è presente l'applicazione, ma bisogna che la directory si trovi comunque nel percorso per arrivare all'applicazione.
   ### Installazione Mock Rest API
   Per far sì che il programma funzioni, è necessario installare localmente un back-end server json per eseguire le richieste di Rest.
   Per installare il json server eseguire il comando bash ***npm i json-server*** nella directory in cui è contenuta l'app React js.
   ### Avvio del server
   Per avviare il server eseguire il comando bash ***npm run server*** rimanendo nella directory in cui è stato installato il server. se in precedenza non era ancora stato
   inserito nella directory il file *db.json* del repository GitHub, ne verrà creato uno nuovo dal comando appena inserito. Sostituire il file con quello con lo stesso nome 
   presente nel repository.
   ### Avvio app
   Adesso è sufficiente eseguire il comando ***npm start*** per eseguire l'applicazione.
  ## Modificare il punto di caricamento del file json
  Attraverso l'utilizzo immacolato dei file scaricati, il server verrà avviato attraverso la porta *5000*. Se si desidera cambiare questa impostazione è necessario apportare 
  delle semplici modifiche al file *package.json* e al file *App.js* (quest'ultimo si trova nella directory *src* all'interno della nostra applicazione).
   ### Modifiche package.json
   Visualizzare il file *packaje.json* e posizionarsi alla riga **21**. Qui sarà visibile del codice che recita ***"server": "json-server --watch db.json --port 5000"***, a
   questo punto è sufficiente modificare il numero di porta su cui viene caricato il server, ovvero *5000*, con il numero di porta desiderato.
   ### Modifiche App.js
   Per concludere bisogna inserire lo stesso numero di porta con quello utilizzato nel file *package.json*. Aprire il file *App.js* e posizionarsi a riga **8**.
   Questa riga reciterà ***const res = await fetch('http://localhost:5000/data')***, sarà sufficiente modificare il vecchio numero di porta con quello nuovo precedentemente
   scritto nel file *package.json*.
  ## Conclusione
  Una volta apportate le modifiche sarà necessario avviare nuovamente il server come riportato nel passo **Avvio del server** precedentemente affrontato in questo documento
  ed è perciò necessario riavviare anche l'applicazione come spiegato in **Avvio app**. Per controllare che le operazione siano avvenute con successo, scrivere nella barra di
  ricerca del browser **http://localhost: *numero_porta* /data**, in questo modo sarà possibile controllare che i dati del file *db.json* siano stati caricati sul server.
