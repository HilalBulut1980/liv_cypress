var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV_vs9D_breite_max",
    "produkt": "/plissee/lucid-1457",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "2000",
    "breite_new": "1500",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 1500 mm sein."
}

describe('Test: configuration of neg Plissee test - VS9 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})