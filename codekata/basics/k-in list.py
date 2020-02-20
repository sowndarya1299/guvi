# Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'
x,y = map(int,input().split())
a = list(map(int,input().split()))
count=0
for i in range(len(a)):
	if(a[i]==y):
		count=count+1
if(count!=0):        
	print("yes")
else:
	print("no")
