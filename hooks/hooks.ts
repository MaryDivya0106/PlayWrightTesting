import {Before, BeforeAll, AfterAll, After, setDefaultTimeout, AfterStep, Status} from "@cucumber/cucumber";
import {chromium, Browser, Page, BrowserContext }from "@playwright/test";
import { PageFixture } from "./pagefixture";
import { fail } from "assert";
setDefaultTimeout(30 * 1000); // 60 seconds

let browser:Browser;
let page:Page;
let context:BrowserContext;

BeforeAll(async function() {

     browser = await chromium.launch({headless:false});
 })

Before(async function() {
   context= await browser.newContext();   
     page = await context.newPage();
     PageFixture.page = page;
 })

 AfterStep(async function({pickle, result}) { 

   if(result?.status == Status.FAILED)
   {
   const img = await PageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`, type:"png"});
   await this.attach(img, "image/png");
   }
 })

 After(async function({pickle}) { 
 await PageFixture.page.close();
 await context.close();
 })

 AfterAll(async function() { 
    await browser.close();
 })