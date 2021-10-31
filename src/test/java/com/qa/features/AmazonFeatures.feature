Feature: Validate the amazon application
Background: Initilize the browser instance
Given Browser is opened
Then Url should be launched

Scenario: Validate search item scenario
Given the user is on amazon home page
Then the user selects Books as category
Then the user types Da Vinci Code in the search text field
And clicks the maginifier button
Then check all the relavant items loaded 
Then close the browser

Scenario: validate the footer links
Given the user is on amazon home page
Then fetch all the footer links present on the page
Then close the browser

Scenario: validate the new registration process
Given the user is on amazon home page
When the mouse over is done on Account and list option
Then click start here link
When the user is landed on the registration page
Then type user name as "Kim Smith"
Then close the browser

@RepeatedInputTesting
Scenario: validate the new registration process for multiple user
Given the user is on amazon home page
When the mouse over is done on Account and list option
Then click start here link
When the user is landed on the registration page
Then type user name
|Kim Smith|
|Roger Pressmann|
|Allan Blake|
Then close the browser

@MultipleInputTesting
Scenario Outline: Validate search item for multiple items
Given the user is on amazon home page
Then the user selects the "<Category>"
Then the user type the "<ItemName>" in the search text field
And clicks the maginifier button
Then check all the relavant items loaded 
Then close the browser

Examples:
|Category|ItemName|
|Books|Da vinci code|
|Appliances|Washing machines|
|Electronics|Mobile phones|