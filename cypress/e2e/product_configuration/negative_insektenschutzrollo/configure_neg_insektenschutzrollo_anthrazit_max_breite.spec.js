var configurator = require("../../../support/configurator_neg_insektenschutzrollo.js");

var test =
{
    "name": "LIVConfig. - Insekten.Rollo_Anthrazit_maxBreite",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "befestigung": "an der Mauer",
    "farbe": "Anthrazit",
    "netzfarbe": "grau",
    "hoehe": "1500",
    "breite": "1650",
    "hoehe_new": "1500",
    "breite_new": "1600",
    "vorrichtung": "Hakenleiste",
    "message": "Die Breite muss kleiner als oder gleich 1600 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Rollo anthrazit max. Breite', () => {

    configurator.configure_neg_insektenschutzrollo(test)

})