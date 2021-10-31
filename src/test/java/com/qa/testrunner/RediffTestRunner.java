package com.qa.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="D:\\Devlabs\\Batch 4\\SDETTraining\\SDET.Batch4.BDDCucumber\\src\\test\\java\\com\\qa\\features\\RediffFeatures.feature",
		glue="com.qa.stepdefinitions",
		dryRun=false,
		strict=true,
		monochrome=true,
		format= {"pretty","html:test-output"},
		tags= {"~@End2EndTest"}
		)


public class RediffTestRunner {

}
