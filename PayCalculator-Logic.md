
# 🇦🇺 PayCalculator.com.au – Full Programming Logic

This document provides complete logic for replicating **paycalculator.com.au** features, including take-home pay, superannuation, tax offsets, student loan, Medicare levy, and additional calculators.

---

## ⚙️ Input Parameters

```js
{
  grossIncome: 100000,
  includesSuper: false,
  frequency: "annual", // or "weekly", "fortnightly", "monthly"
  residentStatus: "resident", // or "nonResident", "whm"
  claimsTaxFreeThreshold: true,
  hasPrivateHealth: false,
  hasStudentLoan: true,
  studentLoanType: "HELP",
  superRate: 0.115,
  hourlyRate: null,
  hoursPerWeek: null,
  ytdGross: null,
  ytdTaxPaid: null,
  reportableFBT: 0,
  fbtExempt: false,
  voluntarySuper: 0,
  isSAPTOEligible: false,
  isSingle: true
}
```

---

## 🧮 Base Income & Superannuation

```js
let baseIncome = includesSuper
  ? grossIncome / (1 + superRate)
  : grossIncome;

let superAmount = baseIncome * superRate;
```

---

## 💵 Hourly Rate to Annual

```js
function hourlyToAnnual(hourlyRate, hoursPerWeek, weeksPerYear = 52) {
  return hourlyRate * hoursPerWeek * weeksPerYear;
}
```

---

## 📊 Income Tax (Resident)

```js
function calculateIncomeTax(income) {
  if (income <= 18200) return 0;
  else if (income <= 45000) return (income - 18200) * 0.16;
  else if (income <= 135000) return 4288 + (income - 45000) * 0.30;
  else if (income <= 190000) return 31288 + (income - 135000) * 0.37;
  else return 51638 + (income - 190000) * 0.45;
}
```

---

## 🌍 Non-Resident & WHM Tax

```js
function calculateTax_NonResident(income) {
  if (income <= 0) return 0;
  else if (income <= 135000) return income * 0.30;
  else if (income <= 190000) return 135000 * 0.30 + (income - 135000) * 0.37;
  else return 135000 * 0.30 + 55000 * 0.37 + (income - 190000) * 0.45;
}

function calculateTax_WorkingHolidayMaker(income) {
  if (income <= 45000) return income * 0.15;
  else if (income <= 135000) return 6750 + (income - 45000) * 0.30;
  else if (income <= 190000) return 30750 + (income - 135000) * 0.37;
  else return 51000 + (income - 190000) * 0.45;
}
```

---

## 🧢 Super Contribution Cap

```js
function checkSuperCap(superAmount, voluntaryContributions, cap = 27500) {
  const total = superAmount + voluntaryContributions;
  return {
    exceeded: total > cap,
    excess: total > cap ? total - cap : 0
  };
}
```

---

## 🧾 Medicare Levy

```js
function calculateMedicareLevy(income) {
  return income > 24000 ? income * 0.02 : 0;
}
```

---

## 💊 Medicare Levy Surcharge

```js
function calculateMLS(income, hasPrivateHealth) {
  if (hasPrivateHealth) return 0;
  if (income <= 93000) return 0;
  else if (income <= 108000) return income * 0.01;
  else if (income <= 144000) return income * 0.0125;
  else return income * 0.015;
}
```

---

## 🎓 HELP/TSL/SFSS Repayment

```js
function calculateHELP(income) {
  if (income < 48361) return 0;
  else if (income < 51550) return income * 0.01;
  else if (income < 54749) return income * 0.02;
  else if (income < 57948) return income * 0.03;
  else if (income < 61147) return income * 0.04;
  else if (income < 64346) return income * 0.05;
  else if (income < 67545) return income * 0.06;
  else if (income < 70744) return income * 0.07;
  else if (income < 73943) return income * 0.08;
  else if (income < 77142) return income * 0.09;
  else return income * 0.10;
}
```

---

## 🎯 LITO Offset

```js
function calculateLITO(income) {
  if (income <= 37000) return 700;
  else if (income <= 45000) return 700 - ((income - 37000) * 0.05);
  else if (income <= 66667) return 325 - ((income - 45000) * 0.015);
  else return 0;
}
```

---

## 👵 SAPTO Offset

```js
function calculateSAPTO({ income, isSingle, isEligible }) {
  if (!isEligible) return 0;
  const threshold = isSingle ? 32611 : 28648;
  const baseOffset = isSingle ? 2230 : 1602;
  const taperRate = 0.125;
  return income <= threshold
    ? baseOffset
    : Math.max(0, baseOffset - ((income - threshold) * taperRate));
}
```

---

## 🎁 Fringe Benefit Adjustment

```js
function adjustForFBT(baseIncome, reportableFBT, exempt = false) {
  return exempt ? baseIncome : baseIncome + reportableFBT;
}
```

---

## 📅 Year-To-Date Tax Estimator

```js
function calculateYTD({ ytdGross, ytdTaxPaid, currentGross }) {
  const totalGross = ytdGross + currentGross;
  const totalTaxOwed = calculateIncomeTax(totalGross);
  return {
    totalGross,
    totalTaxOwed,
    additionalTaxToWithhold: totalTaxOwed - ytdTaxPaid
  };
}
```

---

## 📄 Payslip Generator

```js
function generatePayslip({ baseIncome, incomeTax, medicareLevy, mls, studentLoan, superAmount, takeHome, frequency }) {
  const convert = (val) => frequency === 'weekly' ? val / 52 :
                             frequency === 'fortnightly' ? val / 26 :
                             frequency === 'monthly' ? val / 12 :
                             val;

  return {
    gross: convert(baseIncome),
    tax: convert(incomeTax),
    medicare: convert(medicareLevy),
    surcharge: convert(mls),
    help: convert(studentLoan),
    super: convert(superAmount),
    net: convert(takeHome)
  };
}
```

---
