import React, { Component } from 'react'

class FillMenu extends Component{
    render(){
        return(
            
            <div className="clearfix slide-box-home slide-v1 relative">
                <div className="clearfix slide-home owl-carousel owl-theme owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                    <img src={this.props.images} class="img-fluid" alt="Responsive image">

                    </img>
                        {/* <div className="owl-stage" style={{transform: "translate3d(-2055px, 0px, 0px); transition: all 0.25s ease 0s; width: 2110px;"}}>
                            <div className="owl-item cloned" style={{width: "585px;"}}>
                                <div className="item"><img src="img/banner.png" alt="Banner Header 1"/>
                                </div>
                                </div>
                                <div className="owl-item cloned" style={{width: "585px;"}}>
                                    <div className="item"><img src="img/slide_2.png" alt="Banner Header 2"/>
                                        </div>
                                    </div>
                            <div className="owl-item" style={{width: "685px;"}}>
                                <div className="item"><img src="img/banner.png" alt="Banner Header 1"/>
                                    </div>
                                </div>
                            <div className="owl-item active" style={{width: "685px;"}}>
                                <div className="item"><img src="img/slide_2.png" alt="Banner Header 2"/>
                                    </div>
                                    </div>
                            <div className="owl-item cloned" style={{width: "585px;"}}>
                                <div className="item"><img src="img/banner.png" alt="Banner Header 1"/>
                                    </div>
                                </div>
                            <div className="owl-item cloned" style={{width: "585px;"}}>
                                <div className="item"><img src="img/slide_2.png" alt="Banner Header 2"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev">
                                <span aria-label="Previous">‹</span>
                                </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <span aria-label="Next">›</span>
                                        </button>
                                    </div>
                                <div className="dots-slide"><button role="button" className="dot-slide-home"><span></span></button>
                                <button role="button" className="dot-slide-home active"><span></span></button>
                    </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default FillMenu