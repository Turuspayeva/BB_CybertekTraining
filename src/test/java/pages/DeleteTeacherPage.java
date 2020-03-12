package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

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

    @FindBy(xpath = "(//div[@class='col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3'])[1]")
    public  WebElement firstBox;

    @FindBy(xpath = " //a[@class='avatar']")
    public List<WebElement> teacherCards;

    @FindBy(xpath = "//div[@class='col-md-5']//li[1]//a")
    public WebElement teacherIdInDetailPage;

 @FindBy (xpath ="//div[@class='row filter-row']//div[1]//div[1]//input[1]")
    public WebElement teacherInputId;


    @FindBy(xpath="//a[@class='btn btn-success btn-block mt-4 mb-2']")
    public WebElement searchButton;

    @FindBy(xpath = "//a[contains(text(),'Delete')]")
    public WebElement deleteOptionFromDropdown;


}
