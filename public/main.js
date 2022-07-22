
 window.onload=()=>{
    let work = new Worker('worker.js');
    work.onmessage = (evt) => {
        console.log('worker has responsed!');
        document.querySelector('#output').innerText = JSON.stringify(evt.data);
    }

    work.onerror=(err)=>{
        console.log('workwer error!');
    }

    let btn = document.querySelector('#myBtn1');
    btn.addEventListener('click',()=>{
        work.postMessage((Math.random() * 100) | 0);
    })
 }