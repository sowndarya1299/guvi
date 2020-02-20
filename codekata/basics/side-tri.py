# Given 3 numbers A,B,C process and print 'yes' if they can form the sides of a triangle otherwise print 'no'
A, B,C = map(int, input().split())

if (A + B <= C) or (A + C <= B) or (B + C <= A) :     
	print("no")
else: 
	print("yes")
