@smoke @BB-440
Feature:Edit student N
  User story: As a User I should able to update student
  @Negative @BB-440 @BB-409
  Scenario Outline: User should not be able to edit first name with invalid data by <TypeOfData>
    Given User is on "http://cybertektraining.com/all-students.html"
    And User click to treePoints on first student card
    And User click to edit
    And User clean up Firstname Field
    When User input first name "<FirstName>"
    And User click to submit
    Then Assert warning massage This field is required! under first name field

    Examples: User fills out the form as followed from the table below:
      | TypeOfData          | FirstName                     |
      | numbers             | 1234                          |
      | numbers and letters | 123FLGK                       |
      | spechial charact    | !@#$                          |
      | over 20 characters  | asfqweqwesfsdfvcvasdffsdfseff |

    @positive @BB-440
  Scenario: User should be able to edit first name with valid data
    Given User is on "http://cybertektraining.com/all-students.html"
    And User click to treePoints on first student card
    And User click to edit
    And User clean up Firstname Field
    When User input first name "Jonh"
    And User click to submit


    #And User verify what student with first name "GoodJobOleg" exist
    #Then Verify that user with name "GoodJobOleg" exist in data base
    #Then Verify what first name of student was change

