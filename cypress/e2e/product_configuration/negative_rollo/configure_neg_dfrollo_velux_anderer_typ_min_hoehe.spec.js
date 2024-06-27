var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_Velux_and.Typ_H_min",
    "produkt": "/rollo/silves-3694",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Velux",
    "df_produkt": "Prestige 2003",
    "df_typ": "anderer Typ",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "30",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "300",
    "message": "Die minimale Höhe eines Rollos beträgt 300 mm."
}

describe('Test: configuration of neg DF Rollo test - Velux + anderer Typ min. Höhe', () => {

    configurator.configure_neg_rollo(test)

})