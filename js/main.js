
//CREO ARRAY CON LE AUTO
let cars = [
    {
        marca: "Fiat",
        modello: "Punto",
        alimentazione: "benzina"
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "gpl"
    },
    {
        marca: "Opel",
        modello: "Corsa",
        alimentazione: "gpl"
    },
    {
        marca: "Opel",
        modello: "Mokka",
        alimentazione: "diesel"
    },
    {
        marca: "Fiat",
        modello: "Bravo",
        alimentazione: "diesel"
    },
    {
        marca: "Audi",
        modello: "A4",
        alimentazione: "ibrido"
    },
    {
        marca: "Toyota",
        modello: "Hylux",
        alimentazione: "benzina"
    },
    {
        marca: "Nissan",
        modello: "Micra",
        alimentazione: "ibrida"
    },
    {
        marca: "Ferrari",
        modello: "Enzo",
        alimentazione: "benzina"
    },
    {
        marca: "Lamborghini",
        modello: "Murcielago",
        alimentazione: "benzina"
    },
];
console.log(cars)


//CREO ARRAY DELLE TIPOLOGIE DI AUTO

let listaBenzina = [];
let listaDiesel = [];
let listaRestanti = [];


//--------------- FUNZIONI ------------------

cars.forEach(function(auto){
    if (auto.alimentazione == "benzina") {
        listaBenzina.push(auto);
    } else if (auto.alimentazione == "diesel") {
        listaDiesel.push(auto);
    } else {
        listaRestanti.push(auto);
    }
});

function printObjectBenzina(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

function printObjectDiesel(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

function printObjectAltre(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

function printArrayBenzina(arrayBenzina) {
    for (let i = 0; i < arrayBenzina.length; i++) {

        let benzina = arrayBenzina[i];

        console.log("La " + (i +1) + "° macchina a benzina è:");
        printObjectBenzina(benzina);
    }
}

function printArrayDiesel(arrayDiesel) {
    for (let i = 0; i < arrayDiesel.length; i++) {

        let diesel = arrayDiesel[i];

        console.log("La " + (i +1) + "° macchina a diesel è:");
        printObjectDiesel(diesel);
    }
}


function printArrayRestante(arrayRestante) {
    for (let i = 0; i < arrayRestante.length; i++) {

        let restante = arrayRestante[i];

        console.log("La " + (i +1) + "° macchina ad altra alimentazione è:");
        printObjectAltre(restante);
    }
}


//STAMPO GLI ARRAY
console.log(listaBenzina);
console.log(listaDiesel);
console.log(listaRestanti);

printArrayBenzina(listaBenzina);
printArrayDiesel(listaDiesel);
printArrayRestante(listaRestanti);