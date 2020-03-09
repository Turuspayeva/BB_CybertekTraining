package step_defs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.DeleteStudentPage;
import pages.LeftSideMenu;
import utilities.Driver;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.util.Random;

public class DiscardDeleteStudentMessage_StepDef {

    DeleteStudentPage deleteStudentPage = new DeleteStudentPage();
    LeftSideMenu leftSideMenu = new LeftSideMenu();
    Random random = new Random();
    String studentId;

    @When("User click on vertical ellipsis in pacricular student card")
    public void user_click_on_vertical_ellipsis_in_pacricular_student_card() {
        deleteStudentPage.studentCards.get(random.nextInt(deleteStudentPage.studentCards.size())).click();
        //studentId = deleteStudentPage.studentIdInDetailPage.getText();
        TempStorage.addDataToTempStorage("studentId", deleteStudentPage.studentIdInDetailPage.getText());
        Driver.getDriver().navigate().back();
        SeleniumUtils.waitForVisibility(deleteStudentPage.studentIdInputSearchBox, 10);
        deleteStudentPage.studentIdInputSearchBox.clear();
        deleteStudentPage.studentIdInputSearchBox.sendKeys(TempStorage.getDataFromTempStorage("studentId"));
        deleteStudentPage.SearchButton.click();
        deleteStudentPage.studentVerticalEllipses.click();
    }

    @When("User discard this action")
    public void user_discard_this_action() {
        deleteStudentPage.closeButtonFromConfirmMessage.click();
    }

    @Then("this student should still appear in the page")
    public void this_student_should_still_appear_in_the_page() {
        Assert.assertTrue("student profile not displayed", deleteStudentPage.studentProfileAfterSearch.size()>=1);
    }

}
