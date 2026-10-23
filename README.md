# Tema recapitulativa WEB

**1. API**
API-ul folosit este public de la https://dummyjson.com/products pentru a aduce si a trimite datele.

**2.CORS**
Nu am avut eroarea CORS deoarece API-ul DummyJSON este public. Trimite automat regula Access-Control-Allow-Origin: *, asa ca browserul nu mi-a blocat cererile GET si POST.

**3.STATUS CODE**
**200 si 201:** cand primesc datele de intrare, le afisez folosind createElement
**Erori server (4xx, 5xx):** fetch nu se opreste singur daca serverul da eroare, asa ca am pus eu if(!cerere.ok) ca sa prinda eroarea
**Erori retea:** daca cererea sau netul pica, eroare ajunge in catch si va fi afisata cu rosu pe pagina

**SITE:** https://fpedmond.github.io/Tema-recapitulativa/

**Repo:** https://github.com/FPEdmond/Tema-recapitulativa
