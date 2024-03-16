var video1 = document.getElementById("video1");


var largura = video1.videoWidth;
var altura = video1.videoHeight;


var mp4 = video1.canPlayType('video/mp4');
var webm = video1.canPlayType('video/webm');

console.log("Largura do vídeo: " + largura);
console.log("Altura do vídeo: " + altura);
console.log("Suporte a MP4: " + mp4);
console.log("Suporte a WebM: " + webm);





function play() {
    video1.play();      
}
function Pause() {
video1.pause();
alert('Video Pausado');
    }
function Aumentar() {
    video1.style.transform =  "scale(1.1)";
}
function Diminuir() {
    video1.style.transform = "scale(0.8)";
}

function Dados(){
    const dados = ['currentSrc', 'controls', 'autoplay', 'loop', 'poster', 'id', 'width', 'height'];
    let lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpa a lista 

    for(let i = 0; i < dados.length; i++) {
        let atributoValor = video1.getAttribute(dados[i]);
        lista.innerHTML += '<li>' + dados[i] + ':' + atributoValor + '</li>';
    }
}
function Alterar() {
        video1.poster = 'video2.png';
    
}



var video2 = document.getElementById("video2");


var largura = video2.videoWidth;
var altura = video2.videoHeight;


var mp4 = video2.canPlayType('video/mp4');
var webm = video2.canPlayType('video/webm');

console.log("Largura do vídeo 2: " + largura);
console.log("Altura do vídeo 2: " + altura);
console.log("Suporte a MP4 2: " + mp4);
console.log("Suporte a WebM 2: " + webm);





function play2() {
    video2.play();      
}
function Pause2() {
video2.pause();
alert('Video Pausado');
    }
function Aumentar2() {
    video2.style.transform =  "scale(1.1)";
}
function Diminuir2() {
    video2.style.transform = "scale(0.8)";
}

function Dados2(){
    const dados = ['currentSrc', 'controls', 'autoplay', 'loop', 'poster', 'id', 'width', 'height'];
    let lista = document.getElementById('lista2');
    lista.innerHTML = ''; // Limpa a lista 

    for(let x = 0; x < dados.length; x++) {
        let atributoValor2 = video2.getAttribute(dados[x]);
        lista.innerHTML += '<li>' + dados[x] + ':' + atributoValor2 + '</li>';
    }
}
function Alterar2() {
        video2.poster = 'video2.png';
    
}