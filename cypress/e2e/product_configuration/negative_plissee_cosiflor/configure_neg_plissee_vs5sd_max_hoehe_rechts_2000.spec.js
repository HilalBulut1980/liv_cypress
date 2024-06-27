var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5sd_dirR_hoehe_rechts_max",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "2200",
    "hoehe_rechts_new": "2000",
    "breite_oben": "500",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "message": "Die rechte Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 SD max. Höhe rechts 2000', () => {

    configurator.configure_neg_plissee(test)

})