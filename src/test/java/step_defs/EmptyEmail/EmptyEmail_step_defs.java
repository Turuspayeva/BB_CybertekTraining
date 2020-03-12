package step_defs.EmptyEmail;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import pages.AddTeacherPage;
import pages.AllTeacherPage;
import pages.LeftSideMenu;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class EmptyEmail_step_defs {

    AddTeacherPage addTeacherPage = new AddTeacherPage();
    //    AllTeacherPage allTeacherPage = new AllTeacherPaged();
    LeftSideMenu leftSideMenu = new LeftSideMenu();


    @Given("User is on CybertekTrining Main Page")
    public void user_is_on_CybertekTrining_Main_Page() {


        Driver.getDriver().get(Config.getProperty("url"));

    }

    @When("User clicks on Teachers")
    public void user_clicks_on_Teachers() {
        //clic
//        leftSideMenu.AllTeachersLink.click();
        // allTeacherPage.addTeacherDropdown.click();
        leftSideMenu.TeachersDropdown.click();

    }

    @When("All Teachers and Add Teachers Should be Displayed")
    public void all_Teachers_and_Add_Teachers_Should_be_Displayed() {

        // Assert.assertTrue(.allTeachersDropdown.isDisplayed());
        //  Assert.assertTrue(AddTeacherLink.addTeacherDropdown.isDisplayed());

    }

    @When("User Clicks on Add Teachers")
    public void user_Clicks_on_Add_Teachers() {

        leftSideMenu.AddTeacherLink.click();

    }

    @When("User Enters First Name")
    public void user_Enters_First_Name() {
        addTeacherPage.firstNameInput.sendKeys("abc");

    }

    @When("User Enters Last Name")
    public void user_Enters_Last_Name() {
        addTeacherPage.lastNameInput.sendKeys("booba");

    }

    @When("User Enters Empty Email")
    public void user_Enters_Empty_Email() {
        addTeacherPage.emailInput.sendKeys("");


    }

    @When("User Enters Joining Date")
    public void user_Enters_Joining_Date() {
        addTeacherPage.birthDateInput.sendKeys("12/3/1993");

    }

    @When("User Enters Password")
    public void user_Enters_Password() {
        addTeacherPage.passwordInput.sendKeys("1233");

    }

    @When("User Entes Confirm Password")
    public void user_Entes_Confirm_Password() {
        addTeacherPage.passwordInput.sendKeys("1233");

    }

    @When("User Enters Subject")
    public void user_Enters_Subject() {
        addTeacherPage.subjectInput.sendKeys("IT");

    }

    @When("User Enters Mobile Number")
    public void user_Enters_Mobile_Number() {
        addTeacherPage.mobileNumberInput.sendKeys("3126733342");

    }

    @When("User Selelct Gender from the Dropdowns")
    public void user_Selelct_Gender_from_the_Dropdowns() {

        Select select = new Select(addTeacherPage.genderDropdown);
        select.selectByVisibleText("Male");

    }

    @When("User Select Depertement from the Dropdowns")
    public void user_Select_Depertement_from_the_Dropdowns() {

        Select select = new Select(addTeacherPage.departmentDropdown);
        select.selectByVisibleText("Computer");

    }

    @When("User Enters Birth Date")
    public void user_Enters_Birth_Date() {
        addTeacherPage.birthDateInput.sendKeys("11/12/1993");

    }

    @When("User Enters Salary")
    public void user_Enters_Salary() {
        addTeacherPage.salaryInput.sendKeys("100000");


    }

    @When("User Select Number of Batch from the Dropdowns")
    public void user_Select_Number_of_Batch_from_the_Dropdowns() {

        Select select = new Select(addTeacherPage.batchDropdown);
        select.selectByVisibleText("1");

    }

    @When("User Enter the Section")
    public void user_Enter_the_Section() {

        addTeacherPage.sectionInput.sendKeys("6");

    }

    @When("User Enter the Premanent Address")
    public void user_Enter_the_Premanent_Address() {

        addTeacherPage.permanentAddressInput.sendKeys("123 main st ");


    }

    @Then("User Should Clicks on Blue Submit Button")
    public void user_Should_Clicks_on_Blue_Submit_Button() {

        addTeacherPage.submitButton.click();

    }

    @Then("User Should verfy the Teacher was not created in DataBase")
    public void user_Should_verfy_the_Teacher_was_not_created_in_DataBase() {
        try {
            DBUtility.createConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        String query = "select * from teacher where email_address is null and last_name = 'booba' ";

        try {
            List <Map<Object , Object >> data =  DBUtility.executeQuery(query);
            Assert.assertTrue("Array with set result is not empty", data.isEmpty());
        } catch (SQLException e) {
            e.printStackTrace();

        }

    }
}