@smoke
Feature: Verify the Firstname field
	@BB-424 @BB-409 @negative
	Scenario Outline: Verify the Firstname field not allowing to put negative data on Edit Details Page
		Given the user is on Edit Teacher Page
		When the user reenters "<firstName>" to Firstname field
		And the user enters "<lastName>" to Lastname field
		And the user enters "<email>" to Email field
		And the user enters "<joiningDate>" to Joining Date field
		And the user enters "<subject>" to Subject field
		And the user enters "<mobileNumber>" to Mobile Number field
		And the user enters "<birthDate>" to Birth Date field
		And the user enters "<salary>" to Salary field
		And the user enters "<batch>" to Batch field
		And the user enters "<section>" to Section field
		And the user enters "<address>" to Present Address field
		And the user clicks on Submit button
		Then the input fields don't allow saving data. Error should be indicated and there is no any record in DataBase
		
		Examples: User fill out the fields as followed from the table below:
		|firstName                       |lastName   |email         |joiningDate|subject|mobileNumber|birthDate |salary|batch|section|address     |
		|Nina28                          | Trribbiani|mail@gmail.com|01/11/1993 |JAVA   |3452349857  |05/11/1960|20000 |7    |2      |Michigan Ave|
		|Anna-Maria                      | Green     |mail@gmail.com|01/11/1993 |JAVA   |3452349857  |05/11/1960|20000 |7    |2      |Michigan Ave|
		|DazDravstvyetPervoeMayaYraYraYra|Bing       |mail@gmail.com|01/11/1993 |JAVA   |3452349857  |05/11/1960|20000 |7    |2      |Michigan Ave|
		|D'Mirror{^&John:)               |Geller     |mail@gmail.com|01/11/1993 |JAVA   |3452349857  |05/11/1960|20000 |7    |2      |Michigan Ave|
		