describe('Test: check if selected DF genormt is available with comfort/non-comfort', () => {

    it('DF20 genormt - check comfort / non-comfort with Fakro FYP-V 94 / 180 | Holz', function () {

        // nur als Comfort erhlältlich
        // Fakro FYP-V 94 / 180 | Holz
        // Fakro PTL 78 / 160 | Kunststoff
        // Fakro FTP-V 94 / 206 | Holz
        // Velux VX Flügeltyp 10 / 12 | Holz

        // nur als Non-Comfort erhältlich
        // Roto Roto 61_ 11 / 11 | Holz
        // Roto SA 11 / 16 | Kunststoff / Holz
        // Velux VX Flügeltyp 21 A | Holz

        // load PDP
        cy.visit('/plissee/duale-blackout-1424') // PG 4, R16 -55%

        // load configurator
        cy.get('.buttons > .buttons__configuration').click()

        //select tab DF
        cy.get('.tabs').children().contains('Dachfensterplissees').click({ force: true })
        // DF20 is preselected - following product is only available with comfort, therefore it shpuld be switched to DF20 Comfort afterwards

        // set Hersteller
        cy.get('.dfselect_wrapper > :nth-child(1) select').select('Velux')

        // set Produkt
        cy.get('.dfselect_wrapper > :nth-child(2) select').select('VX Flügeltyp')

        // set Typ
        cy.get('.dfselect_wrapper > :nth-child(3) select').select('10 / 12 | Holz') 
        // --> 609 x 390 comfort PG4
        // Preiskalkulation bei genormt LIV wie ungenormt LIV!! Preis nach Maßen in Preistabelle raussuchen

        // check if switched from df20 to df20c
        cy.get('.type-selector-left > ul').children().contains('DF20').parent('li').should('not.have.class', 'selected')
        cy.get('.type-selector-left > ul').children().contains('DF20 Comfort').parent('li').should('have.class', 'selected')

        // check prices
        cy.get('.old-price').should('contain', '231,00')
        cy.get('.special-price').should('contain', '103,95') //-55% 

        // add to cart
        // cy.get('#configurator-price-cart > .add-to-cart > #qty').clear().type('1')
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should('contain', '231,00')
        // red. Preis einzel
        cy.get('span[class="cart-price"] > div > .price').should('contain', '103,95')
    })
})