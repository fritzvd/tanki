# Tanki, hybrid anki app

This application is another Anki application that can help you learn stuff.
I hear what you're thinking *why* another one?

I want to build an open-source anki app that can run in the browser as well as on your mobile phone. Memrise and Duolingo are working on their own apps, but they are not as open as the Anki community. The Anki App for iOS costs a whopping 24.99 USD, which is overpriced in my opinion.
So in short this app will be

* compatible with .apkg files 
* anki web
* not as expensive
* connected to the anki community (anki-web)

## Why is it called **Tanki**?
Tanki is Setswana for thanks. As in thank you for building the app, but also thank you for sharing decks. Thank everyone!

# The Todo-list
Tanki is far from finished so here is the general idea of what I'd like this to app be:

- [ ] it can extract and use .apkg's
  - [ ] [anki lib](fritzvd/anki)
    - [x] unpacks apkg
    - [x] read out the relevant tables from the sqlite
    - [ ] read media files
    - [ ] edit existing cards
    - [ ] create/add new cards
    - [ ] create new deck
    - [ ] export as apkg
- [ ] App that you can open .apkg that are in your file system (offline, or dropbox) or on ankiweb
  - [ ] 
- [ ] App that uses localstorage of websqlite
- [ ] App that utilizes Material Design
- [ ] App that can run on Android, iOS, Windows Phone and web
- [ ]

# Install, testing and running the app
This is a react application built with the create-react-app generator

```sh
git clone https://github:com/fritzvd/tanki
cd tanki
npm install
```

To start the development server:

```sh
npm start
```

To run the tests in watch mode:
```sh
npm test
```


