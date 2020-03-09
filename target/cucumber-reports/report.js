$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/DeleteTeacher.feature");
formatter.feature({
  "name": "Delete Teacher on Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "PositiveScenario - User Should be able To delete Teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-417"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User will go on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteTeacher_step_defs.user_will_go_on_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should Press on Teachers",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteTeacher_step_defs.user_Should_Press_on_Teachers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Clicks on All Teacher",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_step_defs.user_Clicks_on_All_Teacher()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks On The Three dots at the Right",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_step_defs.clicks_On_The_Three_dots_at_the_Right()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should Click on Delete Button",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_step_defs.user_Should_Click_on_Delete_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Should Click on the Red Delete Button",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_step_defs.user_Should_Click_on_the_Red_Delete_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Teacher will no longer will appear in the page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User will check table in DataBAse",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});