"use strict";

// 인풋영역 클릭이벤트
// 인풋을 갖고옴 클릭하면의 클릭
const inputBox = document.getElementById("input_box");

// 보여야 하는 것 갖고오기
const hideBox = document.querySelector(".hidden_input");

// 초기 상태 설정 (display none이다.)
hideBox.style.display = "none";

function inputWrap(e) {
  e.preventDefault();

  if (hideBox.style.display === "none") {
    // 인풋의 스타일을 확인하는 거
    hideBox.style.display = "block";
  } else {
    hideBox.style.display = "none";
  }
}
inputBox.onclick = inputWrap;
//------------------------------------------
// 클릭당하는 햄버거 버튼
const menuBox = document.getElementById("menu_btn");
// 클릭당했을 때 나오는 서브메뉴
const subMenu = document.querySelector(".menu_wrap");

menuBox.onclick = function (e) {
  e.preventDefault();
  subMenu.style.transform = "translateX(0%)";
};

// 서브메뉴 엑스 버튼 누르면 원래 없어졌던 값으로 돌아가기
const showBox = document.querySelector(".menu_wrap");
const btnExit = document.querySelector(".exit_btn");

btnExit.onclick = function () {
  showBox.style.transform = "translateX(100%)"; // 올바른 transform 속성 사용
};

// ----------------------------------------
// // 오른쪽 서브 li누르면 2차 메뉴 스르륵 나오게 하기
const sub2Menu = document.querySelectorAll(".main_box li");

sub2Menu.forEach((menuItem) => {
  menuItem.addEventListener("click", function (e) {
    // 클릭한 메뉴의 2차 메뉴 선택 현재 1차메뉴안에 있는 2차메뉴라서 밖으로 빠질 수 없다.
    const subMenu = this.querySelector(".sub_twomenu");

    // 2차 메뉴가 열려 있는지 확인
    if (subMenu.style.height === "0px" || subMenu.style.height === "") {
      // 2차 메뉴 열기 (앞에 정해준 라인하이트 값120으로 변하게 된다. )
      subMenu.style.height = `${subMenu.scrollHeight}px`;
    } else {
      // 2차 메뉴 닫기
      subMenu.style.height = "0px";
    }
  });
});

// ----------------------------------------

// 팝업 버튼실행 클릭이벤트
//팝업버튼
const popupBtn = document.querySelector(".pop_up_btn");
//팝업창
const popup = document.getElementById("up_btn");

// 클릭하면 팝업창 뜨는 함수
function openPopup(e) {
  e.preventDefault(); //기본 이벤트 차단

  if (popup.style.display === "none") {
    // 팝업의 스타일을 확인하는 거
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
}

//마지막으로 팝업버튼을 누르면 팝업창이 뜨는 함수 실행!
popupBtn.onclick = openPopup;
// ------------------------------------------

// 버튼 닫는태그영역 클릭이벤트
// 버튼 닫기 불러오기
const exitBtn = document.querySelector(".btn_close");
// 위에 팝업창은 불러왔으니 닫는버튼에선 불러오기를 생략해도된다.

function exit(e) {
  e.preventDefault(); // 기본이벤트 차단

  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
}
exitBtn.onclick = exit;
// ---------------------------------------------

// 메인영역 박스 클릭이벤트
// 모든 sub_btn안에 버튼들을 불러온다

//태그들은 변하지않는 수라서 콘스트(상수변수=변하지않느느 수)에 담았다.
const mainBtn1 = document.querySelectorAll(".sub_btn button");
// 박스 갖고오기
const boxWrap = document.querySelectorAll(".box_wrapper .box");

// 포이치로 에드이벤트 리스너 추가 비티엔의 갯수만큼 추가
mainBtn1.forEach(function (element, index) {
  element.addEventListener("click", filterBtn);
});

function filterBtn(e) {
  // 기본이벤트 차단
  e.preventDefault();

  // 클래스 all을 만났을때
  if (e.target.className == "all") {
    // 박스가 4개라서 조건문을 돌려줌
    for (let i = 0; i < boxWrap.length; i++) {
      // 박스랩을 전부 없애주기
      boxWrap[i].style.display = "block";
    }
  } else if (e.target.className == "uiux") {
    for (let i = 0; i < boxWrap.length; i++) {
      boxWrap[i].style.display = "none";
    }
    // 위가 모두 동일하지만 하나만 다르게 줘야하므로 1번만 스타일재수정
    boxWrap[1].style.display = "block";
  } else if (e.target.className == "design") {
    for (let i = 0; i < boxWrap.length; i++) {
      boxWrap[i].style.display = "none";
    } // 위가 모두 동일하지만 하나만 다르게 줘야하므로 2번만 스타일재수정
    boxWrap[2].style.display = "block";
  } else if (e.target.className == "development") {
    for (let i = 0; i < boxWrap.length; i++) {
      boxWrap[i].style.display = "none";
    } // 위가 모두 동일하지만 하나만 다르게 줘야하므로 3번만 스타일재수정
    boxWrap[3].style.display = "block";
  }
}
// 슬라이더
new Swiper(".swiper", {
  direction: "horizontal", // 슬라이드 진행 방향, 기본값 horizontal(가로)

  // autoplay: true 도 가능하지만 객체 데이터로 할당하면 추가적인 옵션 설정 가능
  autoplay: {
    // 자동재생 여부
    delay: 5000, // 시작시간 설정
  },
  loop: true, // 반복재생 여부
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기

  // 페이저 버튼 사용자 설정
  pagination: {
    // 페이지 번호 요소 선택자
    el: ".promotion .swiper-pagination",

    // 사용자의 페이지 번호 요소 제어 가능 요소 (사용자가 단순히 시각적으로만 보는것 뿐만아니라 눌러서 제어할 수 있는지에 대한 여부)
    clickable: true,
  },

  // nav 화살표 출력 시 추가
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
});
