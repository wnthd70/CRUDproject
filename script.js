var htmlList = document.getElementById('memberTable'); // 동적으로 변경해줄 테이블 지정
var memberId = []; // 회원 아이디를 관리할 배열    => 아이디와 비밀번호는 index 번호로 매칭
var memberPw = []; // 회원 비밀번호를 관리할 배열
var overlapCheck = false; // 중복확인을 위한 변수
count=0; // 카운트 0으로 초기화, 회원 수를 확인하기 위함

function Join(){  // 회원가입 함수
  if(overlapCheck==true){ // 중복확인을 했는지 판별
    memberId.push(document.getElementById('id').value); // memberId 배열에 아이디 push
    memberPw.push(document.getElementById('pw').value); // memberPw 배열에 비밀번호 push
    alert('회원가입 성공');
    htmlList.innerHTML+="<tr><td>"+memberId[count]+"</td></tr>"; // 회원목록에 행 추가하여 작성
    overlapCheck=false; // 가입이 끝났으므로 다시 중복확인 변수를 false로 돌림
    count++; // 회원 수가 1명 늘어났으므로 카운트 1 증가
  }else{
    alert('중복확인을 하세요.'); //중복확인을 안 한 경우
  }
}

function Overlap(){ // 중복확인 함수
  overlapFind=memberId.indexOf(document.getElementById('id').value); // memberId 배열에 있는지 확인
  if(overlapFind!=-1){ // 배열에 아이디가 존재하지 않으면 -1을 반환한다.
    alert('이미 사용하고 있는 아이디 입니다.');
  }else{
    alert('사용 가능한 아이디 입니다.');
    overlapCheck=true;
  }
}

function Read(){ // 비밀번호 찾기 함수
  pwRead=prompt("비밀번호를 찾을 아이디를 입력하세요.");
  if(memberId.indexOf(pwRead)!=-1){ // 비밀번호를 찾을 아이디가 존재할 경우
    alert(pwRead+'님의 비밀번호는 '+memberPw[memberId.indexOf(pwRead)]+' 입니다.');
  }else{
    alert('존재하지 않는 아이디 입니다.'); // 비밀번호를 찾을 아이디가 존재하지 않을 경우
  }
}

function Delete(){ // 회원 삭제 함수
  memberDelete=prompt('삭제할 회원의 아이디를 입력하세요.');
  if(memberId.indexOf(memberDelete)!=-1){ // 삭제할 아이디가 배열에 있는지 판별
    var deleteIndex=memberId.indexOf(memberDelete); // 삭제할 아이디의 인덱스 위치를 하나의 변수에 넣음
    document.getElementById("memberTable").deleteRow(memberId.indexOf(memberDelete)+1); // 행 삭제
    memberId.splice(deleteIndex,1); // memberId 배열에서 아이디 삭제
    memberPw.splice(deleteIndex,1); // memberPw 배열에서 비밀번호 삭제
    count--; // 카운트 1 감소
  }else{
    alert('존재하지 않는 회원 입니다.'); //삭제할 아이디가 배열에 없는 경우
  }
}

function Update(){ //비밀번호 수정 함수

}

function Search(){ // 회원 검색 함수
  idSearch=prompt("검색할 회원 아이디를 입력하세요.");
  if(memberId.indexOf(idSearch)!=-1){ // 입력한 아이디가 존재할 경우
    alert('ID: '+idSearch+' Password: '+memberPw[memberId.indexOf(idSearch)]);
  }else{
    alert('해당 회원은 존재하지 않습니다.'); // 입력한 아이디가 존재하지 않을 경우
  }
}