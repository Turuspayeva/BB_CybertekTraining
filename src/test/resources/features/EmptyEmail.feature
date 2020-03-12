@BB-423 @BB-409 @smoke
Feature:User Enters Empty Email N
  @BB-423 @BB-409
	Scenario: NegativeScenario User Enters Empty Email
		Given User is on CybertekTrining Main Page
		When User clicks on Teachers
		And All Teachers and Add Teachers Should be Displayed
		And User Clicks on Add Teachers
		And User Enters First Name
		And User Enters Last Name
		And User Enters Empty Email
		And User Enters Joining Date
		And User Enters Password
		And User Entes Confirm Password
		And User Enters Subject
		And User Enters Mobile Number
		And User Selelct Gender from the Dropdowns
		And User Select Depertement from the Dropdowns
		And User Enters Birth Date
		And User Enters Salary
		And User Select Number of Batch from the Dropdowns
		And User Enter the Section
		And User Enter the Premanent Address
		Then User Should Clicks on Blue Submit Button
	    Then User Should verfy the Teacher was not created in DataBase
		
		