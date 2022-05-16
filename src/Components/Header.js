import React from "react";

export const Header = () => {
    return(
        <>
            <div>
                <div className="container-fluid headTop">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <div className="headTopLeft">
                                <i class="fa fa-hand-stop-o" style={{fontSize:24}}></i> &nbsp;
                                </div>
                            </div>
                            <div className="col-4">
                                <center>
                                    <div className="headTopCenter">
                                        <h6>Rudo_Design Final Draft</h6>
                                    </div>
                                </center>
                            </div>
                            <div className="col-4">
                                <div className="headTopRight">
                                    <button type="button" className="btn">Login</button>
                                    <button class="dropbtn">50%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 