

// armStrong Code only 3 digit   153,370,371,407

const num=407;
const first=parseInt(num/100);
const last=num%10;
const sum=first*first*first+5*5*5+last*last*last
if(sum===num)
console.log("armstrong",sum);
else
  console.log("not armstrong",sum)



//armstrong code with loop

let input=1534;
let armsum=0
let temp=input;
while(temp>0)
{
  rem=temp%10;
armsum=armsum+(rem*rem*rem)
temp=Math.floor(temp/10);
}

if(input===armsum)
  console.log("arm",armsum)
else
  console.log("not arm",armsum)