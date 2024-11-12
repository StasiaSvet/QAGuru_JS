// @ts-check
const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';
const url = 'https://realworld.qa.guru/#/';

const newUser = {
    userName : faker.person.firstName('female'),
    userEmail : faker.internet.email(),
    userPassword : faker.internet.password({ length: 20 }),
    userBio : faker.music.album(),
    getText: () => {return "I'll do it!!!"},
};


console.log(newUser.getText());

test.describe.only('Demo', () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('https://realworld.qa.guru/#/');
        await page.getByRole('link', {name: 'Sign up'}).click();
        await page.getByPlaceholder('Your Name').click();
        await page.getByPlaceholder('Your Name').fill(newUser.userName);
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(newUser.userEmail);
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(newUser.userPassword);
        await page.getByRole('button', {name: 'Sign up'}).click();
      });
      
      test('User can change the Description', async ({ page }) => {
        

        await page.locator('.dropdown-toggle').click();
        await page.getByRole('link', {name: 'Settings'}).click();
        await page.getByPlaceholder('Short bio about you').click();
        await page.getByPlaceholder('Short bio about you').fill(newUser.userBio);
        //
        
        await expect(page.getByPlaceholder('Short bio about you')).toContainText(newUser.userBio);
      });
    })
