package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EditTeacherPage {

    public EditTeacherPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//a[@class='action-icon dropdown-toggle'])[1]")
    public WebElement threePoints;

    @FindBy (xpath = "(//a[@class='action-icon dropdown-toggle'])[1]/../div/a")
    public WebElement editButton;

    @FindBy(xpath = "//h5")
    public WebElement pageHeader;

}
