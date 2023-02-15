<?php
 $result=1<3;
 echo $result;
 // 1 이 반환된다.
 // 1 = true

 $result2=1>3;
 $hr='<hr>';
 echo $result2;
 // 0 은 반환 되지 않는다
 // 0 은 false 출력x

 //false를 true로 만들어서 출력.
 echo '<h1>'.($result2==false).'</h1>';
 echo $hr
?>

<?php 
  $first_name='mango';
  $last_name='kim';
//&&=and 연산자
// ||=or 연산자
// xor 두개가 달라야 참(참-참 = 거짓, 참-거짓= 참)
  if($first_name=="mango" && $last_name == 'Kim'){
    echo '<h1>망고는 찐이야</h1>';
  } else{
    echo '<h1>망고는 짭퉁이야?</h1>'.$hr;
  }
  if($first_name=="mango" and $last_name == 'Kim'){
    echo '<h1>망고는 찐이야</h1>';
  } else{
    echo '<h1>망고는 짭퉁이야?</h1>'.$hr;
  }
  if($first_name=="mango" || $last_name == 'Kim'){
    echo '<h1>망고는 찐이야</h1>'.$hr;
  } else{
    echo '<h1>망고는 짭퉁이야?</h1>';
  }
  if($last_name=="kim"){
    echo'<h1>망고는 찐이야</h1>';
  }else{
    echo '<h1>망고는 짭퉁이야?</h1>';
  }

?>