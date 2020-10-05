module.exports = function toReadable(number) {
    let arr = [];
    let result = [];
  
  
    const numToStr = (num) => {
        switch (num) {
            case 0:
                return "zero";
                break;
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
            case 10:
                return "ten";
                break;
            case 11:
                return "eleven";
                break;
            case 12:
                return "twelve";
                break;
            case 13:
                return "thirteen";
                break;
            case 14:
                return "fourteen";
                break;
            case 15:
                return "fifteen";
                break;
            case 16:
                return "sixteen";
                break;
            case 16:
                return "seventeen";
                break;
            case 17:
                return "seventeen";
                break;
            case 18:
                return "eighteen";
                break;
            case 19:
                return "nineteen";
                break;
            case 20:
                return "twenty";
                break;
            case 30:
                return "thirty";
                break;
            case 40:
                return "forty";
                break;
            case 50:
                return "fifty";
                break;
            case 60:
                return "sixty";
                break;
            case 70:
                return "seventy";
                break;
            case 80:
                return "eighty";
                break;
            case 90:
                return "ninety";
                break;
            default:
                break;
        }
    };
  
    if (number === 0) {
        return 'zero'
    }
  
    while (number) {
        arr.push(number % 10);
        number = Math.trunc(number/10);
    }
    arr =  arr.reverse();
  
    if (arr[1] == null) {
      result.push(numToStr(arr[0]));
    } else if (arr[2] == null) {
      if (arr[0] !== 1) {
          result.push(numToStr(arr[0] * 10));
      } else {
          result.push(numToStr(arr[0] * 10 + arr[1]));
      }
      if ((arr[1] > 0) && (arr[0] !== 1)) {
          result.push(numToStr(arr[1]));
      }
    } else if (arr.length = 3) {
      result.push(numToStr(arr[0]));
      result.push("hundred");
      if (arr[1] > 1) {
          result.push(numToStr(arr[1] * 10));
      } else if (arr[1] === 1){
          result.push(numToStr(arr[1] * 10 + arr[2]));
      }
      if ((arr[2] > 0) && (arr[1] !== 1)) {
          result.push(numToStr(arr[2]));
      }
    }

    result = result.join(' ');
    return result;
  };