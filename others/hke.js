import _ from "lodash";

let amt = 50000;
let p = 5;
let irr = 5.02;
let year = 10;
let compoundIntr = _.range(0, p).map(
  (i) => amt * (1 + irr / 100) * (year - i - 1)
);
let simpleIntr = _.range(0, p).map(
  (i) => amt * Math.pow(1 + irr / 100, year - i - 1)
);
console.log(_.sum(compoundIntr), _.sum(simpleIntr));

// ---------------------------------------------------------------------------- //

/*
 * JavaScript 示例：计算复利与单利
 * 1. 复利（Compound Interest）
 * 2. 单利（Simple Interest）
 *
 * 参数说明：
 * depositAmount  每年缴费金额
 * payYears       缴费年限
 * annualRate     年化利率（如 0.3 表示 30%）
 * totalYears     总持有年限
 */

/**
 * 计算复利未来价值
 * @param {number} depositAmount - 每年缴费金额
 * @param {number} payYears - 缴费年限
 * @param {number} annualRate - 年化复利利率
 * @param {number} totalYears - 总持有年限
 * @returns {number} - 未来价值
 */
function calculateCompoundInterest(
  depositAmount,
  payYears,
  annualRate,
  totalYears
) {
  let totalValue = 0;
  for (let year = 1; year <= payYears; year++) {
    const periods = totalYears - year + 1;
    totalValue += depositAmount * Math.pow(1 + annualRate, periods);
  }
  return totalValue;
}

/**
 * 计算单利未来价值
 * @param {number} depositAmount - 每年缴费金额
 * @param {number} payYears - 缴费年限
 * @param {number} annualRate - 年化单利利率
 * @param {number} totalYears - 总持有年限
 * @returns {number} - 未来价值
 */
function calculateSimpleInterest(
  depositAmount,
  payYears,
  annualRate,
  totalYears
) {
  let totalValue = 0;
  for (let year = 1; year <= payYears; year++) {
    const duration = totalYears - year + 1;
    // 单利：利息 = 本金 * 利率 * 时间
    totalValue += depositAmount + depositAmount * annualRate * duration;
  }
  return totalValue;
}

const depositAmount = 30000;
const payYears = 5;
const annualRate = 0.03;
const totalYears = 10;

const compoundValue = calculateCompoundInterest(
  depositAmount,
  payYears,
  annualRate,
  totalYears
);
console.log(`compound ${totalYears} years later: ${compoundValue.toFixed(2)}`);

const simpleValue = calculateSimpleInterest(
  depositAmount,
  payYears,
  0.0323,
  totalYears
);

console.log(
  `simple interest mode ${totalYears} years later: ${simpleValue.toFixed(2)}`
);

// ---------------------------------------------------------------------------- //

function calculateCompoundRate(
  FV,
  PMT,
  periods,
  years,
  precision = 1e-6,
  maxIterations = 1000
) {
  // FV: 未来值
  // PMT: 每期投入
  // periods: 总缴费期数
  // years: 总年限（可能不等于缴费年数）
  // 返回等效复利年化收益率（百分比）

  function npv(rate) {
    let total = 0;
    for (let i = 0; i < periods; i++) {
      total += PMT * Math.pow(1 + rate, years - i); // 因为最后一次投入可能距离期末更近
    }
    return total - FV;
  }

  // 使用二分法试探年化利率
  let low = 0;
  let high = 1;
  let guess = 0.05;
  let iteration = 0;

  while (iteration < maxIterations) {
    guess = (low + high) / 2;
    let value = npv(guess);

    if (Math.abs(value) < precision) {
      return (guess * 100).toFixed(6) + "%"; // 转换为百分比字符串
    }

    if (value > 0) {
      high = guess;
    } else {
      low = guess;
    }

    iteration++;
  }

  return "未能收敛";
}

// 示例使用：
const FV = 210209;
const PMT = 30000; 
const periods = 5;  
const years = 10;  
const rate = calculateCompoundRate(FV, PMT, periods, years);
console.log("Compound Rate", rate);
