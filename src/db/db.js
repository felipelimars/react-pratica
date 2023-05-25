import astronaltas from '../utils/Astronaltas.png'
import buzzlightyear from '../utils/BuzzLightYear.png'
import carroespacial from '../utils/CarroEspacial.png'
import foguete from '../utils/Foguete.png'
import foguetes from '../utils/Foguetes.png'
import foguetinho from '../utils/foguetinho.png'
import monstrosa from '../utils/MonstroSA.png'
import robo from '../utils/Robo.png'
import sistemasolar from '../utils/SistemaSolar.png'


const db = [

    {
        name: "Astronaltas destemidos",
        category: "Astronaltas",
        price: 59.99,
        id: 1,
        stock: 20,
        description: "Astronaltas destemidos, unidos para conquistar galaxias",
        image: astronaltas
    },    
    {
        name: "Astronalta famoso",
        category: "Astronaltas",
        id: 2,
        price: 99.99,
        stock: 5,
        description: "Possui a habilidade de se comunicar com outros brinquedos, e é um personagem destemido",
        image: buzzlightyear
    },
    {
        name: "Carro Espacial",
        category: "Carros",
        price: 59.99,
        id: 3,
        stock: 20,
        description: "Carro que trafega por planetas, conhecidos e desconhecidos pelo ser humano",
        image: carroespacial
    }, 
    {
        name: "Foguete Espacial",
        category: "Foguetes",
        price: 79.99,
        id: 4,
        stock: 5,
        description: "Foguete espacial realista",
        image: foguete
    }, 
    {
        name: "Foguetes Unidos",
        category: "Foguetes",
        price: 49.99,
        id: 5,
        stock: 15,
        description: "Foguetes unidos jamais serão vencidos",
        image: foguetes
    }, 
    {
        name: "Mini Foguete",
        category: "Foguetes",
        price: 99.99,
        id: 6,
        stock: 10,
        description: "Foguete espacial usados para pequenas missões",
        image: foguetinho
    }, 
    {
        name: "Monstro famoso",
        category: "Monstros",
        price: 59.99,
        id: 7,
        stock: 5,
        description: "Cuidado, ele costuma aparecer de noite, e é super fofinho.",
        image: monstrosa
    },
    {
        name: "Robozão",
        category: "Robôs",
        price: 99.99,
        id: 8,
        stock: 5,
        description: "Robô altamente treinado para missões espaciais",
        image: robo
    }, 
    {
        name: "Sistema Solar",
        category: "Planetas",
        price: 59.99,
        id: 9,
        stock: 10,
        description: "Um pedaço do mundo, na palma da sua mão",
        image: sistemasolar
    }
]

export default db
