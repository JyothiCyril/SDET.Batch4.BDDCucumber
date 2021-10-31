Feature: Validate rediff application

@SmokeTest@RegressionalTest
Scenario: Validate the home page
Given the user is on rediff home page

@SmokeTest
Scenario: Validate the all the hyperlinks on the home page
Given the user is on rediff home page
Then fetch all the hyperlinks present on the page

@SmokeTest@RegressionalTest@End2EndTest
Scenario: validate the new registration process
Given the user is on rediff home page
Then click the create account link
Then fill the registration form

@SmokeTest@RegressionalTest@End2EndTest
Scenario: validate the login action
Given the user is on rediff home page
Then click on sign in link
Then Enter user name
Then enter password
Then click login button

@SmokeTest
Scenario: validate the ui on the login page
Given the user is on rediff home page
Then check if the login button is disable when input fields are empty

@RegressionalTest
Scenario: validate the present of element on login page
Given the user is on rediff home page
Then check all the elements present on the login page

@RegressionalTest@End2EndTest
Scenario: validate the login action for invalid inputs
Given the user is on rediff home page
Then enter invalid user name
Then enter invali password
Then click login button
Then check the error message

@End2EndTest
Scenario: validate the title of home page
Given the user is on rediff home page
Then check the title is in uppercase