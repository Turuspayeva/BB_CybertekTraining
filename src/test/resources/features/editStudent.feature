@smoke
Feature: edit student feature
  User story: As a User I should able to update student

  @positive
  Scenario Outline: User should not be able to edit first name with valid
    Given User is on "http://cybertektraining.com/all-students.html"
    When User click to treePoints on first student card
    And User click to edit
    And user edit "<Firstname>" to firstname field
    And user edit "<Lastname>" to lastname field
    And user edit "<EmailAddress>" to email field
    And user edit "<PhoneNumber>" to mobile number field
    And user click on submit button
    Then user verifie there is error message
    And user veifie there are no new student created on UI
    And user verifie database

    Examples:
      | Firstname | Lastname | EmailAddress   | JoiningDate | Password | ConfirmPassword | Subject | PhoneNumber     | Gender | AdmissionNumber | DateOfBirth | Major | Batch | Section | Address      | CompanyName | Title | StartDate  | City          | ZipCode | State | Street         |
      | Gradd     | Sel      | Gradd@gmail.com | 01.01.2020  | 1234     | 1234            | Java    | 123412341234124 | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |
#      | Khon      | West     | Khon@gmail.com | 01.01.2020  | 1234     | 1234            | Java    | asdfasdf1234    | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |
#      | Aseler    | Rish     | Aseler@gmail.com | 01.01.2020  | 1234     | 1234            | Java    | &*&*&*&*&$%!^   | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |
