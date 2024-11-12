// @ts-check
const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';
const url = 'https://realworld.qa.guru/#/';

let userName = faker.person.firstName('female');
let userEmail = faker.internet.email();
let userPassword = faker.internet.password({ length: 20 });

test('Sign up using an email and a password', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/#/');

  await page.getByRole('link', {name: 'Sign up'}).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill(userName);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(userEmail);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(userPassword);
  await page.getByRole('button', {name: 'Sign up'}).click();
  await expect(page.getByRole('navigation')).toContainText(userName);
});

test('Authorization', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', {name: 'Login'}).click();
  //
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(userName);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(userPassword);
  await page.getByRole('button', {name: 'Login'}).click();
  await expect(page.getByRole('navigation')).toContainText(userName);
});