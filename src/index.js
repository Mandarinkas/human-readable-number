module.exports = function toReadable (number) {
    let result='';
    let temp = String(number).split('');
    if (temp.length==3){
        switch (temp[0]){
            case 1:
                result+=' one';
            case 2:
                result+=' two';
            case 3:
                result+=' three';
            case 4:
                result+=' four';
            case 5:
                result+=' five';
            case 6:
                result+=' six';
            case 7:
                result+=' seven';
            case 8:
                result+=' eight';
            case 9:
                result+=' nine';
        };
        result+=' hundred';
        temp.shift();
    }
    if (temp.length==2){
        switch (temp[0]){
            case 1:
                switch (temp[1]){
                    case 0:
                        result+=' ten';
                    case 1:
                        result+=' eleven';
                    case 2:
                        result+=' twelve';
                    case 3:
                        result+=' thirteen';
                    case 4:
                        result+=' fourteen';
                    case 5:
                        result+=' fifteen';
                    case 6:
                        result+=' sixteen';
                    case 7:
                        result+=' seventeen';
                    case 8:
                        result+=' eighteen';
                    case 9:
                        result+=' nineteen';
                };
            case 2:
                result+=' twenty';
            case 3:
                result+=' thirty';
            case 4:
                result+=' forty';
            case 5:
                result+=' fifty';
            case 6:
                result+=' sixty';
            case 7:
                result+=' seventy';
            case 8:
                result+=' eighty';
            case 9:
                result+=' ninety';
        }
        if (temp[0]==1){
            temp.pop();
            temp.pop();
        }
        if (temp[0]!=1){
            temp.shift();
        }
    }
    if (temp.length==1){
        switch (temp[0]){
            case 0:
                result+=' zero';
            case 1:
                result+=' one';
            case 2:
                result+=' two';
            case 3:
                result+=' three';
            case 4:
                result+=' four';
            case 5:
                result+=' five';
            case 6:
                result+=' six';
            case 7:
                result+=' seven';
            case 8:
                result+=' eight';
            case 9:
                result+=' nine';
        };
    }
    return result;
}
