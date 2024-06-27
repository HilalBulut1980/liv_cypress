var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_Velux_and.Produkt_H_max",
    "produkt": "/rollo/basic-dimout-3686",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Velux",
    "df_produkt": "anderes Produkt",
    "df_falzart": "Schräger Falz",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "1600",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "1500",
    "message": "Die maximale Höhe eines Rollos beträgt 1500 mm."
}

describe('Test: configuration of neg DF Rollo test - Velux + anderes Produkt max. Höhe', () => {

    configurator.configure_neg_rollo(test)

})