console.log("verifico se hai certificato SSL...")
//verifico se nel mio serverweb è supportato il worker per permettermi di installare l'applicazione
if("serviceWorker" in navigator){
 //richiamo il file sw.js per verificare
    navigator.serviceWorker.register("serviceWorker.js").then(registration =>{
        console.log("ServiceWorker Utilizzabile");
        console.log(registration)
    }).catch(error => {
        console.log("ServiceWorker Non sotto HTTPS!")
        console.log(error)
    })
}else{
    // applicazione non supportata
    console.log("ServiceWorker Non supportato")
}