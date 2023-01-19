import os
import time
# automate a add comit an push procces of an git repo with python code
os.system('git add .')
time.sleep(0.5)
os.system(f'git commit -m message')
time.sleep(3)
os.system('git push')