var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_Fakro_and.Produkt_H_min",
    "produkt": "/rollo/silves-3694",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Fakro",
    "df_produkt": "anderes Produkt",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "30",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "300",
    "message": "Die minimale Höhe eines Rollos beträgt 300 mm."
}

describe('Test: configuration of neg DF Rollo test - Fakro + anderes Produkt min. Höhe', () => {

    configurator.configure_neg_rollo(test)

})