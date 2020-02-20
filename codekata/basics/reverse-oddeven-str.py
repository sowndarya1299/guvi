#  string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0)
a = str(input())
y =''.join([ a[x:x+2][::-1] for x in range(0, len(a) ,2) ])
print(y)
