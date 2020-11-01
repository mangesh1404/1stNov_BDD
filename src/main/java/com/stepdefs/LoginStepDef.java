package com.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
	WebDriver driver;

	@After//hooks in cucumber
	public void jbk() {
		driver.close();
	}
	
	@Given("^user launch application$")
	public void user_launch_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html");
		driver.manage().window().maximize();
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pwd) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("password")).sendKeys(pwd);
	}

	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//button")).click();
	}

	@Then("^user verify homepage title$")
	public void user_verify_homepage_title() throws Throwable {
		String expectedTitle=  "JavaByKiran | Dashboard";
		String actualTitle= driver.getTitle();
		Assert.assertEquals(actualTitle, expectedTitle);
	}
	@Then("^user should see logo$")
	public void user_should_see_logo() throws Throwable {
		WebElement logo = driver.findElement(By.tagName("img"));
		Assert.assertTrue(logo.isDisplayed());
	}
}
