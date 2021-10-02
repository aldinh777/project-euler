from pathlib import Path
import json
import re

filepath = Path(__file__).parent.joinpath('numbers.json').absolute()
numbers = json.load(open(filepath))

def numberLetter():
    return sum([len(re.sub('[ -]', '', a)) for a in numbers.values()])

print(numberLetter())
