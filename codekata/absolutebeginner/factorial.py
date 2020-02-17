# You are provided with a number, "N". Find its factorial.
n = int(input())
fact = 1
for i in range(1,n+1): 
    fact = fact * i 
print (fact)
