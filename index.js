const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://clevelandmetro.schoology.com/grades/grades");

  await page.screenshot({ path: "example.png" });

  await browser.close();
}

run();
