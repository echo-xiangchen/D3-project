import React,{ useState } from 'react'
import { pageSetting } from '../style';
import { Link } from 'react-router-dom'

const Header = () => {
    const NavLink = [
        {
            title: "Introduction",
            id: "introduction",
        },
        {
            title : "Stack Chart",
            id: "stackChart",
        },
        {
            title: "Line Chart",
            id: "lineChart",
        },
        {
            title: "World Map",
            id: "map",
        },
        {
            title: "Word Cluster",
            id: "wordCluster",
        },
        {
            title: "Reference",
            id: "reference",
        }
    ]

    const [active,setActive] = useState(NavLink[0].title);
    return (
        <div className={`${pageSetting.padding} fixed top-0 bg-background-color w-full h-20 z-20 flex justify-between items-center shadow-button`}>
            <Link 
                to="/848-visual-project" 
                className='font-bold text-xl text-font-color'
                onClick={()=>{
                    setActive("")
                    window.scrollTo(0,0);
                }}
                >
                    <p>ECHO</p>
            </Link>
            
            <ul className='flex justify-between items-center'>
                {
                    NavLink.map((link,index) => (
                        <li className='mr-8' key={index}>
                            <button
                                className={`font-bold text-font-color ${active === link.title ? "border-b-2 border-font-color" : ""}`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    ) 
}

export default Header
