Feature: Login 
  
Scenario: Scenario Outline name: Login with valid credentials
  Given I navigate to website
  When I click login 
  And I enter 'username' and 'password'
  Then I can see dashboard page

  