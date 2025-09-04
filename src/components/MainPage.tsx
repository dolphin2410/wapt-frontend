import React from "react"
import "../styles/MainPage.css"

function clip(tag: string) {
    window.location.href = `#${tag}`
    window.scrollBy({
        top: -120,
        behavior: 'smooth'
    })
}

export default function MainPage() {
    let printer = "/printer"
    let user = "/login"

    // TODO: just for free version
    const poop = localStorage.getItem("poop")
    if (!poop) {
        localStorage.setItem("poop", "💩")
        localStorage.setItem("studentHash", "0x20115e200f8a438ea21c2efc76035655623c2d8d3a83f6cfc5f9334ca37e50bd")
        // alert("베타테스터 계정으로 자동 로그인 되었습니다")
        window.location.reload()
    }

    const hash = localStorage.getItem("studentHash")
    if (hash) {
        user = "/user"
    }

    return (
        <div className="mp_container">
            <div className="mp_start_page_wrapper">
                <div className="mp_title_card">
                    <h1 className="mp_title">
                        <span className="illusion_pigeon illusion_pigeon_title">
                            <div className="illusion_pigeon_illusion">iLLUsIon</div>
                            <div className="illusion_pigeon_pigeon">Pigeon</div>
                        </span>
                    </h1>
                    <div className="mdownfont mp_title_desc mp_text_center">파일을 전달하는 <span className="supfont">21</span>세기 비둘기</div>
                </div>
                <div className="mp_button_group">
                    <div className="mp_action_btn_group">
                        <button className="mp_get_started_btn" onClick={() => window.location.href = printer}>프린터에서 다운받기</button>
                        <button className="mp_get_started_btn" onClick={() => window.location.href = user}>내 컴퓨터에서 업로드하기</button>
                    </div>
                    <button className="mp_get_started_reverse_btn" onClick={() => window.location.href = "/usage"}>사용 방법 익히기</button>
                </div>
            </div>
            <div className="mp_explanation_page_wrapper">
                <h1 className="mp_explanation_topic_title supfont">Introduction</h1>
                <div className="mp_explanation_container">
                    <div className="textAlignCenter mp_explanation_text" id="pigeon-text" data-left-text>
                        <h3 className="mdownfont mp_text_wrap"><span className="supfont">USB</span>가 없다고요<span className="supfont">? </span>비둘기에게 부탁해보세요<span className="upfont">!</span></h3>
                    </div>
                    <img className="mp_explanation_img" id="pigeon" data-right-img src="/dove.png" width={300} alt="" />
                    <br />
                    <br />
                </div>
                <div className="mp_explanation_container">
                    <img className="mp_explanation_img" id="saturn" data-left-img src="/saturn.png" width={300} alt="" />
                    <div className="textAlignCenter mp_explanation_text" id="saturn-text" data-right-text>
                        <h3 className="mdownfont mp_text_wrap">브라우저와 인터넷만 있다면 언제 어디서나<span className="supfont">!</span></h3>
                    </div>
                    <br />
                    <br />
                </div>
                <div className="mp_explanation_container">
                    <div className="textAlignCenter mp_explanation_text" id="clock-text" data-left-text>
                        <h3 className="mdownfont mp_text_wrap">빠르고 안정적인 실시간 파일 공유<span className="supfont">!</span></h3>
                    </div>
                    <img className="mp_explanation_img" id="clock" data-right-img src="/clock.png" width={280} alt="" />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}
