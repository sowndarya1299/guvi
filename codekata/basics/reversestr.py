# Given a string S consisting of 2 words reverse the order of two words
x = input()
y = x.split(' ')
r = y[::-1]
z = ' '.join(r)
print(z)
