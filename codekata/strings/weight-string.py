#Given a string 'S' print the sum of weight of the String. A weight of character is defined as the ASCII value of corresponding character.

str = input()
sum = 0
for i in range(0, len(str)): 
	sum = sum + ord(str[i]) 
print(sum)
