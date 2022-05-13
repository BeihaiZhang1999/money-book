import React, { Component } from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";

const TotalPrice = ({income,outcome})=>{
    return(
        <div class="d-flex justify-content-between">
            <p class="text-secondary">总支出：{outcome}</p>
            <p class="text-secondary">总收入：{income}</p>
        </div>
    )
    
}

TotalPrice.propTypes={
    income:PropTypes.number.isRequired,
    outcome:PropTypes.number.isRequired,
}

TotalPrice.defaultProps={
    income:0,
    outcome:0
}
export default TotalPrice