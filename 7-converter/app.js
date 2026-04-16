const summ = 1000;
const sourceCur = 'ru';
const targetCur = 'usd';

function exchange(summ,sourceCur,targetCur){

    switch(sourceCur+'/'+targetCur){  
        case 'ru/usd': 
           return summ/70;
        case 'usd/ru': 
           return summ*70;   
        default:
            return null;  
    }
}

console.log(exchange(summ,sourceCur,targetCur));