# Given a number N and an array of N elements ,find the Bitwise AND of the array elements
n = int(input())
a = [int(x) for x in input().split()]
s = a[0]
for i in range(1,n):
	s = s & a[i]
print(s,end="")
