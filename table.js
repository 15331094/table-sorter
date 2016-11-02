$(document).ready(function() {
    //6个数组存储两个表格每列的数据
    var what = new Array(50);
    var when = new Array(50);
    var location = new Array(50);
    var firstName = new Array(50);
    var lastName = new Array(50);
    var checkIn = new Array(50);
    var rowNum = 3;
    //记录表头被点击是第几次，up表示点击的第一次，down第二次
    var what_times = "up", when_times = "up", location_times = "up";
    var fName_times = "up", lName_times = "up", check_times = "up";
    /*
    for(var i = 0; i < 3; i++) {
        //把每一列的数据放进数组中
        what[i] = $("#todo tbody tr:eq(" + i + ") td:eq(0) input").val();
        when[i] = $("#todo tbody tr:eq(" + i + ") td:eq(1) input").val();
        location[i] = $("#todo tbody tr:eq(" + i + ") td:eq(2) input").val();
        firstName[i] = $("#staff tbody tr:eq(" + i + ") td:eq(0) input").val();
        lastName[i] = $("#staff tbody tr:eq(" + i + ") td:eq(1) input").val();
        checkIn[i] = $("#staff tbody tr:eq(" + i + ") td:eq(2) input").val();        
    }*/

    for(var i = 0; i < 3; i++) {
        //给每一个表头末尾增加一个div三角形
        $("#todo thead tr:eq(0) th:eq(" + i + ")").append($("<div></div>"));
        $("#staff thead tr:eq(0) th:eq(" + i + ")").append($("<div></div>"));        
    }


/*
    //给每一列数据备份
    var whatStandard = [].concat(what);
    var whenStandard = [].concat(when);
    var locationStandard = [].concat(location);
    var firstNameStandard = [].concat(firstName);
    var lastNameStandard = [].concat(lastName);
    var checkInStandard = [].concat(checkIn);
    */
    //对应交换数组的第j位和j + 1位，exchange()函数在sort函数中被调用
    function exchange(table, j) {
        if(table == 0) {
            var tempWhat = what[j];
            what[j] = what[j + 1];
            what[j + 1] = tempWhat; 

            var tempWhen = when[j];
            when[j] = when[j + 1];
            when[j + 1] = tempWhen;  

            var tempLocation = location[j];
            location[j] = location[j + 1];
            location[j + 1] = tempLocation;             
        }
        else if(table == 1) {
            var tempFname = firstName[j];
            firstName[j] = firstName[j + 1];
            firstName[j + 1] = tempFname; 

            var tempLname = lastName[j];
            lastName[j] = lastName[j + 1];
            lastName[j + 1] = tempLname;  

            var tempcheck = checkIn[j];
            checkIn[j] = checkIn[j + 1];
            checkIn[j + 1] = tempcheck;             
        }
    }

    function reget() {
        for(var i = 0; i < rowNum; i++) {
        //把每一行的数据放进数组中
            what[i] = $("#todo tbody tr:eq(" + i + ") td:eq(0) input").val();
            when[i] = $("#todo tbody tr:eq(" + i + ") td:eq(1) input").val();
            location[i] = $("#todo tbody tr:eq(" + i + ") td:eq(2) input").val();
            firstName[i] = $("#staff tbody tr:eq(" + i + ") td:eq(0) input").val();
            lastName[i] = $("#staff tbody tr:eq(" + i + ") td:eq(1) input").val();
            checkIn[i] = $("#staff tbody tr:eq(" + i + ") td:eq(2) input").val();             
        }
        //给每一列数据备份
        whatStandard = [].concat(what);
        whenStandard = [].concat(when);
        locationStandard = [].concat(location);
        firstNameStandard = [].concat(firstName);
        lastNameStandard = [].concat(lastName);
        checkInStandard = [].concat(checkIn); 
        
        //alert(when[0] + " " + when[1] + " " + when[2]);
             
    }
    /*
    对数组进行排序，table为数字，0代表todo表，1代表staff表
    th代表每个表的第几列，0代表第一列，以此类推，order是字符串
    increase代表升序，decrease代表降序
    */
    function sort(table, th, order) {

        what = [].concat(whatStandard);
        when = [].concat(whenStandard);
        location = [].concat(locationStandard);

        firstName = [].concat(firstNameStandard);
        lastName = [].concat(lastNameStandard);
        checkIn = [].concat(checkInStandard);
/*
        for(var i = 0; i < 3; i++) {
        //把每一列的数据放进数组中
            what[i] = $("#todo tbody tr:eq(" + i + ") td:eq(0) input").val();
            when[i] = $("#todo tbody tr:eq(" + i + ") td:eq(1) input").val();
            location[i] = $("#todo tbody tr:eq(" + i + ") td:eq(2) input").val();
            firstName[i] = $("#staff tbody tr:eq(" + i + ") td:eq(0) input").val();
            lastName[i] = $("#staff tbody tr:eq(" + i + ") td:eq(1) input").val();
            checkIn[i] = $("#staff tbody tr:eq(" + i + ") td:eq(2) input").val();             
        }*/
        var temp;
        if(th == 0) temp = [].concat(what);
        if(th == 1) temp = [].concat(when);
        if(th == 2) temp = [].concat(location);
        if(th == 3) temp = [].concat(firstName);
        if(th == 4) temp = [].concat(lastName);
        if(th == 5) temp = [].concat(checkIn);

        if(order == "increase") {
            for(var i = 0; i < rowNum; i++) {
                for(var j = 0; j < rowNum - i - 1; j++) {
                    if(temp[j] > temp[j + 1]) {
                        var t = temp[j];
                        temp[j] = temp[j + 1];
                        temp[j + 1] = t;
                        exchange(table, j);
                    }
                }
            }            
        }
        else if(order == "decrease") {
            for(var i = 0; i < rowNum; i++) {
                for(var j = 0; j < rowNum - i - 1; j++) {
                    if(temp[j] < temp[j + 1]) {
                        var t = temp[j];
                        temp[j] = temp[j + 1];
                        temp[j + 1] = t;
                        exchange(table, j);
                    }
                }
            }    
        }
        //alert(when[0] + " " + when[1] + " " + when[2]);
        reset();
    }
    /*
    //在进行排序之后reset()函数把数组的数据重新放回表格中
    function reset() {
        for(var i = 0; i < rowNum; i++) {
            $("#todo tbody tr:eq(" + i + ") td:eq(0) input").val(what[i]);
            $("#todo tbody tr:eq(" + i + ") td:eq(1) input").val(when[i]);
            $("#todo tbody tr:eq(" + i + ") td:eq(2) input").val(location[i]);

            $("#staff tbody tr:eq(" + i + ") td:eq(0) input").val(firstName[i]);
            $("#staff tbody tr:eq(" + i + ") td:eq(1) input").val(lastName[i]);
            $("#staff tbody tr:eq(" + i + ") td:eq(2) input").val(checkIn[i]);  
        }
    }*/

    function reset() {
        for(var i = 0, j = 0; i < rowNum; j++) {
            if(what[j] == when[j] && when[j] == location[j] && location[j] == "") continue;
            $("#todo tbody tr:eq(" + i + ") td:eq(0) input").val(what[j]);
            $("#todo tbody tr:eq(" + i + ") td:eq(1) input").val(when[j]);
            $("#todo tbody tr:eq(" + i + ") td:eq(2) input").val(location[j]);
            i++;
        }
        for(var i = 0, j = 0; i < rowNum; j++) {
            if(firstName[j] == lastName[j] && lastName[j] == checkIn[j] && checkIn[j] == "") continue;
            $("#staff tbody tr:eq(" + i + ") td:eq(0) input").val(firstName[j]);
            $("#staff tbody tr:eq(" + i + ") td:eq(1) input").val(lastName[j]);
            $("#staff tbody tr:eq(" + i + ") td:eq(2) input").val(checkIn[j]);
            i++;            
        }
    }

    /*change()函数在点击表头和排序完成之后对表头的样式进行修改，
    显示三角形*/
    function change(tableId, th, order) {
        var th1 = $("#" + tableId + " thead tr:eq(0) th:eq(0)");
        var th2 = $("#" + tableId + " thead tr:eq(0) th:eq(1)");
        var th3 = $("#" + tableId + " thead tr:eq(0) th:eq(2)");
        if(th == 0) {
            th1.removeClass().addClass("sort");
            th2.removeClass("sort");
            th3.removeClass("sort");
            if(order == "increase") {
                $("#" + tableId + " thead tr:eq(0) th:eq(0) div").removeClass().addClass("triangleIncrease");
            }
            else {
                $("#" + tableId + " thead tr:eq(0) th:eq(0) div").removeClass().addClass("triangleDecrease");
            }
        }
        else if(th ==  1) {
            th2.removeClass().addClass("sort");
            th1.removeClass("sort");
            th3.removeClass("sort");
            if(order == "increase") {
                $("#" + tableId + " thead tr:eq(0) th:eq(1) div").removeClass().addClass("triangleIncrease");
            }
            else {
                $("#" + tableId + " thead tr:eq(0) th:eq(1) div").removeClass().addClass("triangleDecrease");
            }
        }
        else if(th == 2) {
            th3.removeClass().addClass("sort");
            th1.removeClass("sort");
            th2.removeClass("sort");
            if(order == "increase") {
                $("#" + tableId + " thead tr:eq(0) th:eq(2) div").removeClass().addClass("triangleIncrease");
            }
            else {
                $("#" + tableId + " thead tr:eq(0) th:eq(2) div").removeClass().addClass("triangleDecrease");
            }
        }
    }
    //点击增加新的行
    $("#Button").click(function() {
        //alert("lala");<input type='text' value='2007-11-15'/>
        $("#todo tbody").append($("<tr><td><input type='text' value=''/></td><td><input type='text' value=''/></td><td><input type='text' value=''/></td></tr>"));
        $("#staff tbody").append($("<tr><td><input type='text' value=''/></td><td><input type='text' value=''/></td><td><input type='text' value=''/></td></tr>"));
        rowNum++;
        if(rowNum % 2 == 0) {
            var num =  rowNum - 1;
            $("#todo tbody tr:eq(" + num + ")").css("background-color", "gray");
            $("#staff tbody tr:eq(" + num + ")").css("background-color", "gray");
        }
    });

//按照what来进行排序
    $("#todo thead tr:eq(0) th:eq(0)").click(function() {
       // alert("what");
        reget();
        if(what_times == "up") {
            sort(0, 0, "increase");
            change("todo", 0, "increase");
            what_times = "down";
        }
        else {
            sort(0, 0, "decrease");
            change("todo", 0, "decrease");
            what_times = "up";
        }
    });
//按照when来进行排序
    $("#todo thead tr:eq(0) th:eq(1)").click(function() {
        reget();
        if(when_times == "up") {
            sort(0, 1, "increase");
            change("todo", 1, "increase");
            when_times = "down";
        }
        else {
            sort(0, 1, "decrease");
            change("todo", 1, "decrease");
            when_times = "up";
        }
    });
//按照location来进行排序
    $("#todo thead tr:eq(0) th:eq(2)").click(function() {
        reget();
        if(location_times == "up") {
            sort(0, 2, "increase");
            change("todo", 2, "increase");
            location_times = "down";
        }
        else {
            sort(0, 2, "decrease");
            change("todo", 2, "decrease");
            location_times = "up";
        }
    });
//按照firsname来进行排序
    $("#staff thead tr:eq(0) th:eq(0)").click(function() {
        reget();
        if(fName_times == "up") {
            sort(1, 3, "increase");
            change("staff", 0, "increase");
            fName_times = "down";
        }
        else {
            sort(1, 3, "decrease");
            change("staff", 0, "decrease");
            fName_times = "up";
        }
    });
//按照lastname来进行排序
    $("#staff thead tr:eq(0) th:eq(1)").click(function() {
        reget();
        if(lName_times == "up") {
            sort(1, 4, "increase");
            change("staff", 1, "increase");
            lName_times = "down";
        }
        else {
            sort(1, 4, "decrease");
            change("staff", 1, "decrease");
            lName_times = "up";
        }
    });
//按照lastest checkin来进行排序
    $("#staff thead tr:eq(0) th:eq(2)").click(function() {
        reget();
        if(check_times == "up") {
            sort(1, 5, "increase");
            change("staff", 2, "increase");
            check_times = "down";
        }
        else {
            sort(1, 5, "decrease");
            change("staff", 2, "decrease");
            check_times = "up";
        }
    });
});
