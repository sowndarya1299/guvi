import math
a, b, C = map(float,input("").split())
Y = (-b+(math.sqrt((b*b) -(4*a*c))))/(2*a) 
z = (-b-(math.sqrt((b*b) -(4*a*c))))/(2*a)     
print("%.2f" %Y)
print("%.2f" %z)
