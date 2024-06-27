var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s2_max_width",
    "produkt": "/plissee/lunara-1689",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1010",
    "breite_new": "1000",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 1000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS4S2 max. width 1000', () => {

    configurator.configure_neg_plissee(test)

})