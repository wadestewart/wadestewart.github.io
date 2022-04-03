import artVid from '../img/art_ed_gif_480.mov';
import bank from '../img/fake_bank.png';
import flashVid from '../img/flash_gif_480.mov';
import placeHolder from '../img/placeholder.png';


export const projects = [
    {
        "video": flashVid,
        "stack": ["JavaScript"],
        "githubUrl": "https://github.com/wadestewart/Flashcards",
        "appUrl": "https://wadestewart.github.io/Flashcards/"
    },
    {
        "video": artVid,
        "stack": ["Node/Express", "React/Js", "Cooper Hewitt API"],
        "githubUrl": "https://github.com/wadestewart/art-history",
        "appUrl": "https://wadestewart.github.io/art-history/"
    },
    {
        "image": bank,
        "stack": ["Node/Express", "Handlebars", "MongoDb"],
        "githubUrl": "https://github.com/wadestewart/BankingQA"
    },
    {
        "image": placeHolder,
        "stack": ["React/Js"],
        "githubUrl": "https://github.com/wadestewart/spades"
    }
];
