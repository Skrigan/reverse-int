module.exports = function reverse (n) {

	let nStr = n.toString(), res = '';
	for (let i = nStr.length - 1; i >= 0; i--) {
		nStr[i] == '-' ? res : res += nStr[i];
	}
	return res;

}
