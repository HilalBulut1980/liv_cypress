var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df20_finnenbreite_min",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "200",
    "df_glashoehe": "1200",
    "df_falztiefe": "50",
    "df_fluegelbreite": "100",
    "df_fluegelhoehe": "1200",
    "df_glasbreite_new": "300",
    "df_glashoehe_new": "1200",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "300",
    "df_fluegelhoehe_new": "1200",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Flügelinnenbreite eines Plissee beträgt 200 mm."
}

describe('Test: configuration of neg Plissee test - Basis DF20 min. Finnenbreite', () => {

    configurator.configure_neg_plissee(test)

})