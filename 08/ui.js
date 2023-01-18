$(function(){
    $("#departure").datepicker({
        dateFormat:"yy-dd-mm", //input 창에 value표시 방법.
        showOtherMonths:true, //30 or 31 일 이후 빈공간에 다음달 날짜를 표시 or 안표시. 
        // showMonthAfterYear:true,
        // showWeek:true,
        changeYear:true,
        changeMonth:true,
        showOn:"both",
        buttonImage:"C:\Users\Administrator\Downloads\Calendar",
        buttonImageOnly:true,
        yearSuffix:"년",
        monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",],
        monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",],
        dayNamesMin:["일","월","화","수","목","금","토"],
        showAnim:"bounce"
    })
    $("#airport").autocomplete({
        source:airports
    })
    $("#meal").selectmenu({
        width:400,
        height:500,
    })
    $("#bags").css('display','block').buttonset()
    $("#seatTypes").buttonset()
    $("#next").button({
        icons:{secondary:"ui-icon-circle-arrow-e"}
    })
    $("#telme").dialog({
        autoOpen:false,
        width:500,
    })
    $("#telmeLink").click(function(e){
        e.preventDefault();
        $("#telme").dialog("open",$("p[title]").tooltip())
    })
})