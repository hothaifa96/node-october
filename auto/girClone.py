import os
import webbrowser
import time
from pathlib import Path
# linux cmd dir -> ls
repo = input('whats the repo')
file_name=(repo[-repo[::-1].find('/'):])
p= Path()

files = [p1 for p1 in p.glob('*') ]

if not file_name in  files:
    result =os.system(f'git clone {repo}')
    time.sleep(7);
    os.system(f'cd {file_name}/client/app && npm i');
    time.sleep(10);
    os.system(f'cd {file_name}/client/app && npm start')
    webbrowser.open('http://localhost:3000')
