var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-sd2_hoehe_max_left",
    "produkt": "/plissee/cadena-2277",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1700",
    "breite": "1000",
    "hoehe_new": "1600",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss kleiner als oder gleich 1600 mm sein."
}

describe('Test: configuration of neg Plissee test - SD2 max. Höhe links', () => {

    configurator.configure_neg_plissee(test)

})