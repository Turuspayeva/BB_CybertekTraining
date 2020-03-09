package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Test;
import pages.AddTeacherPage;
import pages.AllTeacherPage;
import pages.DeleteTeacherPage;
import pages.LeftSideMenu;
import utilities.*;

import java.sql.SQLException;

public class DeleteTeacher_step_defs {

    AllTeacherPage allTeacherPage = new AllTeacherPage();
    LeftSideMenu leftSideMenu =new LeftSideMenu();
    DeleteTeacherPage deleteTeacherPage = new DeleteTeacherPage();
    AddTeacherPage addTeacherPage = new AddTeacherPage();

            @Test
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
}

   @When("Clicks On The Three dots at the Right")
       public void clicks_On_The_Three_dots_at_the_Right() {
                deleteTeacherPage.threeDots.click();

    }

    @When("User Should Click on Delete Button")
    public void user_Should_Click_on_Delete_Button() {
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
       } catch (
               SQLException e) {
           e.printStackTrace();
       }
       String query = "select * from teacher  where  =";


   }

}
