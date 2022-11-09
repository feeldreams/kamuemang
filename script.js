function fmulaikonten(){fungsi=1;suratin.style="display:none";ket.style="display:none";Content.style = "opacity:1;margin-top:4vh;";bodyblur.style="opacity:.4;animation:none";wallpaper.style="transform: scale(1);";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:0;";}
  function ftmuncul(){
    if(ftganti==0){fotoakhir.style="display:inline-flex;transition:all .7s ease;opacity:1;transform:scale(1)";}
    if(ftganti==1){fotoakhir.src = fotoakhir1.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==2){fotoakhir.src = fotoakhir2.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==3){fotoakhir.src = fotoakhir3.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==4){fotoakhir.src = fotoakhir4.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==10){fotoakhir.src = fotoAkhir.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }
  
  function memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";setTimeout(mulaikonten,300)}
  function fthilang(){fotoakhir.style="display:inline-flex;opacity:.5;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotoakhir.style.animation="rto .8s infinite alternate";}
  
  function tombol(){Tombol.style="opacity:1;transform: scale(1);margin-top:15px";
                    if(jikakuis==0){ftom=1;} 
                    if(jikakuis==1){tmbl.innerHTML=tmbl2.innerHTML;ftom=2;}}
  
  function multifungsi(){if(ftom==1){dilanjut();} if(ftom==2){dibalas();} if(ftom==5){menuju();}}
  
  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  vketik1b=kalimata.innerHTML;kalimata.innerHTML = "";
  vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";
  vketik3=kalimatc.innerHTML;kalimatc.innerHTML = "";
  vketik3c=kalimatc2.innerHTML;kalimatc2.innerHTML = "";
  
  var aa=0,vketik1;
  function fmulaiketik1(){
  wallpaper.style="transform: scale(1.5);";
}
function mulaiketik1() {wallpaper.style="transform: scale(1.5);";if(aa<vketik1.length){kalimat.innerHTML += vketik1.charAt(aa);aa++;setTimeout(mulaiketik1,48);}}

var ab=0,vketik1b;
function fmulaiketik1b(){
  wallpaper.style="transform: scale(1);";
  fthilang();ftganti=1;setTimeout(ftmuncul,200);
  kalimat.innerHTML="";
}
function mulaiketik1b() {if(ab<vketik1b.length){kalimata.innerHTML += vketik1b.charAt(ab);ab++;setTimeout(mulaiketik1b,38);}}
  
  var ac=0,vketik2;
function fmulaiketik2(){
  kalimata.innerHTML="";
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=2;setTimeout(ftmuncul,200);
}
function mulaiketik2() {if(ac<vketik2.length){kalimatb.innerHTML += vketik2.charAt(ac);ac++;setTimeout(mulaiketik2,38);}}

  var ad=0,vketik3;
function fmulaiketik3(){
  wallpaper.style="transform: scale(1);";
}
function mulaiketik3() {if(ad<vketik3.length){kalimatc.innerHTML += vketik3.charAt(ad);ad++;setTimeout(mulaiketik3,30);}}

  var ae=0,vketik3c;
function fmulaiketik3c(){
  kalimatc.innerHTML="";
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=3;setTimeout(ftmuncul,200);
}
function mulaiketik3c() {if(ae<vketik3c.length){kalimatc.innerHTML += vketik3c.charAt(ae);ae++;setTimeout(mulaiketik3c,40);} if(ae==vketik3c.length){tombol();}}
  
  function dilanjut(){wallpaper.style="transform: scale(1);";setTimeout(otomatis2,500);fthilang();ftganti=10;setTimeout(ftmuncul,300);Tombol.style="opacity:0;transform: scale(.1);";jikakuis=1;setTimeout(tombol,1000);}
  
  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {
  kalimat.innerHTML = kalimat2.innerHTML;
  kalimat.style="";kalimata.innerHTML="";
  kalimatb.innerHTML="";kalimatc.innerHTML="";
  }

  function otomatis3() {befanimkata3();setTimeout(animkata3,700);} 
  function befanimkata3(){kalimat.style="";kalimatb.style="";kalimat.style="opacity:0";kalimatb.style="opacity:0";} 
  function animkata3() {kalimat.innerHTML = kalimat3.innerHTML + balasan;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style="opacity:1;font-size:18px;transition:none";kalimatb.style="opacity:1;font-size:17px;font-weight:400;transition:none";}
  
  function stakhir(){tmbl.innerHTML="💌 Kirim";Tombol.style="opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function dibalas(){
      setInterval(createHeart,200);
      wallpaper.style="transform: scale(1)";
      Tombol.style="opacity:0;transform: scale(.1);";
      Content.style = "transition:all 1s ease;opacity:1;margin-top:7vh;";
      jawab();
   }
