// import styled from "styled-components";
// import Responsive from "./Responsive";
// import Button from "./Button";

import { Link } from 'react-router-dom'
import style from '../../css/jw_header.module.css';
import { useState } from "react";



// const HeaderBlock = styled.div`
//     position: fixed;
//     width: 100%;
//     background: white;
//     box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
//     `;

    // Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성

// const Wrapper = styled(Responsive)`
//         height: 4rem;
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         .logo {
//             font-size : 1.125rem;
//             font-weight : 800;
//             letter-spacing: 2px;
//         }
//         .right {
//             display: flex;
//             align-items: center;
//         }
//         `;

        // 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem아래에 나타나도록 해 주는 컴포넌트

// const Spacer = styled.div`
//             height: 4rem;
//         `;


// const UserInfo = styled.div`
// font-weight: 800;
// margin-right: 1rem;
// `;

const Header = ({user, onLogout}) => {
    let a=[true, false, false, false]
    const[onOff, setOnOff] = useState(a)

    const onOffFunction = (e) => {
       let b = e.target.id
       a = [false, false, false, false]

       for(var i=0; i<a.length; i++){
         if(b===`header${i+1}`){
            a[i] = true
         }
       }
       setOnOff(a)
    }
            return(
                <>
                <div className={style.container}>
            <div className={style.header}>
                <div className={style.menu}>
                    <Link to='/' onClick={onOffFunction} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt=''/></Link>
                    <Link to='/main' className={style.linkStyle}><button id='header1' onClick={onOffFunction} className={ (onOff[0] ? `${style.selected}`:null)}>구독신청</button></Link>
                    <Link to='/main/myInfo' className={style.linkStyle}><button id='header2' onClick={onOffFunction} className={ (onOff[1] ? `${style.selected}`:null)}>MY 구독</button></Link>
                    <Link to='/' className={style.linkStyle}><button id='header3' onClick={onOffFunction} className={ (onOff[2] ? `${style.selected}`:null)}>이벤트</button></Link>
                    <Link to='/' className={style.linkStyle}><button id='header4' onClick={onOffFunction} className={ (onOff[3] ? `${style.selected}`:null)}>고객센터</button></Link>
                </div>
                {/* <div className={style.logIn}>
                    <Link to='/login'><i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />로그인</Link>
                </div> */}
                      {user? (<>
                               <div style={{marginLeft:'670px'}}>{user.username}</div>
                            <div className={style.logIn}>
                                <Link to='/main' onClick={onLogout} ><i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />로그아웃</Link>
                                {/* <Button onClick={onLogout}>로그아웃</Button> */}
                            </div></>
                        ) : (
                            <div className={style.logIn}>
                                <Link to='/login'><i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />로그인</Link>
                                {/* <Button to="/login">로그인</Button> */}
                            </div>
                        )}
            </div>
        </div>
                </>
            )
        }

export default Header;



// // import styled from "styled-components";
// // import Responsive from "./Responsive";
// // import Button from "./Button";
// import style from '../common/css/jw_header.module.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'



// // const HeaderBlock = styled.div`
// //     position: fixed;
// //     width: 100%;
// //     background: white;
// //     box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
// //     `;

// //     // Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성

// // const Wrapper = styled(Responsive)`
// //         height: 4rem;
// //         display: flex;
// //         align-items: center;
// //         justify-content: space-between;
// //         .logo {
// //             font-size : 1.125rem;
// //             font-weight : 800;
// //             letter-spacing: 2px;
// //         }
// //         .right {
// //             display: flex;
// //             align-items: center;
// //         }
// //         `;

// //         // 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem아래에 나타나도록 해 주는 컴포넌트

// // const Spacer = styled.div`
// //             height: 4rem;
// //         `;


// // const UserInfo = styled.div`
// // font-weight: 800;
// // margin-right: 1rem;
// // `;

// const Header = ({user, onLogout}) => {
//     let a=[true, false, false, false]
//     const[onOff, setOnOff] = useState(a)

//     const onOffFunction = (e) => {
//        let b = e.target.id
//        a = [false, false, false, false]

//        for(var i=0; i<a.length; i++){
//          if(b===`header${i+1}`){
//             a[i] = true
//          }
//        }
//        setOnOff(a)
//     }
//             return(
//                 <>


// <div className={style.container}>
//             <div className={style.header}>
//                 <div className={style.menu}>
//                     <Link to='/' onClick={onOffFunction} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt=''/></Link>
//                     <Link to='/main' className={style.linkStyle}><button id='header1' onClick={onOffFunction} className={ (onOff[0] ? `${style.selected}`:null)}>구독신청</button></Link>
//                     <Link to='/main/myInfo' className={style.linkStyle}><button id='header2' onClick={onOffFunction} className={ (onOff[1] ? `${style.selected}`:null)}>MY 구독</button></Link>
//                     <Link to='/' className={style.linkStyle}><button id='header3' onClick={onOffFunction} className={ (onOff[2] ? `${style.selected}`:null)}>이벤트</button></Link>
//                     <Link to='/' className={style.linkStyle}><button id='header4' onClick={onOffFunction} className={ (onOff[3] ? `${style.selected}`:null)}>고객센터</button></Link>
//                 </div>
//                 <div className={style.logIn}>
//                     <i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />
//                     {user? (
                        
//                             <div>
//                                  <i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" onClick={onLogout} />{user.username}로그아웃
//                                 {/* <Button onClick={onLogout}>로그아웃</Button> */}
//                             </div>
//                         ) : (
//                             <div>
//                                 <i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket"/>로그인
//                                 <Link to='/login'></Link>
//                             </div>
//                         )}
                
//                 </div>
//             </div>
//         </div>
                
                    
//                         {/* <Link to='/' className='logo'>REACTERS</Link>
//                         {user? (
//                             <div className="right">
//                                 <UserInfo>{user.username}</UserInfo>
//                                 <Button onClick={onLogout}>로그아웃</Button>
//                             </div>
//                         ) : (
//                             <div className="right">
//                                 <Button to="/login">로그인</Button>
//                             </div>
//                         )}
//                     */}
                
                
//                 </>
//             )
//         }

// export default Header;