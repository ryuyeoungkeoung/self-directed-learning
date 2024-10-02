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
