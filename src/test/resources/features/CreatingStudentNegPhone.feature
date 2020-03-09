@smoke
Feature:Creating a student N

  #@BB-419 @BB-409
  Scenario Outline:Creating a student
    Given User on add student page
    When user enters "<Firstname>" to firstname field
    And user enters "<Lastname>" to lastname field
    And user enters "<EmailAddress>" to email field
    And user enters "<JoiningDate>" to joining date field
    And user enters "<Password>" to password field
    And user enters "<ConfirmPassword>" to confirm password field
    And user enters "<Subject>" to subject field
    And user enters "<PhoneNumber>" to mobile number field
    And user enters "<Gender>" to gender field
    And user enters "<AdmissionNumber>" to admission no field
    And user enters "<DateOfBirth>" to birth date field
    And user enters "<Major>" to major field
    And user enters "<Batch>" to batch field
    And user enters "<Section>" to section field
    And user enters "<Address>" to permanent address field
    And user enters "<CompanyName>" to company name field
    And user enters "<Title>" to title
    And user enters "<StartDate>" to start date field
    And user enters "<City>" to city field
    And user enters "<ZipCode>" to zip code
    And user enters "<State>" to state field
    And user enters "<Street>" to street field
    And user clicks on submit button
    Then user verifies there is error message
    And user veifies there are no new student created on UI
    And user verifies database

    Examples:
      | Firstname | Lastname | EmailAddress   | JoiningDate | Password | ConfirmPassword | Subject | PhoneNumber     | Gender | AdmissionNumber | DateOfBirth | Major | Batch | Section | Address      | CompanyName | Title | StartDate  | City          | ZipCode | State | Street         |
      | John      | Smith    | john@gmail.com | 01.01.2020  | 1234     | 1234            | Java    | 123412341234124 | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |
      | John      | Smith    | john@gmail.com | 01.01.2020  | 1234     | 1234            | Java    | asdfasdf1234    | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |
      | John      | Smith    | john@gmail.com | 01.01.2020  | 1234     | 1234            | Java    | &*&*&*&*&$%!^   | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |
      | John      | Smith    | john@gmail.com | 01.01.2020  | 1234     | 1234            | Java    | 123123          | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |
      | John      | Smith    | john@gmail.com | 01.01.2020  | 1234     | 1234            | Java    |                 | Male   | 1234            | 12.12.1990  | major | 1     | 12      | 123 Main st. | Google      | SDET  | 01.01.2020 | San-Francisco | 12345   | CA    | Malholland dr. |