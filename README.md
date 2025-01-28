# Full Stack Open 6. osan -repository ANEKDOOTIT
* [Linkki kurssialustalle](https://fullstackopen.com/)
* [Kurssin 0. 1. ja 2. osuuksien repository](https://github.com/amandahak/fullstackopen_ah)
* [3. osan frontendin repository](https://github.com/amandahak/fullstackopen_3_frontend)
* [3. osan backendin repository](https://github.com/amandahak/fullstackopen_3_backend)
* [render-sivusto](https://fullstackopen-3-ves5.onrender.com)
* [4. osan repository](https://github.com/amandahak/fullstackopen_4)
* [5. osan repository](https://github.com/amandahak/fullstackopen_5)
* [5. osan e2e-testien repository](https://github.com/amandahak/fullstackopen_5_e2e)
* [6. osan unicafe -repository](https://github.com/amandahak/fullstackopen_6_unicafe)


## Unicafe Redux

Tehtävät 6.3-6.8

Tämä repository sisältää anekdoottien äänestyssovelluksen, joka hyödyntää Reduxia tilanhallintaan. Sovelluksessa käyttäjä voi:

- Lisätä uusia anekdootteja
- Äänestää olemassa olevia anekdootteja
- Näyttää anekdootit äänimäärän mukaan järjestettynä

Järjestelmä tallentaa palautteet Redux-storeen ja päivittää käyttöliittymän reaaliajassa, kun käyttäjä antaa palautetta.

### Anecdotes Redux – Sovelluksen rakenne

Sovelluksen pääkomponentit ovat:

* **AnecdoteList.jsx** – näyttää kaikki anekdootit ja mahdollistaa äänestämisen
* **AnecdoteForm.jsx** – mahdollistaa uusien anekdoottien lisäämisen
* **anecdoteReducer.js** – Redux-reducer, joka hallinnoi anekdoottien tilaa
* **main.jsx** - toimii sovelluksen juurena, jossa määritellään Redux-store ja yhdistetään se sovellukseen.
* **App.jsx** - Sovelluksen pääkomponentti joka rakentaa sovelluksen käyttöliittymän, eli näyttää anekdoottilistan ja lomakkeen




