var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-sd3_breite_max",
    "produkt": "/plissee/cadena-2277",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "2100",
    "breite_new": "2000",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - SD3 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})