var configurator = require("../../../support/configurator_neg_insektenschutzrollo.js");

var test =
{
    "name": "LIVConfig. - Insekten.Rollo_Nuss_minHoehe",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "befestigung": "an der Hauswand",
    "farbe": "Nuss",
    "netzfarbe": "schwarz",
    "hoehe": "400",
    "breite": "1500",
    "hoehe_new": "500",
    "breite_new": "1500",
    "vorrichtung": "Hakenleiste",
    "message": "Die Höhe muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Rollo nuss min. Höhe', () => {

    configurator.configure_neg_insektenschutzrollo(test)

})