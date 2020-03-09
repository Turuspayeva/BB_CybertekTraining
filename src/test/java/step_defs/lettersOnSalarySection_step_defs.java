package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.AddTeacherPage;
import pages.AllTeacherPage;
import utilities.Config;
import utilities.Driver;

public class lettersOnSalarySection_step_defs {

    AddTeacherPage addTeacherPage = new AddTeacherPage();
    AllTeacherPage allTeacherPage = new AllTeacherPage();

    @Given("User is on CybertekTrining {string} Main Page")
    public void user_is_on_CybertekTrining_Main_Page(String URL) {
        Driver.getDriver().get(Config.getProperty("http://cybertektraining.com/"));

    }

    @When("User clicks on Teachers")
    public void user_clicks_on_Teachers() {
        allTeacherPage.mainTeachersDropdown.click();

    }

    @When("All Teachers and Add Teachers Should be Displayed")
    public void all_Teachers_and_Add_Teachers_Should_be_Displayed() {
        Assert.assertTrue(allTeacherPage.allTeachersDropdown.isDisplayed());
        Assert.assertTrue(allTeacherPage.addTeacherDropdown.isDisplayed());
    }

    @When("User Clicks on Add Teachers")
    public void user_Clicks_on_Add_Teachers() {
        allTeacherPage.addTeacherDropdown.click();

    }

    @When("User Enters First Name")
    public void user_Enters_First_Name() {
        addTeacherPage.firstNameInput.sendKeys("def");

    }

    @When("User Enters Last Name")
    public void user_Enters_Last_Name() {
        addTeacherPage.lastNameInput.sendKeys("boo");

    }

    @When("User Enters the  Email")
    public void user_Enters_the_Email() {
        addTeacherPage.emailInput.sendKeys("def@gmail.com");

    }

    @When("User Enters Joining Date")
    public void user_Enters_Joining_Date() {
        addTeacherPage.birthDateInput.sendKeys("12/3/2000");

    }

    @When("User Enters Password")
    public void user_Enters_Password() {
        addTeacherPage.passwordInput.sendKeys("4555434");

    }

    @When("User Entes Confirm Password")
    public void user_Entes_Confirm_Password() {
        addTeacherPage.passwordInput.sendKeys("4555434");

    }

    @When("User Enters Subject")
    public void user_Enters_Subject() {
        addTeacherPage.subjectInput.sendKeys("math");
    }

    @When("User Enters Mobile Number")
    public void user_Enters_Mobile_Number() {
        addTeacherPage.mobileNumberInput.sendKeys("3126733382");
    }

    @When("User Selelct Gender from the Dropdowns")
    public void user_Selelct_Gender_from_the_Dropdowns() {
        Select select = new Select(addTeacherPage.genderDropdown);
        select.deselectByVisibleText("male");
    }

    @When("User Select Depertement from the Dropdowns")
    public void user_Select_Depertement_from_the_Dropdowns() {
        Select select = new Select(addTeacherPage.departmentDropdown);
        select.deselectByVisibleText("Computer");

    }

    @When("User Enters Birth Date")
    public void user_Enters_Birth_Date() {
        addTeacherPage.birthDateInput.sendKeys("11/12/1998");

    }

    @When("User Enters Salary with letters")
    public void user_Enters_Salary_with_letters() {
        addTeacherPage.salaryInput.sendKeys("maman");

    }

    @When("User Select Number of Batch from the Dropdowns")
    public void user_Select_Number_of_Batch_from_the_Dropdowns() {
        Select select = new Select(addTeacherPage.batchDropdown);
        select.deselectByVisibleText("4");
    }

    @When("User Enter the Section")
    public void user_Enter_the_Section() {
        addTeacherPage.sectionInput.sendKeys("4");
    }

    @When("User Enter the Premanent Address")
    public void user_Enter_the_Premanent_Address() {

        addTeacherPage.premanentAddressInput.sendKeys("123 may st ");
    }

    @Then("User Should Clicks on Blue Submit Button")
    public void user_Should_Clicks_on_Blue_Submit_Button() {
        addTeacherPage.submitButton.click();

    }
}
