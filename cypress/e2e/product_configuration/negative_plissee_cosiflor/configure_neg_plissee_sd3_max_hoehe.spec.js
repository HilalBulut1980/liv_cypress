var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-sd3_hoehe_max",
    "produkt": "/plissee/cadena-2277",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2100",
    "breite": "1000",
    "hoehe_new": "2000",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - SD3 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})