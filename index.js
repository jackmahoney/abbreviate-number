var Intl = require('intl');

function intlFormat(num)
{
    return new Intl.NumberFormat().format(Math.round(num*10)/10);
}

function abbr(num)
{

    if(num >= 1000000){
      	return intlFormat(num/1000000)+'m';    	
    }
    else if(num >= 1000){
		return intlFormat(num/1000)+'k';
    }
    else{
    	return intlFormat(num);	
    }
   
}

module.exports = abbr;
