
//handling a message
onmessage = (evt) =>{
    console.log('Worker has recieved data');
    console.log(evt.data);
    postMessage({time:new Date().toLocaleTimeString(), data: evt.data});
}
//handling an error

onerror=(err)=>{
    console.log(err);
}

onmessagerror = (err) =>{
    console.log(err);
}