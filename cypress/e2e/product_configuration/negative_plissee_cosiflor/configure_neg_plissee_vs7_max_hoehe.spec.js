var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs7_hoehe_max",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS7",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1600",
    "hoehe_new": "1500",
    "breite_oben": "500",
    "breite_unten": "1500",
    "message": "Die Höhe muss kleiner als oder gleich 1500 mm sein."
}
describe('Test: configuration of neg Plissee test - VS7 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})