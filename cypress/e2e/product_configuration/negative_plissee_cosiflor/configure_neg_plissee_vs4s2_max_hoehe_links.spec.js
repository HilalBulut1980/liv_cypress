var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s2_max_height_2200_left",
    "produkt": "/plissee/wabe-glow-2165",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "2300",
    "hoehe_links_new": "2200",
    "hoehe_rechts": "1500",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss kleiner als oder gleich 2200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS4S2 max. Höhe 2200 links', () => {

    configurator.configure_neg_plissee(test)

})