var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df20_falz_max",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1500",
    "df_glashoehe": "1000",
    "df_falztiefe": "500",
    "df_fluegelbreite": "1500",
    "df_fluegelhoehe": "1000",
    "df_glasbreite_new": "1500",
    "df_glashoehe_new": "1000",
    "df_falztiefe_new": "200",
    "df_fluegelbreite_new": "1500",
    "df_fluegelhoehe_new": "1000",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Glasleistentiefe eines Plissee beträgt 200 mm."
}

describe('Test: configuration of neg Plissee test - Basis DF20 min. Falztiefe', () => {

    configurator.configure_neg_plissee(test)

})