const rates = Array.from(document.querySelectorAll('[data-rate]'));
const rateMensage = document.querySelector('[data-rate-mensage]')


function displayRate() {    
    rateMensage.innerText = `You selected ${this.getAttribute('value')} out of ${rates.length}`;
}

rates.forEach(rate => rate.addEventListener(
    'click',
    displayRate
))

