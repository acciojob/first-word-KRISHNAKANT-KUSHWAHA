function firstWord(s) {
  // your code here
	if(s=="") return "";
	let str=s.trim();
	let n=str.length;
	let j=0;
	for(let i=0;i<n;i++){
		if(str[i]!=" ") j++;
		else break;
	}
	return str.slice(0,j);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


