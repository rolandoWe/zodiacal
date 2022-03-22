
let valor=document.querySelector(".valor_select")
let ok=document.querySelector(".ok")
let signo_p=document.querySelector(".signo_p")
let signo_msj=document.querySelector(".signo_msj")
let nombre=document.querySelector(".nombre")
let formulario=document.querySelector(".formulario")

function verOroscopo(){
    if(valor.value==="seleccione"){
       signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> Por favor seleccione una fecha`
       signo_msj.innerHTML=""
    }
    else if(valor.value==="marzo_abril"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Aries</span>`
        aries()
    }
    else if(valor.value==="abril_mayo"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Tauro</span>`;
        tauro()
    }
    else if(valor.value==="mayo_junio"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Géminis</span>`;
        geminis()
    }
    else if(valor.value==="junio_julio"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Cáncer</span>`;
        cancer()
    }
    else if(valor.value==="julio_agosto"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Leo</span>`;
        leo()
    }
    else if(valor.value==="agosto_setiembre"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Virgo</span>`;
        virgo()
    }
    else if(valor.value==="setiembre_octubre"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Libra</span>`;
        libra()
    }
    else if(valor.value==="octubre_noviembre"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Escórpio</span>`;
        escorpio()
    }
    else if(valor.value==="noviembre_diciembre"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Sagitario</span>`;
        sagitario()
    }
    else if(valor.value==="diciembre_enero"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Capricornio</span>`;
        capricornio()
    }
    else if(valor.value==="enero_febrero"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Acuario</span>`;
        acuario()
    }
    else if(valor.value==="febrero_marzo"){
        signo_p.innerHTML=`Hola <strong class="nc">${nombre.value.toUpperCase()}</strong> tu signo es
         <span class="signo">Piscis</span>`;
        piscis()
    }else{
        signo_p.innerHTML="Error"

    }
}
function aries(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Época favorable para el turismo aventura, aunque hacia mediados de mes debes tener precauciones en viajes y traslados. <br> <br>

    <strong>Amor</strong>: Un sueño cobra cuerpo. No dudes si crees haber hallado a la pareja ideal. Más impulsivo que en otros tiempos, seducirás.<br> <br>
    
    <strong>Riqueza</strong>: Es momento para sobresalir y tener más autoridad sobre los demás. Plantea de manera clara tus ideas a tus subordinados.<br> <br>
    
    <strong>Bienestar</strong>: Es aconsejable que busques en los rincones más ocultos de tu personalidad para encontrar los códigos del éxito. Tú sabes cómo hacer las cosas.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]

    }
}
function tauro(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Te sientes más seguro cuando entiendes a fondo las cosas, aunque pasas mucho tiempo tratando de comprender cómo funcionan. Sé más práctico.<br> <br>

    <strong>Amor</strong>: Para seducir no uses la estrategia de siempre porque puede alejarte en vez de acercarte de quien te gusta. Bien con el resto.<br> <br>
    
    <strong>Riqueza</strong>: Aumento de tu ambición, búsqueda de liderazgo y mayor independencia laboral. Se avecinan vientos de esperanza.<br> <br>
    
    <strong>Bienestar</strong>: Procura dejar de lado el egocentrismo que profesas y dedícate al prójimo un poco más. Tu familia y amigos te lo agradecerán.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function geminis(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Tu naturaleza te elevará mentalmente y estarás en condiciones de enfrentar esos problemas laborales que te quitaban el sueño.<br> <br>

    <strong>Amor</strong>: Alguien a quien quieres te podría hacer una declaración de amor sorpresiva, y tu reacción será extremadamente importante.<br> <br>
    
    <strong>Riqueza</strong>: Las cosas no han salido como quieres. Debes tener cuidado a quién confías tus finanzas, ya que no lo está haciendo a tu favor.<br> <br>
    
    <strong>Bienestar</strong>: Mejorando tus vínculos evitarás sentirte expuesto a la falta de comprensión. Si te sientes atraído y halagado, compártelo con tus más íntimos.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function cancer(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: No te gustarán las improvisaciones y necesitarás prepararte para los acontecimientos, aunque se trate de cosas triviales.<br><br>

    <strong>Amor</strong>: Si de repente pareces ser demasiado popular con alguien que de costumbre te ignora, ten cuidado porque puede tratar de usarte.<br><br>
    
    <strong>Riqueza</strong>: Si estás buscando trabajo, hazlo en el área que mejor te desempeñas, allí es donde más rédito obtendrás.<br><br>
    
    <strong>Bienestar</strong>: Ten marcado en tu ser la política de no violencia e intenta siempre llegar a acuerdos, empleando tu talento en beneficio de los demás.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function leo(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Las contradicciones estarán a la orden del día pero deberás tomarlas con calma. Tu vitalidad será sorprendente.<br><br>

    <strong>Amor</strong>: Tendencia a preocuparte por tu pareja y a sentirte ansioso, cuando de hecho estás exagerando desproporcionadamente las cosas.<br><br>
    
    <strong>Riqueza</strong>: Favorable para poner en orden tu trabajo cotidiano. Tienes mucha tarea atrasada vinculada a escritos, comunicaciones o ventas.<br><br>
    
    <strong>Bienestar</strong>: Mantén la distancia y espera a que otros muestren sus cartas. Una vez que sepas lo que van a hacer, puedes desarrollar una estrategia.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function virgo(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: La más seria de las personas te hará hoy ciertas propuestas tentadoras. No te precipites y tómate tu tiempo para considerarlas.<br><br>

    <strong>Amor</strong>: Ante la búsqueda de placer, encontrarás la respuesta justa en una persona muy especial. Un día maravilloso te aguarda.<br><br>
    
    <strong>Riqueza</strong>: Momento muy propicio para las relaciones públicas y para las actividades relacionadas con medios de comunicación y publicidad.<br><br>
    
    <strong>Bienestar</strong>: Trata de aumentar el caudal de afectividad a través de los amigos y podrás reencontrar el camino que te llevará a lograr una estabilidad emocional.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function libra(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Si cierto pesimismo se apodera de tu estado de ánimo, deberás tomarlo simplemente como un malestar pasajero.<br><br>

    <strong>Amor</strong>: Tus relaciones con el sexo opuesto serán muy estimulantes hoy, no tendrás de qué quejarte. Buen día para planificar.<br><br>
    
    <strong>Riqueza</strong>: Un gesto de apoyo de un superior será fuente de ánimo e inspiración. Es todo cuanto necesitas para dar el próximo paso.<br><br>
    
    <strong>Bienestar</strong>: Deja la preocupación y tu extrema susceptibilidad para otro momento, ahora debes actuar en forma valiente y decisiva, sé práctico.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function escorpio(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Comenzará el día con nuevos bríos, haz acopio de energía manteniendo un ritmo de actividad regular. La necesitarás.<br><br>

    <strong>Amor</strong>: Alguien que se fue de tu vida, un amor, un familiar o una amistad, está a punto de reaparecer. Piensa qué le vas a decir.<br><br>
    
    <strong>Riqueza</strong>: Momento de expansión y organización profesional que te lleva a alcanzar un importante prestigio y reconocimiento.<br><br>
    
    <strong>Bienestar</strong>: Si estás molesto porque tu familia y tu pareja no reconocen tus méritos o esfuerzos, en vez de hacerte mala sangre o entristecerte, exprésate.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function sagitario(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: En estos días, te guste o no, sabrás toda la verdad sobre los sentimientos de tus seres más queridos. Prepárate.<br><br>

    <strong>Amor</strong>: Encuentras que te resulta difícil dejarte seducir y disfrutar de lo que tu pareja te propone. No temas, déjate llevar.<br><br>
    
    <strong>Riqueza</strong>: Hay muy poco que decir en asuntos de dinero. Con tan pocas sorpresas en puerta puedes consentirte y gastar un poco en ti.<br><br>
    
    <strong>Bienestar</strong>: Deberías incurrir en los asuntos del inconsciente. Es muy probable que encuentres la razón por la cual no te has permitido ser totalmente feliz.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function capricornio(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Con auténtica vocación de servicio, harás el bien pero con la inteligencia de mirar a quién. El universo está de tu lado.<br><br>

    <strong>Amor</strong>: Compartirás con tu pareja una responsabilidad laboral. Aún así tendrán tiempo para concurrir a un lugar especial esta noche.<br><br>
    
    <strong>Riqueza</strong>: Has hecho un gran trabajo en la organización de las finanzas y en tornar a tu favor una situación. Todo irá bien.<br><br>
    
    <strong>Bienestar</strong>: No hay más grande enemigo que uno mismo, más cuando uno no se da cuenta. Hoy haz un análisis y encontrarás la razón de tus fracasos.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function acuario(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Según se acerca la visita de un familiar, se genera más tensión y quieres descargarte en alguien. Ten cuidado con tus actitudes.<br><br>

    <strong>Amor</strong>: Quizá aparezcan dificultades para las relaciones afectivas, una fluida comunicación puede superar los problemas.<br><br>
    
    <strong>Riqueza</strong>: La incertidumbre irá despareciendo con el surgimiento de nuevas oportunidades que te permitirán crecer profesional y económicamente.<br><br>
    
    <strong>Bienestar</strong>: No permitas que los demás pongan presión en ti para que lidies con sus problemas. Esto no significa que tienes que ser egoísta.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
function piscis(){
    let mensaje=[`<strong>Horóscopo de hoy</strong>: Te comprometes seriamente en actividades humanitarias y sociales. Compartirás proyectos sólidos y prácticos con amigos.<br><br>

    <strong>Amor</strong>: Si deseas algo imposible en el amor intenta conseguirlo esta semana. Probablemente vivas experiencias inéditas y divertidas.<br><br>
    
    <strong>Riqueza</strong>: Estudia y maneja asuntos vinculados con la comunicación. Puede haber actividad vinculada con asuntos del trabajo en el hogar, no mezcles.<br><br>
    
    <strong>Bienestar</strong>: Eres sin duda un gran pensador y una persona llena de recursos, utilízalos de manera prudente y razonable. Sé tú mismo.`]
    for(let t=0;t<mensaje.length;t++){
        let contar=Math.round(Math.random()*t)
    signo_msj.innerHTML=mensaje[contar]
    }
}
document.querySelector(".cerrar").addEventListener("click",()=>{
    document.querySelector(".mensajes").classList.toggle("mostrar_mensaje")

})
function validarNOmbre(){
   let n= nombre.value;
   let permitir="qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM";
   let contador=0;
   for(let nom=0;nom<n.length;nom++){
       for(let p=0;p<permitir.length;p++){
           if(n[nom]==permitir[p]){
               contador++
           }
       }
   }
   if(n.length==contador){
       document.querySelector(".span").style.display="none"
       document.querySelector(".span").style.color="black"
       document.querySelector(".span").innerHTML=""
   }else{
    document.querySelector(".span").style.display="block"

    document.querySelector(".span").style.color="red"
    document.querySelector(".span").innerHTML="Ingrese solo letras y sin espacio"


   }
}
nombre.addEventListener("keyup",()=>{
    validarNOmbre()
})

ok.addEventListener("click",(f)=>{
    f.preventDefault()
    let span=document.querySelector(".span").style.color=="black"
    if(nombre.value!=""&&span){
            verOroscopo()
            document.querySelector(".mensajes").classList.toggle("mostrar_mensaje")
           formulario.reset()
    }else{
        document.querySelector(".complete").classList.toggle("mostrar_mensaje");
        setTimeout((f)=>{
            document.querySelector(".complete").classList.toggle("mostrar_mensaje");

        },3000)
    }
})