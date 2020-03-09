package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.AddTeacherPage;
import pages.EditTeacherPage;
import pages.LeftSideMenu;
import utilities.*;

import java.util.List;
import java.util.Map;

import static utilities.TempStorage.getDataFromTempStorage;

public class BB_424_EditTeacher_stepDef {

    LeftSideMenu leftSideMenu = new LeftSideMenu();
    EditTeacherPage editTeacherPage = new EditTeacherPage();
    AddTeacherPage addTeacherPage = new AddTeacherPage();



    @Given("the user is on Edit Teacher Page")
    public void the_user_is_on_Edit_Teacher_Page() {
        Driver.getDriver().get(Config.getProperty("url"));
        leftSideMenu.TeachersDropdown.click();
        SeleniumUtils.waitForVisibility(leftSideMenu.AllTeachersLink, 10);
        leftSideMenu.AllTeachersLink.click();

        String expectedTitle = editTeacherPage.pageHeader.getText();

        Assert.assertTrue("Teachers Page header NOT matching. Verification FAILD!",
                expectedTitle.equalsIgnoreCase("Teachers"));

        editTeacherPage.threePoints.click();
        SeleniumUtils.waitForVisibility(editTeacherPage.editButton, 5);
        editTeacherPage.editButton.click();

        SeleniumUtils.waitForVisibility(editTeacherPage.pageHeader, 10);

        String expectedTitle2 = editTeacherPage.pageHeader.getText();

        Assert.assertTrue("Edit Teacher Page header NOT matching. Verification FAILD!",
                expectedTitle2.equalsIgnoreCase("Edit Teachers"));
    }

    @When("the user reenters {string} to Firstname field")
    public void the_user_reenters_to_Firstname_field(String givenFirstName) {
        addTeacherPage.firstNameInput.clear();
        addTeacherPage.firstNameInput.sendKeys(givenFirstName);
        TempStorage.addDataToTempStorage("FirstName", givenFirstName);
    }

    @When("the user enters {string} to Lastname field")
    public void the_user_enters_to_Lastname_field(String givenLastName) {
        addTeacherPage.lastNameInput.clear();
        addTeacherPage.lastNameInput.sendKeys(givenLastName);
        TempStorage.addDataToTempStorage("LastName", givenLastName);
    }

    @When("the user enters {string} to Email field")
    public void the_user_enters_to_Email_field(String givenEmail) {
        addTeacherPage.emailInput.clear();
        addTeacherPage.emailInput.sendKeys(givenEmail);
        TempStorage.addDataToTempStorage("Email", givenEmail);
    }

    @When("the user enters {string} to Joining Date field")
    public void the_user_enters_to_Joining_Date_field(String givenJoiningDate) {
        addTeacherPage.joiningDateInput.clear();
        addTeacherPage.joiningDateInput.sendKeys(givenJoiningDate);
        TempStorage.addDataToTempStorage("JoiningDate", givenJoiningDate);
    }

    @When("the user enters {string} to Subject field")
    public void the_user_enters_to_Subject_field(String givenSubject) {
        addTeacherPage.subjectInput.clear();
        addTeacherPage.subjectInput.sendKeys(givenSubject);
        TempStorage.addDataToTempStorage("Subject", givenSubject);
    }

    @When("the user enters {string} to Mobile Number field")
    public void the_user_enters_to_Mobile_Number_field(String givenMobileNumber) {
        addTeacherPage.mobileNumberInput.clear();
        addTeacherPage.mobileNumberInput.sendKeys(givenMobileNumber);
        TempStorage.addDataToTempStorage("MobileNumber", givenMobileNumber);
    }

    @When("the user enters {string} to Birth Date field")
    public void the_user_enters_to_Birth_Date_field(String givenBirthDate) {
        addTeacherPage.birthDateInput.clear();
        addTeacherPage.birthDateInput.sendKeys(givenBirthDate);
        TempStorage.addDataToTempStorage("BirthDate", givenBirthDate);
    }

    @When("the user enters {string} to Salary field")
    public void the_user_enters_to_Salary_field(String givenSalary) {
        addTeacherPage.salaryInput.clear();
        addTeacherPage.salaryInput.sendKeys(givenSalary);
    }

    @When("the user enters {string} to Batch field")
    public void the_user_enters_to_Batch_field(String givenBatch) {
        addTeacherPage.batchDropdown.clear();
        addTeacherPage.batchDropdown.sendKeys(givenBatch);
        TempStorage.addDataToTempStorage("Batch", givenBatch);
    }

    @When("the user enters {string} to Section field")
    public void the_user_enters_to_Section_field(String givenSection) {
        addTeacherPage.sectionInput.clear();
        addTeacherPage.sectionInput.sendKeys(givenSection);
        TempStorage.addDataToTempStorage("Section", givenSection);
    }

    @When("the user enters {string} to Present Address field")
    public void the_user_enters_to_Present_Address_field(String givenAddress) {
        addTeacherPage.permanentAddressInput.clear();
        addTeacherPage.permanentAddressInput.sendKeys(givenAddress);
        TempStorage.addDataToTempStorage("Address", givenAddress);
    }

    @When("the user clicks on Submit button")
    public void the_user_clicks_on_Submit_button() {
        addTeacherPage.submitButton.click();
    }

    @Then("the input fields don't allow saving data. Error should be indicated and there is no any record in DataBase")
    public void the_input_fields_don_t_allow_saving_data_Error_should_be_indicated_and_there_is_no_any_record_in_DataBase() {
        String pageHeaderText3 = editTeacherPage.pageHeader.getText();

        Assert.assertTrue("Page Header verification NOT matching. Submit button verification FAILED!",
                pageHeaderText3.equalsIgnoreCase("Edit Teacher"));

//--------------------------- Verify if there is no any record in DataBase ---------------------------

        try {
            DBUtility.createConnection();
        }
        catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }
        String query = "select " +
                "teacher.last_name, " +
                "teacher.first_name, " +
                "contact.phone " +
                "from teacher inner join contact on teacher.teacher_id=contact.teacher_id where teacher.first_name='" +
                getDataFromTempStorage("FirstName")+ "' and teacher.last_name='"+getDataFromTempStorage("LastName")+
                "' and contact.phone='"+ getDataFromTempStorage("MobileNumber")+"';";
        System.out.println(query);

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
