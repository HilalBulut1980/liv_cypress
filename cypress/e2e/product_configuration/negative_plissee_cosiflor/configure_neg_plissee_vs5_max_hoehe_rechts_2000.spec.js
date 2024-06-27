var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5_dirR_hoehe_rechts_max",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "2500",
    "hoehe_rechts_new": "2000",
    "breite_oben": "500",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 max. Höhe rechts 2000', () => {

    configurator.configure_neg_plissee(test)

})