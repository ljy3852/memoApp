
var count = 0;
var form = document.querySelector("#memo_form");
form.onsubmit = function(e){
    e.preventDefault();  //  submit 이라는 e(이벤트) 발생하면, 이벤트 전파를 막는! 명령~
    var userInput = document.querySelector("#user_memo");
    
    // (`입력하신 메모는 ${userInput.value} 입니다`);
    // 0. 입력한 값을 조사
    // console.log(userInput);
    // console.dir(userInput);
    if (userInput.value == "") { 
        alert("메모 내용을 입력하세요");
    } else {
    // 1. #memo.list라는 이름의 요소 찾기
        var memoList = document.querySelector("#memo_list");
        // console.log(memoList);

        // 2. data + DOM(html) 가공
        var memoLi = document.createElement("li");
        memoLi.textContent = userInput.value;

        // 3. memoList에 추가
        memoList.appendChild(memoLi);
        // 3-1. count를 1증가.
        var countSpan = document.querySelector(`#count`);
        count++;
        countSpan.innerText = count;

        // 4. #user_memo 초기화
        userInput.value = "";
        userInput.focus(); // 포커스 적용

    }

    

}