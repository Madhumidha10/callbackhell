let countdown = 10;
let img=document.getElementById('op');
let res=document.getElementById('count');
let msg=document.getElementById('msg');
setTimeout(()=>{
    res.innerHTML=countdown--;
    setTimeout(()=>{
        res.innerHTML=countdown--;
        setTimeout(()=>{
            res.innerHTML=countdown--;
            setTimeout(()=>{
                res.innerHTML=countdown--;
                setTimeout(()=>{
                    res.innerHTML=countdown--;
                    setTimeout(()=>{
                        res.innerHTML=countdown--;
                        setTimeout(()=>{
                            res.innerHTML=countdown--;
                            setTimeout(()=>{
                                res.innerHTML=countdown--;
                                setTimeout(()=>{
                                    res.innerHTML=countdown--;
                                    setTimeout(()=>{
                                        res.innerHTML=countdown--;
                                        setTimeout(()=>{
                                        res.innerHTML=countdown--;
                                        res.style.display="none";
                                        msg.innerHTML="Happy Independence Day.....";
                                        msg.style.display="block";
                                        img.classList.replace('d-none','d-block');
                                        },1000);
                                    },1000); 
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

