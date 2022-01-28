module.exports = function toReadable (number) {
    let result='';
    let temp = String(number).split('');

    if (temp.length==1){
        if (temp[0]==0)
                return 'zero';
    }
    if (temp.length==3){
        switch (Number(temp[0])){
            case 1:
                result+='one';
                break;
            case 2:
                result+='two';
                break;
            case 3:
                result+='three';
                break;
            case 4:
                result+='four';
                break;
            case 5:
                result+='five';
                break;
            case 6:
                result+='six';
                break;
            case 7:
                result+='seven';
                break;
            case 8:
                result+='eight';
                break;
            case 9:
                result+='nine';
                break;
        };
        result+=' ';
        result+='hundred';
        result+=' ';
        temp.shift();
    }
    if (temp.length==2){
        switch (Number(temp[0])){
            case 1:
                switch (Number(temp[1])){
                    case 0:
                        result+='ten';
                        break;
                    case 1:
                        result+='eleven';
                        break;
                    case 2:
                        result+='twelve';
                        break;
                    case 3:
                        result+='thirteen';
                        break;
                    case 4:
                        result+='fourteen';
                        break;
                    case 5:
                        result+='fifteen';
                        break;
                    case 6:
                        result+='sixteen';
                        break;
                    case 7:
                        result+='seventeen';
                        break;
                    case 8:
                        result+='eighteen';
                        break;
                    case 9:
                        result+='nineteen';
                        break;
                };
                break;
            case 2:
                result+='twenty';
                break;
            case 3:
                result+='thirty';
                break;
            case 4:
                result+='forty';
                break;
            case 5:
                result+='fifty';
                break;
            case 6:
                result+='sixty';
                break;
            case 7:
                result+='seventy';
                break;
            case 8:
                result+='eighty';
                break;
            case 9:
                result+='ninety';
                break;
        }
        if (Number(temp[0])==1){
            temp.shift();
            temp.shift();
        }
        if (Number(temp[0])!=1){
            temp.shift();
        }
        result+=' ';
    }
    if (temp.length==1){
        switch (Number(temp[0])){
            case 1:
                result+='one';
                break;
            case 2:
                result+='two';
                break;
            case 3:
                result+='three';
                break;
            case 4:
                result+='four';
                break;
            case 5:
                result+='five';
                break;
            case 6:
                result+='six';
                break;
            case 7:
                result+='seven';
                break;
            case 8:
                result+='eight';
                break;
            case 9:
                result+='nine';
                break;
        };
    }    
    return result.replace(/\s+/g, ' ').trim();
}
