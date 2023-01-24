//ajax 통신을 가능하게 하는 객체. 
let request=new XMLHttpRequest();
//데이터 주소 설정
const url='./MOCK_DATA.json';
//데이터 형식 설정
console.log(request.readyState)//0

//바뀐 응답요청값을 얻을때는 onreadystatechange 속성의 
//readyState메서드를 활용 문법은 아래와 같다. 
request.onreadystatechange=function(){
    if (request.readyState==4 && request.status ==200){
        console.log(this.responseText)
        jsonfunc(this.responseText)
    } 
}
request.open("GET",url);
request.send();
//네트워크 통신으로 db받기
//받은 db를 가공해서 화면에 바인딩
function jsonfunc(responseText){
    console.log(responseText)
    let id=new Array();
    let first_name=new Array();
    let last_name=new Array();
    let email=new Array();
    let gender=new Array();
    let ip_address=new Array();
    
    //json 데이터를 text로 변환
    let jsonTxt=JSON.parse(responseText)
    console.log(jsonTxt)
    //dom 요소 준비 
    const wrap=document.querySelector(".wrap");
    //table  태그생성 .createElement(없는태그 만들어낼때 사용)
    let table=document.createElement("table");
    //반복문을 사용해서 데이터 바인딩
    for(i=0; i<jsonTxt.length;i++){

        id[i]=jsonTxt[i].id;
        first_name[i]=jsonTxt[i].first_name;
        gender[i]=jsonTxt[i].gender;
        last_name[i]=jsonTxt[i].last_name;
        email[i]=jsonTxt[i].email;
        ip_address[i]=jsonTxt[i].ip_address;
        //tr, td 생성 후 데이터 넣기
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        
        td1.appendChild(document.createTextNode(id[i]+""));
        td2.appendChild(document.createTextNode(first_name[i]+""));
        td3.appendChild(document.createTextNode(last_name[i]+""));
        td4.appendChild(document.createTextNode(gender[i]+""));
        td5.appendChild(document.createTextNode(email[i]+""));
        td6.appendChild(document.createTextNode(ip_address[i]+""));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        table.appendChild(tr);
    }
    wrap.appendChild(table)
}
