package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.AddTeacherPage;
import pages.AllTeacherPage;
import utilities.Config;
import utilities.Driver;
import utilities.SeleniumUtils;

public class Positive_Create_Teacher {

    AddTeacherPage addTeacherPage = new AddTeacherPage();
    AllTeacherPage allTeacherPage = new AllTeacherPage();



    @Given("User is on the homepage")
    public void user_is_on_the_homepage() {
        Driver.getDriver().get(Config.getProperty("url"));
    }

    @Given("User is on the Add Teacher dropdown")
    public void user_is_on_the_Add_Teacher_dropdown() throws InterruptedException {
        addTeacherPage.mainTeachersDropdown.click();
        addTeacherPage.mainAddTeacherDropdown.click();
        Thread.sleep(6000);

    }

    @Given("User enters Firstname")
    public void user_enters_Firstname() {
        SeleniumUtils.waitForVisibility(addTeacherPage.firstNameInput,10);
        addTeacherPage.firstNameInput.sendKeys("Kanykei");

    }

    @Given("User enters Lastname")
    public void user_enters_Lastname() {
        SeleniumUtils.waitForVisibility(addTeacherPage.lastNameInput, 10);
        addTeacherPage.lastNameInput.sendKeys("Apsalbekova");
    }

    @Given("User enters Email")
    public void user_enters_Email()
    {
        SeleniumUtils.waitForVisibility(addTeacherPage.emailInput, 10);
        addTeacherPage.emailInput.sendKeys("apsalbke@gmail.com");
    }

    @Given("User enters Joining Date")
    public void user_enters_Joining_Date() {
        addTeacherPage.joiningDateInput.sendKeys("03/20/2020");
    }

    @Given("User enters Password")
    public void user_enters_Password() {
        addTeacherPage.passwordInput.sendKeys("1234");
    }

    @Given("User enters Subject")
    public void user_enters_Subject() {
       addTeacherPage.subjectInput.sendKeys("Math");
    }

    @Given("User enters Mobile number")
    public void user_enters_Mobile_number() {
        addTeacherPage.mobileNumberInput.sendKeys("1231231234");
    }

    @Given("User clicks Gender Dropdown and selects his Gender")
    public void user_clicks_Gender_Dropdown_and_selects_his_Gender() {
        Select select = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[5]/select")));
        select.selectByVisibleText("Female");
    }

    @Given("User clicks on Department Dropdown and selects related Department")
    public void user_clicks_on_Department_Dropdown_and_selects_related_Department() {
        Select select1 = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[12]/select")));
        select1.selectByVisibleText("Maths");
    }

    @Given("User enters Birth Date")
    public void user_enters_Birth_Date() {
        addTeacherPage.birthDateInput.sendKeys("12/16/1995");
    }

    @Given("User enters Salary")
    public void user_enters_Salary() {
        addTeacherPage.salaryInput.sendKeys(".");
    }

    @Given("User clicks on Batch Dropdown and selects related Batch number")
    public void user_clicks_on_Batch_Dropdown_and_selects_related_Batch_number() {
        Select select2 = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[7]/select")));
        select2.selectByIndex(4);
    }

    @Given("User enters Selection")
    public void user_enters_Selection() {
       addTeacherPage.sectionInput.sendKeys("selection");
    }

    @Given("User enters Premanent Address")
    public void user_enters_Premanent_Address() {
        addTeacherPage.permanentAddressInput.sendKeys("123 Main st. North Aurora, 60542, IL");
    }

    @Given("User clicks Submit button")
    public void user_clicks_Submit_button()  {
//Thread.sleep(5000);
        //addTeacherPage.submitButton.click();

        Driver.getDriver().findElement(By.xpath("//button[@type='submit']")).click();
    }

//    @When("User User is directed to All Teachers Page, User should input his name and choose the correct department, click on Search button")
//    public void user_User_is_directed_to_All_Teachers_Page_User_should_input_his_name_and_choose_the_correct_department_click_on_Search_button() {
//        SeleniumUtils.waitForVisibility(allTeacherPage.teacherNameInput, 10);
//        allTeacherPage.teacherNameInput.sendKeys("Kanykei");
//        Select select3 = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[3]/select")));
//        select3.selectByVisibleText("Maths");
//        allTeacherPage.searchButton.click();
//    }
//
//    @Then("User should be able to see his name and verrify, that its there.")
//    public void user_should_be_able_to_see_his_name_and_verrify_that_its_there() {
//        Assert.assertTrue(Driver.getDriver().findElement(By.xpath("//a[.='Kanykei']")).isDisplayed());
//    }

}
