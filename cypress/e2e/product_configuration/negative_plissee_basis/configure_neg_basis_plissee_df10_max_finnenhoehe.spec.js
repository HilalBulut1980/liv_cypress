var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df10_finnenhoehe_max_2200",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 1",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1500",
    "df_glashoehe": "2500",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1500",
    "df_fluegelhoehe": "2500",
    "df_glasbreite_new": "1200",
    "df_glashoehe_new": "2200",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1200",
    "df_fluegelhoehe_new": "2200",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Flügelinnenhöhe eines Plissee beträgt 2200 mm."
}

describe('Test: configuration of neg Plissee test - Basis DF10 max. Finnenhöhe', () => {

    configurator.configure_neg_plissee(test)

})