var choice = prompt("Welcome to Perimeter Calculator. \n Please Enter your Choice. \n1.Perimeter of Rectangle. \n2.Perimeter of Triangle. \n3.Perimeter of Circle. \n4.Perimeter of Parallelogram");

if (choice == '1') {
    var l = prompt('Enter the Length')
    var b = prompt('Enter the breadth')
    var result = 2 * (Number(l) + Number(b))
    alert('The Perimeter is ' + result)
}

if (choice == '2') {
    var a = prompt('Enter first side')
    var b = prompt('Enter second side')
    var c = prompt('Enter third side')
    var result = Number(a) + Number(b) + Number(c)
    alert('The Perimeter is ' + result)
}

if (choice == '3') {
    var r = prompt('Enter the radius')
    var result = 2 * 3.14 * Number(r)
    alert('The Perimeter is ' + result)
}

if (choice == '4') {
    var l = prompt('Enter the Length')
    var b = prompt('Enter the breadth')
    var result = 2 * (Number(l) + Number(b))
    alert('The Perimeter is ' + result)
}
