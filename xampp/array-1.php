<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>배열</h1>
    <h2>배열생성</h2>
    <?php
    $animals=array('dog🐶','cat😻','horse🐴','bear🐻');
    for($i=0;$i<4;$i++){
        echo '<h2>'.$animals[$i].'</h2>';
    }

    if($animals[0]=='dog🐶'){
        echo '🐘'.'<br>';
    }
    if($animals[3]=='bea🐻'){
        echo '🐘';
    }else{
        echo '<h3>🕷🕷🕷🕷🕷🕷🕷🕷🕷🕷</h3>';
    }
    ?>
    <h2>조작</h2>
    <p>
        1. 변수 생성후 배열 할당(생각나는걸로) <br>
        2. for 문으로 원소 각각 출력
    </p>
    <?php
    $sports=array('🏌️‍♂️Golf','🏊‍♂️Swimming','⛹️‍♂️Basketball','🚴‍♀️Cycle');
    for($i=0;$i<4;$i++){
        echo '<h2>'.$sports[$i].'</h2>';
    }
    ?>
    <hr>
    <h2>연관배열 Associative Array</h2>
    <p>Key 와 value로 연결</p>
    <?php
    //foreach(배열명 as 변수){}
    foreach($sports as $item){
        echo $item.'<br>';
    }
    ?>
    <h3>스포츠 요금표</h3>
    <?php
    $prices=array();
    $prices['Golf']=50000;
    $prices['Swimming']=10000;
    $prices['Basketball']=20000;
    $prices['Cycle']=30000;
    //배열.forEach(function(){}) -자바스크립트
    //for (원소변수명 of 배열){}
    //foreach (배열 as 키 => 원소변수명){}
    //$prices 배열을 $key 기준으로 하나씩 꺼내서 $price에 저장
    foreach($prices as $key => $price){
        echo $key."_".$price."<br>";
    }
    ?>
<hr>
<?php
// 키 값이 중복되면 먹지 않는다.  
    $names=array();
    $names['윤']='🏀도상';
    $names['이']='⚽윤재';
    $names['김']='⚾민규';

    foreach($names as $key => $name){
        echo "<h2>$key$name</h2>";
    }
    ?>

<?php
    $array=array("떡볶이"=>3000,"튀김"=>2000,"순대"=>3500);
    foreach($array as $key => $price){
        echo "<h2>$key'🍽'$price</h2>";
    }
    ?>
    <hr>
    <h2>Loop</h2>
    <h3>while</h3>
    <p>while(조건){실행}</p>
    <?php
    $i=0;
    while($i<5){
        echo(($i++)+1).'<br>';
    }
    ?>
    <h3>do/while</h3>
    <?php
    $j=0;
    do{echo $j++.'<br/>';}
    while($j<5);

    $p=4;
    do{echo $p--.'<br/>';}
    while($p>=0);
    
    ?>
    <h3>for</h3>
    <?php
    for($i=0;$i<5;$i++){
        echo $i.'<br/>';
    }
 
    ?>
    <h3>foreach</h3>
    <p>배열요소를 하나씩 출력</p>
    <?php
    $result=array(0,5,6,7,8,9);
    foreach($result as $res){
        echo "변수 \$result 의 값은 {$res}입니다<br/>" ;
    }
    ?>
    <h3>foreach: associative array</h3>
    <p>키와 값이 있는 배열</p>
    <?php
    $scores=array(
        "국어"=>80,
        "수학"=>90,
        "영어"=>95,
        "과학"=>98,
    );
    foreach($scores as $key => $score){
        echo "배열 \$scores 의 키값 '{$key}'에 대한 값은 {$score} 입니다.<br/>";
    }
    ?>
    <h2>문제</h2>
    <p>배열을 이용해 과목성적의 합계와 평균을 구하시오</p>
    <p>과목별 점수: 영어 99, 컴퓨터 80, 프로그래밍 85</p>
    <?php
    $eng=99;
    $com=80;
    $pro=85;
    echo "과목점수는 $eng+$com+$pro<br/>";
    $sum=$eng+$com+$pro;
    echo "과목 총점은 $sum<br/>";
    $ave=$sum/3;
    echo "과목 평균은 $ave" 

    ?>
    </body>
</html>