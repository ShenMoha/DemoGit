# Mid SDET Tech Test

You will need to have completed this tech test with code committed to your branch before the cutoff time. If more time is required, please inform us **ASAP**. Please note we will only extend the time given a maximum of one time at our discretion.

This test has been scoped to a **Mid SDET level** so we will be expecting a demonstration of the ability to grasp a familiar level with the given tool. 

We also allow you to compliment the requested tools submission with other tools. For example if we are asking for Playwright + Java, if you feel your submission is not demonstrating your skills enough, then you can **also** submit the same completed test using a tool that is familiar to you, e.g. Selenium + Java or Playwright + JavaScript. We will then grade both submissions to average out the level demonstrated.

When attempting the tech test we are expecting to see your **best technical work**. Please treat the test as you would on the job following the leading industry best practices and best knowledge you have. 

## Task 1, UI

Using the following site https://www.saucedemo.com/ and the playwright framework using JavaScript/TypeScript https://playwright.dev

Design test cases and scripts to fully test the functionality of given feature. The application has different users for being able to stimulate regression defects.

### Feature: Product Details 

As a user of the Sauce Demo website https://www.saucedemo.com/,
I want to validate that all products details match the details on the product's page,
So that I can ensure the integration between the homepage and item pages has succeeded correctly.

### Acceptance Criteria

Tests should be able to be run with different users (e.g. standard_user, problem_user). These users can be found on the website. Log any defects found between product details on homepage vs product page. 

### Background:

> Given the availability of the Sauce Demo website,
> When logging in with the user credentials,
> Then I should be able to access the website's features and functionalities.

### Scenario: Validate Product Details:
> Given I am logged in as user on the Sauce Demo website,
> When I view the list of products displayed on the site,
> And I capture the details listed for the products,
> And I click through onto each product,
> Then the details of the product on the product page should be similar to that on the homepage,
> And if there are any discrepancies or inconsistencies in the product images, it should be flagged as a defect.

## Task 2, API

Please ensure you use Playwright's `APIRequestContext` to complete the given test task. Design test cases and scripts to fully test the functionality of the given endpoint.

Using the API `https://dog.ceo/api/` and the *Playwright automation tool* using JavaScript/TypeScript https://playwright.dev
> API Documentation: https://dog.ceo/dog-api/documentation/

### Feature: List Dog Breeds

Our API should be able to access one of the largest dog databases. As such we should ensure correct structure of our breeds list for the functionality of our API. 

The API endpoint is `breeds/list/all`

### Acceptance Criteria

Ensure the following functionality is correct for the endpoint. 

1. A breed can have no sub-breed
2. A Breed can have many sub-breeds
3. Sub-breeds cannot have further breed types


## Task 3, Push code and open a PR on this repo
