package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //monochrome = true,
        plugin = { "html:target/cucumber-reports",
                "json:target/cucumber.json",
                "rerun:target/failed/rerun.txt"},
        features = "src/test/resources/features",
        glue = "step_defs",
        dryRun =false,
        tags = "@BB-417"
)

public class CukesRunner {
}
