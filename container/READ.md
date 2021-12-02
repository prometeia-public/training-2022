
# Container Applicazione React js
 ## Introduzione
 Questa guida ti permetterà di creare un container Docker per l'applicazione React js contenuta nella cartella Front-end del repository GitHub.
 
 Per proseguire è necessario avere installato Docker Desktop sulla propria macchina.
 
 È consigliato usare Visual Studio Code per implementare la soluzione indicata nella guida, aggiungendo l'estensione Docker rilasciata da Microsoft.
 
 ## Scaricare e avviare l'applicazione React js
 Per maggiori informazioni sull'installazione dell'applicazione, consultare questa [guida](https://github.com/prometeia-public/training-2022/blob/main/Front-end/READ.md/).
 
 1. Scaricare Node.js sulla propria macchina
 2. Aprire Prompt dei comandi o Powershell (Windows) oppure Terminale (MacOS) nella cartella in cui si desidera salvare il progetto
 3. Digitare il comando *npm install*
 4. Digitare il comando *npx create-react-app (nome cartella)*
 5. Accedere alla cartella src all'interno del progetto
 6. Eliminare i file *App css*, *App.test.js*, *index.css*, *index.js*, *logo.svg*, *setupTests.js*
 7. Caricare all'interno della cartella src il contenuto scaricato dal [repository GitHub](https://github.com/prometeia-public/training-2022.git) nella cartella src dentro Front-end
 8. Inserire il comando *npm install json-server* all'interno della cartella del progetto
 9. Inserire il comando *npm start* all'interno della cartella del progetto
 10. Il progetto avviato dovrebbe comparire sul browser come *localhost:3000*

 ## Creare un'immagine del progetto su Docker Desktop
 Per poter creare un container dell'applicazione React js, è necessario inserire alcuni file all'interno della cartella del progetto per permettere il processo di creazione del container.
 
 Nello specifico dovranno essere inseriti un Dockerfile contenente le istruzioni necessarie a Docker Desktop per processare l'applicazione e un file .dockerignore che permette di aggiornare il progetto senza impiegare il tempo per installare alcuni file già presenti.
 
 Questi file possono essere scaricati dalla repository oppure creati da zero, inserendo poi il seguente codice:
 
 Dockerfile

 ```
 FROM node:17-alpine

 WORKDIR /app

 COPY package.json ./
 COPY package-lock.json ./

 RUN npm install

 COPY . .

 CMD ["npm", "start"]
 ```

 .dockerignore
 ```
 node_modules
 Dockerfile
 .git
 ```

 A questo punto aprendo Prompt dei comandi o Powershell (Windows) oppure Terminale (MacOS), entrando nella cartella contenente il Dockerfile, sarà possibile inserire il      comando *docker build -t (nome immagine) .* per costruire un'immagine Docker dell'applicazione React js

 ## Eseguire il container Docker

 A partire dall'immagine Docker creata, sarà possibile creare ed eseguire un container Docker che potrà essere esportato in altre macchine e sviluppato.

 Una volta disponibile l'immagine dell'applicazione React js, il comando per eseguire il container Docker è *docker run -dp 3000:3000 (nome immagine*.

 Questo comando eseguirà l'applicazione sulla porta 3000, una volta eseguita con successo sarà possibile accedere a *localhost:3000* per vedere l'applicazione in uso
