@smoke
Feature:Delete student validation
	@BB-437 @BB-409
	Scenario: Delete student validation
		Given User logged in to app and on all students module
		When User click on vertical ellipsis in particular student card
		Then Drop down menu should appears 
		When User click on delete option
		Then conformation message should appear 
		When User confirm this action
		Then student should no longer appear in the page
		And student should no longer appear in student table in DB
