<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>우와 이건 index1.php</h1>
<!-- 여기는 html -->

    <?php
    //한줄주석
    /* 여러줄 주석
      파일명.php
      php는 html과 함께 사용할 수 있다.
    */ 

    //php 변수선언 $식별자='값';
    $name='망고';
    //php 출력 echo
    //'문자' .$변수
    echo '안녕,' . $name;
    echo '<h2>'.$name,'🍗대장</h2>';
    echo "<h2>.$name.🍗대장</h2>";
    ?>
    <table>
      <tr>
        <td>테이블</td>
        <td>테이블</td>
        <td>테이블</td>
        <td>테이블</td>
      </tr>
    </table>
  <ul>
    <li>리스트</li>
    <li>리스트</li>
  </ul>
  <?php
    $name2='도상';
    echo '<hr/>php 두번째'.$name2;
    echo '<h2>🍗대장'.$name2,'</h2>';
    // echo $name'천재'; 오류.
     echo $name2.'천재<hr/>';
     echo '도상'.$name2.'천재';
    ?>
    <!-- standard tag -->
    <?php
    echo "<hr>🎃$name2"
    ?>
    
    <!-- short open tag -->
    <?
    $name3="Bombaman김정은";
      echo "<hr>💣$name3"
  ?>
  <!-- echo shortcut -->
  <p>
    <?= $name3
    
    ?>
  </p>
  </body>
</html>
