// variables
let semanaMayorVenta: number;
let mesMayorVenta: string;
    }
let vendedores: string[] = new Array(
  "camila",
  "franco",
  "sofía",
  "matías",
  "agustina"
);
let camila: number[] = new Array(
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
);
let franco: number[] = new Array(
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
);
let sofia: number[] = new Array(
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
);
let matias: number[] = new Array(
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
);
let agustina: number[] = new Array(
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
);

let semana: number[] = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
let mes: string[] =new Array("enero", "febrero", "marzo");

//Para cada vendedor mostrar:
	//1- su nombre y su venta máxima indicando semana y mes de la misma.

//funciones

let ventaMaxima = (vendedor: number[], semana: number[], mes: number[]): number => {
  let ventMax: number = 0;
  for (let indice = 0; indice < vendedor.length; indice++) {
    if (vendedor[indice] > ventMax) {
      ventMax = vendedor[indice];
      semanaMayorVenta = semana[indice];
      mesMayorVenta = mes[indice]
    }
  }
  return ventMax;
};



console.log("la mayor venta de camila fue " ventaMaxima(camila, semana, mes), "mes" mesMayorVenta, "semana" semanaMayorVenta);
console.log("la mayor venta de franco fue " ventaMaxima(franco,semana, mes), "mes" mesMayorVenta, "semana" semanaMayorVenta);
console.log("la mayor venta de sofia fue " ventaMaxima(sofia, semana, mes), "mes" mesMayorVenta, "semana" semanaMayorVenta);
console.log("la mayor venta de matias fue " ventaMaxima(matias, semana, mes), "mes" mesMayorVenta, "semana" semanaMayorVenta);
console.log("la mayor venta de agustina fue " ventaMaxima(agustina, semana, mes), "mes" mesMayorVenta, "semana" semanaMayorVenta);

//2 su nombre y su venta mínima indicando semana y mes de la misma.


let ventaMinima = (vendedor: number[], semana: number[], mes: number[]): number => {
  let ventMin: number = 0;
  for (let indice = 0; indice < vendedor.length;indice++) {
    if (vendedor[indice] < ventMin) {
      ventMin = vendedor[indice];
      semanaMenorVenta = semana[indice];
      mesMenorVenta = mes[indice]
    }
  }
  return ventMin;
};



console.log("la menor venta de camila fue ", ventaMinima(camila, semana, mes), "mes" mesMenorVenta);
console.log("la menor venta de franco fue ", ventaMinima(franco,semana, mes), "mes" mesMenorVenta);
console.log("la menor venta de sofia fue ", ventaMinima(sofia, semana, mes), "mes" mesMenorVenta);
console.log("la menor venta de matias fue ", ventaMinima(matias, semana, mes), "mes" mesMenorVenta");
console.log("la menor venta de agustina fue  ", ventaMinima(agustina, semana, mes), "mes" mesMenorVenta);


  //3- su nombre y su promedio trimestral de ventas.
  
let calcularpromedioTrimestre =  (vendedor:number[]):number=>{
  let ventas : number =0;
  let promedio: number = 0;
  for ( indice=0; indice< ventasvendedor.length; indice++){
    suma+=vendedor[indice];
  }
  promedio = suma/ventasvendedor.length;
  return promedio ;
};

  //4- su nombre y su promedio mensual de ventas.
  












/*
Entre todos los vendedores calcular:
	5- nombre y monto vendido del mejor vendedor de cada semana.
	6- nombre y suma de montos vendidos del mejor vendedor de cada mes
	7- nombre y suma de montos vendidos del peor vendedor de cada mes
	8- nombre y suma de montos vendidos de peor vendedor del trimestre
Tenga en cuenta que cada valor en los arreglos es la venta de una semana,
y que cuatro semanas forman un mes*/
