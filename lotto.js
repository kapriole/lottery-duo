function myLottery() {
    var x = document.getElementById("demo");

    let lottoArray = [];

    for (i = 0; lottoArray.length < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 49 + 1);
        lottoArray.splice(i, 0, randomNumber);
    }

    let euroZahlen = [];

    for (i = 0; euroZahlen.length < 2; i++) {
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        euroZahlen.splice(i, 0, randomNumber);
    }

    //console.log(lottoArray);

    //console.log(euroZahlen);

    x.innerHTML =
        "Lottozahlen: " + lottoArray + "<br>" + " Eurozahlen: " + euroZahlen;
}