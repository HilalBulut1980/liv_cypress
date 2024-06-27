var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f5_hoehe_min",
    "produkt": "/plissee/wabe-casato-4394",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "299",
    "breite": "1000",
    "hoehe_new": "300",
    "schienenfarbe": "Silber",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - F5 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})