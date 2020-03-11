module.exports = function toReadable (number) {
  let a = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let  b = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if(number === 0) {
    return "zero";
  };
  let str = String(number);
  if(str / 100 === 1) {
    return "one hundred";
  }
  let c = str % 100;
  if(str >= 100) {
  if(str > 100 && str % 10 === 0 && c > 20) {
    return  (a[str[0]] + " hundred" + (" " + b[str[1]])).trimRight();
  } else if(str > 100 && c < 20) {
    return (a[str[0]] + " hundred" + (" " + a[c])).trimRight();
  } else {
    return (a[str[0]] + " hundred" + (" " + b[str[1]]) + (" " + a[str[2]])).trimRight();
  }
  }else {
  if(str < 20) {
    return a[str];
  }
  if(str > 20 && str % 10 === 0) {
    return (b[str[0]]).trimRight();
  } else {
    return (b[str[0]] + (" " + a[str[1]])).trimRight();
  }  
  }
}


