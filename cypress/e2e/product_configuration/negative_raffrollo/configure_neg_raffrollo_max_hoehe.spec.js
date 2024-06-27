var configurator = require("../../../support/configurator_neg_raffrollo.js");

var test =
{
    "name": "LIV-raffrollo_hoehe_max",
    "produkt": "/raffrollo/pezza-9170",
    "hoehe": "310",
    "breite": "200",
    "hoehe_new": "300",
    "message": "Bitte geben Sie die Höhe in Zentimeter im Bereich von 60 cm und 300 cm ein."

}

describe('Test: configuration of neg Raffrollo test - max. Höhe', () => {

    configurator.configure_neg_raffrollo(test)

})