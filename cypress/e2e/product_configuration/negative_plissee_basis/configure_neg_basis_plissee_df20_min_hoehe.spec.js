var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df20_hoehe_min",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "100",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "200",
    "df_glasbreite_new": "1000",
    "df_glashoehe_new": "300",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "300",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Glashöhe eines Plissee beträgt 200 mm."
}

describe('Test: configuration of neg Plissee test - Basis DF20 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})