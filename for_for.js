
let dayoutput = "";

    for(let x = 0; x < 4; x++){
        for (let dayname = 1; dayname < 8; dayname++ ){
            dayoutput += `${dayname}\t`;
        }
            dayoutput += `\n`;
}

console.log(dayoutput)