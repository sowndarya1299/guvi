#  Radha newly learnt about palindromic strings.A palindromic string is a string which is same when read from left to right and also from right to left.Help her in implementing the logic.

n = input()
s = n [::-1]
if(n == s):
	print("1")
else:
	print("0")
