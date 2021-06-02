(function ($) {
    var settings = {
        "url": "http://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,ADA",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "X-CoinAPI-Key": "67FC3BAF-1531-4F73-8201-51F202F28C3B"
        },
    };

    $.ajax(settings).done(function (response) {
        response.forEach(element => {
            //TODO:add rates in object!
        });
    });
}(jQuery));

// the array of elements with prices

let priceElements = document.querySelectorAll("body > table > tbody > tr > td:nth-child(3)");
for (let i = 0; i < priceElements.length; i++) {
    let element = priceElements[i];
    let price = element.innerHTML.split('>')[2];
}


