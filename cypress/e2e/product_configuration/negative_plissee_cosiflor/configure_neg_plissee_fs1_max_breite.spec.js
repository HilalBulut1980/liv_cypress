var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_breite_max",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "1000",
    "breite_new": "800",
    "hoehe_links": "2000",
    "hoehe_rechts": "1500",
    "ausrichtung": "links",
    "message": "Die Breite muss kleiner als oder gleich 800 mm sein."
}

describe('Test: configuration of neg Plissee test - FS1 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})