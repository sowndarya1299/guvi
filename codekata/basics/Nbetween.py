# Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
n = int(input())
x, y = [int(x) for x in input().split()] 
if(n>x) and (n<y):
	print("yes")
else:
	print("no")
