import React from "react";
import Img1 from '../Images/Launching_Soon/svgs/Vector-2.svg';
import Img2 from '../Images/Thankyou_popup/svgs/iconmonstr-x-mark-1.svg';
import Img3 from '../Images/Thankyou_popup/emailReceivedIcon.png';
import Img4 from '../Images/Thankyou_popup/svgs/02Star.svg';
import Img5 from '../Images/Thankyou_popup/svgs/underline.svg';
import Img6 from '../Images/Thankyou_popup/svgs/01Star.svg';

import Img7 from '../Images/1_Hero Section/image 21.png';
import Img8 from '../Images/1_Hero Section/Arrow.png';
import Img9 from '../Images/1_Hero Section/Banner 3.png';
import Img10 from '../Images/1_Hero Section/Banner 2.png';
import Img11 from '../Images/1_Hero Section/Star 3.png';

import Img12 from '../Images/Banner Section/Banner illustration01.png';

import Img13 from '../Images/Blade 3/Group 190.png';
import Img14 from '../Images/Blade 3/Illustration01.png';
import Img15 from '../Images/Blade 3/Group 191.png';

import Img16 from '../Images/Blade 4/Star 2.png';
import Img17 from '../Images/Blade 4/Vector 1178.png';

import Img18 from '../Images/Blade 4/Heighlight02.png';
import Img19 from '../Images/Blade 4/Heighlight01.png';
import Img20 from '../Images/Blade 4/Group 1004.png';
import Img21 from '../Images/Blade 4/Group 23.png';
import Img22 from '../Images/Blade 4/Group 23.png';

import Img25 from '../Images/Thankyou_popup/svgs/02Star.svg';
import Img26 from '../Images/Thankyou_popup/svgs/underline.svg';
import Img27 from '../Images/Thankyou_popup/svgs/01Star.svg';

import Img28 from '../Images/Blade 5/Group 946.png';
import Img29 from '../Images/Blade 5/Frame 138.png';
import Img30 from '../Images/Blade 5/Frame 137.png';
import Img31 from '../Images/Blade 5/Frame 101.png';

import Img32 from '../Images/Blade 6/Vector.png';
import Img33 from '../Images/Blade 6/Asset 8.png';

import Img34 from '../Images/1_Hero Section/image 21.png';

import Img35 from '../Images/Footer/Instagram.png';
import Img36 from '../Images/Footer/Linkdin.png';
import Img37 from '../Images/Footer/Twitter.png';

import Img38 from '../Images/Thankyou_popup/svgs/iconmonstr-x-mark-1.svg';
import Img39 from '../Images/Blade 4/Star 2.png';

export const Middle = () => {
    return(
        <>
            <div className="main-page">
                <div className="container-fluid" style={{marginTop:30}}>
                    <div className="row">
                        <div className="col-4 liftSide">
                            <p className="headStyle" style={{fontSize:12}}>Sign up form</p>
                            <div className="box1">
                                <center>
                                    <p style={{fontSize:15}}>Welcome toRudo Wealth</p>
                                    <h4>GET A CHANCE TO WIN UP TO</h4>
                                    <h4 style={{marginTop:-10}}>AED 50,000 EVERY MONTH</h4>
                                    <img src={Img1} alt="Img1" className="Img1" style={{width:153,marginTop:-24}}></img>
                                    <br/>
                                    <input type="text" placeholder="First Name" style={{fontSize:12, width:270, borderRadius:4, borderColor:"white"}}/>
                                    <br/><br/>
                                    <input type="text" placeholder="Last Name" style={{fontSize:12, width:270, borderRadius:4, borderColor:"white"}}/>
                                    <br/><br/>
                                </center>
                                <div className="checkbox">
                                    <input type="checkbox" name="" id="" /> accept our <u>Terms & privacy Policy</u>
                                </div>
                                <center>
                                <button type="button" class="btn btn-outline Btn1">Sign up now!</button>
                                <br/>
                                <p style={{fontSize:12}}>View More Offers</p>
                                </center>
                            </div>

                            <br/><br/><br/>

                            <p className="headStyle" style={{fontSize:12}}>Thank you</p>
                            <div className="box2">
                                <center>
                                    <img src={Img2} alt="Img2" className="Img2" style={{width:15,marginTop:-90, marginRight:-380}}></img><br/>
                                    <img src={Img3} alt="Img3" className="Img3" style={{width:120,marginTop:-24}}></img><br/>
                                    <img src={Img4} alt="Img4" className="Img4" style={{width:15,marginTop:-30, marginLeft:-150}}></img><br/>
                                    <h4 style={{marginTop:-18, fontFamily:"Cambria"}}>THANK YOU!</h4>
                                    <img src={Img5} alt="Img5" className="Img5" style={{width:110,marginTop:-24}}></img><br/>
                                    <img src={Img6} alt="Img6" className="Img6" style={{width:9,marginTop:-70, marginRight:-150}}></img>
                                </center>
                            </div>

                            <br/><br/><br/>

                            <p className="headStyle" style={{fontSize:12}}>Terms & Conditions</p>
                            <div className="box3">
                                <div className="container">
                                    <img src={Img38} alt="Img38" className="Img38" style={{width:15,marginTop:-30, marginLeft:350}}></img>
                                    <br/>
                                    <img src={Img39} alt="Img39" className="Img39" style={{width:24, marginTop:24}}></img>
                                    <div className="scrolling">
                                        <p style={{fontSize:20, marginTop:-42, marginLeft:9}}><b>Terms & Conditions</b></p>
                                        <ul>
                                            <li>
                                                Every time your family/friends sign up with your shared referral link
                                                and register with RuDo as per the eligible criteria mentioned below,
                                                you and your friend will recieve AED50 investment in your RuDo wealth account.
                                            </li>
                                            <li>
                                                Special Referral Bonus - 
                                                <p>Refer 5 friends and get AED500 into your RuDo account. *</p>
                                            </li>
                                        </ul>
                                        <p style={{fontSize:18, marginLeft:9}}>Eligibility</p>
                                        <ul>
                                            <li>
                                                Promotion period - till 28th Feb 2022
                                            </li>
                                            <li>
                                                Referral codes must be used during the early sign up 
                                                and on-boarding process, and cannot be added retroactively.
                                            </li>
                                            <li>
                                                Only when your friend funds his/her account with the initial
                                                investment of AED20 into their porfolio, the referral amount
                                                will be added to both of your accounts within 30 days.
                                            </li>
                                            <li>
                                                clients who recieve a referral bonus must keep it in their account
                                                for 90 days, otherwise it may be deducted from their final
                                                withdraw amount.
                                            </li>
                                            <li>
                                                The referral program is available exclusively to those who reside
                                                in MENA.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1"></div>

                        <div className="col-7 rightSide">
                            <p className="headStyle" style={{fontSize:12, marginBottom:-1}}>Final_iteration</p>
                            <div className="box4">
                                <div className="headTopCenterRight">
                                    <center>
                                        <p style={{fontSize:15, marginBottom:-30}}>Get A Chance To Win Up To <b>AED 50,000</b> Every Month!</p>
                                    </center>
                                    <img src={Img2} alt="Img2" className="Img2-1" style={{width:15}}></img>
                                </div>
                                <br/><br/>
                                <div className="firstBanner">
                                    <div className="container">
                                        <div className="firstBannerRight">
                                            <img src={Img7} alt="Img7" className="Img7" style={{width:100}}></img>
                                        </div>
                                        <div className="firstBannerLeft">
                                            <button type="button" class="btn btn-outline Btn2">Sign up now!</button>
                                        </div>
                                        <br/><br/>
                                        <p style={{fontSize:33}}><b>Makinhg Saving and</b></p>
                                        <p style={{fontSize:33, marginTop:-21}}><b>Investing <span className="fontFun">Fun</span></b></p>
                                        <img src={Img8} alt="Img8" className="Img8" style={{width:150, marginTop:-30}}></img>
                                    </div>
                                </div>

                                <hr style={{borderTop: "2px dashed white"}}/>

                                <div className="row">
                                    <div className="col-4">
                                        <img src={Img9} alt="Img9" className="Img9" style={{width:200, height:240, marginTop:-18}}></img>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-5">
                                        <img src={Img10} alt="Img10" className="Img10" style={{width:305, height:240, marginTop:-18}}></img>
                                    </div>
                                </div>

                                <div className="bannertext">
                                    <center>
                                        <p style={{fontSize:20}} className="bannerTextMain">Chance to Win Up To <span className="fifty"><b>AED 50,000</b></span> Every Month &nbsp;
                                            <span>
                                                <img src={Img11} alt="Img11" className="Img11" style={{width:24, height:24, marginTop:-18}}></img>        
                                            </span>&nbsp;
                                            Get a Chance To Win Up To <span className="aed"><b>AED</b></span>
                                        </p>
                                    </center>
                                </div>

                                <br/><br/><br/><br/><br/>

                                <hr style={{borderTop: "2px dashed white"}}/>

                                <div className="container">
                                    <div className="innerBox3">
                                        <div className="container">
                                            <p className="number3" style={{marginBottom:1, fontSize:30}}><b>03</b></p>
                                        </div>
                                    </div>
                                    <div className="innerBox2">
                                        <div className="container">
                                            <p className="number2" style={{marginBottom:1, fontSize:30}}><b>02</b></p>
                                        </div>
                                    </div>
                                    <div className="innerBox1">
                                        <div className="container">
                                            <div className="col-6">
                                                <div className="contentText1" style={{paddingTop:60}}>
                                                    <b><p>Saving and investing was never</p>
                                                    <p style={{marginTop:-18}}>so fun and breeeezyyyy!</p></b>
                                                    <p>invest to load your treasure</p>
                                                    <p style={{marginTop:-18}}>chest in a fun way!</p>
                                                    <button type="button" class="btn btn-outline Btn3">Sign up</button>
                                                </div>
                                                <br/><br/><br/>
                                                <p className="number1" style={{marginBottom:-30, fontSize:30}}><b>01</b></p>
                                            </div>
                                            <div className="col-6">
                                                <img src={Img12} alt="Img12" className="Img12" style={{width:400, height:180}}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="container">
                                    <div className="singlePhoto">
                                        <img src={Img13} alt="Img13" className="Img13" style={{width:50, height:50}}></img>
                                    </div>
                                    <div className="rotateText">
                                        <p><b>Launching Soon!</b></p>
                                    </div>
                                    <div className="container" style={{marginTop:154}}>
                                        <div className="container">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-6 tripleCard1">
                                                        <p style={{fontSize:24}}>Keep that change.</p>
                                                        <p style={{fontSize:24, marginTop:-20}}>No, literally!</p>
                                                        <p>Your money, our brains!</p>
                                                        <p style={{marginTop:-20}}>Choose a portfolio strategy</p>
                                                        <p style={{marginTop:-20}}>tailored just for you!</p>
                                                        <img src={Img14} alt="Img14" className="Img14" style={{width:180, height:150}}></img>
                                                    </div>
                                                    <div className="col-6 tripleCard2">
                                                        <p style={{fontSize:24}}>Invest Smart!</p>
                                                    </div>
                                                    <div className="col-6 tripleCard3">
                                                        {/* <p style={{fontSize:24}}>Salary Credit.</p>
                                                        <p className="secondText" style={{fontSize:24}}>Salary Debit.</p> */}
                                                        <p style={{fontSize:24}}>Salary Credit. <br/> Salary Debit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="secondPhoto">
                                        <img src={Img15} alt="Img15" className="Img15" style={{width:50, height:50}}></img>
                                    </div>
                                </div>
                            
                                <br/><br/><br/>

                                <div className="onlyText">
                                    <center>
                                        <img src={Img16} alt="Img16" className="Img16" style={{width:40, height:40}}></img>
                                        <img src={Img17} alt="Img17" className="Img17" style={{width:100, height:90}}></img>
                                        <p style={{fontSize:42}}>Referral Offers</p>
                                    </center>                        
                                </div>

                                <div className="container">
                                    <div className="boxBlue">
                                        <div className="container">
                                            <img src={Img18} alt="Img18" className="Img18" style={{width:30, height:30}}></img>
                                            <p style={{fontSize:21}}>Refer and Earn AED50</p>                              
                                            <img src={Img19} alt="Img19" className="Img19" style={{width:21, height:21}}></img>  
                                            <p style={{fontSize:18, marginTop:-21}}>Refer a friend and get AED50</p>                                
                                            <p style={{fontSize:18, marginTop:-21}}>added in your and your friend's</p>                                
                                            <p style={{fontSize:18, marginTop:-21}}>RuDo Account!</p>                                
                                            <br/>
                                            <button type="button" class="btn btn-outline Btn4">Refer now</button>
                                            <p style={{marginTop:-9, fontSize:11, marginLeft:10}}>*Terms & Conditions</p>

                                            <div className="rightImage">
                                                <img src={Img20} alt="Img20" className="Img20" style={{width:200, height:200}}></img>
                                            </div>
                                            <div className="rightImageSmall1">
                                                <img src={Img21} alt="Img21" className="Img21" style={{width:30, height:30}}></img>
                                            </div>
                                            <div className="rightImageSmall2">
                                                <img src={Img22} alt="Img22" className="Img22" style={{width:50, height:50}}></img>
                                            </div>
                                        </div>
                                    </div>                                              
                                </div>
                                
                                <div className="boxBlue2">
                                    <img src={Img28} alt="Img28" className="Img28" style={{width:100, height:100}}></img>
                                    <img src={Img29} alt="Img29" className="Img29" style={{width:100, height:200}}></img>

                                    <center>
                                        <p style={{fontSize:42, marginLeft:100}}>Lauching Soon!</p> 
                                        <div className="Img25">
                                            <img src={Img25} alt="Img25" style={{width:20, height:20}}></img>
                                        </div>
                                        <div className="Img26">
                                            <img src={Img26} alt="Img26" style={{width:153, height:153}}></img>
                                        </div>
                                        <div className="Img27">
                                            <img src={Img27} alt="Img27" style={{width:20, height:20}}></img>                
                                        </div> 
                                        <br/><br/><br/><br/>
                                        <p style={{fontSize:21}}>Join the waitlist and get 12 months of</p>              
                                        <p style={{marginTop:-24, fontSize:21}}>free subscription on RuDo App launch</p>    
                                        <br/>                
                                        <button type="button" class="btn btn-outline Btn5">Sign up now</button>          
                                    </center>  

                                    <img src={Img30} alt="Img30" className="Img30" style={{width:200, height:100}}></img>
                                    <img src={Img31} alt="Img31" className="Img31" style={{width:300, height:100}}></img>                                                     
                                </div>   
                            
                                <div className="lastPost">
                                    <div className="container">
                                        <div style={{marginLeft:60, paddingTop:42}}>
                                            <p style={{fontSize:21}}>Changing the World's Outlook</p> 
                                            <img src={Img32} alt="Img32" className="Img32" style={{width:50, height:10}}></img>                       
                                            <p style={{fontSize:21, marginTop:-42}}>Towards Saving and Investing.</p>                        
                                            <p style={{}}>Cus this time it is</p>                        
                                            <p style={{marginTop:-21}}>Fun, Rewarding and Simple.</p> 
                                            <br/>
                                            <button type="button" class="btn btn-outline Btn6">Sign up now</button>                            
                                        </div>
                                        <img src={Img33} alt="Img33" className="Img33" style={{width:450, height:120}}></img>                
                                    </div>                            
                                </div>                                              
                            
                                <br/><br/><br/>

                                <center>
                                    <img src={Img34} alt="Img34" className="Img34" style={{width:100}}></img>  
                                    <br/><br/><br/>
                                    <img src={Img35} alt="Img35" className="Img35"></img> &nbsp; &nbsp;                           
                                    <img src={Img36} alt="Img36" className="Img36"></img> &nbsp;                          
                                    <img src={Img37} alt="Img37" className="Img37"></img>                           
                                </center>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}