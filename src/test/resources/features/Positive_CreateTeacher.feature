@smoke
Feature: Positive Scenario for Teacher
  Background: Main page
    Given User is on the homepage


	@BB-410 @BB-409
  Scenario: Positive - Create Teacher
    Given User is on the Add Teacher dropdown
#		And User enters Firstname
#		And User enters Lastname
#		And User enters Email
#		And User enters Joining Date
#		And User enters Password
#		And User enters Subject
#		And User enters Mobile number
#		And User clicks Gender Dropdown and selects his Gender
#		And User clicks on Department Dropdown and selects related Department
#		And User enters Birth Date
#		And User enters Salary
#		And User clicks on Batch Dropdown and selects related Batch number
#		And User enters Selection
#		And User enters Premanent Address
    And user enters
      | FirstName         | Katie             |
      | LastName          | Wickfeitful              |
      | Email             | katie99@gmail.com |
      | Joining Date      | 02/02/2020        |
      | Password          | 12334567          |
      | Subject           | Math              |
      | Mobile number     | 7687878888        |
      | Gender            | Female            |
      | Department        | Maths             |
      | Birth Date        | 08/02/1996        |
      | Salary            | 60000             |
      | Batch             | 8                 |
      | Section          | 9             |
      | Permanent Address | 123 Main Street   |

    And User clicks Submit button
    Then User should see a new created teacher in the database
    And User User is directed to All Teachers Page, User should input his name and choose the correct department, click on Search button


