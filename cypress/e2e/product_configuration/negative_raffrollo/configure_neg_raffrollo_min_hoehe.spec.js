var configurator = require("../../../support/configurator_neg_raffrollo.js");

var test =
{
    "name": "LIV-raffrollo_hoehe_min",
    "produkt": "/raffrollo/gola-9013",
    "hoehe": "50",
    "breite": "100",
    "hoehe_new": "60",
    "message": "Bitte geben Sie die Höhe in Zentimeter im Bereich von 60 cm und 300 cm ein."
}

describe('Test: configuration of neg Raffrollo test - min. Höhe', () => {

    configurator.configure_neg_raffrollo(test)

})