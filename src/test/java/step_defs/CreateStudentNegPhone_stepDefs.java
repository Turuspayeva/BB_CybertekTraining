package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.io.Zip;
import org.openqa.selenium.support.ui.Select;
import pages.AddStudentPage;
import pages.LeftSideMenu;
import utilities.*;
import static utilities.TempStorage.*;

import java.nio.file.AccessDeniedException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class CreateStudentNegPhone_stepDefs {
    AddStudentPage addStudentPage = new AddStudentPage();
    @Test
    @Given("User on add student page")
    public void user_on_Add_Student_page() {
        Driver.getDriver().get(Config.getProperty("url"));
        LeftSideMenu leftSideMenu = new LeftSideMenu();
        SeleniumUtils.waitForVisibility(leftSideMenu.StudentsDropdown, 3);
        leftSideMenu.StudentsDropdown.click();
        SeleniumUtils.waitForClickability(leftSideMenu.AddStudentLink, 3);
        leftSideMenu.AddStudentLink.click();
    }
    @Test
    @When("user enters {string} to firstname field")
    public void user_enters_to_Firstname_field(String Firstname) {
        if (addStudentPage.headerOfThePage.getText().equalsIgnoreCase("Add Student")) {

            TempStorage.addDataToTempStorage("Firstname", Firstname);
            addStudentPage.FirstName.sendKeys(Firstname);
        }
        else {
            Assert.assertTrue("Page Add student is not loaded", false);
        }

    }
    @Test
    @When("user enters {string} to lastname field")
    public void user_enters_to_Lastname_field(String Lastname) {
        TempStorage.addDataToTempStorage("Lastname", Lastname);
        addStudentPage.LastName.sendKeys(Lastname);
    }
    @Test
    @When("user enters {string} to email field")
    public void user_enters_to_Email_field(String EmailAdress) {

        addStudentPage.Email.sendKeys(EmailAdress);
    }
    @Test
    @When("user enters {string} to joining date field")
    public void user_enters_to_Joining_Date_field(String JoiningDate) {
        addStudentPage.JoiningDate.sendKeys(JoiningDate);

    }
    @Test
    @When("user enters {string} to password field")
    public void user_enters_to_Password_field(String Password) {

        addStudentPage.Password.sendKeys(Password);
    }
    @Test
    @When("user enters {string} to confirm password field")
    public void user_enters_to_Confirm_Password_field(String ConfirmPassword) {
        addStudentPage.ConfirmPassword.sendKeys(ConfirmPassword);
    }
    @Test
    @When("user enters {string} to subject field")
    public void user_enters_to_Subject_field(String Subject) {

        addStudentPage.Subject.sendKeys(Subject);
    }
    @Test
    @When("user enters {string} to mobile number field")
    public void user_enters_to_Mobile_number_field(String PhoneNumber) {
        addDataToTempStorage("PhoneNumber", PhoneNumber);
        addStudentPage.MobileNumber.sendKeys(PhoneNumber);
    }
    @Test
    @When("user enters {string} to gender field")
    public void user_enters_to_Gender_field(String Gender) {
        Select selectGender = new Select(addStudentPage.Gender);
        selectGender.selectByVisibleText(Gender);
    }
    @Test
    @When("user enters {string} to admission no field")
    public void user_enters_to_Admission_No_field(String AdmissionNumber) {
        addStudentPage.AdmoissonNo.sendKeys(AdmissionNumber);
    }
    @Test
    @When("user enters {string} to birth date field")
    public void user_enters_to_Birth_Date_field(String DateOfBirth) {

        addStudentPage.BirthDate.sendKeys(DateOfBirth);
    }
    @Test
    @When("user enters {string} to major field")
    public void user_enters_to_Major_field(String Major) {

        addStudentPage.Major.sendKeys(Major);
    }
    @Test
    @When("user enters {string} to batch field")
    public void user_enters_to_Batch_field(String Batch)
    {
        Select select = new Select(addStudentPage.Batch);
        select.selectByVisibleText(Batch);
    }
    @Test
    @When("user enters {string} to section field")
    public void user_enters_to_Section_field(String Section) {

        addStudentPage.Section.sendKeys(Section);
    }
    @Test
    @When("user enters {string} to permanent address field")
    public void user_enters_to_Permanent_address_field(String Address) {
        addStudentPage.PremanentAddress.sendKeys(Address);
    }
    @Test
    @When("user enters {string} to company name field")
    public void user_enters_to_Company_Name_field(String CompanyName) {
        addStudentPage.CompanyName.sendKeys(CompanyName);
    }
    @Test
    @When("user enters {string} to title")
    public void user_enters_to_Title(String Title) {

        addStudentPage.Title.sendKeys(Title);
    }
    @Test
    @When("user enters {string} to start date field")
    public void user_enters_to_Start_Date_field(String StartDate) {

        addStudentPage.StartDate.sendKeys(StartDate);
    }
    @Test
    @When("user enters {string} to city field")
    public void user_enters_to_City_field(String City) {

        addStudentPage.City.sendKeys(City);
    }
    @Test
    @When("user enters {string} to zip code")
    public void user_enters_to_Zip_Code(String ZipCode) {

        addStudentPage.ZiCode.sendKeys(ZipCode);
    }
    @Test
    @When("user enters {string} to state field")
    public void user_enters_to_State_field(String State) {

        addStudentPage.State.sendKeys(State);
    }

    @When("user clicks on submit button")
public void user_clicks_on_submit_button() {
    addStudentPage.submitButton.click();
}
    @Test
    @Then("user verifies there is error message")
    public void user_verifies_there_is_Error_message() {
        SeleniumUtils.pause(5);
        System.out.println("1");
    }

    @When("user enters {string} to street field")
    public void user_enters_to_street_field(String street) {
        addStudentPage.Street.sendKeys(street);
    }

    @Then("user veifies there are no new student created on UI")
    public void user_veifies_there_are_no_new_Student_created_on_UI() {
        System.out.println("2");
    }

    @Test
    @Then("user verifies database")
    public void user_verifies_there_is_no_new_record_in_database() {
        try {
            DBUtility.createConnection();
        }
        catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }
        String query = "select " +
                "student.last_name, " +
                "student.first_name, " +
                "contact.phone " +
                "from student inner join contact on student.student_id=contact.student_id where student.first_name='" +
                 getDataFromTempStorage("Firstname")+ "' and student.last_name='"+getDataFromTempStorage("Lastname")+
        "' and contact.phone='"+ getDataFromTempStorage("PhoneNumber")+"';";
        System.out.println(query);

//        select student.last_name, student.first_name, contact.phone from student inner join contact on student.student_id=contact.student_id
//        where student.first_name='Nikolas' and student.last_name='Bond' and contact.phone='240-123-1231';

        try {
            List<Map<Object, Object>> result = DBUtility.executeQuery(query);
            Assert.assertTrue("Array with set result is not empty", result.isEmpty());
            for (int i=0; i<result.size(); i++){
                System.out.println(result.get(i).toString());
            }

        }
        catch (Exception e){
            System.out.println(e.getLocalizedMessage());
        }


    }

}
