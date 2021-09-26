import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useEffect, useState } from "react"
import { featuredPortfolio} from "../../data.js"

export default function Portfolio() {

    // const list = [
    //     {
    //         id: "featured",
    //         title: "Featured"
    //     },
    //     {
    //         id: "web",
    //         title: "Web App"
    //     },
    //     {
    //         id: "mobile",
    //         title: "Mobile App"
    //     },
    //     {
    //         id: "design",
    //         title: "Design"
    //     },
    //     {
    //         id: "content",
    //         title: "Content"
    //     },
    // ]
    const [data, setData] = useState(featuredPortfolio)
    // const [selected, setSelected] = useState(list[0]['id'])
    // useEffect(() => {
    //     switch (selected) {
    //         case list[0].id:
    //             setData(featuredPortfolio)
    //             break
    //         case list[1].id:
    //             setData(webPortfolio)
    //             break
    //         case list[2].id:
    //             setData(mobilePortfolio)
    //             break
    //         case list[3].id:
    //             setData(designPortfolio)
    //             break
    //         case list[4].id:
    //             setData(contentPortfolio)
    //             break
    //         default:
    //             setData(featuredPortfolio)
    //     }
    // }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            {/* <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul> */}
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                    <img src={d.img} alt="" />
                    <a href={d.link} target="_blank" >{d.title}</a>
                   
                </div>
                
                ))}
            </div>
        </div>
    )
}