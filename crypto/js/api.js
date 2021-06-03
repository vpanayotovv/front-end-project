let rates = {};

(function ($) {
    var settings = {
        "url": "http://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,ADA,BNB,DOGE,USDT,XRP,ICP,DOT,BCH,UNI,LTC,LINK,XLM,USDC",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "X-CoinAPI-Key": "67FC3BAF-1531-4F73-8201-51F202F28C3B"
        },
    };

    $.ajax(settings).done(function (response) {
        response.forEach(element => {
            let name = element.asset_id;
            let price = element.price_usd;
            rates[name] = price;
        });
    });
}(jQuery));

// let rates2 = {
//     BNB: 267.512316,
//     ETH: 2286.3321321,
//     LTC: 43.0213216,
//     BTC: 43872.06,
//     USDT: 1.00231321,
//     DOGE: 0.513123213,
//     XRP: 1.48,
//     ICP: 299.821316,
//     ADA: 1.78,
//     BCH: 1547.152131,
//     LINK: 48.3213219,
//     DOT: 10.64213,
//     USDC: 1.00213213,
//     XLM: 0.21321321,
//     UNI: 381.62132138,
// };

let priceElements = document.querySelectorAll("body > table > tbody > tr > td:nth-child(3) > span");

for (let i = 0; i < priceElements.length; i++) {
    let price = priceElements[i];
    let nameElement = price.parentElement.parentElement.children[1].textContent;
    let nameArray = nameElement.split(' ');
    let name = nameArray[nameArray.length - 1];
    price.textContent = rates2[name];
}