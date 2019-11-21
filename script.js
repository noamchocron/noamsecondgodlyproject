//11th problem
function firstLast6(num) {
    if(num[0] == 6 || num[num.length - 1] == 6){
        return true;
    }
    return false;
}
//12th problem
function has23(num) {
    if(num[0] == 2 || num[0] == 3 || num[1] == 3 || num[1] == 2){
        return true;
    }
    return false;
}

//13th problem
function fix23(num) {
    if(num[0] == 2 && num[1] == 3){
        num[1] = 0;
        return num;
    }
    if(num[1] == 2 && num[2] == 3){
        num[2] = 0;
        return num;
    }
    return num;
}

//14th problem
function countYZ(num) {
    var count = 0;
    if (num[num.length - 1] == "y" || num[num.length - 1] == "Y" || num[num.length - 1] == "z" || num[num.length - 1] == "Z") {
        count += 1;
    }
    for(var i = 0; i <= num.length; i++) {
        if (num[i] == " " && (num[i - 1] == "y" || num[i - 1] == "Y" || num[i - 1] == "z" || num[i - 1] == "Z")) {
            count += 1;
        }
    }
    return count;
}

//15th problem
function endOther(num1, num2) {
    var shorter = 0;
    num1 = num1.toLowerCase()
    num2 = num2.toLowerCase()

    if (num1.length > num2.length) {
        shorter = num2.length;
        if (num1.substring(num1.length - shorter) == num2) {
            return true;
        }
    }
    if (num2.length > num1.length) {
        shorter = num1.length;
        if (num2.substring(num2.length - shorter) == num1) {
            return true;
        }
    }
    if (num1 == num2) {
        return true;
    }
    return false;
}

//16th problem
function starOut(string){
    var answer = "";
    for(var i = 0; i < string.length; i++){
        if((string.substring(i, i + 1) == "*") || (string.substring(i, i + 2) == "*") || string.substring(i - 1, i) == "*"){
            answer= answer + string.substring(i + i +1);
        }
    }

    return answer;
}

//17th problem
function getSandwich(yum){
    var nun = "";
    oneBread = 0;
    twoBread = 0;
    for(var i = 0; i < yum.length; i++){
        if(yum.indexOf("bread") != yum.lastIndexOf("bread")){
            twoBread += yum.lastIndexOf("b");
            oneBread += yum.indexOf("d");
            nun += yum.substring(oneBread + 1, twoBread);
            return nun;
        }
    }
    return nun;
}

//18th problem
function canBalance(str){
        var sumOne = 0;
        var sumTwo = 0;
        for(var i = 0; i < str.length; i++){
            sumOne += str[i];
            for(var x = i+1; x<str.length; x++){
                sumTwo += str[x];
            }
            if(sumTwo == sumOne){
                return true;
            }
            sumTwo = 0;
        }
        return false;
    }

//19th problem
function countClumps(arr){
    var numberOne = 0;
    for(var i = 0; i < arr.length; i++){
        if( arr[i] == arr[i + 1] && arr[i + 1] != arr[i + 2]){
            numberOne += 1;
        }
    }
    return numberOne;
}

//20th problem
function evenlySpaced(a, b , c){
    if(b - a == c - b){
        return true;
    }
    if(a - b == c - a){
        return true;
    }
    if(a - c == c - b){
        return true;
    }
    return false;
}
//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOther(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += getSandwich(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += canBalance(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    //test third method, etc
}

