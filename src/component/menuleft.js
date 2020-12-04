import React, { Component } from 'react'
import FillMenu from './fillmenu'

class MenuLeft extends Component {
    render(){
        return(
            <div class="clearfix menu-web relative">
                                <ul>
                                    <li><a href="#"><img src="img/icon_hot.png" alt="Icon Hot Deals"/> <p onClick={e=>{this.props.eventClick(this.props.model, this.props.urut)}}>Mens Clothing</p></a></li>
                                    <li><a href="#"><img src="img/icon_food.png" alt="Icon Food"/> <p>Jewelery</p></a></li>
                                    <li><a href="#"><img src="img/icon_mobile.png" alt="Icon Mobile &amp; Tablet"/> <p>Electronic</p></a></li>
                                    <li><a href="#"><img src="img/icon_electric.png" alt="Icon Electric Appliances"/> <p>Women Clothing</p></a></li>
                                    
                                </ul>
            </div>
        )
    }
}

export default MenuLeft