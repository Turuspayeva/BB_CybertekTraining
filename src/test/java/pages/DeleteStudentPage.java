package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class DeleteStudentPage {

public DeleteStudentPage(){
    PageFactory.initElements(Driver.getDriver(), this);
}


@FindBy(xpath = "//a[@class='action-icon dropdown-toggle']")
    public WebElement studentVerticalEllipses;

@FindBy(xpath = "//a[@class='avatar']")
    public List<WebElement> studentCards;

@FindBy(xpath = "//div[@class='col-md-5']//li[1]//a")
public WebElement studentIdInDetailPage;

//----------------
    // search input for id and search button
@FindBy(xpath = "//div[@class='row filter-row']//div[1]//div[1]//input[1]")
public WebElement studentIdInputSearchBox;

@FindBy(xpath="//a[@class='btn btn-success btn-block mt-4 mb-2']")
public WebElement SearchButton;
//-----------------

//when you click on vertical ellipses drop down menu appears
@FindBy(xpath = "//div[@class='dropdown-menu dropdown-menu-right show']")
    public WebElement dropdownMenu;


@FindBy(xpath = "//a[contains(text(),'Delete')]")
    public WebElement deleteOptionFromDropdown;


@FindBy (xpath = "//div[@class='modal-content modal-md']")
    public WebElement deleteEmployeeConfirmationMessage;

@FindBy(xpath = "//button[@type = 'submit']")
    public WebElement deleteButtonFromConfirmMessage;


    @FindBy(xpath = "//a[@class = 'btn btn-white']")
    public WebElement closeButtonFromConfirmMessage;

    @FindBy(xpath="//div[@class='profile-widget']")
    public List<WebElement> studentProfileAfterSearch;
}
