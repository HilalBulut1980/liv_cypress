var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs8_hoehe_max",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "4000",
    "hoehe_new": "1500",
    "breite_oben": "500",
    "breite_unten": "1500",
    "breite_unten_new": "1000",
    "ausrichtung": "links",
    "message": "Die Höhe muss kleiner als oder gleich 1500 mm sein."
}
describe('Test: configuration of neg Plissee test - VS8 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})