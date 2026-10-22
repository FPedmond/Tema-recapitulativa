const container = document.getElementById('container-produse');
const mesaj = document.getElementById('mesaj-stare');

async function incarca() {
  try {
    const cerere = await fetch('https://dummyjson.com/products');

    if (!cerere.ok) {
      throw new Error('Eroare server');
    }

    const date = await cerere.json();
    mesaj.textContent = ''; 

    if (date.products.length === 0) {
      mesaj.textContent = 'Lista este goala.';
      return;
    }
    for (const produs of date.products) {
      const card = document.createElement('div');
      card.className = 'card';

      const titlu = document.createElement('h3');
      titlu.textContent = produs.title;

      const pret = document.createElement('p');
      pret.textContent = 'Pret: ' + produs.price;

      const buton = document.createElement('button');
      buton.textContent = 'Sterge';
      buton.className = 'buton-sterge';

      card.append(titlu, pret, buton);
      container.append(card);
    }
  } catch (eroare) {
    mesaj.textContent = 'Problema: ' + eroare.message;
  }
}
incarca();