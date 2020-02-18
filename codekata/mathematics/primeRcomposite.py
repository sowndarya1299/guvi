# Given a number N, print 'yes' if it is composite else print 'no'.
num = int(input())
if num > 1:
    for i in range(2, num):
        if (num % i) == 0:
            print("yes")
            break
    else:
        print("no")
