import styled from 'styled-components';
import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth';
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Header(){
        const { logout } = useContext(AuthContext);

        const [userMenu, setUserMenu] = useState(true);

        const navigate = useNavigate();

        const userPicture = localStorage.getItem("image");

        const handleUserMenu = (userMenuStatus) => {
            userMenuStatus ? setUserMenu(false) : setUserMenu(true);
        }

        const handleLogout = () => {
            if (window.confirm("Do you want to leave the current session?")) {
                setUserMenu(true);
                logout();
                navigate("/");
                window.location.reload(true);
            }
            return;
        }


        return (
            <>
                <Head>
                    <Logo onClick={() => navigate("/home")}>Food Planner</Logo>
                    <Logout>
                        <AiOutlineWrap onClick={() => handleUserMenu(userMenu)}>
                            {userMenu ?
                                <IconContext.Provider value={{ color: "#f0f8ff", className: "global-class-name", size: "25px" }}>
                                    <AiOutlineDown />
                                </IconContext.Provider>
                                : <IconContext.Provider value={{ color: "#f0f8ff", className: "global-class-name", size: "25px" }}>
                                    <AiOutlineUp />
                                </IconContext.Provider>
                            }
                        </AiOutlineWrap>
                        <Image src={userPicture} onClick={() => handleUserMenu(userMenu)}></Image>
                        {
                            (userMenu === false) ?
                                <Overlay onClick={() => setUserMenu(true)}>
                                    <UserMenu displayMenu={userMenu}> <span onClick={handleLogout}>Logout</span> </UserMenu>
                                </Overlay>
                                : null
                        }
                    </Logout>
                </Head>
            </>
        )
    }

const Head = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    background-color: #00ff7f;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
`
const Logo = styled.p`
    font-family: 'Passion One';
    font-weight: 700;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: #f0f8ff;
    padding-top: 13px;
    padding-left: 17px;
    cursor: pointer;
`
const Logout = styled.div`
    margin: auto 0;
`
const AiOutlineWrap = styled.div`
    position: absolute;
    top: 25px;
    right: 67px;
    cursor: pointer;
    z-index: 11;
`
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 19px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 12;
`

const UserMenu = styled.div(({ displayMenu }) => `
    height: 47px;
    width: 150px;
    visibility: ${displayMenu ? "hidden" : "visible"};
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #006400;
    border-radius: 0px 0px 20px 20px;
    position: fixed;
    top: 72px;
    right: -20px;
    padding: 0px 20px 10px 0px;
    span {
        font-family: 'Lato';
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #f0f8ff;
        cursor: pointer;
    }
`)

const Image = styled.img`
    width: 41px;
    height: 41px;
    margin-right: 18px;
    border-radius: 26px;
    cursor: pointer;
`