@Test
Feature: User can logon to main page

  Scenario Outline: Logon to page with valid credentials
    Given I have navigated to the login page
    When I enter username '<uname>' and password '<pword>'
    And I enter desctiption '<desc>'
    And I click on login button
    Then I am taken to the home page
    And I log out of page
    Examples:
      | uname   | pword    | desc           |
      | angular | password | today is great |
      | angular | password | !"£$%^^&&"     |
      | angular | password | 123456781      |

  Scenario Outline: Logon to page with invalid credentials
    Given I have navigated to the login page
    When I enter username '<uname>' and password '<pword>'
    And I enter desctiption '<desc>'
    And I click on login button
    Then error is thrown on page
    Examples:
      | uname       | pword     | desc           |
      | angular     | wrongpswd | this is a test |
      | invaliduser | password  | todayisgreat   |
      | wronguser   | wrongpswd | !"£$%^^&&"     |