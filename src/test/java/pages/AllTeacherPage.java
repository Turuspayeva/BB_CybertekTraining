package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AllTeacherPage {

    public AllTeacherPage(){
        PageFactory.initElements(Driver.getDriver(), this);

    }
    @FindBy (xpath = "//a[@class='active subdrop']")
    public WebElement mainTeachersDropdown;

    @FindBy (xpath = "//a[.='All Teachers']")
    public WebElement allTeachersDropdown;

//    @FindBy (xpath = "(//div[@class='form-group custom-mt-form-group'])[3]/select")
//    public WebElement departmentDropdown;

    @FindBy (xpath = "(//input[@type='text'])[1]")
    public WebElement teacherID_Input;

    @FindBy (xpath = "(//input[@type='text'])[2]")
    public WebElement teacherNameInput;

    @FindBy (xpath = "//a[.=' Search ']")
    public  WebElement searchButton;

    @FindBy (xpath = "//a[@class='btn btn-primary btn-rounded float-right']")
    public WebElement addTeacherDropdown;






}
