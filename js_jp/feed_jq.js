$(function(){
    $.ajax({
        url:"news.php",
        dataType:"xml",
        success:function(data){
            var $items=$(data).find('item');
            // console.log($items);
            if($items.length>0){
             $items=$items.slice(0,10); // 슬라이스 0부터 10개를 잘라내서 산출한다. 
             var $ul=$('<ul />');
             //  $items.each(function(i,o{})) 아래와 같은 의미다. 즉 어떻게 쓰든 상관 없다.
             $.each($items, function(i,o){
                 var $title=$(o).find('title').text();
                 var $link=$(o).find('link').text();
                 var $aTag=$('<a />');
                 $aTag.attr({'href':$link,'target':'_blank'})
                 $aTag.text($title)
                 var $li=$('<li />');
                 $li.append($aTag)
                 $ul.append($li)

             }) 
             $('.wrap').append($ul)
            }
        }
    })
})