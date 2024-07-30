const { Builder, By, Key, until,Select } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
require('dotenv/config');

(async function login() {
  let options = new chrome.Options();
  
  // Initialize the WebDriver
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Open the login page
    await driver.get('https://console.revive-adserver.net/'); 

    // Find and fill the username field
    let usernameField = await driver.findElement(By.name('username')); 
    await usernameField.sendKeys(`${process.env.USER}`); 

    // Find and fill the password field
    let passwordField = await driver.findElement(By.name('password')); 
    await passwordField.sendKeys(`${process.env.PASSWORD}`); 

    // Find and click the login button
    let loginButton = await driver.findElement(By.id('login')); 
    await loginButton.click();


    // Add new Advertisers -> https://console.revive-adserver.net/advertiser-edit.php
      await driver.wait(until.elementLocated(By.css('a.inlineIcon.iconAdvertiserAdd')), 3000);
      let addAdvertiserLink = await driver.findElement(By.css('a.inlineIcon.iconAdvertiserAdd'));
      await addAdvertiserLink.click();
    
 
         // registration for new client 
         let clientNameInput = await driver.findElement(By.id('clientname'));
         //for name
         await clientNameInput.clear();
         await clientNameInput.sendKeys('wiliam');
         //for contact
         let clientContactInput = await driver.findElement(By.id('contact'));
         await clientContactInput.sendKeys('123489');
         //for email 
         let clientEmailInput = await driver.findElement(By.id('email'));
         await clientEmailInput.sendKeys('wiliam@text.com');
         //save changes
         let saveChangesToAdvertiser = await driver.findElement(By.id('submit'));
         await saveChangesToAdvertiser.click(); 
  
        // Find the "Campaigns" link by its href attribute and click it
        let campaignsLink = await driver.findElement(By.css('a[href="https://console.revive-adserver.net/advertiser-campaigns.php"]'));
        await campaignsLink.click();

        // Add new campaings
        let addNewCampaignLink = await driver.findElement(By.css('a.inlineIcon.iconCampaignAdd[href="campaign-edit.php?clientid=12590"]'));
        await addNewCampaignLink.click();
        let campaignNameInput = await driver.findElement(By.id('campaignname'));
        await campaignNameInput.clear();
        await campaignNameInput.sendKeys('Campaing');
        let radioButton = await driver.findElement(By.css('input[type="radio"][value="2"]'));
        await radioButton.click();
        let revenueInput = await driver.findElement(By.id('revenue'));
        await revenueInput.sendKeys('1.4');
        let targetValueInput = await driver.findElement(By.id('target_value'));
        await targetValueInput.sendKeys('1')
        let saveChangesToCampaign = await driver.findElement(By.id('submit'));
        await saveChangesToCampaign.click(); 
        
        // Find the "Banners" link by its href attribute and click it
        let bannersLink = await driver.findElement(By.css('a[href="https://console.revive-adserver.net/campaign-banners.php"]'));
        await bannersLink.click();
        await driver.wait(until.elementLocated(By.css('a.inlineIcon.iconBannerAdd[href="banner-edit.php?clientid=12590&campaignid=43434"]')), 10000);
        let addNewBannerLink = await driver.findElement(By.css('a.inlineIcon.iconBannerAdd[href="banner-edit.php?clientid=12590&campaignid=43434"]'));
        await addNewBannerLink.click();
        let selectElement = await driver.findElement(By.name('type'));
        let select = new Select(selectElement);
        await select.selectByValue('bannerTypeHtml:vastInlineBannerTypeHtml:vastInlineHtml');
        let descriptionInput = await driver.findElement(By.id('description'));
        await descriptionInput.sendKeys('New Video');
        let vastVideoFilenameInput = await driver.findElement(By.id('vast_video_filename'));
        await vastVideoFilenameInput.sendKeys('www.google.com');
        let selectVid = await driver.wait(until.elementLocated(By.id('vast_video_type')), 10000);
        let selectVidEl = new Select(selectVid);
        await selectVidEl.selectByValue('video/x-mp4');
        let vastVideoDurationInput = await driver.findElement(By.id('vast_video_duration'));
        await vastVideoDurationInput.sendKeys('120');
        let saveChangesToBanner = await driver.findElement(By.id('submit'));
        await saveChangesToBanner.click();
        
        //Websites
        let linkElement = await driver.wait(until.elementLocated(By.linkText('Websites')), 1000);
        await linkElement.click();
        let addNewWebsites = await driver.wait(until.elementLocated(By.css('a.inlineIcon.iconWebsiteAdd')), 10000);
        await addNewWebsites.click();
        let websiteInput = await driver.findElement(By.id('website'));
        await websiteInput.clear();
        await websiteInput.sendKeys('https://www.google.com');
        let nameInput = await driver.findElement(By.id('name'));
        await nameInput.sendKeys('New Name');
        let contactInput = await driver.findElement(By.id('contact'));
        await contactInput.sendKeys('New Contact Value');
        let emailInput = await driver.findElement(By.id('email'));
        await emailInput.sendKeys('newemail@example.com');
        let saveChangesToWebsites = await driver.findElement(By.id('save'));
        await saveChangesToWebsites.click();

        //Zones
        let zoneLink = await driver.wait(until.elementLocated(By.linkText('Zones')), 1000);
        await zoneLink.click();
        let addNewLink = await driver.wait(until.elementLocated(By.css('a.inlineIcon.iconZoneAdd')), 10000);
        await addNewLink.click();
        let saveChangesToZone = await driver.findElement(By.id('submit'));
        await saveChangesToZone.click();


    // Print a success message
    console.log('Successfully logged in!');
  } catch (error) {
    console.error('Error logging in:', error);
  } finally {
    // Quit the WebDriver
    // await driver.quit();
    console.log(`create`)
  }
})();