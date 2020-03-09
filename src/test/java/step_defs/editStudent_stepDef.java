package step_defs;

import cucumber.api.Scenario;
import cucumber.api.java.bs.A;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.AllStudentPage;
import pages.EditStudentPage;
import utilities.Driver;
import utilities.SeleniumUtils;

public class editStudent_stepDef {

    AllStudentPage sp = new AllStudentPage();
    EditStudentPage eSP = new EditStudentPage();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),5);

    @Given("User is on {string}")
    public void user_is_on(String string) {
        Driver.getDriver().get(string);
    }

    @Given("User click to treePoints on first student card")
    public void user_click_to_treePoints_on_first_student_card() {
        wait.until(ExpectedConditions.elementToBeClickable(sp.treePoints));
        sp.treePoints.click();
    }

    @Given("User click to edit")
    public void user_click_to_edit() {

        wait.until(ExpectedConditions.elementToBeClickable(sp.edit));
        sp.edit.click();
    }

    @Given("User clean up Firstname Field")
    public void user_clean_up_Firstname_Field() {
        wait.until(ExpectedConditions.elementToBeClickable(eSP.FirstName));
        eSP.FirstName.clear();

    }

    @When("User input first name {string}")
    public void user_input_first_name(String firstName) {
        wait.until(ExpectedConditions.elementToBeClickable(eSP.FirstName));
        eSP.FirstName.sendKeys(firstName);
    }

    @When("User click to submit")
    public void user_tried_to_submit() {
        wait.until(ExpectedConditions.elementToBeClickable(eSP.submitButton));

        eSP.submitButton.click();
    }

    @Then("Assert warning massage This field is required! under first name field")
    public void assert_warning_massage_This_field_is_required_under_first_name_field() {
        wait.until(ExpectedConditions.visibilityOf(eSP.thisFieldIsRequired));
       Assert.assertTrue(eSP.thisFieldIsRequired.isDisplayed());
       Driver.getDriver().close();
    }

    @When("User scroll down to student with first name {string}")
    public void user_scroll_down_to_student_with_first_name(String string) {

        Actions actions = new Actions(Driver.getDriver());
        actions.moveToElement(Driver.getDriver().findElement(By.xpath("//*[@id='app']/div/div[3]/div/div[2]/div[402]/div/h4/a")));

    }

    @When("User verify what student with first name {string} exist")
    public void user_verify_what_student_with_first_name_exist(String string) {

    }

    @Then("Verify that user with name {string} exist in data base")
    public void verify_that_user_with_name_exist_in_data_base(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }


//    @Then("Verify what first name of student was change")
//    public void verify_what_first_name_of_student_was_change() {
//        // Write code here that turns the phrase above into concrete actions
//        throw new cucumber.api.PendingException();
//    }



}
