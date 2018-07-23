#coding=utf-8
class HotelRoomCalc(object):
    'hotel room rate caclculator'

    def __init__(self,rt,sales=0.085,rm=0.1):
        ''' default arguments
        sales tax == 8.5% and room tax == 10% '''
        self.salesTax=sales
        self.roomTax=rm
        self.roomRate=rt

    def calcTotal(self,days=1):
        'Calculate total; default to daily rate'
        daily = round (self.roomRate * (1+ self.roomTax+self.salesTax),2)

        return float(days) * daily

sfo = HotelRoomCalc(299)
print(sfo.calcTotal())
print(sfo.calcTotal(2))

wasWkDay = HotelRoomCalc(169,0.045,0.02)
print(wasWkDay.calcTotal())
print(dir(sfo))
x = 3+0.14j
print(x.__class__)
print(dir(x))