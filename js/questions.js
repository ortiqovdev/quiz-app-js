// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
    this.question = que;
    this.opt1 = o1;
    this.opt2 = o2;
    this.opt3 = o3;
    this.opt4 = o4;
    this.answer = ans;
    this.asked = d;
}

// Question 1
var q1 = new CQuiz(
    'Yopiq idishda suv va uni to"yingan bug"i bor. Temperatura pasaysa suv bug"ining zichligi qanday?',
    'kamayadi',
    'ortqdi',
    'o"zgarmaydi',
    'TJY',
    1,
    0
);

// Question 2
var q2 = new CQuiz(
    'Ikki nuqtaviy zaryad o"zaro itarishadi. Ular tasirlashuv potensial energiyasi qanday ishorali?',
    'nolga teng',
    'musbat va manfiy',
    'faqat musbat',
    'faqat manfiy',
    2,
    0
);

// Question 3
var q3 = new CQuiz(
    'Akkumulyator 60Ah zaryad to"plagan . Bu necha kulon?',
    '27000',
    '216000',
    '108000',
    '54000',
    2,
    0
);

// Question 4
var q4 = new CQuiz(
    'Ideal gaz adiabatik kengayib tashqi kuchga qarshi 5kJ ish bajardi , uning ichki energiyasi qanday o"zagaradi?',
    '2.5kJ ga ortgan',
    '2.5kJ ga kamaygan ',
    '5kJ ga kamaygan',
    '5kJ ga ortga',
    3,
    0
);

// Question 5
var q5 = new CQuiz(
    'Atrof muhit bilan issiqlik almashmaydigan jarayon qaysi?',
    'izatermik',
    'izabark',
    'izaxorik',
    'adibatik',
    4,
    0
);

// Question 6
var q6 = new CQuiz(
    'Induktivlik so"zini manosi nima?',
    'tutki',
    'elektr',
    'irg"itmoq',
    'TJB',
    3,
    0
);

// Question 7
var q7 = new CQuiz(
    'neytronni yutuvchi element togri berilgan qatorni aniqlang.',
    'bor ,qadiry',
    'suyuq natriy , temir',
    'qadriy, qorg"oshin',
    'temir , bor, suv',
    1,
    0
);

// Question 8
var q8 = new CQuiz(
    'Radioaktivlik bo"yicha yadrolar necha turga bo"linadi?',
    '1',
    '2',
    '3',
    '4',
    2,
    0
);

// Question 9
var q9 = new CQuiz(
    'Tovush balandligi nimaga bog"liq?',
    'ampeletudaga',
    'abertonlar soniga',
    'chastataga',
    'tezligiga',
    3,
    0
);

// Question 10
var q10 = new CQuiz(
    'Broun harakatini tajribada o"rgangan olim kim?',
    'Robert Broun',
    'Albert Eynshteyn',
    'Demokrit',
    'Jan Perren',
    4,
    0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];