let celsius=document.getElementById("cel");
let fahrenheit=document.getElementById("fah");

function celToFar(){
     let output=(parseFloat(cel.value)*9/5)+32;
     fah.value=parseFloat(output.toFixed(2));
     console.log(output);
}

function farToCel(){
    let output=(parseFloat(fah.value)-32*5/9);
    cel.value=parseFloat(output.toFixed(2));
    console.log(output);
}