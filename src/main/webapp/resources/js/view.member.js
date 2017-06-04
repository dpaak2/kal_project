/*
========member-ui==============
@AUTHOR : Hong jihoo
@CREATE DATE : 2017-05-14
@UPDATE DATE : 2017-05-18
@DESC :
===============================
*/

function subGnbBeforeLogin(){
		return '<div class="kal-header">'
		+ 	'<div class="kal-before-login-sub-gnb">'
		+ 		'<div class="kal-before-login-sub-left-menu">'
		+ 			'<button class="kal-before-login-sub-left-menu-region-select-btn">국가/언어<img src="'+$.image()+'/main/btn-regionSelect.png"/></button>'
		+ 			'<span class="kal-before-login-sub-left-menu-text1"><img src="'+$.image()+'/main/korea-flag.gif">대한민국   ｜</span>'
		+ 			'<span class="kal-before-login-sub-left-menu-text2">한국어</span>'
		+			 '<a class="kal-before-login-sub-left-menu-text3" href="#">English</a>'
		+ 	'</div>'
		+ 	'<div class="kal-before-login-sub-right-menu">'
		+ 		'<a class="kal-before-login-sub-right-menu-login" href="javascript:void(0)">로그인   ｜</a>'
		+ 		'<a class="kal-before-login-sub-right-menu-regist" href="javascript:void(0)"> 회원가입    ｜</a>'
		+ 		'<a id="admin" class="kal-before-login-sub-right-menu-admin" href="javascript:void(0)"> 관리자 &nbsp&nbsp&nbsp</a>'
		+ 		'<input class="kal-before-login-sub-right-menu-search" type="text" placeholder="검색"/>'
		+ 		'<a class="kal-before-login-sub-right-menu-search-icon" href="#"><img src="'+$.image()+'/main/icon-search.png"/></a>'
		+ 	'</div>'
		+ '</div>'
		+ '</div>';
	}
function beforeLoginMainGnb(){
	return '<div class="kal-main-gnb">'
	+	'<div class="kal-main-logo">'
	+		'<a id="kal-logo" href="javascript:void(0)"><img src="'+$.image()+'/main/koreanAirLogo.png"/></a>'
	+	'</div>'
	+	'<div class="kal-main-right-menu">'
	+		'<button class="kal-main-right-menu-reservation-btn">항공권 예매</button>'
	+		'<button class="kal-main-right-menu-skypass-btn">스카이패스</button>'
	+		'<button class="kal-main-right-menu-service-btn">서비스 안내'
	+			'<div class="kal-service-btn-content">'
	+				'<a class="kal-service-btn-content-question" href="javascript:void(0)">질문하기</a>'
	+				'<a class="kal-service-btn-content-faq" href="javascript:void(0)">FAQ 게시판</a>'
	+				'<a class="kal-service-btn-content-review" href="javascript:void(0)">리뷰 게시판</a>'
	+			'</div>'
	+		'</button>'
	+		'<button class="kal-main-right-menu-promotion-btn">프로모션/여행상품</button>'
	+	'</div>'
	+'</div>';
}
function mainBackground(){
	return '<div class="kal-container">'
	+	'<ul class="kal-background-section">'
	+		'<li class="kal-main-background1 imgcount open">'
	+			'<div class="kal-maintext1">'
	+				'<h2>꿈의 비행 787</h2>'
	+				'<p>대한민국에서도 꿈의 비행이 시작됩니다.</p>'
	+			'</div>'
	+		'</li>'
	+		'<li class="kal-main-background2 imgcount">'
	+			'<div class="kal-maintext2">'
	+				'<h2>대한항공 여행정보사이트</h2>'
	+				'<p>각국의 여행정보 공유하고 활동포인트 혜택을 확인하세요</p>'
	+			'</div>'
	+		'</li>'
	+		'<li class="kal-main-background3 imgcount">'
	+			'<div class="kal-maintext3">'
	+				'<h2>여행은 인생이다</h2>'
	+				'<p>한진관광 KALPAK</p>'
	+			'</div>'
	+		'</li>'
	+	'</ul>'
	+'</div>'
	+'<div class="kal-main-event-wrapper">'
	+	'<a class="kal-event-text" href="javascript:void(0)">회원가입 이벤트</a>'
	+'</div>';
}
function mainFooter(){
	return '<div class="kal-footer">'
	+	'<div class="kal-footer-wrap">'
	+		'<div class="kal-footer-left-content">'
	+			'<div class="kal-footer-left-content-menu">'
	+				'<div class="kal-footer-left-content-menu-1">'
	+					'<h2>규정 및 약관</h2>'
	+					'<ul>'
	+						'<li class="kal-footer-left-content-menu-1-li1"><a href="#">개인정보처리방침</a></li>'
	+						'<li class="kal-footer-left-content-menu-1-li2"><a href="#">회원약관</a></li>'
	+						'<li class="kal-footer-left-content-menu-1-li3"><a href="#">운송약관</a></li>'
	+						'<li class="kal-footer-left-content-menu-1-li4"><a href="#">소비자 안전관련 정보</a></li>'
	+					'</ul>'
	+				'</div>'
	+				'<div class="kal-footer-left-content-menu-2">'
	+					'<h2>서비스 정보</h2>'
	+					'<ul>'
	+						'<li class="kal-footer-left-content-menu-2-li1"><a href="#">고객 서비스</a></li>'
	+						'<li class="kal-footer-left-content-menu-2-li2"><a href="#">고객 안내 서비스</a></li>'
	+						'<li class="kal-footer-left-content-menu-2-li3"><a href="#">서비스 수수료 안내</a></li>'
	+						'<li class="kal-footer-left-content-menu-2-li4"><a href="#">e 서식함</a></li>'
	+					'</ul>'
	+				'</div>'
	+				'<div class="kal-footer-left-content-menu-3">'
	+					'<h2>고객 지원</h2>'
	+					'<ul>'
	+						'<li class="kal-footer-left-content-menu-3-li1"><a href="#">지점 연락처</a></li>'
	+						'<li class="kal-footer-left-content-menu-3-li2"><a href="#">고객의 말씀</a></li>'
	+						'<li class="kal-footer-left-content-menu-3-li3"><a href="#">FAQ</a></li>'
	+						'<li class="kal-footer-left-content-menu-3-li4"><a href="#">채팅 서비스</a></li>'
	+					'</ul>'
	+				'</div>'
	+				'<div class="kal-footer-left-content-menu-4">'
	+					'<h2>회사 소개</h2>'
	+					'<ul>'
	+						'<li class="kal-footer-left-content-menu-4-li1"><a href="#">대한항공에 대하여</a></li>'
	+						'<li class="kal-footer-left-content-menu-4-li2"><a href="#">경영 재무 정보</a></li>'
	+						'<li class="kal-footer-left-content-menu-4-li3"><a href="#">녹색 경영</a></li>'
	+						'<li class="kal-footer-left-content-menu-4-li4"><a href="#">사회공헌활동</a></li>'
	+					'</ul>'
	+				'</div>'
	+			'</div>'
	+			'<div class="kal-footer-left-content-address">'
	+				'<div class="kal-footer-left-content-address-addr">'
	+				'</div>'
	+				'<div class="kal-footer-left-content-address-sns">'
	+					'<a href="#"><img src="'+$.image()+'/main/icon-fb.png"/></a>'
	+					'<a href="#"><img src="'+$.image()+'/main/icon-tw.png"/></a>'
	+					'<a href="#"><img src="'+$.image()+'/main/icon-inst.png"/></a>'
	+					'<a href="#"><img src="'+$.image()+'/main/icon-gp.png"/></a>'
	+				'</div>'
	+			'</div>'
	+		'</div>'
	+		'<div class="kal-footer-right-content">'
	+		'</div>'
	+	'</div>'
	+'</div>';
}
function subGnbAfterLogin(){
	return '<div class="kal-after-login-sub-gnb">'
	+	'<div class="kal-after-login-sub-left-menu">'
	+		'<button class="kal-after-login-sub-left-menu-region-select-btn">국가/언어<img src="'+$.image()+'/main/btn-regionSelect.png"/></button>'
	+		'<span class="kal-after-login-sub-left-menu-text1"><img src="'+$.image()+'/main/korea-flag.gif">대한민국   ｜</span>'
	+		'<span class="kal-after-login-sub-left-menu-text2">한국어</span>'
	+		'<a class="kal-after-login-sub-left-menu-text3" href="#">English</a>'
	+	'</div>'
	+	'<div class="kal-after-login-sub-right-menu">'
	+		'<a class="kal-after-login-sub-right-menu-logout" href="javascript:void(0)">로그아웃   ｜</a>'
	+		'<a class="kal-after-login-sub-right-menu-mypage" href="javascript:void(0)">&nbsp마이페이지    ｜</a>'
	+		'<a class="kal-after-login-sub-right-menu-myregist" href="javascript:void(0)">&nbsp나의 예약 &nbsp&nbsp</a>'
	+		'<input class="kal-after-login-sub-right-menu-search" type="text" placeholder="검색"/>'
	+		'<a class="kal-after-login-sub-right-menu-search-icon" href="#"><img src="'+$.image()+'/main/icon-search.png"/></a>'
	+	'</div>'
	+'</div>';
}
function afterLoginMainGnb(){
	return '<div class="kal-main-gnb">'
	+	'<div class="kal-main-logo">'
	+		'<a id="kal-logo" href="javascript:void(0)"><img src="'+$.image()+'/main/koreanAirLogo.png"/></a>'
	+	'</div>'
	+	'<div class="kal-main-right-menu">'
	+		'<button class="after-login-kal-main-right-menu-reservation-btn">항공권 예매</button>'
	+		'<button class="kal-main-right-menu-skypass-btn">스카이패스</button>'
	+		'<button class="kal-main-right-menu-service-btn">서비스 안내'
	+			'<div class="kal-service-btn-content">'
	+				'<a class="after-kal-service-btn-content-question" href="javascript:void(0)">질문하기</a>'
	+				'<a class="after-login-kal-service-btn-content-faq" href="javascript:void(0)">FAQ 게시판</a>'
	+				'<a class="after-login-kal-service-btn-content-review" href="javascript:void(0)">리뷰 게시판</a>'
	+			'</div>'
	+		'</button>'
	+		'<button class="kal-main-right-menu-promotion-btn">프로모션/여행상품</button>'
	+	'</div>'
	+'</div>';
}
function login(){
	return '<div class="kal-gg-loginbox">'
	+	'<div class="kal-gg-loginbox-img">'
	+		'<a class="kal-gg-mainlogo" href="javascript:void(0)"><img src="'+$.image()+'/reservation/koreanAirLogo.png" alt=""></a>'
	+	'</div>'
	+	'<div class="kal-gg-loginbox-big-box">'
	+		'<input id="userid" class=kal-gg-loginbox-box-id type="text" placeholder="아이디">'
	+		'<input id="userpw" class=kal-gg-loginbox-box-pass type="text" placeholder="비밀번호" />'
	+		'<div class="kal-gg-loginbox-middle-text">'
	+			'<input id="remember" class="remember-id" type="checkbox"></input>아이디 저장'
	+			'<div class="kal-gg-click-text-area">'
	+				'<a href="javascript:void(0)">아이디 찾기</a><span> | </span><a href="">비밀번호 찾기</a><span> | </span><a class="kal-gg-registbtn" href="javascript:void(0)">회원가입</a>'
	+			'</div>'
	+		'</div>'
	+		'<button id="login-submit-btn" class="kal-gg-loginbox-login-btn" >로그인</button>'
	+	'</div>'
	+	'<div class="kal-gg-loginbox-under" >'
	+		'<span>이용약관</span> |'
	+		'<span>개인정보처리방침</span> |'
	+		'<span>청소년보호정책</span> |'
	+		'<span>고객센터</span>'
	+	'</div>'
	+'</div>';
}
function regist(){
	return '<div class="kal-jh-regist-main-wrapper">'
	+	'<a class="kal-regist-main-logo" href="javascript:void(0)"><img src="'+$.image()+'/reservation/koreanAirLogo.png"></a>'
	+	'<div class="kal-jh-regist-sub-wrapper1">'
	+		'<h1>회원가입</h1>'
	+		'<span class="kal-jh-regist-headerText">영문이름은 여권상의 이름과 동일하게 입력하여 주시기 바랍니다.</span>'
	+		'<div class="kal-jh-regist-area1">'
	+			'<span class="kal-jh-regist-inputBox-text-id">아이디</span>'
	+			'<input class="kal-jh-regist-inputBox-id" type="text" name="userid" placeholder="아이디"/><button class="kal-jh-regist-area1-idcheckBtn">중복확인</button>'
	+			'<p class="id-check-text"></p>'
	+		'</div>'
	+		'<div class="kal-jh-regist-area2">'
	+			'<span class="kal-jh-regist-inputBox-text-pw">비밀번호</span>'
	+			'<input class="kal-jh-regist-inputBox-pw" type="text" name="userpw" placeholder="비밀번호"/>'
	+			'<p class="pw-check-text"></p>'
	+		'</div>'
	+	'</div>'
	+	'<div class="kal-jh-regist-sub-wrapper2">'
	+		'<div class="kal-jh-regist-area3">'
	+			'<span class="kal-jh-regist-inputBox-text-korname">한글이름</span>'
	+			'<input class="kal-jh-regist-inputBox-korname" type="text" name="korname" placeholder="한글이름"/>'
	+			'<p class="korname-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area4">'
	+		'<span class="kal-jh-regist-inputBox-text-familyname">Family name</span>'
	+		'<input class="kal-jh-regist-inputBox-familyname" type="text" name="familyname" placeholder="Family name"/>'
	+		'<p class="familyname-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area5">'
	+		'<span class="kal-jh-regist-inputBox-text-firstname">First name</span>'
	+		'<input class="kal-jh-regist-inputBox-firstname" type="text" name="firstname" placeholder="First name"/>'
	+		'<p class="firstname-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area6">'
	+		'<span class="kal-jh-regist-inputBox-text-phoneno">연락처</span>'
	+		'<input class="kal-jh-regist-inputBox-phoneno" type="text" name="phoneno" placeholder="연락처 / 010-1234-1234"/>'
	+		'<p class="phoneno-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area7">'
	+		'<span class="kal-jh-regist-inputBox-text-birth">생년월일</span>'
	+		'<input class="kal-jh-regist-inputBox-birth" type="text" name="birth" placeholder="생년월일 / 1989-04-05"/>'
	+		'<p class="birth-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area10">'
	+		'<span class="kal-jh-regist-inputBox-text-passportno">여권번호</span>'
	+		'<input class="kal-jh-regist-inputBox-passportno" type="text" name="passportno" placeholder="여권번호 / 12345"/>'
	+		'<p class="passportno-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area8">'
	+		'<span class="kal-jh-regist-inputBox-text-email">이메일</span>'
	+		'<input class="kal-jh-regist-inputBox-email" type="text" name="email" placeholder="이메일"/><button class="kal-jh-regist-inputBox-email-btn">본인인증</button>'
	+		'<p class="email-check-text"></p></br>'
	+		'<p class="emailAuth-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area9">'
	+		'<span class="kal-jh-regist-inputBox-text-addr">주소지</span>'
	+		'<input class="kal-jh-regist-inputBox-addr1 postcodify_jibeon_address" type="text" name="addr" placeholder="주소"/><button class="kal-jh-regist-inputBox-addr-btn">주소찾기</button>'
	+		'<input class="kal-jh-regist-inputBox-addr2" type="text" name="addr" placeholder="상세주소"/>'
	+		'<p class="addr-check-text"></p>'
	+	'</div>'
	+	'<div class="kal-jh-regist-area11">'
	+		'<span class="kal-jh-regist-inputBox-text-gender">성별</span>'
	+		'<input class="kal-jh-regist-inputBox-gender" type="radio" name="gender" value="M" checked="checked"/><span>남자</span>'
	+		'<input class="kal-jh-regist-inputBox-gender" type="radio" name="gender" value="F"/><span>여자</span>'
	+		'<p class="gender-check-text"></p>'
	+	'</div >'
	+	'<div class="kal-jh-regist-area12" >'
	+		'<button class="kal-jh-regist-submit">회원가입</button>'
	+	'</div>'
	+'</div>'
	+'</div>';
}
function memberGnb(){
	return ' <div>'
	+	'<ul class="kal-jh-mypage-navibar-ul">'
	+		'<li role="presentation" class="kal-jh-mypage-navibar-li a"><a class="kal-jh-member-navi-memberinfobtn" href="javascript:void(0)"> 회원정보 보기</a></li>'
	+		'<li role="presentation" class="kal-jh-mypage-navibar-li a"><a class="kal-jh-member-navi-membermodifybtn" href="javascript:void(0)">회원정보 수정</a></li>'
	+		'<li role="presentation" class="kal-jh-mypage-navibar-li a"><a class="kal-jh-member-navi-memberquitbtn" href="javascript:void(0)">회원탈퇴</a></li>'
	+		'<li role="presentation" class="kal-jh-mypage-navibar-li a"><a class="kal-jh-member-navi-memberreservebtn" href="javascript:void(0)">나의예약</a></li>'
	+		'<li role="presentation" class="kal-jh-mypage-navibar-li a"><a class="kal-jh-member-navi-memberreserveupdatebtn" href="javascript:void(0)">예약변경</a></li>'
	+		'<li role="presentation" class="kal-jh-mypage-navibar-li a"><a class="kal-jh-member-navi-memberreservedeletebtn" href="javascript:void(0)">예약취소</a></li>'
	+	'</ul>'
	+'</div>';
}
function mypageHeader(){
	return '<div class="kal-jh-mypage-container">'
	+	'<h1>마이페이지</h1>'
	+	'<div class="kal-jh-mypage-subwrapper">'
	+	'</div>';
}
function mypageUserInfo(loginedKorName,loginedEngName,loginedEmail,loginedAddr,loginedPhoneNo,loginedPassPortNo){
	return '<div class="kal-jh-mypage-userinfo-content-wrapper1">'
	+	'<h2 class="kal-jh-mypage-maintext">회원정보 보기</h2><br />'
	+	'<div class="kal-jh-mypage-userInfo-txt1">'
	+		'<span class="kal-jh-mypage-userInfo-korname"><span class="kal-jh-mypage-userInfo-korname-text">한글이름</span>'+ loginedKorName + '</span></br>'
	+		'<span class="kal-jh-mypage-userInfo-engname"><span class="kal-jh-mypage-userInfo-engname-text">영어이름</span>'+ loginedEngName +'</span>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userinfo-content-wrapper2">'
	+	'<div class="kal-jh-mypage-userInfo-txt2">'
	+		'<span class="kal-jh-mypage-userInfo-email"><span class="kal-jh-mypage-userInfo-email-text">이메일</span>'+ loginedEmail +'</span></br>'
	+		'<span class="kal-jh-mypage-userInfo-addr"><span class="kal-jh-mypage-userInfo-addr-text">주소지</span>'+ loginedAddr +'</span>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userinfo-content-wrapper3">'
	+	'<div class="kal-jh-mypage-userInfo-txt3">'
	+		'<span class="kal-jh-mypage-userInfo-phoneno"><span class="kal-jh-mypage-userInfo-phoneno-text">연락처</span>'+ loginedPhoneNo +'</span></br>'
	+		'<span class="kal-jh-mypage-userInfo-passportno"><span class="kal-jh-mypage-userInfo-passportno-text">여권번호</span>'+ loginedPassPortNo +'</span>'
	+	'</div>'
	+'</div>'
	+'</div>';
}
function mypageUserUpdate(loginedKorName,loginedEngName,loginedId){
	return '<div class="kal-jh-mypage-userupdate-content-wrapper1">'
	+	'<h2 class="kal-jh-mypage-maintext">회원정보 수정</h2><br />'
	+	'<div class="kal-jh-mypage-userUpdate-txt1">'
	+		'<span class="kal-jh-mypage-userUpdate-korname"><span class="kal-jh-mypage-userUpdate-korname-text">한글이름</span>'+ loginedKorName +'</span></br>'
	+		'<span class="kal-jh-mypage-userUpdate-engname"><span class="kal-jh-mypage-userUpdate-engname-text">영어이름</span>'+ loginedEngName +'</span>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userUpdate-content-wrapper2">'
	+	'<div class="kal-jh-mypage-userUpdate-txt2">'
	+		'<span class="kal-jh-mypage-userUpdate-id"><span class="kal-jh-mypage-userUpdate-id-text">아이디</span>'+ loginedId +'</span></br>'
	+		'<span class="kal-jh-mypage-userUpdate-pw-text">새 비밀번호</span><input class="kal-jh-mypage-userUpdate-pw" name="newpw" placeholder="새 비밀번호">'
	+		'<p class="mypage-update-pw-check-text"></p>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userUpdate-content-wrapper3">'
	+	'<div class="kal-jh-mypage-userUpdate-txt3">'
	+		'<span class="kal-jh-mypage-userUpdate-email-text">새 이메일</span><input class="kal-jh-mypage-userUpdate-email" name="newemail" placeholder="새 이메일"></br>'
	+		'<p class="mypage-update-email-check-text"></p>'
	+		'<span class="kal-jh-mypage-userUpdate-phoneno-text">새 연락처</span><input class="kal-jh-mypage-userUpdate-phoneno" name="newphoneno" placeholder="새 연락처"></br>'
	+		'<p class="mypage-update-phoneno-check-text"></p>'
	+		'<span class="kal-jh-mypage-userUpdate-addr-text">새 주소지</span><input class="kal-jh-mypage-userUpdate-addr1 postcodify_jibeon_address" name="newaddr" placeholder="새 주소지"><button class="kal-jh-mypage-userUpdate-addr-btn">주소찾기</button></br>'
	+		'<input class="kal-jh-mypage-userUpdate-addr2" name="newaddr" placeholder="상세주소">'
	+		'<p class="mypage-update-addr-check-text"></p>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userUpdate-content-wrapper4">'
	+	'<button class="kal-jh-mypage-userUpdate-submitBtn">회원 수정</button>'
	+'</div>';
}
function mypageUserDelete(){
	return '<div class="kal-jh-mypage-userDelete-content-wrapper1">'
	+	'<h2 class="kal-jh-mypage-maintext">회원 탈퇴</h2><br />'
	+	'<div class="kal-jh-mypage-userDelete-txt1">'
	+		'<span class="kal-jh-mypage-userDelete-pw-text">비밀번호 확인</span><input class="kal-jh-mypage-userDelete-pw" name="pwcheck" placeholder="비밀번호 확인">'
	+		'<button class="kal-jh-mypage-userDelete-submitBtn">회원 탈퇴</button>'
	+		'<p class="mypage-delete-pw-check-text"></p>'
	+	'</div>'
	+'</div>';
}
function mypageUserReservation(loginedKorName,loginedEngName){
	return '<div class="kal-jh-mypage-userReservation-content-wrapper1">'
	+	'<h2 class="kal-jh-mypage-maintext">나의 예약</h2><br />'
	+	'<div class="kal-jh-mypage-userReservation-txt1">'
	+		'<span class="kal-jh-mypage-userReservation-korname"><span class="kal-jh-mypage-userInfo-korname-text">한글이름</span>'+ loginedKorName +' </span></br>'
	+		'<span class="kal-jh-mypage-userReservation-engname"><span class="kal-jh-mypage-userInfo-engname-text">영어이름</span>'+ loginedEngName +'</span>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userReservation-content-wrapper2">'
	+'</div>';
}
function mypageReservationUpdate(loginedKorName,loginedEngName){
	return '<div class="kal-jh-mypage-userReservation-content-wrapper1">'
	+	'<h2 class="kal-jh-mypage-maintext">예약 변경</h2><br />'
	+	'<div class="kal-jh-mypage-userReservation-txt1">'
	+		'<span class="kal-jh-mypage-userReservation-korname"><span class="kal-jh-mypage-userInfo-korname-text">한글이름</span>'+ loginedKorName +' </span></br>'
	+		'<span class="kal-jh-mypage-userReservation-engname"><span class="kal-jh-mypage-userInfo-engname-text">영어이름</span>'+ loginedEngName +'</span>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userReservation-content-wrapper2">'
	+'</div>';
}
function mypageReservationDelete(loginedKorName,loginedEngName){
	return '<div class="kal-jh-mypage-userReservation-content-wrapper1">'
	+	'<h2 class="kal-jh-mypage-maintext">예약 취소</h2><br />'
	+	'<div class="kal-jh-mypage-userReservation-txt1">'
	+		'<span class="kal-jh-mypage-userReservation-korname"><span class="kal-jh-mypage-userInfo-korname-text">한글이름</span>'+ loginedKorName +' </span></br>'
	+		'<span class="kal-jh-mypage-userReservation-engname"><span class="kal-jh-mypage-userInfo-engname-text">영어이름</span>'+ loginedEngName +'</span>'
	+	'</div>'
	+'</div>'
	+'<div class="kal-jh-mypage-userReservation-content-wrapper2">'
	+'</div>';
}