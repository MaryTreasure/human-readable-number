module.exports = function toReadable (number) {
    let result = '';
    let readableUnitsArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let readableTensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numToStr = number.toString();
    if (number <= 19) {
      result = readableUnitsArr[number];
      
    } else if (number > 19 && number < 100) {
      result = `${readableTensArr[numToStr[0] - 2]}${numToStr[1] === '0'? '': ' ' + readableUnitsArr[numToStr[1]]}`;
  
    } else if (number >= 100) {
      result = `${readableUnitsArr[numToStr[0]]} hundred`;
      if (numToStr[1] === '1') {
        result += ` ${readableUnitsArr[numToStr[1] + numToStr[2]]}`;
      } else if (numToStr[1] === '0') {
        result += '';
      } else if (numToStr[1] > 1) {
         result += ` ${readableTensArr[numToStr[1] -2 ]}`
      }
  
      if (numToStr[2] === '0' || numToStr[1] === '1') {
        result += ''
      } else {
        result += ` ${readableUnitsArr[numToStr[2]]}`
      }
    }
  
    return result;
  
}
