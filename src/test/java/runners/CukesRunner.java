package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //monochrome = true,
        plugin = {"html:target/cucumber-reports",
                "rerun:target/failed/rerun.txt"},
        features = "src/test/resources/features",

        glue = "step_defs",
        dryRun =false,
        tags = "@Kana"
)

public class CukesRunner {
}
