var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_hoeheRechts_min",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "200",
    "hoehe_rechts": "100",
    "hoehe_rechts_new": "300",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - FS1 min. Höhe rechts', () => {

    configurator.configure_neg_plissee(test)

})