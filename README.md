###ui-user-acceptance-tests Setup Guide   
This project demonstrates the basic protractor-cucumber-typescript framework project setup.

### Features
* No typings.json or typings folder, they have been replaced by better **'@types'** modules in package.json
* ts-node(typescript execution environment for node) in cucumberOpts. 
* All scripts written with > Typescript2.0 $ Cucumber2.0
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
* Screenshots on failure feature scenarios


### To Get Started

#### Pre-requisites
1. Download and Install WebStorm for the website "https://www.jetbrains.com/webstorm/download". 
2. Free Trail of the WebStorm works for 30 days. Please raise a Spark request for license. 
3. Download and install NodeJS from the link "https://nodejs.org/en/download/".
4. Chrome or Firefox browsers installed.

#### Setup Scripts
* Clone the project "https://git.bskyb.com/SCMS/ui-user-acceptance-tests.git" from Git and open the project in WebStorm.
* Go inside the folder and run following command from terminal/command prompt. ( Alt + F12 ).
```
  npm install
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server. Run the below commands from  terminal/command prompt.

```
npm run webdriver-update
``` 
That should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-start
```
That should start your selenium server!

```
npm run tsc
```
The above command would create an output folder named 'typeScript' and transpile the .ts files.
```
npm test
```
It launches the Chrome Browser and run the scripts


#### Writing Features
```
Feature: To search typescript in google
@TypeScriptScenario

  Scenario: Typescript Google Search
    Given I am on google page
    When I type "Typescript"
    Then I click on search button
    Then I clear the search text
```
#### Writing Step Definitions
    
```
    import { browser } from 'protractor';
    import { SearchPageObject } from '../pages/searchPage';
    import { defineSupportCode } from 'cucumber';
    let chai = require('chai').use(require('chai-as-promised'));
    let expect = chai.expect;

    defineSupportCode(function ({Given}) {
    let search: SearchPageObject = new SearchPageObject();

        Given(/^I am on google page$/, () => {
        return expect(browser.getTitle()).to.eventually.equal('Google');
    });
})
```

#### Writing Page Objects
```
import {$} from 'protractor';
    
export class SearchPageObject {
    public searchTextBox:any;
    public searchButton:any;

    constructor() {
        this.searchTextBox = $("input[name='q']");
        this.searchButton = $("button[name='btnG']");
    }
}
```
#### Cucumber Hooks
Following method takes screenshot on failure of each scenario
```
After((scenario, done) => {
    if (scenario.isFailed()) {
        return browser.takeScreenshot().then(function (base64png) {
            let decodedImage = new Buffer(base64png, 'base64').toString('binary');
            scenario.attach(decodedImage, 'image/png');
        }, (err) => {
            done(err);
        });
    } else {
        done();
    }
});
```
#### CucumberOpts Tags
Following configuration shows to call specific tags from feature files
```
cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    format: ["pretty"],
    require: ['../StepDefinitions/*.ts', '../Support/*.ts'],
    tags: '@TypeScriptScenario or @CucumberScenario or @ProtractorScenario'
}
```
#### HTML Reports
Currently this project has been integrated with [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter), which is generated in the `reports` folder when you run `npm test`.
They can be customized according to user's specific needs.
