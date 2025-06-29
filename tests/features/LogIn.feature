Feature: Login 
  
Scenario: Scenario Outline name: Login with valid credentials
  Given I navigate to website
  When I enter 'standard_user' and 'secret_sauce'
  And I click login 
  Then I can see dashboard page

  