var el = document.getElementById("btn");

el.addEventListener("click", clicked);

function clicked() {

    var speech =
        first_part[Math.floor(Math.random() * 7)] +
        second_part[Math.floor(Math.random() * 7)] +
        third_part[Math.floor(Math.random() * 7)] +
        fourth_part[Math.floor(Math.random() * 7)] +
        fifth_part[Math.floor(Math.random() * 7)] +
        sixth_part[Math.floor(Math.random() * 7)];

    document.getElementById("saying").textContent = speech;
}

const first_part = [
    "Ja chce powiedzieć jedną rzecz:",
    "Trzeba powiedzieć jasno:",
    "Jak powiedział wybitny krakowianin Stanisław Lem,",
    "Proszę mnie dobrze zrozumieć:",
    "Ja chciałem państwu przypomnieć, że",
    "Niech państwo nie mają złudzeń:",
    "Powiedzmy to wyraźnie:"
];

const second_part = [
    " przedstawiciele czerwonej hołoty",
    " ci wszyscy geje",
    " funkcjonariusze reżimowej telewizji",
    " tak zwani ekolodzy",
    " ci wszyscy demokraci",
    " agenci bezpieki",
    " feministki"
];

const third_part = [
    " zupełnie bezkarnie",
    " całkowicie bezczelnie",
    " o poglądach na lewo od komunizmu",
    " celowo i świadomie",
    " z premedytacją",
    " od czasów Okrągłego Stołu",
    " w ramach postępu"
];

const fourth_part = [
    " nawołują do podniesienia podatków,",
    " próbują wyrzucić kierowców z miast,",
    " próbują skłócić Polskę z Rosją,",
    " głoszą brednię o globalnym ociepleniu,",
    " zakazują posiadania broni,",
    " nie dopuszczają prawicy do władzy,",
    " uczą dzieci homoseksualizmu,"
]

const fifth_part = [
    " bo dzięki temu mogą kraść",
    " bo dostają za to pieniądze",
    " bo tak się uczy w państwowej szkole",
    " bo bez tego demokracja nie może istnieć",
    " bo głupich jest więcej niż mądrych",
    " bo chcą tworzyć raj na ziemii",
    " bo chcą niszczyć cywilizację białego człowieka"
]

const sixth_part = [
    " przez kolejne kadencje.",
    " o czym się nie mówi.",
    " i właśnie dlatego Europa umiera.",
    " ale przyjdą muzułmanie i zrobią porządek.",
    " - tak samo z resztą jak za Hitlera.",
    " - proszę zobaczyć co się dzieje na Zachodzie, jeśli mi Państwo nie wierzą.",
    " co lat temu sto nikomu nie przyszłoby nawet do głowy."
]