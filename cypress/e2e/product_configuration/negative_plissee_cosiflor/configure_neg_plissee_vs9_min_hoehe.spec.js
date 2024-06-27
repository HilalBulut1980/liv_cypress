var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs9D_hoehe_min",
    "produkt": "/plissee/lucid-1457",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "200",
    "breite": "1000",
    "hoehe_new": "300",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS9 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})