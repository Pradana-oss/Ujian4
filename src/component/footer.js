import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <div class="container">
            <div className=" box-banner-center-v1 box-banner-center">
                <div className="effect-layla relative clear-padding col-md-4 col-sm-4 col-xs-4 float-left zoom-image-hover">
                    <img src="img/banner_small.png" alt=""/>
                        <a href="#" className="relative"></a>
                </div>
                    <div className="effect-layla relative clear-padding col-md-4 col-sm-4 col-xs-4 float-left zoom-image-hover">
                        <img src="img/banner_small_1.png" alt=""/>
                            <a href="#" className="relative"></a>
                    </div>
                        <div className="effect-layla relative clear-padding col-md-4 col-sm-4 col-xs-4 float-left zoom-image-hover">
                            <img src="img/banner_small_2.png" alt=""/>
                                <a href="#" className="relative"></a>
                        </div>
            </div>
            </div>
        )
    }
}

export default Footer
