var series = [
    {id: 1, nombre: 'Grande Pa',temporadas:5,temporadasVistas:0},
    {id: 2, nombre: 'Cebollitas',temporadas:3,temporadasVistas:0},
    {id :3, nombre:'Chiquititas',temporadas:9,temporadasVistas:0}
];
const nombreDeSeries=[]
//Obtiene un array de los nombres de las series
const obtenerLosNombreDeLasSeries = series.map(function(serie) {nombreDeSeries.push(serie.nombre)});

//Para incrementar las temporadas vistas
function sumarVista1()
{   if(series[0].temporadas>series[0].temporadasVistas)
    {document.getElementById("tem.vista1").innerHTML=series[0].temporadasVistas+=1}
    console.log(series)
    porcentaje(series[0].temporadasVistas,series[0].temporadas)
    
}
function sumarVista2()
{   if(series[1].temporadas>series[1].temporadasVistas)
    {document.getElementById("tem.vista2").innerHTML=series[1].temporadasVistas+=1}
    porcentaje2(series[1].temporadasVistas,series[1].temporadas)
}
function sumarVista3()
{   if(series[2].temporadas>series[2].temporadasVistas)
    {document.getElementById("tem.vista3").innerHTML=series[2].temporadasVistas+=1}
    porcentaje3(series[2].temporadasVistas,series[2].temporadas)
}
//Para restar temporadas vistas
function restarVista1()
{
    if(series[0].temporadasVistas>0)
    {document.getElementById("tem.vista1").innerHTML=series[0].temporadasVistas-=1}
    porcentaje(series[0].temporadasVistas,series[0].temporadas)
}
function restarVista2()
{
    if(series[1].temporadasVistas>0)
    {document.getElementById("tem.vista2").innerHTML=series[1].temporadasVistas-=1}
    porcentaje2(series[1].temporadasVistas,series[1].temporadas)
}
function restarVista3()
{
    if(series[2].temporadasVistas>0)
    {document.getElementById("tem.vista3").innerHTML=series[2].temporadasVistas-=1}
    porcentaje2(series[1].temporadasVistas,series[1].temporadas)
}
//Para buscar una serie por el nombre
//Incompleto
function buscardor()
{
    series.filter(serie=>serie.nombre==document.getElementById("iBusqueda").value)
    
       

    
    
    
}
// Porcentaje
//Funciona
function porcentaje(vistas,porMirar)
{
    var resultado=(vistas*100) /porMirar
    document.getElementById("p1").innerHTML = resultado.toFixed()+"%"
}
function porcentaje2(vistas,porMirar)
{
    var resultado=(vistas*100) /porMirar
    document.getElementById("p2").innerHTML = resultado.toFixed()+"%"
}
function porcentaje3(vistas,porMirar)
{
    var resultado=(vistas*100) /porMirar
    document.getElementById("p3").innerHTML = resultado.toFixed()+"%"
}
//funcion para crear nuevas series
function crearSerie()
{
    serieNuevo= new seriess(document.getElementById("nombreDeLaSerie").value,document.getElementById("numeroDeTemporadas").value)
    series.push(serieNuevo);
    console.log(series)
}
// constructor de series
class seriess {
    constructor(nombre, temporadas) {
      this.nombre = nombre;
      this.temporadas = temporadas;
      this.temporadasVistas=0;
    }
  }





document.getElementById("primerNombre").innerHTML=nombreDeSeries[0]
document.getElementById("segundoNombre").innerHTML=nombreDeSeries[1]
document.getElementById("tercerNombre").innerHTML=nombreDeSeries[2]

document.getElementById("tem.vista2").innerHTML=series[1].temporadasVistas
document.getElementById("tem.vista3").innerHTML=series[2].temporadasVistas


//document.getElementById("primerNombre").innerHTML= serie.nombre;
