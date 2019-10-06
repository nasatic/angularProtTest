@Test
Feature: Create user credentials

    Scenario: Enter user details
        Given I have navigated to user demographic page
        When I enter name 'nasatic' and email 'testemail@test.com'
        And I go to next section
        And I select ps4
        And I go to next section
        Then I am taken to the test complete page
#    And I click on submit button
#    Then An alert is displayed on page 