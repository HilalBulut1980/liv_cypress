var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs9D_hoehe_max",
    "produkt": "/plissee/lucid-1457",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2500",
    "breite": "1000",
    "hoehe_new": "1600",
    "breite_new": "1200",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS9 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})