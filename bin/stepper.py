import sys
import time
import RPi.GPIO as GPIO

# pulse pin of the stepper driver
pulse=40

y=int(sys.argv[1])
x=int(sys.argv[2])
sleep=float(sys.argv[3])

GPIO.setwarnings(False)

GPIO.setmode(GPIO.BOARD)

GPIO.setup(pulse, GPIO.OUT)

for i in range(y):
	for j in range(x):
		GPIO.output(pulse, GPIO.HIGH)
		time.sleep(sleep)
		GPIO.output(pulse, GPIO.LOW)
		time.sleep(sleep)

GPIO.cleanup()
