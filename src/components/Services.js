import React, { Component } from 'react'
import { FaCocktail,FaHiking ,FaShuttleVan,FaBeer}  from "react-icons/fa"
import Title from "./Title"


export default class Services extends Component {
                
    state=
    {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Lorem isum dolor sit amet consetetur adipising elict . magni , corporis!!!"

            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem isum dolor sit amet consetetur adipising elict . magni , corporis!!!"

            },
            {
                icon:<FaShuttleVan/>,
                title:"Ffree  shuttle",
                info:"Lorem isum dolor sit amet consetetur adipising elict . magni , corporis!!!"

            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:"Lorem isum dolor sit amet consetetur adipising elict . magni , corporis!!!"

            }
        ]
    }


    render() {
        return (
            <>
                <section className="sevices">
                    <Title title="services"></Title>
                    <div className="services-center">
                        {this.state.services.map((item,index)=>{

                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                 <p>{item.info}</p>

                            </article>
                        })}
                    </div>
                </section>  
            </>
        )
    }
}
