let rates = {};

$(function(){

    $.ajax({
        type: "GET",
        url: "http://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,ADA,BNB,DOGE,USDT,XRP,ICP,DOT,BCH,UNI,LTC,LINK,XLM,USDC",
        dataType: "json",
        headers: {
            "X-CoinAPI-Key": "76EFC1F0-7005-49CE-AADC-BDBF81C568A5"
        },
        success: function(response) {
            let data = response;
            data.map(element => {
                let name = element.asset_id;
                let price = element.price_usd;
                rates[name] = price;
            });

            updatePrices();
        }

    });

});

function updatePrices() {
    let priceElements = document.querySelectorAll("body > table > tbody > tr > td:nth-child(3) > span");

    for (let i = 0; i < priceElements.length; i++) {
        let price = priceElements[i];
        let nameElement = price.parentElement.parentElement.children[1].textContent;
        let nameArray = nameElement.split(' ');
        let name = nameArray[nameArray.length - 1];
        console.log(rates[name]);
        price.textContent = rates[name].toFixed(4);
    }
};
