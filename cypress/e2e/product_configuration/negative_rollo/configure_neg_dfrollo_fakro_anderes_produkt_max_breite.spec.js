var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_Fakro_and.Produkt_B_max",
    "produkt": "/rollo/horizon-blackout-3260",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Fakro",
    "df_produkt": "anderes Produkt",
    "df_falzart": "Schräger Falz",
    "df_fluegelbreite": "2000",
    "df_fluegelhoehe": "1000",
    "df_fluegelbreite_new": "1100",
    "df_fluegelhoehe_new": "1000",
    "message": "Die maximale Breite eines Rollos beträgt 1100 mm."
}

describe('Test: configuration of neg DF Rollo test - Fakro + anderes Produkt max. Breite', () => {

    configurator.configure_neg_rollo(test)

})