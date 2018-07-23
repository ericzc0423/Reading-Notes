#coding=utf-8

import re

data = 'this a 11111123-8-1000'
patt = '\d+-\d+-\d+'
print(re.search(patt, data).group())
patt1='.+(\d+-\d+-\d+)'
print(re.search(patt1, data).group())
