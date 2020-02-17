# You are provided with the radius of a circle "A". Find the length of its circumference.
PI = 3.143
A = float(input())
if(A > 0): 
  circumference = 2 * PI * A 
  print("%.2f" %circumference)
else:
  print("Error")
