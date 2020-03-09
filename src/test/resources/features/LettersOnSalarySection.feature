Feature:As a User I should able to create teacher

	@BB-427 @BB-409

	Scenario: NegativeScenario- User Enters letters on Salary Section 
		Given User is on CybertekTrining  Main Page 
		When User clicks on Teachers 
		And All Teachers and Add Teachers Should be Displayed 
		And User Clicks on Add Teachers 
		And User Enters First Name 
		And User Enters Last Name 
		And User Enters the  Email 
		And User Enters Joining Date 
		And User Enters Password 
		And User Entes Confirm Password 
		And User Enters Subject 
		And User Enters Mobile Number 
		And User Selelct Gender from the Dropdowns
		And User Select Depertement from the Dropdowns 
		And User Enters Birth Date
		And User Enters Salary with letters 
		And User Select Number of Batch from the Dropdowns 
		And User Enter the Section
		And User Enter the Premanent Address
		Then User Should Clicks on Blue Submit Button