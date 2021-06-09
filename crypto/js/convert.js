const btnElement = document.getElementById('cBtn');
btnElement.addEventListener('click', () => {
    let base = document.getElementById('Base').value;
    let out = document.getElementById('Output').value;
    let amount = document.getElementById('Amount').value;

    let exchangeRate = 0;
    let result = '';
    let finalValue = 0;

    if (Number(amount)) {

        $.ajax({
            type: "GET",
            url: `http://rest.coinapi.io/v1/exchangerate/${base}/${out}`,
            dataType: "json",
            headers: {
                "X-CoinAPI-Key": "76EFC1F0-7005-49CE-AADC-BDBF81C568A5"
            },
            success: function (response) {
                exchangeRate = response.rate;
                finalValue = exchangeRate * Number(amount);
                result = `Converted Amount of ${amount} ${base} is ${finalValue.toFixed(2)} ${out}`;
                document.getElementById('Converted').innerText = result;
            }
        });



    } else {

        result = 'Fill all fileds properly';
        document.getElementById('Converted').innerText = result;

    }

});

const exchangeElement = document.getElementById('exchange');
exchangeElement.addEventListener('click', () => {
    let fromElement = document.getElementById("Base");
    let toElement = document.getElementById("Output");
    let tempHTML = fromElement.innerHTML;

    fromElement.innerHTML = toElement.innerHTML;
    toElement.innerHTML = tempHTML;


});

// $('#exchange').click(function(){
//     var options1 = $('#Base').html();
//     $('#Base').html($('#Output').html());
//     $('#Output').html(options1);
// });