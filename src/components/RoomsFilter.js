import React from 'react'
import {useContext} from "react"
import {RoomContext} from "../context"
import Title from  "./Title"


//get all unique value
const getUnique =(items,value)=>{

    let arr=[...new Set(items.map(item=>item[value]))]
    return arr;
}

export default function RoomsFilter({ rooms }) {

   const context = useContext(RoomContext);
   // console.log(context);

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context;

    //get unique types
    let types=getUnique(rooms,"type");

    //add all
    types=["all",...types];

    //map to jsx
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    });

    //get unique no of people
    let people=getUnique(rooms,"capacity");

    //map to jsx 
    people= people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title  title="search rooms"></Title>
            <form className="filter-form">

                {/*   select type    */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                     name="type"
                     id="type"
                     value={type}
                     className="form-control"
                     onChange={handleChange}>
                         {types}                    
                    </select>
                </div>
                {/*  end select type */}



                 {/*   guests     */}
                <div className="form-group">
                    <label htmlFor="capacity"> Guests</label>
                    <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/*     end guest   */}



                {/*    room price      */}
                <div className="form-group">
                    <label htmlFor="price"> 
                        room price ${price}
                    </label>
                    <input 
                     type="range" 
                     name="price"
                     min={minPrice} 
                     max={maxPrice} 
                     id="price"
                     value={price}
                     onChange={handleChange}
                     className="form-control"
                     ></input>
                </div>
                {/*     end of room price     */}



                   {/*    size     */}
                    <div className="form-group">
                        <label htmlFor="size">Room Size</label>
                        <div className="size-inputs">
                            <input
                                type="number"
                                name="minSize"
                                id="size"
                                value={minSize}
                                onChange={handleChange}
                                className="size-input"
                            >
                            </input>

                            <input
                                type="number"
                                name="maxSize"
                                value={maxSize}
                                id="size"
                                onChange={handleChange}
                                className="size-input"
                            >
                            </input>
                        </div>
                    </div>
                  {/*    end of size     */}



                    {/*    extras     */}
                        <div className="form-group">
                            <div className="single-extra">
                                <label htmlFor="breakfast"> Breakfast </label>
                                <input
                                    type="checkbox"
                                    name="breakfast"
                                    id="breakfast"
                                    checked={breakfast}
                                    onChange={handleChange}
                                >
                                </input> 
                            </div>
                            <div className="single-extra">
                                <label htmlFor="pets">Pets </label>
                                <input
                                    type="checkbox"
                                    name="pets"
                                    id="pets"
                                    checked={pets}
                                    onChange={handleChange}
                                >    
                                </input>
                            </div>
                        </div>

                    {/*   end of   extras    */}



            </form>
        </section>
    )
}
