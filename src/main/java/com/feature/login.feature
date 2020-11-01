Feature: JBK offline WebSite

Background:
Given user launch application

@login
Scenario Outline: login test

When  user enters "<username>" and "<password>"
And user click on login button
Then user verify homepage title 


Examples:
|username|password|
|kiran@gmail.com|123456|
|mangesh@gmail.com|147852|
|neelam@gmail.com|12563|
|Ashwini@gmail.com|159687|
|jbk@gmail.com|15236|
|!@#$%^|asdfghj|
|erythj |!@##$$^^|

@logo
Scenario: logo test

Then user should see logo


