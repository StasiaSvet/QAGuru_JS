// @ts-check
const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';
const url = 'https://realworld.qa.guru/#/';

let userName = faker.person.firstName('female');
let userEmail = faker.internet.email();
let userPassword = faker.internet.password({ length: 20 });


test.describe('User profile', () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('https://realworld.qa.guru/#/');
      
        await page.getByRole('link', {name: 'Sign up'}).click();
        await page.getByPlaceholder('Your Name').click();
        await page.getByPlaceholder('Your Name').fill(userName);
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(userEmail);
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(userPassword);
        await page.getByRole('button', {name: 'Sign up'}).click();
      });
      
      test('User can change the Description', async ({ page }) => {
        let userBio = faker.music.album();

        await page.locator('.dropdown-toggle').click();
        await page.getByRole('link', {name: 'Settings'}).click();
        await page.getByPlaceholder('Short bio about you').click();
        await page.getByPlaceholder('Short bio about you').fill(userBio);
        //
        
        await expect(page.getByPlaceholder('Short bio about you')).toContainText(userBio);
      });
    })
