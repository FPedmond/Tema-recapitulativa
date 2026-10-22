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

const formular = document.getElementById('form-nou');
const eroarePost = document.getElementById('eroare-post');

formular.addEventListener('submit', async function(eveniment) {
  eveniment.preventDefault();
  eroarePost.textContent = '';

  const dateFormular = new FormData(formular);
  const titluNou = dateFormular.get('title');
  const pretNou = dateFormular.get('price');

  try {
    const cerere = await fetch('https://dummyjson.com/products/add',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: titluNou,
        price: Number(pretNou)
      })
    });

    if (!cerere.ok) {
      throw new Error('eroare la adaugarea produsului');
    }

    const produs = await cerere.json();
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
    container.prepend(card);
    formular.reset();

  } catch (eroare) {
    eroarePost.textContent = eroare.message;
  }
});