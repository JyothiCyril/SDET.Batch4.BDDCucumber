package com.qa.stepdefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.qa.pages.AmazonPages;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AmazonStepDefinition {
	
	WebDriver driver;
	AmazonPages AmazonOR;
	Actions act;
	
	@Before
	public void setUp() {
		System.out.println("Starting..........");
	}
	
	@After
	public void tearDown() {
		System.out.println("Stopping .............");
	}
	
	@Given("^Browser is opened$")
	public void browser_is_opened() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		AmazonOR = new AmazonPages(driver);
		act = new Actions(driver);
	}

	@Then("^Url should be launched$")
	public void url_should_be_launched(){
		driver.get("https://www.amazon.in/");
	}



	@Given("^the user is on amazon home page$")
	public void the_user_is_on_amazon_home_page() {
		
	String title = driver.getTitle();
	boolean contains = title.contains("Amazon");
	Assert.assertTrue(contains);
		
		
	}

	@Then("^the user selects Books as category$")
	public void the_user_selects_Books_as_category(){
		AmazonOR.getCategory().selectByVisibleText("Books");
	}

	@Then("^the user types Da Vinci Code in the search text field$")
	public void the_user_types_Da_Vinci_Code_in_the_search_text_field(){
		AmazonOR.getSearchTxtField().sendKeys("Da Vinci Code");
	}

	@Then("^clicks the maginifier button$")
	public void clicks_the_maginifier_button() {
		AmazonOR.getMagnifierBtn().click();
	}

	@Then("^check all the relavant items loaded$")
	public void check_all_the_relavant_items_loaded() {
		List<WebElement> itemNames = AmazonOR.getItemNames();
		System.out.println("Total no. of items printed are : " + itemNames.size());
		for(WebElement item:itemNames) {
			System.out.println(item.getText());
		}
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

	@Then("^fetch all the footer links present on the page$")
	public void fetch_all_the_footer_links_present_on_the_page() {
		List<WebElement> footerLinks = AmazonOR.getFooterLinks();
		System.out.println("Total no. of footer links present are : " + footerLinks.size());
		for(WebElement link:footerLinks) {
			System.out.println(link.getText());
		}
	}

	@When("^the mouse over is done on Account and list option$")
	public void the_mouse_over_is_done_on_Account_and_list_option() {
		WebElement ele = AmazonOR.getAccountandList();
		act.moveToElement(ele).build().perform();
	
		
	}

	@Then("^click start here link$")
	public void click_start_here_link() {
		AmazonOR.getRegistrationLink().click();
	}

	@When("^the user is landed on the registration page$")
	public void the_user_is_landed_on_the_registration_page() {
		String title = driver.getTitle();
		boolean contains = title.contains("Registration");
		Assert.assertTrue(contains);
		
	}

//	@Then("^type user name as Kim Smith$")
//	public void type_user_name_as_Kim_Smith() 
	// Only this step will be iterated for several time
	@Then("^type user name as \"([^\"]*)\"$")
	public void type_user_name_as(String data) {
		AmazonOR.getCustomerNameTxtField().sendKeys(data); // value of data is read from feature file
		
	}
	
	
	@Then("^type user name$")
	public void type_user_name(DataTable InputData) throws InterruptedException {
		
		List<String> count = InputData.asList(String.class);
		for(String item : count) {
			AmazonOR.getCustomerNameTxtField().clear();
			AmazonOR.getCustomerNameTxtField().sendKeys(item);
			Thread.sleep(4000);
		}
		
		
	}
	
	// whole scenario will be iterated for several time
	
	@Then("^the user selects the \"([^\"]*)\"$")
	public void the_user_selects_the(String Category) throws InterruptedException {
		AmazonOR.getCategory().selectByVisibleText(Category);
		Thread.sleep(3000);
	}

	@Then("^the user type the \"([^\"]*)\" in the search text field$")
	public void the_user_type_the_in_the_search_text_field(String ItemName) {
		AmazonOR.getSearchTxtField().clear();
		AmazonOR.getSearchTxtField().sendKeys(ItemName);
		
	}


	
	
}
