var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df20_breite_max_1200",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1250",
    "df_glashoehe": "2000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1250",
    "df_fluegelhoehe": "2000",
    "df_glasbreite_new": "1250",
    "df_glashoehe_new": "1500",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1250",
    "df_fluegelhoehe_new": "1500",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Höhe beträgt 2200 mm, wenn die Breite von 1200 mm nicht überschritten wird. Alternativ können wir Plissees bis zu einer Breite von 1500 mm fertigen, wenn die Höhe maximal 1500 mm beträgt."
}

describe('Test: configuration of neg Plissee test - Basis DF20 max. Breite 1200', () => {

    configurator.configure_neg_plissee(test)

})