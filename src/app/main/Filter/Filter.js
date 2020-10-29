import React from "react"
import FilterData from "./FilterData"
import "./Filter.css"
import FilterItems from "./FilterItems"

const Filter = ()=>{
    return(
        <>
            <div class="filters">
                {
                    FilterData.map(({
                        id, 
                        type,
                        type_1,
                        type_2,
                        type_3,
                        type_4,
                        type_5
                    })=>(
                        <div class="checkbox" key={id}>
                            <span class = "headline"> {type}</span>
                           <FilterItems
                                type_1 ={type_1}
                                type_2 ={type_2}
                                type_3 ={type_3}
                                type_4={type_4}
                                type_5 = {type_5}
                           />
                        </div>
                    ) )
                }
                    <span class="bottom_text">Show more options...</span>
                    <div class="but_submit">
                        <button class = "button_filter"><span>Submit</span></button>
                    </div>
                </div>
        </>
    )
}


export default Filter 