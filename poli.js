

var input = prompt("Enter the Number");
n = parseInt(input);

document.write("hello");

number = n;



var n;
var revnumber = 0;
var remainder;
var number;




while(n != 0)
{
    remainder = n % 10;
    revnumber = revnumber * 10 + remainder;
    n = n / 10;

}

if (number == revnumber)
{

    document.write("the given number is polindrome");
}
else
{


    document.write("the given numnber is not a polindrome");


}