const ftoc = function(tempf) {
  let tempc = (tempf - 32) * (5/9);
  return ((tempc.toFixed(0) == tempc) ? tempc : Number(tempc.toFixed(1)));
};

const ctof = function(tempc) {
  let tempf = (tempc * (9/5)) + 32;
  return ((tempf.toFixed(0) == tempf) ? tempf : Number(tempf.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
