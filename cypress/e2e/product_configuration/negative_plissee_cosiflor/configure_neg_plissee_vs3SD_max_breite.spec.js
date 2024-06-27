var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs3SD_breite_max",
    "produkt": "/plissee/solea-1702",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "1100",
    "breite_new": "1000",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 1000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS3 SD max. Breite', () => {

    configurator.configure_neg_plissee(test)

})