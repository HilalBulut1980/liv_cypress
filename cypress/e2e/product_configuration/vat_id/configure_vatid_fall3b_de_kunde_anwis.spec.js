var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3b Deutschland - Kunde",
    "produkt": "/plissee/puro-4256",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50
    "supplier": "Anwis",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Genormt",
    "df_hersteller": "Braas",
    "df_produkt": "BA-DO",
    "df_typ": "115/200 oben|Kunststoff",  //1290 x 1070 //--> Preise aus Datei 'basisplissee-preisliste.xlsx' und Sheet 'Dachfenster Inline Plissee'
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 288,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "DE136627286",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_DE_2@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Deutschland",
    "state_code": "DE",
    "phone": "",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "",
    "state2": "",
    "phone2": "",
    "payment": "bankpayment"
}

describe('Test: configuration vat ID order - Fall 3b AT', () => {

     it('check testaccount uid_DE_2@delphinus-test.de', function () {
        //check/create testaccount --- uid_DE_2@delphinus-test.de ---
        // cy.visit('/scripts/customers/testaccounts.php?email=uid_DE_2@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=Deutschland%202&billing_company=Test%20GmbH&billing_vatid=DE136627286&password=Abcde_12345&billing_street=Teststraße%201&billing_postcode=12345&billing_city=Teststadt&billing_country=DE&shipping_vatid=DE136627286&shipping_street=Teststraße%201&shipping_postcode=12345&shipping_city=Teststadt&shipping_country=DE')
    })

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)
    })
})