
import { test, expect } from '@playwright/test';
import employeeData from '../testdata.json' ;

test('Validate employee details from JSON', async () => {
// Deserialize JSON data
  const employee = employeeData.employee;

  // Find the second mobile number
  const secondMobile = employee.mobileNumbers[1];
  console.log('Second Mobile Number:', secondMobile);
  expect(secondMobile).toBeDefined();

  // Verify employee has the skillset name "API"
  const skillset = employee.skills.includes("API");
  console.log('Has API Skill:', skillset);
  expect(skillset).toBe(true);
});
