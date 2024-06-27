var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs1_hoehe_max",
    "produkt": "/plissee/ambience-1357",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2300",
    "breite": "1000",
    "hoehe_new": "2200",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS1 max. Höhe 2200', () => {

    configurator.configure_neg_plissee(test)

})