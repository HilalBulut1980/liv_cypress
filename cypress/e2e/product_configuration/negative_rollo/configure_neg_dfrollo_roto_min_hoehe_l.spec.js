var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_Roto_and.Typ_H_min",
    "produkt": "/rollo/basic-3014",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Roto",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "299",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "300",
    "message": "Die minimale Höhe eines Rollos beträgt 300 mm."
}

describe('Test: configuration of neg DF Rollo test - Roto + anderer Typ min. Höhe', () => {

    configurator.configure_neg_rollo(test)

})