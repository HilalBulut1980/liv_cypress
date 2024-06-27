var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f5_hoehe_max_1500",
    "produkt": "/plissee/wabe-ballina-2144",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1600",
    "breite": "1500",
    "hoehe_new": "1500",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 1500 mm sein."  // Wabe-Eterno und Wabe-Ballina only till 1500 mm --> LIV-5484
}

describe('Test: configuration of neg Plissee test - F5 max. Höhe 1500', () => {

    configurator.configure_neg_plissee(test)

})