var configurator = require("../../../support/configurator_neg_insektenschutzrollo.js");

var test =
{
    "name": "LIVConfig. - Insekten.Rollo_Weiß_maxHoehe",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "befestigung": "an der Hauswand",
    "farbe": "Weiß",
    "netzfarbe": "grau",
    "hoehe": "2500",
    "breite": "1500",
    "hoehe_new": "2400",
    "breite_new": "1500",
    "vorrichtung": "Hakenleiste",
    "message": "Die Höhe muss kleiner als oder gleich 2400 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Rollo weiß max. Höhe', () => {

    configurator.configure_neg_insektenschutzrollo(test)

})