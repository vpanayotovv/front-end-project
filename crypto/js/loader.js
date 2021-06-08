$(function(){

    $(window).on('load', function () {
        $('.preloader').fadeOut();
        $('#preloader').delay(450).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    });

});

CryptoCharts.roiComparison({
    chart_id: "adaChart",
    cryptocompare_tickers: ["ADA"],
    last_days: 30,
    loading_indicator: true
  });

  CryptoCharts.roiComparison({
    chart_id: "dotChart",
    cryptocompare_tickers: ["DOT"],
    last_days: 30,
    loading_indicator: true
  });

  CryptoCharts.roiComparison({
    chart_id: "dogeChart",
    cryptocompare_tickers: ["DOGE"],
    last_days: 30,
    loading_indicator: true
  });