var configurator = require("../../../support/configurator_neg_insektenschutzrollo.js");

var test =
{
    "name": "LIVConfig. - Insekten.Rollo_Eiche_minBreite",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "befestigung": "Klebemontage",
    "farbe": "Eiche",
    "netzfarbe": "schwarz",
    "hoehe": "1500",
    "breite": "500",
    "hoehe_new": "1500",
    "breite_new": "600",
    "vorrichtung": "Hakenleiste",
    "message": "Die Breite muss größer als oder gleich 600 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Rollo eiche min. Breite', () => {

    configurator.configure_neg_insektenschutzrollo(test)

})