# Gamestonk Terminal Landing Page
[![Netlify Status](https://api.netlify.com/api/v1/badges/9c5ee586-fa8c-48d9-b02e-0d583078ee03/deploy-status)](https://app.netlify.com/sites/gamestonkterminal/deploys)

This project is the official landing page of Gamestonk Terminal.

---

## Change Content

### FAQ
Edit file `faqs.json` inside folder `_contents`
```
{
    "title": "Frequently Asked Questions",
    "description": "Blablabla",
    "questions": [
        {
            "question": "e quick, brown fox jumps over a lazy dog?",
            "answer": "lorem ipsummmmmmmmmmmmmmmmmmmmmmmmmm"
        },
        {
            "question": "e quick, brown fox jumps over a lazy dog?",
            "answer": "lorem ipsummmmmmmmmmmmmmmmmmmmmmmmmm"
        },
        {
            "question": "e quick, brown fox jumps over a lazy dog?",
            "answer": "lorem ipsummmmmmmmmmmmmmmmmmmmmmmmmm"
        },
        {
            "question": "e quick, brown fox jumps over a lazy dog?",
            "answer": "lorem ipsummmmmmmmmmmmmmmmmmmmmmmmmm"
        }
    ]
}
```


### Changelogs
All the markdowns added to `changelogs` folder inside [GamestonkTerminal repository](https://github.com/GamestonkTerminal/GamestonkTerminal) is rendered on this website

### Showcase
Edit file `showcase.json` inside folder `_contents`
```
{
    "showcases": [
        {
            "date": "2021-07-05",
            "title": "How to do DD w/ GST",
            "url": "https://google.com"
        }
    ],
    "mentions": [
        {
            "author": "VICE",
            "title": "Gamestonk Terminal Lorem ipsum",
            "date": "2021-07-05"
        }
    ]
}
```



---

## Run locally

1. Install node.js (e.g., using [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm))
2. Clone the project and enter the folder
3. Set up .env vars
```
GITHUB_AUTH_TOKEN=""
REMOTE_CHANGELOG_SOURCE=""
```
4. Install dependencies and start the project
```bash
npm i #install dependencies
npm run dev #run the project
```

## Stack
- Next.js 🚀
- TailwindCSS 🎨
- framer-motion 👋

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
