var configurator = require("../../../support/configurator_neg_insektenschutzrollo.js");

var test =
{
    "name": "LIVConfig. - Insekten.Rollo_Nuss_maxBreite",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "befestigung": "an der Hauswand",
    "farbe": "Nuss",
    "netzfarbe": "schwarz",
    "hoehe": "1500",
    "breite": "1610",
    "hoehe_new": "1500",
    "breite_new": "1600",
    "vorrichtung": "Hakenleiste",
    "message": "Die Breite muss kleiner als oder gleich 1600 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Rollo nuss max. Breite', () => {

    configurator.configure_neg_insektenschutzrollo(test)

})