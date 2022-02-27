
function polindrome(n)
{
while(n != 0)
{
    remainder = n % 10;
    revnum = revnum * 10 + remainder;
    n = n / 10;
}

if(number == revnum)
document.write("the Given number is Polindrome");
else
document.write("the Given number is not a polindrome");

}



var input = prompt("Enter the First Number");
var n = parseInt(input);
var revnum = 0;
var remainder;
var number = n;
polindrome(n);

    
    
