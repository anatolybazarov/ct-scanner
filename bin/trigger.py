import RPi.GPIO as GPIO
import time
import sys

# x-ray machine trigger pin (to interface box)
trigger=37

GPIO.setwarnings(False)

GPIO.setmode(GPIO.BOARD)

GPIO.setup(trigger, GPIO.OUT)

GPIO.output(trigger, GPIO.HIGH)
time.sleep(float(sys.argv[1]))
GPIO.output(trigger, GPIO.LOW)

GPIO.cleanup()
