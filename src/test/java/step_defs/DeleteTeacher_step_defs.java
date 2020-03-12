package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import pages.*;
import utilities.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Random;

public class DeleteTeacher_step_defs {

    AllTeacherPage allTeacherPage = new AllTeacherPage();
    LeftSideMenu leftSideMenu =new LeftSideMenu();
    DeleteTeacherPage deleteTeacherPage = new DeleteTeacherPage();
    AddTeacherPage addTeacherPage = new AddTeacherPage();
    EditTeacherPage editTeacherPage= new EditTeacherPage();
    Random random = new Random();

    @Given("User will go on main page")
         public void user_will_go_on_main_page() {
                Driver.getDriver().get(Config.getProperty("url"));


            }
               @When("User Should Press on Teachers")
                public void user_Should_Press_on_Teachers() {
                leftSideMenu.TeachersDropdown.click();
                SeleniumUtils.pause(3);
}

    @When("User Clicks on All Teacher")
    public void user_Clicks_on_All_Teacher() {
    deleteTeacherPage.AllTeacher.click();
    deleteTeacherPage.teacherCards.get(random.nextInt(deleteTeacherPage.teacherCards.size())).click();
    TempStorage.addDataToTempStorage("teacher_id",deleteTeacherPage.teacherIdInDetailPage.getText());
        System.out.println(TempStorage.getDataFromTempStorage("teacher_id"));
        Driver.getDriver().navigate().back();
        SeleniumUtils.waitForVisibility(deleteTeacherPage.teacherInputId, 10);
        deleteTeacherPage.teacherInputId.clear();
       deleteTeacherPage.teacherInputId.sendKeys(TempStorage.getDataFromTempStorage("teacher_id"));
       deleteTeacherPage.searchButton.click();

        SeleniumUtils.pause(3);

}

   @When("Clicks On The Three dots at the Right")
       public void clicks_On_The_Three_dots_at_the_Right() {
        editTeacherPage.threePoints.click();
        SeleniumUtils.pause(3);

    }

    @When("User Should Click on Delete Button")
    public void user_Should_Click_on_Delete_Button() {
        SeleniumUtils.pause(2);
        deleteTeacherPage.delete.click();

    }
   @When("User Should Click on the Red Delete Button")
    public void user_Should_Click_on_the_Red_Delete_Button() {
   deleteTeacherPage.submit.click();

   }

   @Then("User will check table in DataBAse")
    public void user_will_check_table_in_DataBAse() {

       try {
           DBUtility.createConnection();
       } catch (SQLException e) {
           e.printStackTrace();
       }
  String query = "select * from teacher where teacher_id = " + TempStorage.getDataFromTempStorage("teacher_id");
       try {
           List<Map<Object, Object>> result =  DBUtility.executeQuery(query);
           Assert.assertTrue("Teacher  id still exist in DB", result.isEmpty());
       } catch (SQLException e) {
           e.printStackTrace();
       }


   }

}
