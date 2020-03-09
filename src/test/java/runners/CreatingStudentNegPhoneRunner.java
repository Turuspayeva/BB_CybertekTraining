package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports","json:target/creatStudNegPhone.json"},
        features = "src/test/resources/features/CreatingStudentNegPhone.feature",
        glue = "step_defs",
        dryRun =false
      //   tags = "@cucumber"

)

public class CreatingStudentNegPhoneRunner {

}
