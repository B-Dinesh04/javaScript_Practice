/* Write a js program to find the area of a triangle when three sides are 5,6,7.*/

function area(sideOne,sideTwo,sideThree)
{
    let semiPremeter = (a+b+c)/2
    let area = Math.sqrt(semiPremeter*(semiPremeter-sideOne)*(semiPremeter-sideTwo)*(semiPremeter-sideThree))
    return area
}
console.log(area(5,6,7))