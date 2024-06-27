var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_hoeheLinks_min",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "100",
    "hoehe_rechts": "2000",
    "hoehe_links_new": "300",
    "hoehe_rechts_new": "200",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - FS1 min. Höhe links', () => {

    configurator.configure_neg_plissee(test)

})