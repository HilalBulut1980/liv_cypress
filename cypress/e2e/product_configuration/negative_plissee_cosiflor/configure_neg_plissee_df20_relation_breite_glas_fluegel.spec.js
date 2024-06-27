var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df20_flügel_glas_breite",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1000",
    "df_glasbreite_new": "900",
    "df_glashoehe_new": "1000",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "1000",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die Flügelbreite darf nicht kleiner als die Glasbreite sein."
}


describe('Test: configuration of neg Plissee test - DF20 Relation Breite Glas Flügel', () => {

    configurator.configure_neg_plissee(test)

})