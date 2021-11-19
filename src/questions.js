const QUESTIONS = [
    {
        title: "Is this news heading Real or Fake?",
        image: '1.jpeg',
        link: 'https://www.antifakenewscenter.com/%e0%b8%ad%e0%b8%a2-%e0%b8%9c%e0%b9%88%e0%b8%ad%e0%b8%99%e0%b8%9c%e0%b8%b1%e0%b8%99-%e0%b9%84%e0%b8%a1%e0%b9%88%e0%b8%95%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%9b%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%81%e0%b8%b1%e0%b8%8d%e0%b8%8a%e0%b8%b2%e0%b9%83%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87%e0%b8%9b%e0%b8%b4%e0%b8%94-%e0%b8%9e%e0%b8%a3%e0%b9%89%e0%b8%ad%e0%b8%a1%e0%b8%9b%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%82%e0%b8%b1%e0%b9%89%e0%b8%99%e0%b8%95%e0%b8%ad%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%82%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b8%b8%e0%b8%8d%e0%b8%b2%e0%b8%95%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%8a%e0%b8%b2%e0%b8%8a%e0%b8%99%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%96%e0%b8%b6%e0%b8%87%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%87%e0%b9%88%e0%b8%b2%e0%b8%a2-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/',
        choices: ["Real", "Fake"],   
        answer: 0, 
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '2.jpeg',
        link: 'https://www.antifakenewscenter.com/%e0%b8%ad%e0%b8%a2-%e0%b8%9c%e0%b9%88%e0%b8%ad%e0%b8%99%e0%b8%9c%e0%b8%b1%e0%b8%99-%e0%b9%84%e0%b8%a1%e0%b9%88%e0%b8%95%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%9b%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%81%e0%b8%b1%e0%b8%8d%e0%b8%8a%e0%b8%b2%e0%b9%83%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87%e0%b8%9b%e0%b8%b4%e0%b8%94-%e0%b8%9e%e0%b8%a3%e0%b9%89%e0%b8%ad%e0%b8%a1%e0%b8%9b%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%82%e0%b8%b1%e0%b9%89%e0%b8%99%e0%b8%95%e0%b8%ad%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%82%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b8%b8%e0%b8%8d%e0%b8%b2%e0%b8%95%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%8a%e0%b8%b2%e0%b8%8a%e0%b8%99%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%96%e0%b8%b6%e0%b8%87%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%87%e0%b9%88%e0%b8%b2%e0%b8%a2-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/',
        choices: ["Real", "Fake"],
        answer: 1,
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '3.jpeg',
        link: 'https://www.antifakenewscenter.com/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%A1-%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C-%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B0%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%82%E0%B8%88%E0%B8%A3-%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%A2-%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%84%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89/',
        choices: ["Real", "Fake"],
        answer: 1,
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '4.jpeg',
        link: 'https://www.antifakenewscenter.com/%e0%b8%82%e0%b9%88%e0%b8%b2%e0%b8%a7%e0%b8%9b%e0%b8%a5%e0%b8%ad%e0%b8%a1-%e0%b8%ad%e0%b8%a2%e0%b9%88%e0%b8%b2%e0%b9%81%e0%b8%8a%e0%b8%a3%e0%b9%8c-%e0%b8%ab%e0%b8%99%e0%b9%89%e0%b8%b2%e0%b8%81%e0%b8%b2%e0%b8%81%e0%b8%97%e0%b8%b3%e0%b8%88%e0%b8%b2%e0%b8%81%e0%b8%97%e0%b8%ad%e0%b8%87%e0%b9%81%e0%b8%94%e0%b8%87-%e0%b8%86%e0%b9%88%e0%b8%b2%e0%b9%80%e0%b8%8a%e0%b8%b7%e0%b9%89%e0%b8%ad%e0%b9%82%e0%b8%84%e0%b8%a7%e0%b8%b4%e0%b8%94%e0%b9%84%e0%b8%94%e0%b9%89-100-%e0%b9%83%e0%b8%99-30-%e0%b8%99%e0%b8%b2%e0%b8%97%e0%b8%b5/',
        choices: ["Real", "Fake"],
        answer: 1,
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '5.jpeg',
        link: 'https://www.antifakenewscenter.com/%e0%b8%95%e0%b8%b0%e0%b8%84%e0%b8%a3%e0%b8%b4%e0%b8%a7%e0%b8%81%e0%b8%a5%e0%b8%b2%e0%b8%87%e0%b8%84%e0%b8%b7%e0%b8%99-%e0%b9%80%e0%b8%9b%e0%b9%87%e0%b8%99%e0%b8%aa%e0%b8%b1%e0%b8%8d%e0%b8%8d%e0%b8%b2%e0%b8%93%e0%b9%80%e0%b8%aa%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b8%87%e0%b8%95%e0%b8%b1%e0%b9%89%e0%b8%87%e0%b8%84%e0%b8%a3%e0%b8%a3%e0%b8%a0%e0%b9%8c-%e0%b8%a0%e0%b8%b2%e0%b8%a7%e0%b8%b0%e0%b8%82%e0%b8%b2%e0%b8%94%e0%b8%99%e0%b9%89%e0%b8%b3-%e0%b9%82%e0%b8%a3%e0%b8%84%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%b2%e0%b8%97-%e0%b8%81%e0%b8%a5%e0%b9%89%e0%b8%b2%e0%b8%a1%e0%b9%80%e0%b8%99%e0%b8%b7%e0%b9%89%e0%b8%ad-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/',
        choices: ["Real", "Fake"],   
        answer: 0, 
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '6.jpeg',
        link: 'https://thematter.co/brief/157548/157548',
        choices: ["Real", "Fake"],    
        answer: 0,
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '7.jpeg',
        link: 'https://www.antifakenewscenter.com/%e0%b8%82%e0%b9%88%e0%b8%b2%e0%b8%a7%e0%b8%9b%e0%b8%a5%e0%b8%ad%e0%b8%a1-%e0%b8%ad%e0%b8%a2%e0%b9%88%e0%b8%b2%e0%b9%81%e0%b8%8a%e0%b8%a3%e0%b9%8c-%e0%b8%98-%e0%b8%ad%e0%b8%ad%e0%b8%a1%e0%b8%aa%e0%b8%b4%e0%b8%99-%e0%b9%80%e0%b8%9b%e0%b8%b4%e0%b8%94%e0%b8%aa%e0%b8%b4%e0%b8%99%e0%b9%80%e0%b8%8a%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%81%e0%b8%b9%e0%b9%89%e0%b8%a2%e0%b8%b7%e0%b8%a1-30000-%e0%b8%9a%e0%b8%b2%e0%b8%97-%e0%b8%97%e0%b8%b8%e0%b8%81%e0%b8%ad%e0%b8%b2%e0%b8%8a%e0%b8%b5%e0%b8%9e-%e0%b8%9c%e0%b9%88%e0%b8%ad%e0%b8%99%e0%b9%80%e0%b8%9e%e0%b8%b5%e0%b8%a2%e0%b8%87-1000-%e0%b8%9a%e0%b8%b2%e0%b8%97/',
        choices: ["Real", "Fake"],
        answer: 1,
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '8.jpeg',
        link: 'https://www.antifakenewscenter.com/%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%9c%e0%b8%a5%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%84%e0%b8%b5%e0%b8%a2%e0%b8%87%e0%b8%ab%e0%b8%a5%e0%b8%b1%e0%b8%87%e0%b8%89%e0%b8%b5%e0%b8%94%e0%b8%a7%e0%b8%b1%e0%b8%84%e0%b8%8b%e0%b8%b5%e0%b8%99%e0%b9%82%e0%b8%84%e0%b8%a7%e0%b8%b4%e0%b8%94-19-%e0%b8%aa%e0%b8%b2%e0%b8%a1%e0%b8%b2%e0%b8%a3%e0%b8%96%e0%b8%a2%e0%b8%b7%e0%b9%88%e0%b8%99%e0%b9%80%e0%b8%a3%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b8%87%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b9%80%e0%b8%87%e0%b8%b4%e0%b8%99%e0%b8%8a%e0%b9%88%e0%b8%a7%e0%b8%a2%e0%b9%80%e0%b8%ab%e0%b8%a5%e0%b8%b7%e0%b8%ad%e0%b9%84%e0%b8%94%e0%b9%89-%e0%b8%aa%e0%b8%b9%e0%b8%87%e0%b8%aa%e0%b8%b8%e0%b8%94%e0%b9%84%e0%b8%a1%e0%b9%88%e0%b9%80%e0%b8%81%e0%b8%b4%e0%b8%99-4-%e0%b9%81%e0%b8%aa%e0%b8%99%e0%b8%9a%e0%b8%b2%e0%b8%97-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/',
        choices: ["Real", "Fake"],   
        answer: 0, 
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '9.jpeg',
        link: 'https://www.antifakenewscenter.com/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%A1-%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C-%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B8%95%E0%B8%A3%E0%B8%B2-bioproud-%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94-19-%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A5%E0%B8%87%E0%B8%9B%E0%B8%AD%E0%B8%94/',
        choices: ["Real", "Fake"],
        answer: 1,
    },
    {
        title: "Is this news heading Real or Fake?",
        image: '10.jpeg',
        link: 'https://www.antifakenewscenter.com/%e0%b8%84%e0%b8%a3%e0%b8%a1-%e0%b8%ad%e0%b8%99%e0%b8%b8%e0%b8%a1%e0%b8%b1%e0%b8%95%e0%b8%b4%e0%b8%8b%e0%b8%b7%e0%b9%89%e0%b8%ad%e0%b8%8a%e0%b8%b8%e0%b8%94%e0%b8%95%e0%b8%a3%e0%b8%a7%e0%b8%88-atk-%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%9e%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%88%e0%b9%89%e0%b8%b2%e0%b8%87-%e0%b8%aa%e0%b8%b2%e0%b8%a1%e0%b8%b2%e0%b8%a3%e0%b8%96%e0%b8%99%e0%b8%b3%e0%b8%a1%e0%b8%b2%e0%b8%ab%e0%b8%b1%e0%b8%81%e0%b8%a3%e0%b8%b2%e0%b8%a2%e0%b8%88%e0%b9%88%e0%b8%b2%e0%b8%a2%e0%b9%84%e0%b8%94%e0%b9%89-1-5-%e0%b9%80%e0%b8%97%e0%b9%88%e0%b8%b2-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/',
        choices: ["Real", "Fake"],  
        answer: 0,  
    },
]

export default QUESTIONS;