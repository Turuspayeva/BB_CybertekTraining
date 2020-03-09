package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AllStudentPage {

    public AllStudentPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//a[@class='action-icon dropdown-toggle'])[1]")
    public WebElement treePoints;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div[3]/div/div[2]/div[1]/div/div[2]/div/a[1]")
    public WebElement edit;

}