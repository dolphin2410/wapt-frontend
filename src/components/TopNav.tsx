import React from "react"
import "../styles/TopNav.css"

function applyDarkMode() {
  const scrollY = window.scrollY;

  if (scrollY != 0) {
    document.querySelector(".navbar")?.classList.add("darknav")
    document.querySelector(".navbar-menu-expanded")?.classList.add("darknav-expanded")
    document.querySelector(".navbar-burger")?.classList.add("darknav-burger")
  } else {
    document.querySelector(".navbar")?.classList.remove("darknav")
    document.querySelector(".navbar-menu")?.classList.remove("darknav-expanded")
    document.querySelector(".navbar-burger")?.classList.remove("darknav-burger")
  }
}

const burgerClick = (callback: () => void) => {
    let burger = document.querySelector(".navbar-burger")!!
    const contents = document.querySelector(".navbar-menu")!!
    contents.classList.toggle("navbar-menu-expanded")

    for (const child of burger.children) {
        child.classList.toggle("navbar-burger-line-active")
        callback()
    }

    applyDarkMode()
}

const burgerDefault = (callback: () => void) => {
    let burger = document.querySelector(".navbar-burger")!!
    const contents = document.querySelector(".navbar-menu")!!
    contents.classList.remove("navbar-menu-expanded")
    
    for (const child of burger.children) {
        child.classList.remove("navbar-burger-line-active")
        callback()
    }
}

export default function TopNav({hash, toggleHome, toggleMenu, toggleLogin, toggleMyPage}: {hash: string | null, toggleHome: () => void, toggleMenu: () => void, toggleLogin: () => void, toggleMyPage: () => void}) {
    return (
        <div className="navbar">
            <h1 className="navbar-title" onClick={() => burgerDefault(toggleHome)}>
                <span className="supfont">
                    <span className="illusion_pigeon">
                        <div className="illusion_pigeon_illusion">iLLUsIon</div>
                        <div className="illusion_pigeon_pigeon">Pigeon</div>
                    </span>
                </span>
            </h1>
            <div className="navbar-menu">
                <span className="navbar-menu-help sdownfont" onClick={() => window.location.href = "/usage"}>사용법</span>
                <span className="navbar-menu-help sdownfont" onClick={() => window.location.href = "/user"}>내 컴퓨터용</span>
                <span className="navbar-menu-help sdownfont" onClick={() => window.location.href = "/printer"}>프린터용</span>
                
            </div>
            <div className="navbar-burger" onClick={() => burgerClick(toggleMenu)}>
              <span className="navbar-burger-line"></span>
              <span className="navbar-burger-line"></span>
              <span className="navbar-burger-line"></span>
            </div>
        </div>
    )
}
