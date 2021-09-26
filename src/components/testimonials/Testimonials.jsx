import "./testimonials.scss"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Testimonials() {
    const data = [
        
        {
            id: 1,
            name: "Patricio Parra Martinez",
            title: "BSc. Biochemistry ",
            img:
                "https://media-exp1.licdn.com/dms/image/D4D35AQHMtYKm1JlfMw/profile-framedphoto-shrink_200_200/0/1626809133232?e=1632675600&v=beta&t=urSKl6d-mWMmPlEL4JiLmRgfhSQXUdiM2oC3DTddg3Y",
            icon: "assets/linkedin.png",
            desc:
                "Tengo el agrado de haber estudiado y trabajado con Yamil en varias oportunidades. Quisiera destacar su pasión por el trabajo y velocidad de aprendizaje. Realmente es una persona con mucho potencial y respondo por él. No duden en contactarme para pedirme referencias",
            featured: true,
        },
        {
            id: 2,
            name: "Lola",
            title: "CEO of Bones",
            img:
                "assets/pañuelo-V.jpeg",
            icon: "assets/linkedin.png",
            desc:
                "woof woof, ar rooff arf arf rooff. woof nnnn.... woof",
        },
        {
            id: 3,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        }
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured?"card featured":"card"}>
                        <div className="top">
                            <ArrowBackIcon className="left" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">{d.desc}</div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}