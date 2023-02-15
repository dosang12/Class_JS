<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>array.php</title>
</head>
<body>
    <h1>배열</h1>
    <h2>배열생성</h2>
    <?php
        $fruits=array();
        $fruits[0]="바나나🍌";
        $fruits[1]="한라봉🍊";
        $fruits[2]="복숭아🍑";
        $hr = '<hr>';
//에러남. 배열의 값을 꺼낼때는 원소단위로 꺼내야 한다. 
        echo $fruits[0].$hr;
        echo $fruits[1].$hr;
        echo $fruits[2].$hr;
    ?>
    <!-- 계속 이어 쓸거라면 닫는태그 생략 가능. body도 없어야함.-->
    <h2>isset</h2>
    <p>isset은 변수가 준비되었는지 확인하는 함수</p>
    <?php
        if(isset($fruits[3])){
            echo '있다.';
        } else {
            echo '<h2>그거 없다는데?</h2>';
        }
    ?>
    <h2>배열조작</h2>
    <p>conut 배열의 개수반환</p>
    <?php
    //배열. length=count
    $fruits=array('apple','banana','watermelon','tomato');
    for($i=0; $i<4; $i++){
        echo $fruits[$i].'<br/>';
    }
    ?>
</body>
</html>