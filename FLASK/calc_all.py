import pandas as pd

df = pd.read_excel('static/media/ISA5-1.xlsx')
df = df.fillna('')

def read_isa():
  read_line = []
  for cont in range(len(df['A'])):
    read_line.append([df['A'].loc[cont], df['B'].loc[cont], df['C'].loc[cont], df['D'].loc[cont], df['E'].loc[cont], df['F'].loc[cont]])

  return read_line

read_isa()