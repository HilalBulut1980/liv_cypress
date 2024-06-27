describe('Configuration of schiebegardine gesamt with edit in cart', () => {

    it('edit product in cart - schiebegardine gesamtsystem', function () {


        cy.visit('/schiebegardinen/schiebegardinen-konfigurator')

        // select Gesamtsysteme
        cy.contains('Schiebegardine mit Schienensystem').click({ force: true })

        // Aris 7348 preselected --> PG 3

        // set Höhe
        cy.get('#hoehe_in_mm input').type('3000')

        // set Breite
        cy.get('#breite_in_mm input').type('4000') // --> 3000x4000

        // Anzahl der Paneele vorgegeben: 4
        // Breite der Paneele: X = (4000-50) /4 +50 = 1037,50 --> 1038mm
        // Paneelpreis= 3000x1038 ==> 255,00 ==> x4 ==> 1020,00
        // + Schiene 2-Lauf ==> +124,00 = 1144,00

        // Paneele bearbeiten
        cy.get('#check_individual input').check({ force: true })

        // neue Stoffe und Maße pro Paneel
        var stoffe = ['Lokela 7304', 'Vilana 7305', 'Philo 7324', 'Ukko 7328']  // PG2, PG2, PG1, PG3
        var hoehen = ['2000', '2500', '3000', '3000']
        var breiten = ['900', '1000', '1100', '1200']
        // Stoffpreise = [135, 171, 170, 275] = 751

        for (var j = 1, i = 0; i <= 3; i++, j++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') input[type="button"]').click({ force: true })
            cy.get('#material-collection > ul > li').contains(stoffe[i]).click()
            cy.contains('Auswahl übernehmen').click({ force: true })
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').clear().type(breiten[i])
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').clear().type(hoehen[i])
        }

        // set Schienenlauf 4
        cy.get('#schienenlaeufe-wahlen > :nth-child(1) > div > ul').children().contains('4').click({ force: true }) // +156,00

        // set Montage an der Wand
        cy.contains(new RegExp("^" + "Montage an der Wand" + "\\s*$")).click() // +42,00

        // Streichpreis: 751 + 156 + 42 = 949
        // red. Preis: 375,50 + 78 + 42 = 495,50

        // add to cart
        cy.get('#qty').clear().type('2')
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "949,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "495,50")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "1.898,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "991,00")

        // click 'Artikel bearbeiten'
        cy.contains('Artikel bearbeiten').click()

        // back to configurator

        // Paneele bearbeiten
        // cy.get('#check_individual input').check({ force: true })
        // --> it is already checked <--

        // neue Stoffe und Maße pro Paneel
        var stoffe_new = ['Piara 7279', 'Pika 7325', 'Salomo 7346', 'Naru 7297']  // PG1, PG1, PG2, PG3
        var hoehen_new = ['1500', '2000', '2500', '3000']
        var breiten_new = ['800', '900', '1000', '1100']
        // Stoffpreise_new = [95, 114, 171, 255] = 635

        for (var j = 1, i = 0; i <= 3; i++, j++) {
            // check old product names of all panels
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > :nth-child(1) > .product_name').should('contain', stoffe[i])
            // set new product names
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') input[type="button"]').click({ force: true })
            cy.get('#material-collection > ul > li').contains(stoffe_new[i]).click()
            cy.contains('Auswahl übernehmen').click({ force: true })
            // check if old widths are still existing
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ')').find('.optional_paneele_sizes').find('div').first().get('input[name=' + breiten[i] + ' ]').should('exist')
            // check if old heights are still existing
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ')').find('.optional_paneele_sizes').find('div').eq(1).get('input[name=' + hoehen[i] + ' ]').should('exist')
            // set new heights and widths
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').clear().type(breiten_new[i])
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').clear().type(hoehen_new[i])
        }

        // Streichpreis: 635 + 156 + 42 = 833
        // red. Preis: 317,50 + 78 + 42 = 437,50


        // add to cart
        // quantity: should be the same as before
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "833,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "437,50")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "1.666,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "875,00")

        // proceed to checkout
        cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // check checkout page
        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test
    })
})