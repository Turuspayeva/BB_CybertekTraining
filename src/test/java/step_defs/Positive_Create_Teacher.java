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
import pages.LeftSideMenu;
import utilities.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class Positive_Create_Teacher {

    AddTeacherPage addTeacherPage = new AddTeacherPage();
    AllTeacherPage allTeacherPage = new AllTeacherPage();
    LeftSideMenu leftSideMenu = new LeftSideMenu();

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

    @Given("user enters")
    public void user_enters(io.cucumber.datatable.DataTable dataTable) {
//

        Map<String, String> data = dataTable.asMap(String.class, String.class);
        SeleniumUtils.pause(2);

        addTeacherPage.firstNameInput.sendKeys(data.get("FirstName"));
        TempStorage.addDataToTempStorage("LastName", data.get("FirstName"));
        addTeacherPage.lastNameInput.sendKeys(data.get("LastName"));
        TempStorage.addDataToTempStorage("LastName", data.get("LastName"));
        addTeacherPage.emailInput.sendKeys(data.get("Email"));
        addTeacherPage.joiningDateInput.sendKeys(data.get("Joining Date"));
        addTeacherPage.passwordInput.sendKeys(data.get("Password"));
        addTeacherPage.subjectInput.sendKeys(data.get("Subject"));
        addTeacherPage.mobileNumberInput.sendKeys(data.get("Mobile number"));
        addTeacherPage.genderDropdown.sendKeys(data.get("Gender"));
        addTeacherPage.departmentDropdown.sendKeys(data.get("Department"));
        addTeacherPage.birthDateInput.sendKeys(data.get("Birth Date"));
        addTeacherPage.salaryInput.sendKeys(data.get("Salary"));
        addTeacherPage.batchDropdown.sendKeys(data.get("Batch"));
        addTeacherPage.sectionInput.sendKeys(data.get("Section"));
        addTeacherPage.permanentAddressInput.sendKeys(data.get("Permanent Address"));



    }

    @Given("User clicks Submit button")
    public void user_clicks_Submit_button()  {

        //addTeacherPage.submitButton.click();
        SeleniumUtils.waitForClickability(addTeacherPage.submitButton,5);
        Driver.getDriver().findElement(By.xpath("//button[@type='submit']")).click();



    }

    @When("User User is directed to All Teachers Page, User should input his name and choose the correct department, click on Search button")
    public void user_User_is_directed_to_All_Teachers_Page_User_should_input_his_name_and_choose_the_correct_department_click_on_Search_button() {
        leftSideMenu.AllTeachersLink.click();
        SeleniumUtils.waitForVisibility(allTeacherPage.teacherNameInput, 10);
        allTeacherPage.teacherNameInput.sendKeys(TempStorage.getDataFromTempStorage("FirstName"));

        Select select3 = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[3]/select")));
        select3.selectByVisibleText("Maths");
        allTeacherPage.searchButton.click();
    }
    @Test
    @Then("User should see a new created teacher in the database")
    public void user_should_see_a_new_created_teacher_in_the_database() {


        try {
            DBUtility.createConnection();
        } catch (SQLException e) {
            System.out.println(e.getLocalizedMessage());
        }


        String query = "select first_name, last_name from teacher where last_name ='"+TempStorage.getDataFromTempStorage("LastName")+"'";
        //String query = "select first_name, last_name from teacher where last_name = 'Wick'";

        try {
            List<Map<Object, Object>> result = DBUtility.executeQuery(query);

            for (Map<Object, Object> map : result) {

                System.out.println(map.get("LAST_NAME"));
                System.out.println(map.get("FIRST_NAME"));
                System.out.println();
                // Assert.assertTrue("Wick is not in system",map.containsValue("Wick"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }


//
//    @Given("User is on the homepage")
//    public void user_is_on_the_homepage() {
//        Driver.getDriver().get(Config.getProperty("url"));
//    }
//
//    @Given("User is on the Add Teacher dropdown")
//    public void user_is_on_the_Add_Teacher_dropdown() throws InterruptedException {
//        addTeacherPage.mainTeachersDropdown.click();
//        addTeacherPage.mainAddTeacherDropdown.click();
//        Thread.sleep(6000);
//
//    }
//
//    @Given("User enters Firstname")
//    public void user_enters_Firstname() {
//        SeleniumUtils.waitForVisibility(addTeacherPage.firstNameInput,10);
//        addTeacherPage.firstNameInput.sendKeys("Katie");
//
//    }
//
//    @Given("User enters Lastname")
//    public void user_enters_Lastname() {
//        SeleniumUtils.waitForVisibility(addTeacherPage.lastNameInput, 10);
//        addTeacherPage.lastNameInput.sendKeys("Apsalbke");
//    }
//
//    @Given("User enters Email")
//    public void user_enters_Email()
//    {
//        SeleniumUtils.waitForVisibility(addTeacherPage.emailInput, 10);
//        addTeacherPage.emailInput.sendKeys("apsalbke@gmail.com");
//    }
//
//    @Given("User enters Joining Date")
//    public void user_enters_Joining_Date() {
//        addTeacherPage.joiningDateInput.sendKeys("03/20/2020");
//    }
//
//    @Given("User enters Password")
//    public void user_enters_Password() {
//        addTeacherPage.passwordInput.sendKeys("1234");
//    }
//
//    @Given("User enters Subject")
//    public void user_enters_Subject() {
//       addTeacherPage.subjectInput.sendKeys("Math");
//    }
//
//    @Given("User enters Mobile number")
//    public void user_enters_Mobile_number() {
//        addTeacherPage.mobileNumberInput.sendKeys("1231231234");
//    }
//
//    @Given("User clicks Gender Dropdown and selects his Gender")
//    public void user_clicks_Gender_Dropdown_and_selects_his_Gender() {
//        Select select = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[5]/select")));
//        select.selectByVisibleText("Female");
//    }
//
//    @Given("User clicks on Department Dropdown and selects related Department")
//    public void user_clicks_on_Department_Dropdown_and_selects_related_Department() {
//        Select select1 = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[12]/select")));
//        select1.selectByVisibleText("Maths");
//    }
//
//    @Given("User enters Birth Date")
//    public void user_enters_Birth_Date() {
//        addTeacherPage.birthDateInput.sendKeys("01/28/1996");
//    }
//
//    @Given("User enters Salary")
//    public void user_enters_Salary() {
//        addTeacherPage.salaryInput.sendKeys(".");
//    }
//
//    @Given("User clicks on Batch Dropdown and selects related Batch number")
//    public void user_clicks_on_Batch_Dropdown_and_selects_related_Batch_number() {
//        Select select2 = new Select(Driver.getDriver().findElement(By.xpath("(//div[@class='form-group custom-mt-form-group'])[7]/select")));
//        select2.selectByIndex(4);
//    }
//
//    @Given("User enters Selection")
//    public void user_enters_Selection() {
//       addTeacherPage.sectionInput.sendKeys("selection");
//    }
//
//    @Given("User enters Premanent Address")
//    public void user_enters_Premanent_Address() {
//        addTeacherPage.premanentAddressInput.sendKeys("123 Main st. North Aurora, 60542, IL");
//    }
//
//    @Given("User clicks Submit button")
//    public void user_clicks_Submit_button()  {
////Thread.sleep(5000);
//        //addTeacherPage.submitButton.click();
//
//        Driver.getDriver().findElement(By.xpath("//button[@type='submit']")).click();
//    }
//
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
//

    }}
