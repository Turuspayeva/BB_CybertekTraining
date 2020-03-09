package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.WebElement;
import pages.DeleteStudentPage;
import pages.LeftSideMenu;
import utilities.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Random;

public class DeleteStudentValidation_StepDef {

    DeleteStudentPage deleteStudentPage = new DeleteStudentPage();
    LeftSideMenu leftSideMenu = new LeftSideMenu();
    Random random = new Random();
    String studentId;


    @Given("User logged in to app and on all students module")
    public void user_logged_in_to_app_and_on_all_students_module() {
        Driver.getDriver().get(Config.getProperty("url"));
        leftSideMenu.StudentsDropdown.click();
        leftSideMenu.AllStudentsLink.click();
    }


    @When("User click on vertical ellipsis in particular student card")
    public void user_click_on_vertical_ellipsis_in_particular_student_card() {
        deleteStudentPage.studentCards.get(random.nextInt(deleteStudentPage.studentCards.size())).click();
        //studentId = deleteStudentPage.studentIdInDetailPage.getText();
        TempStorage.addDataToTempStorage("studentId", deleteStudentPage.studentIdInDetailPage.getText());
        System.out.println(TempStorage.getDataFromTempStorage("studentId"));
        Driver.getDriver().navigate().back();
        SeleniumUtils.waitForVisibility(deleteStudentPage.studentIdInputSearchBox, 10);
        deleteStudentPage.studentIdInputSearchBox.clear();
        deleteStudentPage.studentIdInputSearchBox.sendKeys(TempStorage.getDataFromTempStorage("studentId"));
        deleteStudentPage.SearchButton.click();
        deleteStudentPage.studentVerticalEllipses.click();

    }


    @Then("Drop down menu should appears")
    public void drop_down_menu_should_appears() {
        SeleniumUtils.waitForVisibility(deleteStudentPage.dropdownMenu, 15);
        Assert.assertTrue("dropdown menu isn't display",deleteStudentPage.dropdownMenu.isDisplayed());
    }

    @When("User click on delete option")
    public void user_click_on_delete_option() {
        deleteStudentPage.deleteOptionFromDropdown.click();
    }

    @Then("conformation message should appear")
    public void conformation_message_should_appear() {
        SeleniumUtils.waitForVisibility(deleteStudentPage.deleteEmployeeConfirmationMessage,10);
        Assert.assertTrue("Confirmation message not displayed",deleteStudentPage.deleteEmployeeConfirmationMessage.isDisplayed());
    }

    @When("User confirm this action")
    public void user_confirm_this_action() {
        deleteStudentPage.deleteButtonFromConfirmMessage.click();
    }

    @Then("student should no longer appear in the page")
    public void student_should_no_longer_appear_in_the_page() {
        SeleniumUtils.waitForVisibility(deleteStudentPage.studentIdInputSearchBox,15);
        deleteStudentPage.studentIdInputSearchBox.sendKeys(TempStorage.getDataFromTempStorage("studentId"));
        deleteStudentPage.SearchButton.click();
        SeleniumUtils.pause(3);
        Assert.assertTrue("Student profile not deleted",
                deleteStudentPage.studentProfileAfterSearch.size()<1);
    }

    @Then("student should no longer appear in student table in DB")
    public void student_should_no_longer_appear_in_student_table_in_DB() {
        try {
            DBUtility.createConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        String query = "select * from student where student_id="+TempStorage.getDataFromTempStorage("studentId");

        try {
            List<Map<Object, Object>> result =  DBUtility.executeQuery(query);
            Assert.assertTrue("Student id still exist in DB", result.isEmpty());
        } catch (SQLException e) {
            e.printStackTrace();
        }



    }


}
