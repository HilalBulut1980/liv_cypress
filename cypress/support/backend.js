// main product - first line
var mainProduct = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(4)';
var mainProduct_total = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(10)';
// second line
var side1 = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(4)';
var side1_total = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(10)';
// third line
var side2 = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(4)';
var side2_total = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(10)';
// fourth line
var side3 = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(4)';
var side3_total = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(10)';
// fifth line
var side4 = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(4)';
var side4_total = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(10)';
// sixth line
var side5 = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(4)';
var side5_total = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(10)';

module.exports = {

    login: function login() {
        cy.get('#username').type(Cypress.env('backend_user'))
        cy.get('#login').type(Cypress.env('backend_passw'))
        // cy.get('input[title="Anmelden"]').click()
        cy.get('button[type="submit"]').click()
    },

    getOrder: function getOrder(orderNumber) {

        //go to Bestellungen
        cy.contains('Bestellungen').click({ force: true })

        //selecting a specific order 
        cy.get('tbody').children().contains(orderNumber).click()

        //GET last order 
        //cy.get('#sales_order_grid_table > tbody > :nth-child(1)').click()

    },

    checkOrder: function checkOrder(system, shipping, rabattCode, rabattBetrag, rabattBetrag2, vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal, final_backend, final_backend_total, nebenProdukt1, nebenProdukt1_total, nebenProdukt2, nebenProdukt2_total, nebenProdukt3, nebenProdukt3_total, nebenProdukt4, nebenProdukt4_total, nebenProdukt5, nebenProdukt5_total, total_backend) {

        

        if ((system == 'Muster') || (system == 'Muster_V')) {
            final_backend = "0,00";
            final_backend_total = "0,00";
            total_backend = "0,00";
        }


        //HAUPTPRODUKT
        // check_lineUnit(final_backend)  //  EINZELPREIS 
        // check_lineTotal(final_backend_total) //  ZEILENSUMME

        cy.get(mainProduct).should(($txt) => {
            expect($txt).to.contain(final_backend)
        })
        cy.get(mainProduct_total).should(($txt) => {
            expect($txt).to.contain(final_backend_total)
        })


        //CHECK RABATT IF EXISTING
        if (typeof rabattCode !== "undefined") { //if Code exists

            //the rabatt amount is placed in the 9th column
            cy.get('.data.order-tables > tbody > :nth-child(1) > :nth-child(9)').should("contain", rabattBetrag)
        }



        //NEBENPRODUKT 1 --> FALLS EXISTENT
        if (typeof nebenProdukt1 !== "undefined" && nebenProdukt1 != "0,00") {

            cy.log('POSITION 2')
            cy.log(nebenProdukt1)
            cy.log(nebenProdukt1_total)

            cy.get(side1).should(($txt) => {
                expect($txt).to.contain(nebenProdukt1)
            })
            cy.get(side1_total).should(($txt) => {
                expect($txt).to.contain(nebenProdukt1_total)
            })

            //CHECK RABATT OF NEBENPRODUKT IF EXISTING
            if (typeof rabattCode !== "undefined") { //if Code exists

                //the rabatt amount is placed in the 9th column
                cy.get('.data.order-tables > tbody > :nth-child(1) > :nth-child(9)').should("contain", rabattBetrag2)
            }
        }

        //NEBENPRODUKT 2
            if (typeof nebenProdukt2 !== "undefined" && nebenProdukt2 !== "0,00") {

            cy.log('POSITION 3')
            cy.log(nebenProdukt2)
            cy.log(nebenProdukt2_total)

            cy.get(side2).should(($txt) => {
                expect($txt).to.contain(nebenProdukt2)
            })
            cy.get(side2_total).should(($txt) => {
                expect($txt).to.contain(nebenProdukt2_total)
            })
        }

        //NEBENPRODUKT 3
        if (typeof nebenProdukt3 !== "undefined"  && nebenProdukt3 !== 0) { //wenn 3. Nebenprodukt existiert - aktuell nur bei Schiebegardinen mit Gardinaschienen

            cy.log('POSITION 4')
            cy.log(nebenProdukt3)
            cy.log(nebenProdukt3_total)

            cy.get(side3).should(($txt) => {
                expect($txt).to.contain(nebenProdukt3)
            })
            cy.get(side3_total).should(($txt) => {
                expect($txt).to.contain(nebenProdukt3_total)
            })
        }

        //NEBENPRODUKT 4
        if (typeof nebenProdukt4 !== "undefined") { //wenn 4. Nebenprodukt existiert - aktuell nur bei Schiebegardinen mit Gardinaschienen

            cy.log('POSITION 5')
            cy.log(nebenProdukt4)
            cy.log(nebenProdukt4_total)

            cy.get(side4).should(($txt) => {
                expect($txt).to.contain(nebenProdukt4)
            })
            cy.get(side4_total).should(($txt) => {
                expect($txt).to.contain(nebenProdukt4_total)
            })
        }

        //NEBENPRODUKT 5
        if (typeof nebenProdukt5 !== "undefined" && nebenProdukt5 != 0) { //wenn 5. Nebenprodukt existiert - aktuell nur bei Schiebegardinen mit Gardinaschienen

            cy.log('POSITION 6')
            cy.log(nebenProdukt5)
            cy.log(nebenProdukt5_total)

            cy.get(side5).should(($txt) => {
                expect($txt).to.contain(nebenProdukt5)
            })
            cy.get(side5_total).should(($txt) => {
                expect($txt).to.contain(nebenProdukt5_total)
            })
        }


        // ************************** CHECK ALL VATS ****************************************
        checkVAT(vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal)


        // ************************** CHECK SHIPPING COST ****************************************
        cy.contains('Versandkosten').next().should("contain", shipping)


        // ************************** CHECK RABATT ****************************************

        if (typeof nebenProdukt1 !== "undefined" && typeof rabattCode !== "undefined") { // e.g. --> Kissenhüllenset (Vorhang + Kissen)

            cy.log('Fall A')

            rabattBetrag = rabattBetrag.replace(/,/g, '.')
            rabattBetrag2 = rabattBetrag2.replace(/,/g, '.')
            cy.log(rabattBetrag)
            cy.log(rabattBetrag2)

            var rabattBetragTotal = (parseFloat(rabattBetrag) + parseFloat(rabattBetrag2)).toFixed(2).toString().replace('.', ',')
            cy.log(rabattBetragTotal)

            cy.contains(rabattCode).next().should("contain", rabattBetragTotal)
        }
        else if (typeof rabattCode !== "undefined") {

            cy.log('Fall B')

            cy.contains(rabattCode).next().should("contain", rabattBetrag)
        }

        // ************************** CHECK RABATT 2 (Nebenprodukt) ****************************************
        /* if (typeof nebenProdukt1 !== "undefined" && rabattBetrag2 !== "undefined")  { 
 
             cy.contains(rabattCode2).next().should("contain", rabattBetrag2)
         }*/


        // ************************** CHECK TOTAL PRICE ****************************************
        cy.contains('Gesamtsumme').parent().next().should("contain", total_backend)

    },

    // ************************** LOGOUT ****************************************
    logout: function logout() {
        cy.contains('Abmelden').click({ force: true })
    }
}





// ************************** HELPING FUNCTIONS ****************************************

// var field_totals = '.data.order-tables > tbody > :nth-child(1) > :nth-child(10)';
// var field_units = '.data.order-tables > tbody > :nth-child(1) > :nth-child(4)';



function check_lineUnit(value) {
    cy.get(field_units).should(($txt) => {
        expect($txt).to.contain(value)
    })
}

function check_lineTotal(value) {
    cy.get(field_totals).should(($txt) => {
        expect($txt).to.contain(value)
    })
}

function checkVAT(vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal) {

    cy.log('checkvat1: ' + vatRate1)
    cy.log('checkvat2: ' + vatRate2)
    cy.log('checkvat3: ' + vatRate3)
    cy.log('checkvat4: ' + vatRate4)
    cy.log('checkvat5: ' + vatRate5)
    cy.log('checkvat6: ' + vatRate6)

    // vat of main product - first line
    var posVat_1 = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(8)';
    var posAmount_1 = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(7)';
    // second line
    var posVat_2 = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(8)';
    var posAmount_2 = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(7)';
    // third line
    var posVat_3 = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(8)';
    var posAmount_3 = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(7)';
    // fourth line
    var posVat_4 = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(8)';
    var posAmount_4 = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(7)';
    // fifth line
    var posVat_5 = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(8)';
    var posAmount_5 = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(7)';
    // sixth line
    var posVat_6 = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(8)';
    var posAmount_6 = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(7)';



    var vatRates = [vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6]
    var vatRatesPos = [posVat_1, posVat_2, posVat_3, posVat_4, posVat_5, posVat_6]
    var vatAmounts = [vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6]
    var vatAmountsPos = [posAmount_1, posAmount_2, posAmount_3, posAmount_4, posAmount_5, posAmount_6]

    for (var i = 0; i <= 5; i++) {
        if (typeof vatRates[i] !== "undefined") {  //solange eine Mwst existiert...
            cy.get(vatRatesPos[i]).should('contain', vatRates[i] + '%')
            cy.get(vatAmountsPos[i]).should('contain', vatAmounts[i])
        }
    }

    // vat total 
    var field_vatTotal = '.order-totals > table > tbody'

    //check vat total
    cy.get(field_vatTotal).children().contains('Gesamtbetrag Steuern').parent().siblings().should('contain', vatTotal)
}
