let ville = "Tokyo";
voirTemp(ville)

let changer = document.querySelector('#changer')

changer.addEventListener('click', function () {
    ville = prompt('Entrer votre ville')
    voirTemp(ville)
})

function voirTemp(ville) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=paris&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

    let XHR = new XMLHttpRequest();
    XHR.open('GET', url);
    XHR.responseType = 'json';
    XHR.send();

    XHR.onload = function () {
        if (XHR.readyState === XMLHttpRequest.DONE) {
            if (XHR.status === 200) {
                let reponse = XHR.response.main.temp;
                document.querySelector('#temperature_label').textContent = reponse
                console.log(reponse);
            }
        }
    }

}