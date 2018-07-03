for(var i=1;i<=9;i++){
    var chart="";
    for(var j=1;j<=i;j++){
        chart+=(`${i}*${j}=${i*j}\t`)
    }
    console.log(chart);
}