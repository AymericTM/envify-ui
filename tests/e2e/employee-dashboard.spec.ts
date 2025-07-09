import { test, expect } from '@playwright/test'

test.describe('Employee Dashboard', () => {
    test('should display employees and open detail modal', async ({ page }) => {
        await page.goto('http://localhost:5173')

        await expect(page.getByText('Currently Employed	')).toBeVisible()

        const rows = await page.locator('tbody tr')
        expect(await rows.count()).toBeGreaterThan(0)

        await rows.nth(0).getByRole('button', { name: /view/i }).click()

        await expect(page.getByText(/Hiring Date/i)).toBeVisible()
    })

    test('should open and submit the add employee form', async ({ page }) => {
        await page.goto('http://localhost:5173')

        await page.getByRole('button', { name: /add/i }).click()

        await page.getByLabel('Name').fill('Mario Rossi')
        await page.getByLabel('Role').selectOption('Backend Developer')
        await page.getByLabel('Email').fill('mario.rossi@example.com')
        await page.getByLabel('Phone').fill('1234567890')
        await page.getByLabel('Birthdate').fill('1990-01-01')
        await page.getByLabel('Hiring Date').fill('2023-01-01')

        await page.getByRole('button', { name: /add employee/i }).click()

        await expect(page.getByText('Mario Rossi')).toBeVisible()
    })
})
