c1,c2 = [0,0],[7,0]
r = 5

#d = '((c1[0]-c2[0])**2+(c1[1]-c2[1])**2)**0.5'
#x = 'd/2'
#y = '(r**2-x**2)**0.5'
#res = '2*(r**2sin'
#2*((1/2)(CBD)r1^2 - (1/2)r1^2.sin(CBD))
#r**2 (CBD) - sin(CBD)
#= 2.718281828459045
# >>> X = 0.1
# >>> (e**(X*1j)).imag   # sin(X)
# 0.09983341664682815
# >>> (e**(X*1j)).real   # cos(X)
# 0.9950041652780258
print(len('d=lambda a,b,r:a[0]-b[0],a[1]-b[1]'))
def circleIntersection(a,b,r):d=((a[0]-b[0])**2+(a[1]-b[1])**2)**.5;y=(r*r-(d/2)**2)**.5;t=y/r;S=2*(t+1/6*t**3+3/40*t**5+15/336 * t**7); return int((r*r*(S-(2.718281828459045**(S*1j)).imag)).real)
from math import *; x = lambda a,b,r: int(r*r*(2*asin(((r**2-(hypot(a[0]-b[0],a[1]-b[1])/2)**2)**.5)/r) - sin(2*asin(((r**2-(hypot(a[0]-b[0],a[1]-b[1])/2)**2)**.5)/r))))
#!IN JS !: with(Math)circleIntersection=([A,a],[B,b],r)=>(-sin(x=2*acos(hypot(A-B,a-b)/2/r))+x)*r**2|0
#from math import*;t=lambda (C,c),(D,d),r:2*acos(hypot(C-D,c-d)/2/r);circleIntersection=lambda a,b,r: int((t(a,b,r)-sin(t(a,b,r)))*r*r)
#from math import*;d=lambda a,b,r:=min(1,hypot(a[0]-b[0],a[1]-b[1])/2/r);circleIntersection=lambda a,b,r:(acos(d)-d*(1-d*d)**.5)*r*r//.5
print(circleIntersection([0,0],[7,0],5))
#!r**2 ((CBD)-sin(CBD))
print(circleIntersection( [245284 , 630489] , [373033 , 548772] , 177818))
exit()
r = 5
c1,c2 = [0,0],[7,0]
a,b = c1,c2
arcsine_power_series = lambda x: x+1/6*x**3+3/40*x**5 #+ 15/336 * x**7
print(arcsine_power_series)
S = arcsine_power_series
d = lambda a,b: ((a[0]-b[0])**2+(a[1]-b[1])**2)**0.5
C = lambda: ((4*r**2-d(a,b)**2)**0.5)*0.5 
res = lambda a,b,r: int(2 * r**2 * (S(C()/r)) - C() * d(a,b))
int(2 * r**2 * (S(C()/r)) - C() * d(a,b))
print(res(c1,c2,r))
((a[0]-b[0])**2+(a[1]-b[1])**2)**0.5
#********************************************************************************************************************************
# bruh = lambda x: (lambda y: x+y)
# print(bruh(5)(4))
#sol = lambda a,b,r: lambda d: 

def circleIntersection(a,b,r):d=min(1,((a[0]-b[0])**2+(a[1]-b[1])**2)**.5/2/r);return(1.5708-(d+1/6*d**3+3/40*d**5+ 15/336 * d**7)-d*(1-d*d)**.5)*r*r//.5

def circleIntersection(a,b,r):d=min(1,((a[0]-b[0])**2+(a[1]-b[1])**2)**.5/2/r);a=0;return(1.5708-(d+1/6*d**3+.08*d**5)-d*(1-d*d)**.5)*r*r//.5
#print(f(0,0,7,0,5))#! Good precision !
print(circleIntersection([-5, 0],[5, 0],3))

#2*( (1/2)(CBD)r1^2 - (1/2)r1^2.sin(CBD))
from math import *
#d+1/6*d**3+.08*d**5 arcsin
# (e**(X*1j)).imag
def circleIntersection(a,b,r):d=((a[0]-b[0])**2+(a[1]-b[1])**2)**.5;y=(r*r*(4-d*d))**.5 *.5*r;t=y/r;S=2*(t+1/6*t**3+.08*t**5);return S #2.718**(S*1j).imag
#r**2 ((CBD)-sin(CBD))

print(circleIntersection([-5, 0],[5, 0],3))
