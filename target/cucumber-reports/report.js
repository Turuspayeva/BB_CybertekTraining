$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/DeleteStudentValidation.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Delete student validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BB-437"
    },
    {
      "name": "@BB-409"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to app and on all students module",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.user_logged_in_to_app_and_on_all_students_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on vertical ellipsis in particular student card",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.user_click_on_vertical_ellipsis_in_particular_student_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Drop down menu should appears",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.drop_down_menu_should_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on delete option",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.user_click_on_delete_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conformation message should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.conformation_message_should_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User confirm this action",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.user_confirm_this_action()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should no longer appear in the page",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.student_should_no_longer_appear_in_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should no longer appear in student table in DB",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudentValidation_StepDef.student_should_no_longer_appear_in_student_table_in_DB()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});