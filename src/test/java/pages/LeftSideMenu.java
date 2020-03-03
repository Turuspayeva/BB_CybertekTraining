package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LeftSideMenu {

    public LeftSideMenu(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "//div[@id='sidebar-menu']//span[.=' Teachers']")
    public WebElement TeachersDropdown;

    @FindBy(xpath = "//div[@id='sidebar-menu']//span[.=' Students']")
    public WebElement StudentsDropdown;

    @FindBy(xpath = "//div[@id='sidebar-menu']//a[@href='all-teachers.html']")
    public WebElement AllTeachersLink;

    @FindBy (xpath = "//a[@href='add-teacher.html']")
    public WebElement AddTeacherLink;

    @FindBy (xpath = "//div[@id='sidebar-menu']//a[@href='all-students.html']")
    public WebElement AllStudentsLink;

    @FindBy (xpath = "//div[@id='sidebar-menu']//a[@href='add-student.html']")
    public WebElement AddStudentLink;



}
