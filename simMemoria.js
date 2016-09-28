var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)

var WIDTH = 1300//largura da área retangular
var HEIGHT = 600;//altura da área retangular

var v_rem = "";
var v_rdmin = "";
var v_rdmout = "";
var v_read = "gray";
var v_whrite = "gray";
var v_rem = "";
var v_ac = "";
var v_dec = "";
var v_m0 = "0";
var v_m1 = "1";
var v_m2 = "2";
var v_m3 = "3";
var v_m4 = "4";
var v_m5 = "5";
var v_m6 = "6";
var v_m7 = "7";
var v_m8 = "8";
var v_m9 = "9";
var v_m10 = "10";
var v_m11 = "11";
var v_m12 = "12";
var v_m13 = "13";
var v_m14 = "14";
var v_m15 = "15";
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

var op = document.getElementById("opId");
op.id='opCombo';

var end = document.createElement("INPUT");

end.id='endId';
end.max="4";
end.type="text";
end.size="4";
end.maxlength=1;


var ac = document.createElement("INPUT");
ac.type="text";
ac.size="4";
ac.id='acId';




function Text(){
    

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
    ctx.lineTo(1200, 20);
    ctx.lineTo(1200, 250);
    ctx.lineTo(890, 250);
    ctx.stroke();
    ctx.closePath();

    //white
    ctx.beginPath();
    ctx.lineWidth = cExp;
    ctx.strokeStyle = cCor;
    ctx.moveTo(115, 300);  
    ctx.lineTo(115, 15);
    ctx.lineTo(1205, 15);
    ctx.lineTo(1205, 350);
    ctx.lineTo(890, 350);
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
    ctx.fillText("MEMORIA",400,170);
    ctx.fillRect(400,170 ,480, 300);
    ctx.closePath();

    //Variaveis Memoria

    //Linha 1
    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m0,410,220);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m1,530,220);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m2,650,220);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m3,770,220);

    //Linha 2
    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m4,410,295);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m5,530,295);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m6,650,295);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m7,770,295);

    //Linha 3
    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m8,410,370);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m9,530,370);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m10,650,370);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m11,770,370);

    //Linha 3
    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m12,410,445);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m13,530,445);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m14,650,445);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_m15,770,445);



    
    //Enderecos de memoria
   
    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0000",405,190);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0001",525,190);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0010",645,190);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0011",765,190);


    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0100",405,265);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0101",525,265);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0110",645,265);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("0111",765,265);


    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1000",405,340);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1001",525,340);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1010",645,340);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1011",765,340);


    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1100",405,415);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1101",525,415);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1110",645,415);

    ctx.fillStyle = "black";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("1111",765,415);
    
    //Linhas de divisão da memoria
    ctx.beginPath();
    ctx.fillStyle = "black";

    //Linhas Verticais
    ctx.moveTo(400, 170);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(400, 470);
    ctx.stroke();
    ctx.moveTo(520, 170);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(520, 470);
    ctx.stroke();
    ctx.moveTo(640, 170);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(640, 470);
    ctx.stroke();
    ctx.moveTo(760, 170);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(760, 470);
    ctx.stroke();
    ctx.moveTo(880, 170);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(880, 470);
    ctx.stroke();


    //Linhas horizontais
    ctx.moveTo(400, 170);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(880, 170);
    ctx.stroke();
    ctx.moveTo(400, 245);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(880, 245);
    ctx.stroke();
    ctx.moveTo(400, 320);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(880, 320);
    ctx.stroke();
    ctx.moveTo(400, 395);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(880, 395);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(400, 470);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(880, 470);
    ctx.stroke();

    ctx.closePath();


    //Caixa de Seleção de endereoco de memoria
    
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.fillStyle = "purple";
    ctx.strokeStyle = "purple";
    ctx.moveTo(qa, qb);  // Movemos a pena em 10px tanto no eixo x como no eixo y
    ctx.lineTo(qa, qb+75);
    ctx.lineTo(qa+120, qb+75);
    ctx.lineTo(qa+120, qb);
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
    ctx.fillText("RDM OUT",450,520);
    ctx.fillRect(450,520 , 100, 70);

    ctx.fillStyle = "white";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(v_rdmout,460,560);
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
    ctx.fillText("READ",890,240);
    ctx.arc(890, 250, 10, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();

    //Sinal de Write
    ctx.beginPath();
    ctx.fillStyle = v_whrite;
    ctx.font = "bold 15px sans-serif";   
    ctx.fillText("WRITE",890,340);
    ctx.arc(890, 350, 10, 0, Math.PI*2, true);
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
    v_dec = document.getElementById('opCombo').value;
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
        if(v_rem == 0){
            v_rdmout = v_m0;
            qa = 400;
            qb = 170;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 1){
            v_rdmout = v_m1;
            qa = 520;
            qb = 170;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 10){
            v_rdmout = v_m2;
            qa = 640;
            qb = 170;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 11){
            v_rdmout = v_m3;
            qa = 760;
            qb = 170;
            document.getElementById('acId').value = v_rdmout;
        }
        //CaixaLinha 2
        if(v_rem == 100){
            v_rdmout = v_m4;
            qa = 400;
            qb = 245;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 101){
            v_rdmout = v_m5;
            qa = 520;
            qb = 245;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 110){
            v_rdmout = v_m6;
            qa = 640;
            qb = 245;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 111){
            v_rdmout = v_m7;
            qa = 760;
            qb = 245;
            document.getElementById('acId').value = v_rdmout;
        }
        //CaixaLinha 3
        if(v_rem == 1000){
            v_rdmout = v_m8;
            qa = 400;
            qb = 320;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 1001){
            v_rdmout = v_m9;
            qa = 520;
            qb = 320;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 1010){
            v_rdmout = v_m10;
            qa = 640;
            qb = 320;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 1011){
            v_rdmout = v_m11;
            qa = 760;
            qb = 320;
            document.getElementById('acId').value = v_rdmout;
        }
        //CaixaLinha 4
        if(v_rem == 1100){
            v_rdmout = v_m12;
            qa = 400;
            qb = 395;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 1101){
            v_rdmout = v_m13;
            qa = 520;
            qb = 395;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 1110){
            v_rdmout = v_m14;
            qa = 640;
            qb = 395;
            document.getElementById('acId').value = v_rdmout;
        }
        if(v_rem == 1111){
            v_rdmout = v_m15;
            qa = 760;
            qb = 395;
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

        if(v_rem == 0){
            v_m0 = v_ac;
            qa = 400;
            qb = 170;
        }
        if(v_rem == 1){
            v_m1  = v_ac;
            qa = 520;
            qb = 170;
        }
        if(v_rem == 10){
            v_m2 = v_ac;
            qa = 640;
            qb = 170;
        }
        if(v_rem == 11){
            v_m3 = v_ac;
            qa = 760;
            qb = 170;
        }
        //CaixaLinha 2
        if(v_rem == 100){
            v_m4 = v_ac;
            qa = 400;
            qb = 245;
        }
        if(v_rem == 101){
            v_m5 = v_ac;
            qa = 520;
            qb = 245;
        }
        if(v_rem == 110){
            v_m6 = v_ac;
            qa = 640;
            qb = 245;
            
        }
        if(v_rem == 111){
            v_m7  = v_ac;
            qa = 760;
            qb = 245;
            
        }
        //CaixaLinha 3
        if(v_rem == 1000){
            v_m8  = v_ac;
            qa = 400;
            qb = 320;
            
        }
        if(v_rem == 1001){
            v_m9  = v_ac;
            qa = 520;
            qb = 320;
            
        }
        if(v_rem == 1010){
            v_m10 = v_ac;
            qa = 640;
            qb = 320;
            
        }
        if(v_rem == 1011){
            v_m11 = v_ac;
            qa = 760;
            qb = 320;
            
        }
        //CaixaLinha 4
        if(v_rem == 1100){
            v_m12 = v_ac;
            qa = 400;
            qb = 395;
            
        }
        if(v_rem == 1101){
            v_m13 = v_ac;
            qa = 520;
            qb = 395;
            
        }
        if(v_rem == 1110){
            v_m14 = v_ac;
            qa = 640;
            qb = 395;
            
        }
        if(v_rem == 1111){
            v_m15 = v_ac;
            qa = 760;
            qb = 395;
            
        }
        
        /*
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
        */
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
