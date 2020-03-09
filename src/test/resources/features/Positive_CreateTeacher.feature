@Smoke
Feature: Positive Scenario for Teacher

	Background: Main page
		Given User is on the homepage


	#@BB-410 @BB-409
	Scenario: Positive - Create Teacher
		Given User is on the Add Teacher dropdown
		And User enters Firstname
		And User enters Lastname
		And User enters Email
		And User enters Joining Date
		And User enters Password
		And User enters Subject
		And User enters Mobile number
		And User clicks Gender Dropdown and selects his Gender
		And User clicks on Department Dropdown and selects related Department
		And User enters Birth Date
		And User enters Salary
		And User clicks on Batch Dropdown and selects related Batch number
		And User enters Selection
		And User enters Premanent Address
		And User clicks Submit button
#		When User User is directed to All Teachers Page, User should input his name and choose the correct department, click on Search button
#		Then User should be able to see his name and verrify, that its there.
#
#