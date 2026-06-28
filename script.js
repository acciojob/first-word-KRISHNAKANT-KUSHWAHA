function firstWord(s) {
  // your code here
	if(s=="") return "";
	let n=s.trim().length;
	let j=0;
	for(let i=0;i<n;i++){
		if(s[i]!=" ") j++;
		else break;
	}
	return s.slice(0,j);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
