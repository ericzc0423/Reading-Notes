#！/bin/python3

from random import randint, choice
from string import  ascii_lowercase
#from sys import maxint
from time import ctime


doms = ('com','edu','net','org','gov')


for i in range(randint(5,10)):
    dint = randint(0,maxint-1)
    dtstr = ctime(dtint)

    shorter = randint(4,7)
    em = ''
    for j in  range(shorter):
        em += choice(ascii_lowercase)

    longer = randint(shorter,12)
    dn = ''
    for j in range(longer):
        dn += choice(ascii_lowercase)

    print('%s::%s@Rs.%s::%d-%d-%d' % (dtstr, em, dn, choice(doms), dtint , shorter, longer))