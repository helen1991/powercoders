from string import Template



x = 11


def compare_to_ten(num):
    if x < 10:
        return 'Less than 10'
    elif x > 10:
        return 'Greater than 10'
    else:
        return 'Equals 10'


#print('x is', compare_to_ten(x))


a = [1, 2, 3, 4, 5, 6]
# 'The array is ${a.length} items long'

print('The array is', len(a), 'items long.')
print('The array is %04d items long and x is %d' % (len(a), x))

print('The array is {} items long, and x is{}'.format(len(a), x))

print('The array is {1} items long, and x is{0}'.format(x, len(a)))

english = 'The array is {1} items long, and x is {0}'
german = ' x is{0}and The array is {1} items long'

print(english.format(x, len(a)))
print(german.format(x, len(a)))

temp1 = Template('The array is $len items long and x is $val')
print(temp1.substitute(len=len(a), val=x))

# Javascript: a.forEach(function el) { ...}
for element in a:
    print('The element is: {}'.format(element))

# Javascript: for (let i = 0; i<a.length; i++) { ... }
for index, value in enumerate(a):
    print('The element at index {1} has value {0}'.format(value, index))

d = {'x': 1, 'y': 2, 'z': 3}

#Not guaranteed to be in sorted order
for key in d:
    print('The key is: {}'.format(key))

keys = sorted(d.keys())
for key in d:
    print('The key is: {}'.format(key))

for val in d.values():
    print('The value is:'.format(val))


for key, val in enumerate(d):
    print('key: {0}, val: {1}'.format(key, val)






















