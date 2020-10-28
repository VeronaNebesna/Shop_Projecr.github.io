import React from "react"
import "./Filter.css"

const Filter = ()=>{
    return(
        <>
            <div class="filters">
                    <div class="checkbox first">
                        <span class = "headline"> device type</span>
                        <input type="checkbox" id="test_first"/>
                        <label for="test_first"><span>Laptop</span></label>

                        <input type="checkbox" id="test_two"/>
                        <label for="test_two"><span>Tables</span></label>
                    </div>

                    <div class="checkbox second">
                        <span class = "headline"> color</span>
                        <input type="checkbox" id="test_third"/>
                        <label for="test_third"><span>Black</span></label>
                        
                        <input type="checkbox" id="test_fourth"/>
                        <label for="test_fourth"><span>Red</span></label>

                        <input type="checkbox" id="test_fifth"/>
                        <label for="test_fifth"><span>Green</span></label>

                        <input type="checkbox" id="test_sixth"/>
                        <label for="test_sixth"><span>Blue</span></label>

                        <input type="checkbox" id="test_seventh"/>
                        <label for="test_seventh"><span>Orange</span></label>
                    </div>

                    <div class="checkbox third">
                        <span class = "headline"> ram</span>
                        <input type="checkbox" id="test_eighth"/>
                        <label for="test_eighth"><span>1GB</span></label>
                        
                        <input type="checkbox" id="test_ninth"/>
                        <label for="test_ninth"><span>2GB</span></label>

                        <input type="checkbox" id="test_tenth"/>
                        <label for="test_tenth"><span>4GB</span></label>

                        <input type="checkbox" id="test_11"/>
                        <label for="test_11"><span>6GB</span></label>

                        <input type="checkbox" id="test_12"/>
                        <label for="test_12"><span>8GB</span></label>
                    </div>
                    <span class="bottom_text">Show more options...</span>
                    <div class="but_submit">
                        <button class = "button_filter"><span>Submit</span></button>
                    </div>
                </div>
        </>
    )
}


export default Filter 