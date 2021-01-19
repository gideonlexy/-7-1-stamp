import React from 'react';

//files
import BackArrow from './../../assets/images/back-arrow.svg';
import Cancel from './../../assets/images/cancel.svg';
import Bar from './../../assets/images/bar.svg';
import QuestionIcon from './../../assets/images/question-icon.svg';

//css files
import './Splash.css';

function Splash() {
  return (
    <>
      <div className="rectangle">
        <img className="back-arrow-icon" src={BackArrow} alt="Back-arrow" />
        <p className="stamp">스탬프</p>
      </div>
      <div className="stamp-box">
        <div className="stamp-reader">
          <div className="stamp-cancel-icon">
            <img src={Cancel} alt="Cancel" />
          </div>
          <div className="stamp-fill">
            <img src={Bar} alt="Barcodes" />
            <img src={Bar} alt="Barcodes" />
            <img src={Bar} alt="Barcodes" />
            <img src={Bar} alt="Barcodes" />
            <img src={Bar} alt="Barcodes" />
            <img src={Bar} alt="Barcodes" />
            <div className="stamp-code stamp-properties stamp-code-color stamp-code-letter-spacing">
              0000-0000-0000-0000
            </div>
          </div>
        </div>
        <div className="stamp-properties stamp-guide-color flex-display ">
          <img className="help-icon" src={QuestionIcon} alt="Help" />
          <p>스탬프 이용안내</p>
        </div>
      </div>
      <div className="usage-history border-top ">
        <div className="history-details usage-properties">이용내역</div>
        <div className="accrual-details usage-properties text-align">
          적립 내역
        </div>
      </div>
      <div className="coupon-issuance border-top ">
        <p className="coupon-title">채소볼/곡물볼 쿠폰 발급 (12개 적립)</p>
        <span className="coupon-date">2020-10-10 19:02</span>
      </div>
      <div className="coupon-item border-top coupon-issuance">
        <div>
          <p className="coupon-title">샐러디 익스프레스 역삼점</p>
          <span className="coupon-date">2020-10-10 19:00</span>
        </div>
        <div>
          <p className="coupon-title">적립 2개</p>
          <span className="coupon-date">쿠폰 발급까지 12/12 개</span>
        </div>
      </div>
    </>
  );
}

export default Splash;
