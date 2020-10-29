import React from "react"

const FilterItems = ({
    type_1,
    type_2,
    type_3,
    type_4,
    type_5
}) =>{
    return(
        <>
            <input type="checkbox" id="test_first"/>
            <label for="test_first"><span>{type_1}</span></label>
            <input type="checkbox" id="test_first"/>
            <label for="test_first"><span>{type_2}</span></label>
            <input type="checkbox" id="test_first"/>
            <label for="test_first"><span>{type_3}</span></label>
            <input type="checkbox" id="test_first"/>
            <label for="test_first"><span>{type_4}</span></label>
            <input type="checkbox" id="test_first"/>
            <label for="test_first"><span>{type_5}</span></label>
        </>
    )
}

export default FilterItems