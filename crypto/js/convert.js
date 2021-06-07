const btnElement = document.getElementById('cBtn');

btnElement.addEventListener('click', () => {
    let base = document.getElementById('Base').value;
    let out = document.getElementById('Output').value;
    let amount = document.getElementById('Amount').value;
    
    let exchangeRate = 0;
    
    $.ajax({
        type: "GET",
        url: `http://rest.coinapi.io/v1/exchangerate/${base}/${out}`,
        dataType: "json",
        headers: {
            "X-CoinAPI-Key": "76EFC1F0-7005-49CE-AADC-BDBF81C568A5"
        },
        success: function (response) {
            exchangeRate = response.rate;
            let finalValue = 0;
            finalValue = exchangeRate * Number(amount);
            
            let result = '';
            
            if (Number(amount)) {
                
                result = `Converted Amount of ${amount} ${base} is ${finalValue.toFixed(2)} ${out}`;
                document.getElementById('Converted').innerText = result;
                
            } else {
                
                result = 'Fill all fileds properly';
                document.getElementById('Converted').innerText = result;
                
            }
        }
    });

});

// const exchangeElement = document.getElementById('exchange');
//     exchangeElement.addEventListener('click', () => {
//         let fromElement = document.getElementById('Base');
//         let toElement = document.getElementById('Output');
//         let temp = fromElement.innerText;
//         console.log(temp);
//         fromElement.innerText = toElement.innerText;
//         console.log(fromElement.innerText   );
//         toElement.innerText = temp;
//     });