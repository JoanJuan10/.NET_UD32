$(function () {
    var nums = new Array();
    var max = 6;
    var min = 1;
    var pointer = $("#pointer");
    var registro = 0;

    for (let i = 0; i < 36000; i++) {

        let num1 = Math.floor(Math.random() * (max - min) + min);
        let num2 = Math.floor(Math.random() * (max - min) + min);
        let encontrado = false;

        for (let j = 0; j < nums.length; j++) {
            if (num1 == num2) {
                if (num1 == nums[j][0] && num1 == nums[j][1]) {
                        nums[j][3]++;
                        $("#" + j).text(nums[j][3]);
                        encontrado = true;
                }
            }
            else {
                if (num1 == nums[j][0] || num1 == nums[j][1]) {
                    if (num2 == nums[j][0] || num2 == nums[j][1]) {
                        nums[j][3]++;
                        $("#" + j).text(nums[j][3]);
                        encontrado = true;
                    }
                }
            }
            
        }
        if (!encontrado) {
            nums.push([num1,num2, num1 + num2,1]);
            var content = "<tr><td>" + num1 +"<\/td><td>" + num2 +"<\/td><td>" + (num1 + num2) +"<\/td><td id='"+ registro +"'>1<\/td><\/tr>";
            
            pointer.append(content);
            pointer.next();
            registro++;
            
        }
        
    }
    console.log(nums);


});