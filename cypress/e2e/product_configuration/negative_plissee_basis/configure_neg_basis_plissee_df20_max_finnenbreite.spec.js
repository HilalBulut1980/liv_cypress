var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df20_finnenbreite_max",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "2000",
    "df_glashoehe": "1500",
    "df_falztiefe": "50",
    "df_fluegelbreite": "2000",
    "df_fluegelhoehe": "1500",
    "df_glasbreite_new": "1500",
    "df_glashoehe_new": "1500",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1500",
    "df_fluegelhoehe_new": "1500",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Flügelinnenbreite eines Plissee beträgt 1500 mm."
}

describe('Test: configuration of neg Plissee test - Basis DF20 max. Finnenbreite', () => {

    configurator.configure_neg_plissee(test)

})