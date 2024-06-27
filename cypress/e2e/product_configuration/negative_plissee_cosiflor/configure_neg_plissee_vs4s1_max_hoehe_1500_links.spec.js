var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s1_max_height_1500_left",
    "produkt": "/plissee/lunara-1689",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1500",
    "hoehe_links": "2300",
    "hoehe_links_new": "1500",
    "hoehe_rechts": "500",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss kleiner als oder gleich 1500 mm sein."
}

describe('Test: configuration of neg Plissee test - VS4S1 max. Höhe 1500 links', () => {

    configurator.configure_neg_plissee(test)

})