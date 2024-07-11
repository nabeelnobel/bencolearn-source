import pandas as pd
import json

# x = input("contoh: ").lower()

class KosakataRejang:
    def __init__(self, awal, akhir):
        self.awal = awal
        self.akhir = akhir

    def get_info(self):
        info = {
            "awal": self.awal,
            "akhir": self.akhir
        }
        return info

df = pd.read_csv('question/kamus/dataRejang.csv', delimiter=';')

from_array = df['from'].values
to_array = df['to'].values

res = [KosakataRejang(from_item, to_item).get_info() for from_item, to_item in zip(from_array, to_array)]


res = json.loads(json.dumps(res))

def translateR(x):
	consonant_letters = 'bcdfghjklmnpqrstvwxyz'
	vocal_letters = 'aeiou'

	output = ""

	for i in range(len(x)):
		output += x[i]
		if x[i] in consonant_letters:
			if x[i] not in ['n', 'r'] and (i < len(x) - 1 and x[i + 1] not in vocal_letters and x[i:i + 2] != 'ng' and x[i:i + 3] != 'eak') or (i == len(x) - 1 and x[i] not in ['n', 'r'] and x[-2:] not in ['ng'] and x[-3:] not in ['eak']):
				output += '0'
	x = output
	#change consonant R
	result2 = ""
	for i in range(len(x)):
		if x[i].lower() == 'r':
			if i + 1 == len(x) or x[i + 1].lower() not in vocal_letters:
				result2 += '!'
			else:
				result2 += x[i]
		else:
			result2 += x[i]
	x = result2

	# change consonant N
	result3 = ""
	for i in range(len(x)):
		if x[i].lower() == 'n':
			if i + 1 == len(x) or x[i + 1].lower() not in vocal_letters and x[i+1].lower() not in ['g', 'gk']:
				result3 += '$'
			else:
				result3 += x[i]
		else:
			result3 += x[i]
	x = result3

	result = ""

	for i in range(len(x)):
		if x[i:i+2].lower() == 'ai':
			result += 'a'
		elif x[i].lower() in 'eiou' and (i == 0 or x[i-1].lower() not in consonant_letters):
			result += 'a' + x[i]
		else:
			result += x[i]



	x  = result

	#change basic
	for i in range(len(res)):
		x = x.replace(res[i]['awal'], res[i]['akhir'])



	return x