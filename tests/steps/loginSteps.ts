
import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import {chromium, Page, Browser, expect} from "@playwright/test";
import { PageFixture} from "../../hooks/pagefixture";

setDefaultTimeout(30 * 1000); // 60 seconds
Given('I navigate to website', async function () {
           
           await PageFixture.page.goto("https://www.saucedemo.com/");

         });

         When('I enter {string} and {string}', async function (username, password) {
           await PageFixture.page.getByPlaceholder("Username").fill(username);
             await PageFixture.page.getByPlaceholder("Password").fill(password);
         });

         When('I click login', async function () {
            await PageFixture.page.locator("input[type='submi']").click();
          
         });

         Then('I can see dashboard page', async function () {
           const text = await  PageFixture.page.getByText("secret_sauce")
           await expect(text).toBeVisible;
         });