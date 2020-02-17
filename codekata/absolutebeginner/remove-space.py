# Let "A"  be a string. Remove all the whitespaces and find it's length.

x = input().split()
s = ""
for i in range(len(x)):
	s+=x[i]
print(len(s),end="")
