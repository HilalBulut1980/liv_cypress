var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s1_max_height_1500_right",
    "produkt": "/plissee/lunara-1689",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1500",
    "hoehe_links": "500",
    "hoehe_rechts": "2300",
    "hoehe_rechts_new": "1500",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als oder gleich 1500 mm sein."
}

describe('Test: configuration of neg Plissee test - VS4S1 max. Höhe 1500 rechts', () => {

    configurator.configure_neg_plissee(test)

})