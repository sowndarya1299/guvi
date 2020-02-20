# Given 3 numbers A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no
a, b, c = [int(x) for x in input().split()]      
if (a + b <= c) or (a + c <= b) or (b + c <= a) :
    print("no")  
else: 
    print("yes") 
