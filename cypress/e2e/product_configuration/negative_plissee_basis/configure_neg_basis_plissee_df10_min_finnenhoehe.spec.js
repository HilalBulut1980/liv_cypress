var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df10_finnenhoehe_min",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 1",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "100",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "100",
    "df_glasbreite_new": "1000",
    "df_glashoehe_new": "300",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "300",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Flügelinnenhöhe eines Plissee beträgt 200 mm."
}

describe('Test: configuration of neg Plissee test - Basis DF10 min. Finnenhöhe', () => {

    configurator.configure_neg_plissee(test)

})