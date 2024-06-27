var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df20_falz_min",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1500",
    "df_glashoehe": "1000",
    "df_falztiefe": "20",
    "df_fluegelbreite": "1500",
    "df_fluegelhoehe": "1000",
    "df_glasbreite_new": "1500",
    "df_glashoehe_new": "1000",
    "df_falztiefe_new": "30",
    "df_fluegelbreite_new": "1500",
    "df_fluegelhoehe_new": "1000",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Glasleistentiefe eines Plissee beträgt 30 mm."
}

describe('Test: configuration of neg Plissee test - Basis DF20 min. Falztiefe', () => {

    configurator.configure_neg_plissee(test)

})