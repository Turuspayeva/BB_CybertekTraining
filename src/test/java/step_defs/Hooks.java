package step_defs;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.DBUtility;
import utilities.Driver;


import java.sql.SQLException;

import static utilities.TempStorage.*;

public class Hooks {

    @Before
    public void setupBeforeCucumberScenario(){
        clearDataTempStorage();
    }

    @After
    public void tearDown(Scenario scenario){
        try {
            DBUtility.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        if (scenario.isFailed()){
            byte[]screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }


    }
}
