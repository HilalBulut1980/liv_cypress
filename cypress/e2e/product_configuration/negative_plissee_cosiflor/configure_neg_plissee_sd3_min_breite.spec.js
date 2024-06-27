var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-sd3_breite_min",
    "produkt": "/plissee/cadena-2277",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "190",
    "breite_new": "200",
    "schienenfarbe": "Weiß",
    "message": "Die minimale Breite eines Plissee beträgt 200 mm."
}

describe('Test: configuration of neg Plissee test - SD3 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})