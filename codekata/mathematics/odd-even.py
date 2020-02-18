# Given 2 numbers N,M. Find their difference and check whether it is even or odd
a,b = map(int,input().split())
diff = a - b
if(diff%2 == 0):
  print("even")
else:
  print("odd")
