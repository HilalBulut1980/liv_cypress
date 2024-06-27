# Continious Testing for Livoneo with Cypress.io 

[Test structure](#markdown-header-test-structure)  
[Test diagram](#markdown-header-test-diagramme)  
[Local testing](#markdown-header-local-testing)  
[Scheduled CI testruns](#markdown-header-scheduled-testruns)  
[Manual CI testruns](#markdown-header-manual-testruns)  
[Run personal selection](#markdown-header-how-to-run-a-personal-selection-of-specfiles)   
[Various hints](#markdown-header-various-hints)  

## Test structure 

- Each spec.js-file is a separate test case. 

- The .spec.js files are located in the respective folder of each specgroup, i.e.:  
.  
    - _cypress/e2e/product_configuration/plissee_cosiflor/**configure_cosiflor_f1_direkt.spec.js**_  
.

- Negativ testcases are designated with 'neg'. Currently we have the following distinct specgroups:    
.  

    - [doppelrollo](cypress/e2e/product_configuration/doppelrollo/)  
    - [fliegengitter](cypress/e2e/product_configuration/fliegengitter/)  
    - [gutschein](cypress/e2e/product_configuration/gutschein/)  
    - [holzjalousie](cypress/e2e/product_configuration/holzjalousie/)  
    - [insektenschutzrollo](cypress/e2e/product_configuration/insektenschutzrollo/)  
    - [jalousie](cypress/e2e/product_configuration/jalousie/)  
    - [kissenhuellen_einzeln](cypress/e2e/product_configuration/kissenhuellen_einzeln/)  
    - [kissenhuellen_set](cypress/e2e/product_configuration/kissenhuellen_set/)  
    - [muster](cypress/e2e/product_configuration/muster/)  
    - [negative_doppelrollo](cypress/e2e/product_configuration/negative_doppelrollo/)  
    - [negative_fliegengitter](cypress/e2e/product_configuration/negative_fliegengitter/)  
    - [negative_holzjalousie](cypress/e2e/product_configuration/negative_holzjalousie/)  
    - [negative_insektenschutzrollo](cypress/e2e/product_configuration/negative_insektenschutzrollo/)  
    - [negative_jalousie](cypress/e2e/product_configuration/negative_jalousie/)  
    - [negative_paypal](cypress/e2e/product_configuration/negative_paypal/)  
    - [negative_plissee_basis](cypress/e2e/product_configuration/negative_plissee_basis/)  
    - [negative_plissee_cosiflor](cypress/e2e/product_configuration/negative_plissee_cosiflor/)  
    - [negative_raffrollo](cypress/e2e/product_configuration/negative_raffrollo/)  
    - [negative_rollo](cypress/e2e/product_configuration/negative_rollo/)  
    - [negative_schiebegardine](cypress/e2e/product_configuration/negative_schiebegardine/)  
    - [negative_vatid](cypress/e2e/product_configuration/negative_vatid/)  
    - [negative_vorhang](cypress/e2e/product_configuration/negative_vorhang/)  
    - [paypal](cypress/e2e/product_configuration/paypal/)  
    - [plissee_basis](cypress/e2e/product_configuration/plissee_basis/)  
    - [plissee_cosiflor](cypress/e2e/product_configuration/plissee_cosiflor/)  
    - [rabattcodes](cypress/e2e/product_configuration/rabattcodes/)  
    - [raffrollo](cypress/e2e/product_configuration/raffrollo/)  
    - [rollo](cypress/e2e/product_configuration/rollo/)  
    - [schiebegardinen](cypress/e2e/product_configuration/schiebegardinen/)  
    - [serviceprodukt](cypress/e2e/product_configuration/serviceprodukt/)  
    - [user](cypress/e2e/product_configuration/user/)  
    - [vat_id](cypress/e2e/product_configuration/vat_id/)  
    - [vorhang](cypress/e2e/product_configuration/vorhang/)  
    - [zubehoer_plissee](cypress/e2e/product_configuration/zubehoer_plissee/)  
    - [zubehoer_rollo](cypress/e2e/product_configuration/zubehoer_rollo/)  
    - [zubehoer_schiebegardinen](cypress/e2e/product_configuration/zubehoer_schiebegardinen/)  
    - [zubehoer_vorhang](cypress/e2e/product_configuration/zubehoer_vorhang/)  
.  

- Every specgroup directory contains a textfile "speclist.txt" with the list of available .spec.js files    

.  

![speclist](IMAGES/speclist.png)

.  

- The default pipeline of this repository automatically checks on every push to the repository, whether there are changes in the cypress/e2e/product_configuration directory and its subdirectories and updates the respective speclist.txt files accordingly.  
.  

- Within the .spec.js file a configurator method is called, i.e. **configureSpecialForms()**. This method includes all set() functions that are required for the configuration of the product/test and is exported from, i.e.: 
    - _`cypress/support/configurator_doppelrollo.js`_  
.  

- Within the configurator files the methods _`checkPricePerLine()`_, _`checkTotals()`_ and _`proceedToCheckout()`_ from **support/cart.js** and _`checkOut()`_, _`checkFinalPrices()`_ and _`placeOrder()`_ from **support/checkout.js** are called.  
    - _`checkPricePerLine()`_ verifies all prices inside the cart  
    - _`checkTotals()`_ verifies the totals below the cart  
    - _`proceedToCheckout()`_  
    - _`checkOut()`_ includes all functions that are required to set the customer data, check shipping costs and check final costs. 
    - _`checkFinalPrices()`_ verifies the totals in the 'Bestellübersicht'.
    - _`placeOrder()`_ checks whether the order should be placed or not  
    .  

- **support/successpage.js**: _`checkSuccessMessage()`_ is only called when the order is placed. This function checks whether the success page is loaded correctly or not.  
.  

- **support/backend.js** includes  
.  

    - _`login()`_  to login to the backend  

    - _`getOrder()`_ to grab the order, that was created within the current test  

    - _`checkOrder()`_ to check prices with correct taxes and shipping costs in magento  

    - _`logout()`_ to logout corretly from the backend     
.    

## Test diagramme

![LIV structure](IMAGES/liv_diagramm.png)    
.    

## Local testing

1. Download / clone this repository
2. In the <root>folder  

```bash
npm install
```  

3. Start headless testrun with 

```bash
npm test
```

or with  

```bash
npx cypress run
```

4. Open Cypress runner for headed testruns with  

```bash
npm run cypress:open
```  
.    

![Cypress runner](IMAGES/open_cypress_runner.png)
## Scheduled testruns
    
.      
Every morning all scheduled test cases run via Bitbucket pipelines against production server (test cases stop on checkout page in order to avoid test orders on production system).  
We can update test schedule via Repositories > cypress-test-liv > Pipelines > Schedules. 
.    
![schedule](IMAGES/scheduled-pipelines.png)    
.    
**All testresults are being displayed in real-time on the currents.dev dashboard:**  
.    
![currents dashboard](IMAGES/currents-dashboard.png)    
.    
**Screenshots, video recordings and detailed informations are available for failed tests:**  
.    
![currents dashboard detail](IMAGES/currents-dashboard-detail.png)    
.    

## Manual testruns 

Manual testruns can be started via:  
  1) Repositories > cypress-test-liv > Pipelines > Run pipeline  
  .  
  ![dropdown](IMAGES/pipelines-view.png)    
  .  
**If you want to run tests against STAGE or PRODUCTION environment you can specifythe following options:**  

    - BRANCH : The specfiles from this branch will be used  
    - Pipeline: The custom test configuration on a specific testing environment  
    - SPECGROUP: All specfiles in the selected specgroup will be executed against the testing environment. By default all available specfiles are preselected ("*")  
    - SPECGROUP_2: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE").  
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_2 is equal to SPECGROUP.
    - SPECGROUP_3: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE") 
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_3 is equal to SPECGROUP or SPECGROUP_3 is equal to SPECGROUP_2 
.  
  
  2) Repositories > cypress-test-liv > Branches > Actions > Run pipeline for a branch  

.    
![run pipeline for branch](IMAGES/run-pipeline-for-branch.png)    
.  
**From the dropdown menu select the relevant testpipeline:**  
.    
![dropdown](IMAGES/pipeline-dropdown.png)    
.  
**Then select the specgroup.** By default all available specfiles are preselected with "*"  
.  
![specgroup](IMAGES/pipeline-specgroup.png)    
.  
**If you want to run tests on a dedicated testing environment you can specify the following options:**  
.  

    - TESTBRANCH : The specified branch will be checked out on the testing environment    
    - Pipeline: The custom test configuration on a specific testing environment  
    - SPECGROUP: All specfiles in the selected specgroup will be executed against the testing environment. By default all available specfiles are preselected ("*")  
    - SPECGROUP_2: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE").  
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_2 is equal to SPECGROUP.
    - SPECGROUP_3: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE") 
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_3 is equal to SPECGROUP or SPECGROUP_3 is equal to SPECGROUP_2 
    - IMPORT_MINIDUMP: The current database minidump will be imported on the testing environment 

.  
![pexdelphinus](IMAGES/pipeline-pexdelphinus.png)    
.    

### How to run a personal selection of specfiles  

.
  - Add a textfile "custom-speclist.txt" with a list of arbitrary specfiles at repository root
  - Commit the file  
  - In the dropdown menu of the respective testing pipeline select "CUSTOM" for SPECGROUP   
.

![custom speclist](IMAGES/custom-speclist.png)    
.    
![custom](IMAGES/pipeline-custom.png)    
.

## Various hints
    
.    
- We changed user_agent for browser to "testing_agent" in order to avoid cypress to be part of VWO-Tests or Universal Analytics. Otherwise this would falsify statistics.    
- save testing_agent in cypress.config.js    
.    
``` 
"userAgent": "...",
```
.    
#### Find project id
- https://app.currents.dev/organizations/628926ac797398fd1ff186eb/projects/m5fgRw  
- save project id in cypress.config.js    
.    
``` 
"projectId": "...",
```
