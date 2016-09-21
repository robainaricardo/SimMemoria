var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)

var WIDTH = 1000//largura da área retangular
var HEIGHT = 610;//altura da área retangular

var v_rem = "";
var v_rdmin = "";
var v_rdmout = "";
var v_read = "gray";
var v_whrite = "gray";
var v_rem = "";
var v_ac = "";
var v_dec = "";
var v_m0 = "";
var v_m1 = "";
var v_m2 = "";
var v_m3 = "";
var qa = -110;
var qb = -110;

var inativoC = "gray";
var inativoE = "0.5";

var ativoC = "green";
var ativoE = "3";

var aCor = "gray";
var aExp = "0.5";

var bCor = "gray";
var bExp = "0.5";

var cCor = "gray";
var cExp = "0.5";

op = document.createElement("INPUT")
op.type="text";
op.size="1";
op.id='opId';

var end = document.createElement("INPUT");
end.type="text";
end.size="2";
end.id='endId';

var ac = document.createElement("INPUT");
ac.type="text";
ac.size="4";
ac.id='acId';




function Text(){
    op.setAttribute("type", "text");
    op.setAttribute("value", "");
    document.body.appendChild(op);

    end.setAttribute("type", "text");
    end.setAttribute("value", "");
    document.body.appendChild(end);

    ac.setAttribute("type", "text");
    ac.setAttribute("value", v_rdmout);
    document.body.appendChild(ac);

}


    


function Desenhar() {

    

    //linha do op para o decodificador
    ctx.beginPath();
    ctx.lineWidth = aExp;
    ctx.strokeStyle = aCor;
    ctx.moveTo(120, 300);  
    ctx.lineTo(120, 700);
    ctx.stroke();
    ctx.closePath();

    //linha do pc para o rdmout
    ctx.beginPath();
    ctx.lineWidth = bExp;
    ctx.strokeStyle = bCor;
    ctx.moveTo(210, 700);  
    ctx.lineTo(210, 510);
    ctx.lineTo(460, 510);
    ctx.stroke();
    ctx.closePath();

    //linha do pc para o rdmin
    ctx.beginPath();
    ctx.lineWidth = cExp;
    ctx.strokeStyle = cCor;
    ctx.moveTo(200, 700);  
    ctx.lineTo(200, 450);
    ctx.lineTo(350, 450);
    ctx.lineTo(350, 75);
    ctx.lineTo(460, 75);
    ctx.stroke();
    ctx.closePath();

    //linha do sinais do decodificardor

    //Read
    ctx.beginPath();
    ctx.lineWidth = bExp;
    ctx.strokeStyle = bCor;
    ctx.moveTo(120, 300);  
    ctx.lineTo(120, 20);
    ctx.lineTo(800, 20);
    ctx.lineTo(800, 250);
    ctx.lineTo(600, 250);
    ctx.stroke();
    ctx.closePath();

    //white
    ctx.beginPath();
    ctx.lineWidth = cExp;
    ctx.strokeStyle = cCor;
    ctx.moveTo(115, 300);  
    ctx.lineTo(115, 15);
    ctx.lineTo(805, 15);
    ctx.lineTo(805, 350);
    ctx.lineTo(600, 350);
    ctx.stroke();
    ctx.closePath();

    //linha do end para o REM
    ctx.beginPath();
    ctx.lineWidth = aExp;
    ctx.strokeStyle = aCor;
    ctx.moveTo(160, 700);  
    ctx.lineTo(160, 400);
    ctx.lineTo(285, 400);
    ctx.lineTo(285, 300);
    ctx.stroke();
    ctx.closePath();
    
    //LInha do REM para a memoria
    ctx.beginPath();
    ctx.lineWidth = aExp;
    ctx.strokeStyle = aCor;
    ctx.moveTo(260, 300);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(410, 300);
    ctx.stroke();
    ctx.closePath();
    
    //LInha do rdmi para a memoria
    ctx.beginPath();
    ctx.lineWidth = cExp;
    ctx.strokeStyle = cCor;
    ctx.moveTo(500, 200);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(500, 60);
    ctx.stroke();
    ctx.closePath();
    
    //LInha do rdmout para a memoria
    ctx.beginPath();
    ctx.lineWidth = bExp;
    ctx.strokeStyle = bCor;
    ctx.moveTo(500, 200);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(500, 490);
    ctx.stroke();
    ctx.closePath();

    //Decodificador
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#8A0808";
    ctx.font = "bold 15px sans-serif";
    ctx.fillText("DECODIFICADOR",60,245);
    ctx.arc(120,300, 50, 0, Math.PI*2, true);
    ctx.fill();
    //texto Decodificador
    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_dec,110,310)

    
    // Memoria
    ctx.beginPath();
    ctx.fillStyle = "#BEF781";
    ctx.font = "bold 18px sans-serif";
    ctx.fillText("MEMORIA",400,195);
    ctx.fillRect(400,200 ,200, 200);
    ctx.closePath();

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m0,440,250);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m1,540,250);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m2,440,350);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m3,540,350);

    
    //Enderecos de memoria
   
    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("00",405,220);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("01",505,220);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("10",405,320);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("11",505,320);

    
    //Linhas de divisão da memoria
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(500, 200);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(500, 400);
    ctx.stroke();
    ctx.moveTo(400, 300);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(600, 300);
    ctx.stroke();
    ctx.closePath();


    //Caixa de Seleção de endereoco de memoria
    
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.fillStyle = "purple";
    ctx.strokeStyle = "purple";
    ctx.moveTo(qa, qb);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(qa, qb+100);
    ctx.lineTo(qa+100, qb+100);
    ctx.lineTo(qa+100, qb);
    ctx.lineTo(qa - 5, qb);
    ctx.stroke();
    ctx.closePath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    
    //RDM in
    ctx.beginPath();
    ctx.fillStyle = "#298A08";
    ctx.font = "bold 15px sans-serif";   
    ctx.fillText("RDM IN",450,45);
    ctx.fillRect(450,50 , 100, 70);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_rdmin,470,100);
    ctx.closePath();
    
    //RDM out
    ctx.beginPath();
    ctx.fillStyle = "#298A08";
    ctx.font = "bold 15px sans-serif";   
    ctx.fillText("RDM OUT",450,475);
    ctx.fillRect(450,480 , 100, 70);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_rdmout,470,530);
    ctx.closePath();

    //REM
    ctx.beginPath();
    ctx.fillStyle = "#298A08";
    ctx.font = "bold 15px sans-serif";   
    ctx.fillText("REM",250,245);
    ctx.fillRect(250 ,250 , 70, 100);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_rem,270,300);
    ctx.closePath();

     //ctx.fillText(texto,posicao x, posicao y);

    //Sinal de read
    ctx.beginPath();
    ctx.fillStyle = v_read;
    ctx.font = "bold 15px sans-serif";   
    ctx.fillText("READ",610,240);
    ctx.arc(610, 250, 10, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();

    //Sinal de Write
    ctx.beginPath();
    ctx.fillStyle = v_whrite;
    ctx.font = "bold 15px sans-serif";   
    ctx.fillText("WRITE",610,340);
    ctx.arc(610, 350, 10, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();
}

function LimparTela() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    Text();
    Atualizar();
    
    
}


function clicar() {
    v_dec = document.getElementById('opId').value;
    v_rem = document.getElementById('endId').value;
    v_ac = document.getElementById('acId').value;


    aCor = ativoC;
    aExp = ativoE;

    //Leitura
    if(v_dec == 0){
        v_read = "blue";
        //v_whrite = "gray";
        bCor = ativoC;
        bExp = ativoE;
        cCor = inativoC;
        cExp = inativoE;


        //colocar caixa na posição de memoria
        if(v_rem == 00){
            v_rdmout = v_m0;
            qa = 400;
            qb = 200;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 01){
            v_rdmout = v_m1;
            qa = 500;
            qb = 200;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 10){
            v_rdmout = v_m2;
            qa = 400;
            qb = 300;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 11){
            v_rdmout = v_m3;
            qa = 500;
            qb = 300;
            document.getElementById('acId').value = v_rdmout;
        }
    }else{
        v_read = "gray";
        
    }
    

    //Escrita
    if(v_dec == 1){
        v_whrite = "blue";
        cCor = ativoC;
        cExp = ativoE;

        bCor = inativoC;
        bExp = inativoE;
        
        v_rdmin = v_ac;
        
        if(v_rem == 00){
            v_m0 = v_ac;
            qa = 400;
            qb = 200;
        }
        if(v_rem == 01){
            v_m1 = v_ac;
            qa = 500;
            qb = 200;
            
        }
        if(v_rem == 10){
            v_m2 = v_ac;
            qa = 400;
            qb = 300;
        }
        if(v_rem == 11){
            v_m3 = v_ac;
            qa = 500;
            qb = 300;
        }

    }else{
        v_whrite = "gray";
    }
    
    Atualizar();
}

function Atualizar() {
    LimparTela();    
    Desenhar();  
}

Iniciar();
