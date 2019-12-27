import time
import RPi.GPIO as GPIO
from firebase import firebase
GPIO.setmode(GPIO.BOARD)
GPIO.setup(16,GPIO.OUT)
GPIO.setup(11,GPIO.OUT)
firebase = firebase.FirebaseApplication('https://yourdatabaseUrl.firebaseio.com', None)

while True:
        resultl = firebase.get('light', None)
        resultf = firebase.get('fan', None)
        if(resultl==1):
                GPIO.output(16,True)
        if(resultl==0):
                GPIO.output(16,False)
        if(resultf==1):
                GPIO.output(11,True)
        if(resultf==0):
                GPIO.output(11,False)
