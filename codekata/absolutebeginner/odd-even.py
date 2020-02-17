You are provided with a number check whether its odd or even
num = float(input())        
a = round(num)  
if(a == 0):
  print("Zero")
if(a % 2 == 0):
  print("Even")
else:
  print("Odd")
