@smoke
Feature: Delete Teacher on Page

	
	@BB-417
	Scenario: PositiveScenario - User Should be able To delete Teacher 
		Given User will go on main page
		When User Should Press on Teachers 
		And User Clicks on All Teacher 
		And Clicks On The Three dots at the Right
		And User Should Click on Delete Button
		And User Should Click on the Red Delete Button
		Then User will check table in DataBAse
