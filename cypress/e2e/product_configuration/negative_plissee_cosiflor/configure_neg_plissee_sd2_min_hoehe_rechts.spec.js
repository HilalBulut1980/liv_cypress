var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-sd2_hoehe_min_right",
    "produkt": "/plissee/cadena-2277",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "150",
    "breite": "1000",
    "hoehe_new": "200",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss größer als oder gleich 200 mm sein."
}

describe('Test: configuration of neg Plissee test - SD2 min. Höhe rechts', () => {

    configurator.configure_neg_plissee(test)

})