var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df30C_falz_max",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "900",
    "df_glashoehe": "1300",
    "df_falztiefe": "300",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1300",
    "df_falztiefe_new": "50",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Glasleistentiefe des Dachfensters darf maximal 200 mm betragen."
}

describe('Test: configuration of neg Plissee test - DF30 Comfort max. Falztiefe', () => {

    configurator.configure_neg_plissee(test)

})