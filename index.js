    function fun(order){
        // idly
       let idval=document.getElementById('vid').value;

        // if(vid.value<="0"){
        //     document.getElementById('aaa').style.display='none';
        //     // visibility='hidden';
        // }
//visbilty:hidden;
        vid.value<="0"? document.getElementById('aaa').style.display='none' : document.getElementById('aaa').style.display='block';

        pid=idval*20;
        document.getElementById('idly').innerHTML=pid;
        console.log(idval);

// vadprint(pid);
        vdval=document.getElementById('vvd').value;
        
//visbilty:hidden;

        vvd.value<="0"? document.getElementById('abb').style.display='none' : document.getElementById('abb').style.display='block';

        pvd=vdval*30;
        document.getElementById('vada').innerHTML=pvd;
        console.log(vdval);

        // dosa
        doval=document.getElementById('vdo').value;
        pdo=doval*45;
        document.getElementById('dosa').innerHTML=pdo;
        console.log(doval);

// upma
        upval=document.getElementById('vup').value;
        pup=upval*25;
        document.getElementById('upma').innerHTML=pup;
        console.log(upval);
        
        //cofee
        cfval=document.getElementById('vcf').value;
        pcf=cfval*15;
        document.getElementById('coffe').innerHTML=pcf;
        console.log(cfval);
        
        // tea
        teaval=document.getElementById('vte').value;
        ptea=teaval*10;
        document.getElementById('tea').innerHTML=ptea;
        console.log(teaval);
        //total amount

        total.innerHTML=pid+pvd+pdo+pup+pcf+ptea +"$" ;
    }

        // //     qr ammount
        // imgqr=document.getElementById('qr');
        // function pay(qr){
        // console.log(total.innerHTML)
        // if(total.innerHTML=='' || total.innerHTML=='0$'  ){
        //         alert('No items ordered');
        // }
        // else{
                
        // imgqr.style.visibility='Visible';
        // // qr==imgqr? imgqr.style.visibility='Visible':imgqr.style.visibility='';
        // amountqr=document.getElementById('amtqr');
        // amountqr.innerHTML=total.innerHTML;
        // }
        // }

