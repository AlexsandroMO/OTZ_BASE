from flask import Flask, render_template, redirect, url_for, request,send_from_directory
import os
import calc_all as CalcCode
#import numpy as np

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
  return render_template('home.html')

@app.route('/calc_drop')
def calc_drop():
  return render_template('calc-drop.html')

@app.route('/ISA')
def ISA():

  table_data = CalcCode.read_isa()
  print(table_data)

  return render_template('isa-51.html', table_data=table_data)

@app.route('/construction')
def construction():
  return render_template('construction.html')


if __name__ == '__main__':
  app.run(host='127.0.0.1', port=5000, debug=True)
#app.run(host='0.0.0.0', port=8080)