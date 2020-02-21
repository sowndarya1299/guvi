# A number is given as input. Find the odd digits in the number, add them and find if the sum is odd or not. If even print E, if odd print O
n = int(input())
sum = 0
while(n != 0):
  d = n % 10
  sum = sum + d
  n = n // 10
if(sum % 2 == 0):
	print("E")
else:
    print("O")
