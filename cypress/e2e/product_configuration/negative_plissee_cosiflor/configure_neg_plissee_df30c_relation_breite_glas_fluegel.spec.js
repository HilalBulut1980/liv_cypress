var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df30C_flügel_glas_breite",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "1000",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1000",
    "df_glasbreite_new": "900",
    "df_fluegelbreite_new": "1000",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die Flügelbreite darf nicht kleiner als die Glasbreite sein."
}

describe('Test: configuration of neg Plissee test - DF30 Comfort Relation Breite Glas Flügel', () => {

    configurator.configure_neg_plissee(test)

})