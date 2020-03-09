@smoke
Feature:

	
	@BB-438 @BB-409
	Scenario: Discard "delete confirmation" message
		Given User logged in to app and on all students module
		When User click on vertical ellipsis in pacricular student card
		Then Drop down menu should appears 
		When User click on delete option
		Then conformation message should appear 
		When User discard this action
		Then this student should still appear in the page