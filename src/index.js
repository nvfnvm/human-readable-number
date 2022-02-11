module.exports = function toReadable (number) {
    let nums1 = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'
      }
      if (number >= 0 && number <= 10) {
        return nums1[number];
      }
      let nums2 = {
        1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen', 6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen', 0: 'twenty'
      }
      if (number > 10 && number < 21) {
        return nums2[number.toString()[1]];
      }
      let nums3 = {
        1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
      }
      if (number > 20 && number < 100) {
        if (number.toString()[1] === "0") {
          return nums3[number.toString()[0]]
        } else {
          return nums3[number.toString()[0]] + " " + nums1[number.toString()[1]];
        }
      }
      if (number > 99 && number < 1000) {
        if (number.toString()[1] === "0" && number.toString()[2] === "0")
          return nums1[number.toString()[0]] + " hundred";
        if (number.toString()[1] === "0")
          return nums1[number.toString()[0]] + " hundred " + nums1[number.toString()[2]];
        if (number.toString()[1] === "1" && number.toString()[2] === "0")
          return nums1[number.toString()[0]] + " hundred ten";
        if (number.toString()[1] === "1")
          return nums1[number.toString()[0]] + " hundred " + nums2[number.toString()[2]];
        if (number.toString()[2] === "0")
          return nums1[number.toString()[0]] + " hundred " + nums3[number.toString()[1]];
        else
          return nums1[number.toString()[0]] + " hundred " + nums3 [number.toString()[1]] + " " + nums1[number.toString()[2]];
    }
};
