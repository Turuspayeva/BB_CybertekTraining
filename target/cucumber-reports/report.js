$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/BB_424_EditTeacher.feature");
formatter.feature({
  "name": "Verify the Firstname field not allowing to put negative data on Edit Details Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify the Firstname field not allowing to put negative data on Edit Details Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BB-424"
    },
    {
      "name": "@BB-409"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user is on Edit Teacher Page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user reenters \"\u003cfirstName\u003e\" to Firstname field",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters \"\u003clastName\u003e\" to Lastname field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003cemail\u003e\" to Email field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003cjoiningDate\u003e\" to Joining Date field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003csubject\u003e\" to Subject field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003cmobileNumber\u003e\" to Mobile Number field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003cbirthDate\u003e\" to Birth Date field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003csalary\u003e\" to Salary field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003cbatch\u003e\" to Batch field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003csection\u003e\" to Section field",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003caddress\u003e\" to Present Address field",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "the input fields don\u0027t allow saving data. Error should be indicated and there is no any record in DataBase",
  "keyword": "Then "
});
formatter.examples({
  "name": "User fill out the fields as followed from the table below:",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "joiningDate",
        "subject",
        "mobileNumber",
        "birthDate",
        "salary",
        "batch",
        "section",
        "address"
      ]
    },
    {
      "cells": [
        "Nina28",
        "Trribbiani",
        "mail@gmail.com",
        "01/11/1993",
        "JAVA",
        "3452349857",
        "05/11/1960",
        "20000",
        "7",
        "2",
        "Michigan Ave"
      ]
    },
    {
      "cells": [
        "Anna-Maria",
        "Green",
        "mail@gmail.com",
        "01/11/1993",
        "JAVA",
        "3452349857",
        "05/11/1960",
        "20000",
        "7",
        "2",
        "Michigan Ave"
      ]
    },
    {
      "cells": [
        "DazDravstvyetPervoeMayaYraYraYra",
        "Bing",
        "mail@gmail.com",
        "01/11/1993",
        "JAVA",
        "3452349857",
        "05/11/1960",
        "20000",
        "7",
        "2",
        "Michigan Ave"
      ]
    },
    {
      "cells": [
        "D\u0027Mirror{^\u0026John:)",
        "Geller",
        "mail@gmail.com",
        "01/11/1993",
        "JAVA",
        "3452349857",
        "05/11/1960",
        "20000",
        "7",
        "2",
        "Michigan Ave"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the Firstname field not allowing to put negative data on Edit Details Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-424"
    },
    {
      "name": "@BB-409"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Edit Teacher Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Edit Teacher Page header NOT matching. Verification FAILD!\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat step_defs.BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page(BB_424_EditTeacher_stepDef.java:45)\n\tat ✽.the user is on Edit Teacher Page(src/test/resources/features/BB_424_EditTeacher.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user reenters \"Nina28\" to Firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_reenters_to_Firstname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Trribbiani\" to Lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"mail@gmail.com\" to Email field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"01/11/1993\" to Joining Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"JAVA\" to Subject field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"3452349857\" to Mobile Number field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Mobile_Number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"05/11/1960\" to Birth Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"20000\" to Salary field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Salary_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"7\" to Batch field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"2\" to Section field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Michigan Ave\" to Present Address field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Present_Address_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the input fields don\u0027t allow saving data. Error should be indicated and there is no any record in DataBase",
  "keyword": "Then "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_input_fields_don_t_allow_saving_data_Error_should_be_indicated_and_there_is_no_any_record_in_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Firstname field not allowing to put negative data on Edit Details Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-424"
    },
    {
      "name": "@BB-409"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Edit Teacher Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Edit Teacher Page header NOT matching. Verification FAILD!\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat step_defs.BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page(BB_424_EditTeacher_stepDef.java:45)\n\tat ✽.the user is on Edit Teacher Page(src/test/resources/features/BB_424_EditTeacher.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user reenters \"Anna-Maria\" to Firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_reenters_to_Firstname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Green\" to Lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"mail@gmail.com\" to Email field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"01/11/1993\" to Joining Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"JAVA\" to Subject field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"3452349857\" to Mobile Number field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Mobile_Number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"05/11/1960\" to Birth Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"20000\" to Salary field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Salary_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"7\" to Batch field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"2\" to Section field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Michigan Ave\" to Present Address field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Present_Address_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the input fields don\u0027t allow saving data. Error should be indicated and there is no any record in DataBase",
  "keyword": "Then "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_input_fields_don_t_allow_saving_data_Error_should_be_indicated_and_there_is_no_any_record_in_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Firstname field not allowing to put negative data on Edit Details Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-424"
    },
    {
      "name": "@BB-409"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Edit Teacher Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Edit Teacher Page header NOT matching. Verification FAILD!\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat step_defs.BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page(BB_424_EditTeacher_stepDef.java:45)\n\tat ✽.the user is on Edit Teacher Page(src/test/resources/features/BB_424_EditTeacher.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user reenters \"DazDravstvyetPervoeMayaYraYraYra\" to Firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_reenters_to_Firstname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Bing\" to Lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"mail@gmail.com\" to Email field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"01/11/1993\" to Joining Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"JAVA\" to Subject field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"3452349857\" to Mobile Number field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Mobile_Number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"05/11/1960\" to Birth Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"20000\" to Salary field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Salary_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"7\" to Batch field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"2\" to Section field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Michigan Ave\" to Present Address field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Present_Address_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the input fields don\u0027t allow saving data. Error should be indicated and there is no any record in DataBase",
  "keyword": "Then "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_input_fields_don_t_allow_saving_data_Error_should_be_indicated_and_there_is_no_any_record_in_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Firstname field not allowing to put negative data on Edit Details Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-424"
    },
    {
      "name": "@BB-409"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Edit Teacher Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Edit Teacher Page header NOT matching. Verification FAILD!\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat step_defs.BB_424_EditTeacher_stepDef.the_user_is_on_Edit_Teacher_Page(BB_424_EditTeacher_stepDef.java:45)\n\tat ✽.the user is on Edit Teacher Page(src/test/resources/features/BB_424_EditTeacher.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user reenters \"D\u0027Mirror{^\u0026John:)\" to Firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_reenters_to_Firstname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Geller\" to Lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"mail@gmail.com\" to Email field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"01/11/1993\" to Joining Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"JAVA\" to Subject field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"3452349857\" to Mobile Number field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Mobile_Number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"05/11/1960\" to Birth Date field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"20000\" to Salary field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Salary_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"7\" to Batch field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"2\" to Section field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"Michigan Ave\" to Present Address field",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_enters_to_Present_Address_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the input fields don\u0027t allow saving data. Error should be indicated and there is no any record in DataBase",
  "keyword": "Then "
});
formatter.match({
  "location": "BB_424_EditTeacher_stepDef.the_input_fields_don_t_allow_saving_data_Error_should_be_indicated_and_there_is_no_any_record_in_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/CreatingStudentNegPhone.feature");
formatter.feature({
  "name": "Creating a student",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Creating a student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BB-419"
    },
    {
      "name": "@BB-409"
    }
  ]
});
formatter.step({
  "name": "User on add student page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cFirstname\u003e\" to firstname field",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cLastname\u003e\" to lastname field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cEmailAddress\u003e\" to email field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cJoiningDate\u003e\" to joining date field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cPassword\u003e\" to password field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cConfirmPassword\u003e\" to confirm password field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cSubject\u003e\" to subject field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cPhoneNumber\u003e\" to mobile number field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cGender\u003e\" to gender field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cAdmissionNumber\u003e\" to admission no field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cDateOfBirth\u003e\" to birth date field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cMajor\u003e\" to major field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cBatch\u003e\" to batch field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cSection\u003e\" to section field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cAddress\u003e\" to permanent address field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cCompanyName\u003e\" to company name field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cTitle\u003e\" to title",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cStartDate\u003e\" to start date field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cCity\u003e\" to city field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cZipCode\u003e\" to zip code",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cState\u003e\" to state field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cStreet\u003e\" to street field",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies there is error message",
  "keyword": "Then "
});
formatter.step({
  "name": "user veifies there are no new student created on UI",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies database",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "EmailAddress",
        "JoiningDate",
        "Password",
        "ConfirmPassword",
        "Subject",
        "PhoneNumber",
        "Gender",
        "AdmissionNumber",
        "DateOfBirth",
        "Major",
        "Batch",
        "Section",
        "Address",
        "CompanyName",
        "Title",
        "StartDate",
        "City",
        "ZipCode",
        "State",
        "Street"
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "john@gmail.com",
        "01.01.2020",
        "1234",
        "1234",
        "Java",
        "123412341234124",
        "Male",
        "1234",
        "12.12.1990",
        "major",
        "1",
        "12",
        "123 Main st.",
        "Google",
        "SDET",
        "01.01.2020",
        "San-Francisco",
        "12345",
        "CA",
        "Malholland dr."
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "john@gmail.com",
        "01.01.2020",
        "1234",
        "1234",
        "Java",
        "asdfasdf1234",
        "Male",
        "1234",
        "12.12.1990",
        "major",
        "1",
        "12",
        "123 Main st.",
        "Google",
        "SDET",
        "01.01.2020",
        "San-Francisco",
        "12345",
        "CA",
        "Malholland dr."
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "john@gmail.com",
        "01.01.2020",
        "1234",
        "1234",
        "Java",
        "\u0026*\u0026*\u0026*\u0026*\u0026$%!^",
        "Male",
        "1234",
        "12.12.1990",
        "major",
        "1",
        "12",
        "123 Main st.",
        "Google",
        "SDET",
        "01.01.2020",
        "San-Francisco",
        "12345",
        "CA",
        "Malholland dr."
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "john@gmail.com",
        "01.01.2020",
        "1234",
        "1234",
        "Java",
        "123123",
        "Male",
        "1234",
        "12.12.1990",
        "major",
        "1",
        "12",
        "123 Main st.",
        "Google",
        "SDET",
        "01.01.2020",
        "San-Francisco",
        "12345",
        "CA",
        "Malholland dr."
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "john@gmail.com",
        "01.01.2020",
        "1234",
        "1234",
        "Java",
        "",
        "Male",
        "1234",
        "12.12.1990",
        "major",
        "1",
        "12",
        "123 Main st.",
        "Google",
        "SDET",
        "01.01.2020",
        "San-Francisco",
        "12345",
        "CA",
        "Malholland dr."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating a student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-419"
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
  "name": "User on add student page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_on_Add_Student_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"John\" to firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Firstname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Smith\" to lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"john@gmail.com\" to email field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to joining date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Confirm_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Java\" to subject field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"123412341234124\" to mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Male\" to gender field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Gender_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to admission no field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Admission_No_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12.12.1990\" to birth date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"major\" to major field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Major_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1\" to batch field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12\" to section field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"123 Main st.\" to permanent address field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Permanent_address_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Google\" to company name field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Company_Name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SDET\" to title",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to start date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Start_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"San-Francisco\" to city field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_City_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12345\" to zip code",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Zip_Code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"CA\" to state field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_State_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Malholland dr.\" to street field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_street_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies there is error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_Error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veifies there are no new student created on UI",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_veifies_there_are_no_new_Student_created_on_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies database",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_no_new_record_in_database()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Array with set result is not empty\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat step_defs.CreateStudentNegPhone_stepDefs.user_verifies_there_is_no_new_record_in_database(CreateStudentNegPhone_stepDefs.java:211)\n\tat ✽.user verifies database(src/test/resources/features/CreatingStudentNegPhone.feature:32)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating a student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-419"
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
  "name": "User on add student page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_on_Add_Student_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"John\" to firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Firstname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Smith\" to lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"john@gmail.com\" to email field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to joining date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Confirm_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Java\" to subject field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"asdfasdf1234\" to mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Male\" to gender field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Gender_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to admission no field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Admission_No_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12.12.1990\" to birth date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"major\" to major field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Major_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1\" to batch field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12\" to section field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"123 Main st.\" to permanent address field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Permanent_address_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Google\" to company name field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Company_Name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SDET\" to title",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to start date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Start_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"San-Francisco\" to city field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_City_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12345\" to zip code",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Zip_Code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"CA\" to state field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_State_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Malholland dr.\" to street field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_street_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies there is error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_Error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veifies there are no new student created on UI",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_veifies_there_are_no_new_Student_created_on_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies database",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_no_new_record_in_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating a student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-419"
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
  "name": "User on add student page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_on_Add_Student_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"John\" to firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Firstname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Smith\" to lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"john@gmail.com\" to email field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to joining date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Confirm_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Java\" to subject field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"\u0026*\u0026*\u0026*\u0026*\u0026$%!^\" to mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Male\" to gender field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Gender_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to admission no field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Admission_No_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12.12.1990\" to birth date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"major\" to major field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Major_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1\" to batch field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12\" to section field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"123 Main st.\" to permanent address field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Permanent_address_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Google\" to company name field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Company_Name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SDET\" to title",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to start date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Start_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"San-Francisco\" to city field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_City_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12345\" to zip code",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Zip_Code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"CA\" to state field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_State_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Malholland dr.\" to street field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_street_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies there is error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_Error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veifies there are no new student created on UI",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_veifies_there_are_no_new_Student_created_on_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies database",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_no_new_record_in_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating a student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-419"
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
  "name": "User on add student page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_on_Add_Student_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"John\" to firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Firstname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Smith\" to lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"john@gmail.com\" to email field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to joining date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Confirm_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Java\" to subject field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"123123\" to mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Male\" to gender field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Gender_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to admission no field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Admission_No_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12.12.1990\" to birth date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"major\" to major field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Major_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1\" to batch field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12\" to section field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"123 Main st.\" to permanent address field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Permanent_address_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Google\" to company name field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Company_Name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SDET\" to title",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to start date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Start_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"San-Francisco\" to city field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_City_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12345\" to zip code",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Zip_Code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"CA\" to state field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_State_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Malholland dr.\" to street field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_street_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies there is error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_Error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veifies there are no new student created on UI",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_veifies_there_are_no_new_Student_created_on_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies database",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_no_new_record_in_database()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Array with set result is not empty\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat step_defs.CreateStudentNegPhone_stepDefs.user_verifies_there_is_no_new_record_in_database(CreateStudentNegPhone_stepDefs.java:211)\n\tat ✽.user verifies database(src/test/resources/features/CreatingStudentNegPhone.feature:32)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating a student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-419"
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
  "name": "User on add student page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_on_Add_Student_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"John\" to firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Firstname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Smith\" to lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Lastname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"john@gmail.com\" to email field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to joining date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Joining_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Confirm_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Java\" to subject field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Subject_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"\" to mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Male\" to gender field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Gender_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1234\" to admission no field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Admission_No_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12.12.1990\" to birth date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Birth_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"major\" to major field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Major_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"1\" to batch field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Batch_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12\" to section field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Section_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"123 Main st.\" to permanent address field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Permanent_address_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Google\" to company name field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Company_Name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SDET\" to title",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"01.01.2020\" to start date field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Start_Date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"San-Francisco\" to city field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_City_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"12345\" to zip code",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_Zip_Code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"CA\" to state field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_State_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Malholland dr.\" to street field",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_enters_to_street_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies there is error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_Error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veifies there are no new student created on UI",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_veifies_there_are_no_new_Student_created_on_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies database",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudentNegPhone_stepDefs.user_verifies_there_is_no_new_record_in_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/DeleteStudentValidation.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Delete student validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
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
formatter.uri("src/test/resources/features/DiscardDeleteStudentMessage.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Discard \"delete confirmation\" message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-438"
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
  "name": "User click on vertical ellipsis in pacricular student card",
  "keyword": "When "
});
formatter.match({
  "location": "DiscardDeleteStudentMessage_StepDef.user_click_on_vertical_ellipsis_in_pacricular_student_card()"
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
  "name": "User discard this action",
  "keyword": "When "
});
formatter.match({
  "location": "DiscardDeleteStudentMessage_StepDef.user_discard_this_action()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this student should still appear in the page",
  "keyword": "Then "
});
formatter.match({
  "location": "DiscardDeleteStudentMessage_StepDef.this_student_should_still_appear_in_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/EmptyEmail.feature");
formatter.feature({
  "name": "As a User I should able to create teacher",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BB-423"
    },
    {
      "name": "@BB-409"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "NegativeScenario User Enters Empty Email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BB-423"
    },
    {
      "name": "@BB-409"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@BB-423"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on CybertekTrining Main Page",
  "keyword": "Given "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_is_on_CybertekTrining_Main_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Teachers",
  "keyword": "When "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_clicks_on_Teachers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All Teachers and Add Teachers Should be Displayed",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.all_Teachers_and_Add_Teachers_Should_be_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on Add Teachers",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Clicks_on_Add_Teachers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters First Name",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_First_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Last_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Empty Email",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Empty_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Joining Date",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Joining_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Password",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Entes Confirm Password",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Entes_Confirm_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Subject",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Subject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Mobile Number",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Mobile_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Selelct Gender from the Dropdowns",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Selelct_Gender_from_the_Dropdowns()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Depertement from the Dropdowns",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Select_Depertement_from_the_Dropdowns()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Birth Date",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Birth_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Salary",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enters_Salary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Number of Batch from the Dropdowns",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Select_Number_of_Batch_from_the_Dropdowns()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the Section",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enter_the_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the Premanent Address",
  "keyword": "And "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Enter_the_Premanent_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Clicks on Blue Submit Button",
  "keyword": "Then "
});
formatter.match({
  "location": "EmptyEmail_step_defs.user_Should_Clicks_on_Blue_Submit_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Positive_CreateTeacher.feature");
formatter.feature({
  "name": "Positive Scenario for Teacher",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "Main page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive - Create Teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Add Teacher dropdown",
  "keyword": "Given "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_is_on_the_Add_Teacher_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Firstname",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Lastname",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Joining Date",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Joining_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Password",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Subject",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Subject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Mobile_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Gender Dropdown and selects his Gender",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_clicks_Gender_Dropdown_and_selects_his_Gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Department Dropdown and selects related Department",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_clicks_on_Department_Dropdown_and_selects_related_Department()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Birth Date",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Birth_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Salary",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Salary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Batch Dropdown and selects related Batch number",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_clicks_on_Batch_Dropdown_and_selects_related_Batch_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Selection",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Selection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Premanent Address",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_enters_Premanent_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Positive_Create_Teacher.user_clicks_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/editStudent.feature");
formatter.feature({
  "name": "edit student feature",
  "description": "  User story: As a User I should able to update student",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should not be able to edit first name with invalid data by \u003cTypeOfData\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User is on \"http://cybertektraining.com/all-students.html\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User click to treePoints on first student card",
  "keyword": "And "
});
formatter.step({
  "name": "User click to edit",
  "keyword": "And "
});
formatter.step({
  "name": "User clean up Firstname Field",
  "keyword": "And "
});
formatter.step({
  "name": "User input first name \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click to submit",
  "keyword": "And "
});
formatter.step({
  "name": "Assert warning massage This field is required! under first name field",
  "keyword": "Then "
});
formatter.examples({
  "name": "User fills out the form as followed from the table below:",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TypeOfData",
        "FirstName"
      ]
    },
    {
      "cells": [
        "numbers",
        "1234"
      ]
    },
    {
      "cells": [
        "numbers and letters",
        "123FLGK"
      ]
    },
    {
      "cells": [
        "spechial charact",
        "!@#$"
      ]
    },
    {
      "cells": [
        "over 20 characters",
        "asfqweqwesfsdfvcvasdffsdfseff"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should not be able to edit first name with invalid data by numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on \"http://cybertektraining.com/all-students.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "editStudent_stepDef.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to treePoints on first student card",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_treePoints_on_first_student_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to edit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clean up Firstname Field",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_clean_up_Firstname_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input first name \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "editStudent_stepDef.user_input_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to submit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_tried_to_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert warning massage This field is required! under first name field",
  "keyword": "Then "
});
formatter.match({
  "location": "editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: (//div[@class\u003d\u0027error\u0027])[1]\u0027 (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat ✽.Assert warning massage This field is required! under first name field(src/test/resources/features/editStudent.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027error\u0027])[1]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-Viktor.local\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f4/hdtt3b817f7...}, goog:chromeOptions: {debuggerAddress: localhost:61686}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fcf0319a183b8c6e6fcd10130cec7317\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027error\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to edit first name with invalid data by numbers and letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on \"http://cybertektraining.com/all-students.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "editStudent_stepDef.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to treePoints on first student card",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_treePoints_on_first_student_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to edit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clean up Firstname Field",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_clean_up_Firstname_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input first name \"123FLGK\"",
  "keyword": "When "
});
formatter.match({
  "location": "editStudent_stepDef.user_input_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to submit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_tried_to_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert warning massage This field is required! under first name field",
  "keyword": "Then "
});
formatter.match({
  "location": "editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: (//div[@class\u003d\u0027error\u0027])[1]\u0027 (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat ✽.Assert warning massage This field is required! under first name field(src/test/resources/features/editStudent.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027error\u0027])[1]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-Viktor.local\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f4/hdtt3b817f7...}, goog:chromeOptions: {debuggerAddress: localhost:61686}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fcf0319a183b8c6e6fcd10130cec7317\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027error\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to edit first name with invalid data by spechial charact",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on \"http://cybertektraining.com/all-students.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "editStudent_stepDef.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to treePoints on first student card",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_treePoints_on_first_student_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to edit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clean up Firstname Field",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_clean_up_Firstname_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input first name \"!@#$\"",
  "keyword": "When "
});
formatter.match({
  "location": "editStudent_stepDef.user_input_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to submit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_tried_to_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert warning massage This field is required! under first name field",
  "keyword": "Then "
});
formatter.match({
  "location": "editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: (//div[@class\u003d\u0027error\u0027])[1]\u0027 (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat ✽.Assert warning massage This field is required! under first name field(src/test/resources/features/editStudent.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027error\u0027])[1]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-Viktor.local\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f4/hdtt3b817f7...}, goog:chromeOptions: {debuggerAddress: localhost:61686}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fcf0319a183b8c6e6fcd10130cec7317\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027error\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to edit first name with invalid data by over 20 characters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on \"http://cybertektraining.com/all-students.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "editStudent_stepDef.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to treePoints on first student card",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_treePoints_on_first_student_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to edit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clean up Firstname Field",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_clean_up_Firstname_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input first name \"asfqweqwesfsdfvcvasdffsdfseff\"",
  "keyword": "When "
});
formatter.match({
  "location": "editStudent_stepDef.user_input_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to submit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_tried_to_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert warning massage This field is required! under first name field",
  "keyword": "Then "
});
formatter.match({
  "location": "editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: (//div[@class\u003d\u0027error\u0027])[1]\u0027 (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat ✽.Assert warning massage This field is required! under first name field(src/test/resources/features/editStudent.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027error\u0027])[1]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-Viktor.local\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f4/hdtt3b817f7...}, goog:chromeOptions: {debuggerAddress: localhost:61686}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fcf0319a183b8c6e6fcd10130cec7317\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027error\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat step_defs.editStudent_stepDef.assert_warning_massage_This_field_is_required_under_first_name_field(editStudent_stepDef.java:65)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to edit first name with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on \"http://cybertektraining.com/all-students.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "editStudent_stepDef.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to treePoints on first student card",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_treePoints_on_first_student_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to edit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_click_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clean up Firstname Field",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_clean_up_Firstname_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input first name \"Jonh\"",
  "keyword": "When "
});
formatter.match({
  "location": "editStudent_stepDef.user_input_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to submit",
  "keyword": "And "
});
formatter.match({
  "location": "editStudent_stepDef.user_tried_to_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});