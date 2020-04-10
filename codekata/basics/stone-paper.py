A1,A2=input().split()
#check gaming condition
if(A1=="R" and A2=="P" or (A1=="S" and A2=="R")or (A1=="P" and A2=="S")):
    print(A2)
elif(A1=="R" and A2=="S" or(A1=="P" and A2=="R")or(A1=="S" and A2=="P") ):
    print(A1)
elif(A1==A2):
    print("D")
