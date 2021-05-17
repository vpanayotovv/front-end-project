const btnElement = document.getElementById('cBtn');

const rates = {

    "BTC": 56872.06,
    "ETH": 4286.33,
    "BNB": 667.56,
    "DOGE": 0.5133,
    "USDT": 1.00,
    "ADA": 1.78,
    "XRP": 1.48,
    "ICP": 341.86,
    "DOT": 39.64,
    "BCH": 1517.15,
    "UNI": 43.06,
    "LTC": 381.68,
    "LINK": 48.39,
    "XLM": 0.6853,
    "USDC": 1.00

}

btnElement.addEventListener('click', () => {
    const base = document.getElementById('Base').value;
    const out = document.getElementById('Output').value;
    const amount = document.getElementById('Amount').value;

    let finalValue = rates;
    finalValue = finalValue[base] * Number(amount);

    let result = '';

    if (Number(amount)) {

        result = `Converted Amount of ${amount} ${base} is ${finalValue} ${out}`;
        document.getElementById('Converted').innerText = result;

    }else{

        result = 'Fill all fileds properly';
        document.getElementById('Converted').innerText = result;

    }
});