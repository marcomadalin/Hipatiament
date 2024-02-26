import photo1 from "../assets/images/article1.jpg";
import photo2 from "../assets/images/article2.jpg";
import photo3 from "../assets/images/article3.jpg";
import photo4 from "../assets/images/article4.jpg";
import photo5 from "../assets/images/article5.jpg";

export default class Constants {
    static links = [
        {
            url: "/",
            name: "Inici"
        },
        {
            url: "/Articles",
            name: "Articles"
        },
        {
            url: "/Colaboracions",
            name: "Col·laboracions"
        },
        {
            url: "/SobreMi",
            name: "Sobre mi"
        },
    ]

    static articles = [
        {
            name: "ELS GRUPS SANGUINIS",
            photo: photo1,
            alt: "GRUPS SANGUINIS",
            link: "/GrupsSanguinis",
            difficulty: 1,
            date: "9/12/2023",
            firstParagraph: "Fins a l’any 1900 no es va saber per què la gent moria freqüentment quan es feien transfusions de sang, fins que es van descobrir els grups sanguinis i les seves diferències.",
        },
        /*
        {
            name: " L’ALZHEIMER, UNA MALALTIA GENÈTICA?",
            photo: photo2,
            alt: "ALZHEIMER",
            link: "/Alzheimer",
            difficulty: 1,
            date: "16/12/2023",
            firstParagraph: "La malaltia de l’Article és la malaltia més freqüent en la població anciana. Representa entre un 50 i un 60% de les demències i és una de les malalties que més morts causen a l’any després de les malalties cardiovasculars i el càncer, és més freqüent en dones, essent la ràtio de tres dones per un home.",
        },
        {
            name: "PHINEAS GAGE, L’HOME QUE VA SOBREVIURE A UNA PERFORACIÓ CRANEAL",
            photo: photo3,
            alt: "PHINEAS GAGE",
            link: "/PhineasGage",
            difficulty: 1,
            date: "23/12/2023",
            firstParagraph: "Phineas Gage era un artificier de 25 anys. El 13 de setembre de 1843 estava treballant amb explosius quan de sobte una barra de ferro va sortir disparada, penetrant per la seva galta esquerra i foradant-li el crani.",
        },
        */
        {
            name: "LES PASTILLES ANTICONCEPTIVES",
            photo: photo4,
            alt: "PASTILLES ANTICONCEPTIVES",
            link: "/Anticonceptius",
            difficulty: 1,
            date: "30/12/2023",
            firstParagraph: "Les anticonceptives: un exemple pràctic on es veu clar la falta de recursos, però sobretot, d’importància.\n",
        },
        /*
        {
            name: "TENIR UNA CAMA ENGANXADA AL COS",
            photo: photo5,
            alt: "CAMA ENGANXADA",
            link: "/CamaEnganxada",
            difficulty: 1,
            date: "6/01/2024",
            firstParagraph: "L’afirmació “tenir enganxada una cama al cos” sembla extreta d’alguna pel·lícula ciència ficció, irreal, però és una afirmació duta a terme per un pacient als anys 80.\n",
        },

         */
    ];
}