package utilities;

import org.junit.Assert;
import pages.AddStudentPage;

public class CheckLocetorsAdd_EditStudent {
    @org.junit.Test
    public void checkLoceters() {
        AddStudentPage sp = new AddStudentPage();

        Driver.getDriver().get(Config.getProperty("url"));
        Assert.assertTrue("FirstName", sp.FirstName.isDisplayed());
        Assert.assertTrue("LastName", sp.LastName.isDisplayed());
        Assert.assertTrue("Email", sp.Email.isDisplayed());
        Assert.assertTrue("JoiningDate", sp.JoiningDate.isDisplayed());
        Assert.assertTrue("Pass", sp.Password.isDisplayed());
        Assert.assertTrue("COnfPass", sp.ConfirmPassword.isDisplayed());
        Assert.assertTrue("Subject", sp.Subject.isDisplayed());
        Assert.assertTrue("MobileNumber", sp.MobileNumber.isDisplayed());
        Assert.assertTrue("Gender", sp.Gender.isDisplayed());
        Assert.assertTrue("AdmoissonNo", sp.AdmoissonNo.isDisplayed());
        Assert.assertTrue("Major", sp.Major.isDisplayed());
        Assert.assertTrue("Batch", sp.Batch.isDisplayed());
        Assert.assertTrue("Section", sp.Section.isDisplayed());
        Assert.assertTrue("PremanentAddress", sp.PremanentAddress.isDisplayed());
        Assert.assertTrue("CompanyName", sp.CompanyName.isDisplayed());
        Assert.assertTrue("Title", sp.Title.isDisplayed());
        Assert.assertTrue("StartDate", sp.StartDate.isDisplayed());
        Assert.assertTrue("City", sp.City.isDisplayed());
        Assert.assertTrue("Street", sp.Street.isDisplayed());
        Assert.assertTrue("ZiCode", sp.ZiCode.isDisplayed());
        Assert.assertTrue("State", sp.State.isDisplayed());
    }
}
