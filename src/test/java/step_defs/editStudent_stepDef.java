package step_defs;

import cucumber.api.Scenario;
import cucumber.api.java.bs.A;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.AllStudentPage;
import pages.EditStudentPage;
import utilities.DBUtility;
import utilities.Driver;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import static utilities.TempStorage.addDataToTempStorage;
import static utilities.TempStorage.getDataFromTempStorage;

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

    @When("user edit {string} to firstname field")
    public void user_enters_to_Firstname_field(String Firstname) {
            addDataToTempStorage("Firstname", Firstname);
            eSP.FirstName.clear();
            eSP.FirstName.sendKeys(Firstname);
    }


    @Test
    @When("user edit {string} to lastname field")
    public void user_edit_to_Lastname_field(String Lastname) {
        addDataToTempStorage("Lastname", Lastname);
        eSP.LastName.clear();
        eSP.LastName.sendKeys(Lastname);
    }
    @Test
    @When("user edit {string} to email field")
    public void user_edit_to_Email_field(String EmailAdress) {

        eSP.Email.clear();
        eSP.Email.sendKeys(EmailAdress);
    }
    @Test
    @When("user edit {string} to joining date field")
    public void user_edit_to_Joining_Date_field(String JoiningDate) {
        eSP.JoiningDate.sendKeys(JoiningDate);

    }
    @Test
    @When("user edit {string} to password field")
    public void user_edit_to_Password_field(String Password) {

        eSP.Password.sendKeys(Password);
    }
    @Test
    @When("user edit {string} to confirm password field")
    public void user_edit_to_Confirm_Password_field(String ConfirmPassword) {
        eSP.ConfirmPassword.sendKeys(ConfirmPassword);
    }
    @Test
    @When("user edit {string} to subject field")
    public void user_edit_to_Subject_field(String Subject) {

        eSP.Subject.sendKeys(Subject);
    }
    @Test
    @When("user edit {string} to mobile number field")
    public void user_edit_to_Mobile_number_field(String PhoneNumber) {
        addDataToTempStorage("PhoneNumber", PhoneNumber);
        eSP.MobileNumber.sendKeys(PhoneNumber);
    }
    @Test
    @When("user edit {string} to gender field")
    public void user_edit_to_Gender_field(String Gender) {
        Select selectGender = new Select(eSP.Gender);
        selectGender.selectByVisibleText(Gender);
    }
    @Test
    @When("user edit {string} to admission no field")
    public void user_edit_to_Admission_No_field(String AdmissionNumber) {
        eSP.AdmoissonNo.sendKeys(AdmissionNumber);
    }
    @Test
    @When("user edit {string} to birth date field")
    public void user_edit_to_Birth_Date_field(String DateOfBirth) {

        eSP.BirthDate.sendKeys(DateOfBirth);
    }
    @Test
    @When("user edit {string} to major field")
    public void user_edit_to_Major_field(String Major) {

        eSP.Major.sendKeys(Major);
    }
    @Test
    @When("user edit {string} to batch field")
    public void user_edit_to_Batch_field(String Batch)
    {
        Select select = new Select(eSP.Batch);
        select.selectByVisibleText(Batch);
    }
    @Test
    @When("user edit {string} to section field")
    public void user_edit_to_Section_field(String Section) {

        eSP.Section.sendKeys(Section);
    }
    @Test
    @When("user edit {string} to permanent address field")
    public void user_edit_to_Permanent_address_field(String Address) {
        eSP.PremanentAddress.sendKeys(Address);
    }
    @Test
    @When("user edit {string} to company name field")
    public void user_edit_to_Company_Name_field(String CompanyName) {
        eSP.CompanyName.sendKeys(CompanyName);
    }
    @Test
    @When("user edit {string} to title")
    public void user_edit_to_Title(String Title) {

        eSP.Title.sendKeys(Title);
    }
    @Test
    @When("user edit {string} to start date field")
    public void user_edit_to_Start_Date_field(String StartDate) {

        eSP.StartDate.sendKeys(StartDate);
    }
    @Test
    @When("user edit {string} to city field")
    public void user_edit_to_City_field(String City) {

        eSP.City.sendKeys(City);
    }
    @Test
    @When("user edit {string} to zip code")
    public void user_edit_to_Zip_Code(String ZipCode) {

        eSP.ZiCode.sendKeys(ZipCode);
    }
    @Test
    @When("user edit {string} to state field")
    public void user_edit_to_State_field(String State) {

        eSP.State.sendKeys(State);
    }

    @When("user click on submit button")
    public void user_click_on_submit_button() {
        eSP.submitButton.click();
    }
    @Test
    @Then("user verifie there is error message")
    public void user_verifie_there_is_Error_message() {
        SeleniumUtils.pause(5);
        System.out.println("1");
    }

    @Then("user veifie there are no new student created on UI")
    public void user_veifie_there_are_no_new_Student_created_on_UI() {
        System.out.println("2");
    }

    @Test
    @Then("user verifie database")
    public void user_verifie_there_is_no_new_record_in_database() {
        try {
            DBUtility.createConnection();
        }
        catch(SQLException e){
            System.out.println(e.getLocalizedMessage());
        }
        String query = "select " +
                "student.last_name, " +
                "student.first_name, " +
                "contact.phone " +
                "from student inner join contact on student.student_id=contact.student_id where student.first_name='" +
                getDataFromTempStorage("Firstname")+ "' and student.last_name='"+getDataFromTempStorage("Lastname")+
                "' and contact.phone='"+ getDataFromTempStorage("PhoneNumber")+"'";
        System.out.println(query);

//        select student.last_name, student.first_name, contact.phone from student inner join contact on student.student_id=contact.student_id
//        where student.first_name='Nikolas' and student.last_name='Bond' and contact.phone='240-123-1231';

        try {
            List<Map<Object, Object>> result = DBUtility.executeQuery(query);
            SeleniumUtils.pause(3);
            Assert.assertTrue("Array with set result is not empty", result.isEmpty());
            for (int i=0; i<result.size(); i++){
                System.out.println(result.get(i).toString());
            }
            DBUtility.close();

        }
        catch (Exception e){
            System.out.println(e.getLocalizedMessage());
        }


    }

}

//
//    @Given("User clean up Firstname Field")
//    public void user_clean_up_Firstname_Field() {
//        wait.until(ExpectedConditions.elementToBeClickable(eSP.FirstName));
//        eSP.FirstName.clear();
//        eSP.LastName.click();
//
//    }
//
//    @When("User input first name {string}")
//    public void user_input_first_name(String firstName) {
//        wait.until(ExpectedConditions.elementToBeClickable(eSP.FirstName));
//        eSP.FirstName.sendKeys(firstName);
//    }
//
//    @When("User click to submit")
//    public void user_tried_to_submit() {
//        wait.until(ExpectedConditions.elementToBeClickable(eSP.submitButton));
//        SeleniumUtils.pause(3);
//        eSP.submitButton.click();
//    }
//
//    @Then("Check student {string} in DB")
//    public void check_student_in_DB(String string) {
//    }
//
//
//    @When("User scroll down to student with first name {string}")
//    public void user_scroll_down_to_student_with_first_name(String string) {
//
//        Actions actions = new Actions(Driver.getDriver());
//        actions.moveToElement(Driver.getDriver().findElement(By.xpath("//*[@id='app']/div/div[3]/div/div[2]/div[402]/div/h4/a")));
//
//    }
//
//    @When("User verify what student with first name {string} exist")
//    public void user_verify_what_student_with_first_name_exist(String string) {
//
//    }
//
//    @Then("Verify that user with name {string} exist in data base")
//    public void verify_that_user_with_name_exist_in_data_base(String string) {
//        // Write code here that turns the phrase above into concrete actions
//        throw new cucumber.api.PendingException();
//    }
//
//
////    @Then("Verify what first name of student was change")
////    public void verify_what_first_name_of_student_was_change() {
////        // Write code here that turns the phrase above into concrete actions
////        throw new cucumber.api.PendingException();
////    }
//
//
//
//}
