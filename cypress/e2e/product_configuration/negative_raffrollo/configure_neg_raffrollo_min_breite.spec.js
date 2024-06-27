var configurator = require("../../../support/configurator_neg_raffrollo.js");

var test =
{
    "name": "LIV-raffrollo_breite_min",
    "produkt": "/raffrollo/luogo-9107",
    "hoehe": "200",
    "breite": "29",
    "breite_new": "40",
    "message": "Bitte geben Sie die Breite in Zentimeter im Bereich von 40 cm und 300 cm ein."
}

describe('Test: configuration of neg Raffrollo test - min. Breite', () => {

    configurator.configure_neg_raffrollo(test)

})