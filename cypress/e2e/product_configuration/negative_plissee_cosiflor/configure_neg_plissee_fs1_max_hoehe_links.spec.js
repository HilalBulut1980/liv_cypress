var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_hoeheLinks_max",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "3000",
    "hoehe_rechts": "2000",
    "hoehe_links_new": "2600",
    "hoehe_rechts_new": "2200",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss kleiner als oder gleich 2600 mm sein."
}

describe('Test: configuration of neg Plissee test - FS1 max. Höhe links', () => {

    configurator.configure_neg_plissee(test)

})