const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
    Given(/^I open Google's search page$/, () => {

        const google = client.page.google()

        return google
            .navigate()
            .waitForElementVisible('@body', 1000)

    });

   /* Then(/^the title is "([^"]*)"$/, (title) => {
        return client.assert.title(title);
    });*/

    Then(/^the Google search form exists$/, () => {
        const google = client.page.google()
        google.waitForElementVisible('@searchbar', 1000)
        return google.assert.visible('@searchbar')
    });

});