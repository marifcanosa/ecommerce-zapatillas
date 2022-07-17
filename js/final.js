'use strict';

//Méndez Estrada Ester y Canosa Fernandes Marianela

let divProductos = document.getElementById('productos'); 
let divAdidas = document.getElementById('adidas');  
let divJordan = document.getElementById('jordan');  
let divVans = document.getElementById('vans');  
let minicarrito = document.getElementById('minicarrito')

let modal = document.getElementById('modalProducto');
let cerrar = modal.firstElementChild;
let contImgMdl = cerrar.nextElementSibling;
let h3Mdl = contImgMdl.nextElementSibling;
let preMdl = h3Mdl.nextElementSibling;
let spaMdl = preMdl.firstElementChild;
let desMdl = preMdl.nextElementSibling;
let btnMdl = desMdl.nextElementSibling;
let img1 = document.getElementById('img-1');
let img2 = document.getElementById('img-2');
let img3 = document.getElementById('img-3');
let img4 = document.getElementById('img-4');

let cart = document.getElementById('carrito');
const vCart = document.getElementById('verCart');
const vaciar = document.getElementById('boton-vaciar');
let cartItems = document.getElementById('cantidad');
let cartmdl = document.getElementById('modalCarrito');
let cartTotal = document.getElementById('tlCart');


let carrito = [];
let cuenta;
let total = 0; 
let items = 0; 
let precio = 0; 
let unoMas=0;
let vpTotal=0;
let minicart = document.getElementById('amCart');
let minicartTotal = document.getElementById('total');

let btnAd = document.getElementById('ad');
let btnJo = document.getElementById('jo');
let btnVa = document.getElementById('va');
let btnAl = document.getElementById('al');

let categorias = document.getElementById('navegacion');
let catVans = categorias.lastElementChild;
let catJordan = catVans.previousElementSibling;
let catAdidas = catJordan.previousElementSibling;
let oferta = document.getElementById('modalOferta');
let imgoferta = oferta.firstElementChild;

let aTop = document.getElementById('top');
let oFilter = document.getElementById('abrir');
let cFilter = document.getElementById('cerrar');
let opsFilter = cFilter.nextElementSibling;

let btnCheckout = document.getElementById('comprar');
let divCheckout = document.getElementById('checkout');
let divCheckout2 = document.getElementById('checkout2');
let divCheckout3 = document.getElementById('checkout3');
let divFinalizar = document.getElementById('finalizarComprar');
let btnFinalizar = document.getElementById('finalizar');
let btnCancelar = document.getElementsByClassName('cancelar');
let btnPasoUno = document.getElementsByClassName('pasoUno');
let btnPasoDos = document.getElementsByClassName('pasoDos');
let btnPasoTres = document.getElementsByClassName('pasoTres');
let divCheck = document.getElementById('check');
let inputs = divCheck.getElementsByTagName('input');
let forms = document.getElementsByTagName('form');
let divError = document.getElementById('error');
divError.style.display = 'none';

const productos = [
   {id: 1,
   name: 'NIZZA PLATAFORMA', 
   descrip: '¿Qué tienen en común los jeans ajustados y las polleras sueltas? Ambas prendas se ven fantásticas con la elegante plataforma de estas zapatillas adidas Nizza.Este es un concepto moderno con un enfoque futurista y es compatible con cualquier tematíca', 
   price: 9499,
   src: 'imgs/zapatilla3.jpg',
   src2: 'imgs/zapatilla3-1.jpg',
   src3: 'imgs/zapatilla3-2.jpg',
   src4: 'imgs/zapatilla3-3.jpg',
   alt: 'NIZZA PLATAFORMA',
   categoria: 'adidas',
   type: 'urban'
},

   {id: 2,
   name: 'NMD_R1', 
   descrip: 'Te gusta ser el centro de atención. Con estas zapatillas adidas NMD_R1 no tendrás que esforzarte. Lucen un colorido estampado de leopardo que les confiere un toque salvaje.', 
   price: 20999,
   src: 'imgs/zapatilla2.jpg',
   src2: 'imgs/zapatilla2-1.jpg',
   src3: 'imgs/zapatilla2-2.jpg',
   src4: 'imgs/zapatilla2-3.jpg',
   alt: 'NMD_R1',
   categoria: 'adidas',
   type: 'urban'
},

   {id: 3,
   name: 'SUPERSTAR BOLD', 
   descrip: 'Hoy en día las zapatillas adidas Superstar representan a los amantes de la moda urbana. Son perfectas para combinar con cualquier atuendo por su suela de plataforma que exude elegancia.',
   price: 17999,
   src: 'imgs/zapatilla1.jpg',
   src2: 'imgs/zapatilla1-1.jpg',
   src3: 'imgs/zapatilla1-2.jpg',
   src4: 'imgs/zapatilla1-3.jpg',
   alt: 'Zapatillas SUPERSTAR BOLD',
   categoria: 'adidas',
   type: 'urban'
},

   {id: 4,
   name: 'ULTRABOOST 21', 
   descrip: 'Uníte a nosotros en la busqueda constante de maximizar y armonizar el peso, la comodidad y en rendimiento. Ultraboost 21. Descubrí un retorno de energía increíble.', 
   price: 26999,
   src: 'imgs/zapatilla4.jpg',
   src2: 'imgs/zapatilla4-1.jpg',
   src3: 'imgs/zapatilla4-2.jpg',
   src4: 'imgs/zapatilla4-3.jpg',
   alt: 'ULTRABOOST 21',
   categoria: 'adidas',
   type: 'sport'
},

   {id: 5,
   name: 'ROCKADIA TRAIL 3.0', 
   descrip: 'Recorre la ciudad o conquista la montaña. Estas zapatillas de running se ha diseñado para adaptarse a tu ritmo.', 
   price: 9999,
   src: 'imgs/zapatilla5.jpg',
   src2: 'imgs/zapatilla5-1.jpeg',
   src3: 'imgs/zapatilla5-2.jpeg',
   src4: 'imgs/zapatilla5-3.jpeg',
   alt: 'ROCKADIA TRAIL 3.0',
   categoria: 'adidas',
   type: 'sport'
},

   {id: 6,
   name: 'RACER TR21', 
   descrip: 'Inyectale la comodidad y el estilo deportivo del calzado de running a tu look diario con estas zapatillas adidas.', 
   price: 11999,
   src: 'imgs/zapatilla6.jpg',
   src2: 'imgs/zapatilla6-1.jpg',
   src3: 'imgs/zapatilla6-2.jpg',
   src4: 'imgs/zapatilla6-3.jpg',
   alt: 'RACER TR21',
   categoria: 'adidas',
   type: 'sport'
},

   {id: 7,
    name: 'Jordan 11 Retro', 
    descrip: 'Tinker Hatfield creó el Air Jordan XI para redefinir los límites, con una placa de fibra de carbono para un rendimiento inigualable y cuero charol para un toque de lujo sin precedentes. Este favorito de todos los tiempos ha regresado a tiempo en su forma más pura.', 
    price: 52540,
    src: 'imgs/zapatilla7.jpg',
   src2: 'imgs/zapatilla7-1.jpg',
   src3: 'imgs/zapatilla7-2.jpg',
   src4: 'imgs/zapatilla7-3.jpg',
    alt: 'Jordan 11 Retro playoffs bred',
    categoria: 'jordan'},

   {id: 8,
    name: 'Air Jordan 1', 
    descrip: 'Al ser unas zapatillas de bota, quedan a la perfección con pantalones rectos, con pantalones jogger o con pantalones pitillo. Además, su color azul combina fenomenal con el denim. ¿Qué más necesitas para hacerte con ellas? ¿Que te las tenga que entregar el mismísimo Michael Jordan en mano?', 
    price: 14615,
    src: 'imgs/zapatilla8.jpg',
   src2: 'imgs/zapatilla8-1.jpg',
   src3: 'imgs/zapatilla8-2.jpg',
   src4: 'imgs/zapatilla8-3.jpg',
    alt: 'Air Jordan 1 retro high',
    categoria: 'jordan'},

   {id: 9,
    name: 'Air Jordan 13', 
    descrip: 'Pro Strong viene destacada en una combinación de colores Blanco, Negro y Aqua. El cuero blanco recorre la base mientras que el cuero negro viste los paneles, el Jumpman en el talón y la lengüeta perforada. Para resaltar el par, el color Aqua decora todo el contorno y el emblema en la parte superior de la puntera. Por último, la suela está recubierta de blanco y negro.', 
    price: 7880,
    src: 'imgs/zapatilla9.jpg',
   src2: 'imgs/zapatilla9-1.jpg',
   src3: 'imgs/zapatilla9-2.jpg',
   src4: 'imgs/zapatilla9-3.jpg',
    alt: 'Air Jordan 13 pro strong',
    categoria: 'jordan'},

   {id: 10,
    name: 'Vans Sk8-Hi', 
    descrip: 'Las mas clásicas y legendarias Vans no te pueden faltar si tenés actitud. Con las tiras laterales Vans, clásico que se ha convertido en un símbolo de estatus y tradición del skate.', 
    price: 9125,
    src: 'imgs/zapatilla91.jpg',
   src2: 'imgs/zapatilla91-1.jpg',
   src3: 'imgs/zapatilla91-2.jpg',
   src4: 'imgs/zapatilla91-3.jpg',
    alt: 'Vans Sk8-High',
    categoria: 'vans'},

   {id: 11,
    name: 'Vans Old Skool', 
    descrip: 'Las zapatillas Vans Old Skool unisex son las clásicas de Vans y fue el primer modelo en lucir el icónico sidestripe de la marca.  Posee puntera reforzada que le otorga durabilidad, la suela de caucho original Vans Wafflesole y cuello acolchado que ofrece sujeción y confort.', 
    price: 6205,
    src: 'imgs/zapatilla92.jpg',
   src2: 'imgs/zapatilla92-1.jpg',
   src3: 'imgs/zapatilla92-2.jpg',
   src4: 'imgs/zapatilla92-3.jpg',
    alt: 'Vans Old Skool Negro',
    categoria: 'vans'},

   {id: 12,
    name: 'Vans Old Skool', 
    descrip: 'Estilo skater con estas zapatillas Ward de Vans. Combinan el estilo de la clásica zapatilla de skate con las rayas laterales, con una puntera reforzada y materiales resistentes. Diseñada para tus paseos por la ciudad.', 
    price: 9255,
    src: 'imgs/zapatilla93.jpg',
   src2: 'imgs/zapatilla93-1.jpg',
   src3: 'imgs/zapatilla93-2.jpg',
   src4: 'imgs/zapatilla93-3.jpg',
    alt: 'Vans Old Skool Port Royal',
    categoria: 'vans'}
];

const formulario = document.getElementById('formulario');
const boton = document.getElementById('boton');
const resultado = document.getElementById('resultado');


const cards = () => {
   
   productos.forEach((producto) => {
       const boton = document.createElement('button');
       const img   = document.createElement('img');
       const div   = document.createElement('div');
       const div2  =document.createElement('div');
       const h3    = document.createElement('h3');
       const p     = document.createElement('p');
       const span  = document.createElement('span');

       img.src=producto.src;
       img.alt=producto.alt;
       
       div.className='detalles';
       div2.className='info';
       h3.innerText=producto.name;
       span.innerText=producto.price;
       p.innerText="Precio: $";
       p.appendChild(span);
       
       boton.innerText="Agregar";
       boton.setAttribute('marcador', producto.id);
       boton.addEventListener('click', anadirProducto);
       boton.addEventListener('click', (e)=>{
           totalItems(e.target.getAttribute("marcador"));
       });

       div2.appendChild(h3);
       div2.appendChild(p);
       div2.appendChild(boton);
       
       div.appendChild(img);
       div.appendChild(div2);
       

       if(producto.categoria == 'adidas') {divAdidas.appendChild(div);}
       if(producto.categoria == 'jordan') {divJordan.appendChild(div);}
       if(producto.categoria == 'vans') {divVans.appendChild(div);}

       btnAd.addEventListener('click', function(){
        divAdidas.style.display = 'flex';
        divJordan.style.display = 'none';
        divVans.style.display = 'none';
       })

       btnJo.addEventListener('click', function(){
        divAdidas.style.display = 'none';
        divJordan.style.display = 'flex';
        divVans.style.display = 'none';
       })

       btnVa.addEventListener('click', function(){
        divAdidas.style.display = 'none';
        divJordan.style.display = 'none';
        divVans.style.display = 'flex';
       })

       btnAl.addEventListener('click', function(){
        divAdidas.style.display = 'flex';
        divJordan.style.display = 'flex';
        divVans.style.display = 'flex';
       })

       img.onclick = function() {
           modal.style.display = 'flex';
           img1.src = producto.src;
           img2.src = producto.src2;
           img3.src = producto.src3;
           img4.src = producto.src4;
           h3Mdl.innerText = producto.name;
           spaMdl.innerText = producto.price;
           preMdl.innerText = "Precio: $";
           preMdl.appendChild(spaMdl);
           desMdl.innerText = producto.descrip;

           let prev = document.getElementById('prev');
           let next = document.getElementById('next');

           document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 37) {
                prev.click();
            }
            if (evt.keyCode == 39) {
                next.click(); 
            }
            if (evt.keyCode == 27) {
                modal.style.display = 'none';
            }
           };
       }

       
   });

   
}



    let tiempo = oferta.lastElementChild.firstElementChild;

    catVans.addEventListener('click', function(){
        oferta.style.display='flex';
        imgoferta.src='imgs/oferta-vans.jpg';
        ofertas();
    });

    catJordan.addEventListener('click', function(){
        oferta.style.display='flex';
        imgoferta.src='imgs/oferta-nike.jpg';
        ofertas();
    });

    catAdidas.addEventListener('click', function(){
        oferta.style.display='flex';
        imgoferta.src='imgs/oferta-adidas.jpg';
        ofertas();
       });

    function ofertas(){
        cuenta=10;
        tiempo.innerHTML = cuenta;
        let menos = setInterval(function() {
            cuenta--;
            tiempo.innerHTML = cuenta;
            if(cuenta==0) {
                clearInterval(menos);
                oferta.style.display = 'none';
            }
        }
        ,1000);
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                oferta.style.display = 'none';
            }
        };
    }



function anadirProducto(evento) {
    let marcador=evento.target.getAttribute('marcador');
    carrito.push(marcador);
    armarCarrito(marcador);
}


function armarCarrito(marca) {
    cart.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((producto) => {
        const miItem = productos.filter((productoProductos) => {
            return productoProductos.id === parseInt(producto);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === producto ? total += 1 : total;
        }, 0);
        let product = document.createElement('li');
        const a = document.createElement('button');
        a.className = 'menos';
        a.appendChild(document.createTextNode('X'));
        a.setAttribute('marcador', marca)
        a.setAttribute('href', '#');
        product.innerHTML = `<span>${numeroUnidadesItem}</span> - <span>${miItem[0].name}</span> $<span>${miItem[0].price}</span>` ;
        product.appendChild(a);

        cart.appendChild(product);

        a.onclick = function () {
            let precioBorrar = this.previousElementSibling.innerHTML;
            this.removeAttribute('href');
            const index = carrito.indexOf(this.getAttribute('marcador'));
            carrito.splice(index, 1);
            
            this.parentNode.remove();
            unoMas = unoMas - numeroUnidadesItem;
            cartItems.innerHTML = unoMas;
            minicart.innerHTML = unoMas;
            vpTotal-=parseInt(precioBorrar*numeroUnidadesItem);
            minicartTotal.innerHTML = vpTotal;
            cartTotal.innerHTML = vpTotal;
        };

        btnCheckout.onclick = function () {
            let copiaTotal = document.getElementsByClassName('copiaTotal');
            for (let div of copiaTotal) {
            let productosTotal = div.firstElementChild.firstElementChild;
            let precioTotal = div.lastElementChild.firstElementChild;
            divCheckout.style.display = 'block';
            divCheckout.style.display = 'flex';
            cartmdl.style.display = 'none';
            productosTotal.innerHTML = unoMas;
            precioTotal.innerHTML = vpTotal;
            
            if (precioTotal.innerHTML == 0 && productosTotal.innerHTML == 0) {
                divCheckout.style.display = 'none';
            }
            }
        }

        for (let boton of btnCancelar) {
            boton.onclick = function () {
                divCheckout.style.display = 'none';
                divCheckout2.style.display = 'none';
                divCheckout3.style.display = 'none';
                divFinalizar.style.display = 'none';
                for (let form of forms) {
                    form.reset();
                }
            }
        }
        
        for (let btn of btnPasoUno) {
            btn.onclick = function () {
                divCheckout.style.display = 'block';
                divCheckout.style.display = 'flex';
                divCheckout2.style.display = 'none';
                divCheckout3.style.display = 'none';
                divFinalizar.style.display = 'none';
                divError.style.display = 'none';
            }
            for (let btn of btnPasoDos) {
                btn.onclick = function () {
                    divCheckout.style.display = 'none';
                    divCheckout2.style.display = 'block';
                    divCheckout2.style.display = 'flex';
                    divCheckout3.style.display = 'none';
                    divFinalizar.style.display = 'none';
                    divError.style.display = 'none';
                }
            }
            for (let btn of btnPasoTres) {
                btn.onclick = function () {
                    divCheckout.style.display = 'none';
                    divCheckout2.style.display = 'none';
                    divCheckout3.style.display = 'block';
                    divCheckout3.style.display = 'flex';
                    divFinalizar.style.display = 'none';
                    divError.style.display = 'none';
                }
            } 
        }

        btnFinalizar.onclick = function () {
            let vacio = 0;
            for (let input of inputs) {
                if (input.value == '' ) {
                    vacio++;
                }
            }

            if (vacio > 0) {
                divError.style.display = 'block';
                divError.style.display = 'flex';
            }
            else {
                Finalizar();
            }

            function Finalizar () {
            divCheckout.style.display = 'none';
            divCheckout2.style.display = 'none';
            divCheckout3.style.display = 'none';
            divFinalizar.style.display = 'block';
            let spanNum = divFinalizar.lastElementChild.firstElementChild;
            let cuenta = 5;
            let segundos = setInterval(function () {
                cuenta--;
                spanNum.innerHTML = cuenta;
                if (cuenta == 0) {
                    clearInterval(segundos);
                    divFinalizar.style.display = 'none';
                }
            },
            1000);
            for (let input of inputs) {
                input.value = '';
            }
            limpiarValores();
            vaciarCarrito();
            }
        }
    });

}

function totalItems(marcador) {
    unoMas++;
    cartItems.innerHTML = unoMas;
    minicart.innerHTML = unoMas;

    for(let item of productos) {
        if(item.id==marcador){
            vpTotal += parseInt(item.price);
            minicartTotal.innerHTML = vpTotal;
            cartTotal.innerHTML = vpTotal;
        }
        
    }
}

function vaciarCarrito() {
    carrito = [];
    armarCarrito();
    limpiarValores();
}
vaciar.addEventListener('click', vaciarCarrito);

function limpiarValores() {
    cartItems.innerHTML = 0;
    minicart.innerHTML = 0;
    minicartTotal.innerHTML = 0;
    cartTotal.innerHTML = 0;
    unoMas = 0;
    vpTotal = 0;
}


const filtrar = () => {
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for(let producto of productos) {
        let name = producto.name.toLowerCase();

        let add = document.createElement('button');
        add.innerText="Agregar";
        add.setAttribute('marcador', producto.id);
        add.addEventListener('click', anadirProducto);
        add.addEventListener('click', (e)=>{
            totalItems(e.target.getAttribute("marcador")); });

        if(name.indexOf(texto) !== -1) {
            resultado.innerHTML += `
                 <li>${producto.name} - Precio: $${producto.price} </li> 
            `;
        }
    }

    if(resultado.innerHTML==''){
        resultado.innerHTML += `
            <li>Producto no encontrado... </li> 
        `;
    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

vCart.onclick = function() {
    cartmdl.style.display = 'flex';

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            cartmdl.style.display = 'none';
        }
    };
}

let modals = document.getElementsByClassName('modal');
for (let modal of modals) {
    let as = modal.getElementsByTagName('a');
    for (let a of as) {
        a.onclick = function () {
            modal.style.display = 'none';
            cartmdl.style.display = 'none';
            oferta.style.display = 'none';
        }
    }
}

function color() {
     if(window.pageYOffset>=minicarrito.offsetTop) {
         minicarrito.style.backgroundColor = '#134F5C';
     }
     else {
         minicarrito.style.backgroundColor = 'rgba(19,79,92,.25)';
     }
}

aTop.onclick = function() {
     let pos = window.pageYOffset;

     if(pos>0) {
         let intervalo = setInterval(
             () => {
                 pos-=15;
                 if(pos<=0) {
                     pos=0;
                     clearInterval(intervalo);
                 }
             }, 10
         );
     }
 }

let abrir = document.getElementById('abrir');
abrir.onclick = function () {
    oFilter.style.display='none';
    cFilter.style.display='block';
    opsFilter.style.display='block';
}

let cerra = document.getElementById('cerrar');
cerra.onclick = function () {
    cFilter.style.display='none';
    opsFilter.style.display='none';
    oFilter.style.display='block';
}
cards();