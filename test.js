var arr = []
var i = 0
var last = -1
for(i = 1; i <= 14; i++){
    if(last == -1)
        last = i
    else{
        console.log(last+" "+i)
        last = i
    }
}
