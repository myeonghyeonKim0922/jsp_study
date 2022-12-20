function fn_submit(){
	var fn = document.frm;
	
	if (fn.custname.value == "") {
		alert("회원성명이 입력되지 않았습니다.");
		fn.custname.focus();
		return false;
	}
	
	if (fn.custname.value == "") {
		alert("회원성명이 입력되지 않았습니다.");
		fn.custname.focus();
		return false;
	}
	
	if (fn.phone.value == "") {
		alert("회원전화가 입력되지 않았습니다.");
		fn.phone.focus();
		return false;
	}
	
	if (fn.address.value == "") {
		alert("회원주소가 입력되지 않았습니다.");
		fn.address.focus();
		return false;
	}
	
	if (fn.joindate.value == "") {
		alert("회원가입일자가 입력되지 않았습니다.");
		fn.joindate.focus();
		return false;
	}
	
	if (fn.grade.value == "") {
		alert("고객등급이 입력되지 않았습니다.");
		fn.grade.focus();
		return false;
	}
	
	if (fn.city.value == "") {
		alert("도시코드가 입력되지 않았습니다.");
		fn.city.focus();
		return false;
	}
	fn.submit();
}