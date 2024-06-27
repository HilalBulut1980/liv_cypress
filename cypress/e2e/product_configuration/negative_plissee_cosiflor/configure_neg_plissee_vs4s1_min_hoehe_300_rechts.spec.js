var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s1_min_height_left",
    "produkt": "/plissee/lunara-1689",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "100",
    "hoehe_rechts": "230",
    "hoehe_rechts_new": "300",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS4S1 min. height right 300', () => {

    configurator.configure_neg_plissee(test)

})