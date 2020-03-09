package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DeleteTeacherPage {
    public  DeleteTeacherPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy (xpath = "(//a[@data-target='#delete_employee'])[1]")
    public WebElement threePoint;


    @FindBy (xpath="(//a[@class='action-icon dropdown-toggle'])[1]/../div/a[2]")
    public WebElement delete;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement submit;

    @FindBy(xpath ="(//a[@ href='all-teachers.html'])[1]")

    public WebElement AllTeacher;

    @FindBy (css = "//span[.='Teachers'])")
    public WebElement teachersDropdown;
    @FindBy(xpath = "(//a[@class='action-icon dropdown-toggle'])[1]")
    public  WebElement threeDots;

}
