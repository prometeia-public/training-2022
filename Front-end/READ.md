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
   ### File Frontend applicazione
   Una volta scaricati i file presenti nella directory *src* dal repository, copiare i file dell'omonima directory *src* precedentemente svuotata presente nell'applicazione.
   ### Backend applicazione
   Scaricare il dile *data.json* ed inserirlo nella directory *public* presente nella directory dell'app React. 
   ### Installazione Recharts 
   Per poter modificare il codice dell'applicazione sarà necessario installare la libreria *Recharts* tramite il comando bash ***npm install recharts***, non è necessario che 
   la directory sia la stessa in cui è presente l'applicazione, ma bisogna che la directory si trovi comunque nel percorso per arrivare all'applicazione.
   ### Avvio app
   Adesso è sufficiente eseguire il comando ***npm start*** per eseguire l'applicazione.
   
  ## Conclusione
  Una volta apportate le modifiche sarà necessario riavviare l'applicazione seguendo le istruzioni spiegate nel paragrafo **Avvio app**. Per controllare che le operazione siano 
  avvenute con successo, scrivere nella barra di ricerca del browser **http://localhost:*numero_porta*/data.json**, in questo modo sarà possibile controllare che i dati del 
  file *db.json* siano stati caricati sul server.
  Una volta che l'app sarà stata avviata, verrà aperta una nuova scheda nel browser in cui si potranno vedere subito i risultati. **Ora non rimane altro da fare che caricare 
  l'applicazione in un Docker container**. 
