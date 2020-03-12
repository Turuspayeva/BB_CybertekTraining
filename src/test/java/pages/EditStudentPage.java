package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import javax.swing.*;

public class EditStudentPage {




    public EditStudentPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement FirstName;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement Email;

    @FindBy(xpath = "(//input[@type='password'])[1]")
    public WebElement Password;

    @FindBy(xpath = "(//input[@type='text'])[3]")
    public WebElement Subject;

    @FindBy(xpath = "(//select)[1]")
    public WebElement Gender;

    @FindBy(xpath = "(//input[@type='text'])[4]")
    public WebElement BirthDate;

    @FindBy(xpath = "(//select)[2]")
    public WebElement Batch;

    @FindBy(xpath = "(//input[@type='text'])[5]")
    public WebElement LastName;

    @FindBy(xpath = "(//input[@type='text'])[6]")
    public WebElement JoiningDate;

    @FindBy(xpath = "(//input[@type='password'])[2]")
    public WebElement ConfirmPassword;

    @FindBy(xpath = "(//input[@type='number'])[1]")
    public WebElement MobileNumber;

    @FindBy(xpath = "(//input[@type='text'])[7]")
    public WebElement AdmoissonNo;

    @FindBy(xpath = "(//input[@type='text'])[8]")
    public WebElement Major;

    @FindBy(xpath = "(//input[@type='text'])[9]")
    public WebElement Section;

    @FindBy(xpath = "(//input[@type='text'])[10]")
    public WebElement CompanyName;

    @FindBy(xpath = "(//input[@type='text'])[11]")
    public WebElement StartDate;

    @FindBy(xpath = "(//input[@type='text'])[12]")
    public WebElement Street;

    @FindBy(xpath = "(//input[@type='text'])[13]")
    public WebElement State;

    @FindBy(xpath = "(//input[@type='text'])[14]")
    public WebElement Title;

    @FindBy(xpath = "(//input[@type='text'])[15]")
    public WebElement City;

    @FindBy(xpath = "(//input[@type='number'])[2]")
    public WebElement ZiCode;

    @FindBy(xpath = "//textarea[@id='message']")
    public WebElement PremanentAddress;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement submitButton;

    @FindBy (xpath = "(//div[@class='error'])[1]")
    public WebElement thisFieldIsRequired;


}
