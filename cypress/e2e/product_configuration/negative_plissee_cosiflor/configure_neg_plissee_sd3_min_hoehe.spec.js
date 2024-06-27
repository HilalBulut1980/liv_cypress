var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-sd3_hoehe_min",
    "produkt": "/plissee/cadena-2277",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "190",
    "breite": "1000",
    "hoehe_new": "200",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss größer als oder gleich 200 mm sein."
}

describe('Test: configuration of neg Plissee test - SD3 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})