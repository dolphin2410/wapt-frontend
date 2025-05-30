import { JSX } from "react";
import TopNav from "./components/TopNav";
import BottomFooter from "./components/BottomFooter";

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

function App({child}: {child: JSX.Element}) {
  window.addEventListener("hashchange", e => {
    if (window.location.hash.startsWith("#") && window.location.hash != "#") {
      window.location.href = window.location.hash
      window.scrollBy({
        top: -120,
        behavior: 'smooth'
      })
    }
  })

  const hash = localStorage.getItem("studentHash")

  window.addEventListener('scroll', () => {
    applyDarkMode()
  });

  return (
    <div className="App">
      <TopNav hash={hash} toggleMyPage={() => window.location.href = "/mypage"} toggleHome={() => window.location.href = "/"} toggleMenu={() => {}} toggleLogin={() => window.location.href = "/login"} />
      {child}
      <div className="centerme">
        <ins className="kakao_ad_area" style={{display: "none"}}
          data-ad-unit = "DAN-UN6GectaBTSpp8rb"
          data-ad-width = "300"
          data-ad-height = "250"></ins>
        <ins className="kakao_ad_area" style={{display: "none"}}
          data-ad-unit = "DAN-j1XnRWcT8AtchtNp"
          data-ad-width = "320"
          data-ad-height = "100"></ins>
        <ins className="kakao_ad_area" style={{display: "none"}}
          data-ad-unit = "DAN-EQxSkV7N0xIz9ery"
          data-ad-width = "320"
          data-ad-height = "100"></ins>
        <ins className="kakao_ad_area" style={{display: "none"}}
          data-ad-unit = "DAN-y3q3M5zkQ6pGF92R"
          data-ad-width = "320"
          data-ad-height = "100"></ins>
      </div>
      <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
      <BottomFooter />
    </div>
  );
}

export default App;
