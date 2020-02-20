# Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'
a,b,c=map(int,input().split())
if((a!=b) and (b!=c) and (a!=c)):
    print("yes")
else:
    print("no")
