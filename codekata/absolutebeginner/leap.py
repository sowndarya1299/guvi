# Let "A" be a year, write a program to check whether this year is a leap year or not.
month = int(input())
if(month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12):
  print("31”,end=" ")
elif(month == 2):
  print("28”,end=" ")
elif(month == 4 or month == 6 or month == 9 or month == 11):
  print("30“,end=" ")
else:
	print("Error",end=" ")  
