var configurator = require("../../../support/configurator_neg_raffrollo.js");

var test =
{
    "name": "LIV-raffrollo_breite_max",
    "produkt": "/raffrollo/corsia-9143",
    "hoehe": "200",
    "breite": "350",
    "breite_new": "300",
    "message": "Bitte geben Sie die Breite in Zentimeter im Bereich von 40 cm und 300 cm ein."
}

describe('Test: configuration of neg Raffrollo test - max. Breite', () => {

    configurator.configure_neg_raffrollo(test)

})