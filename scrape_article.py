import requests
import re
import string
from bs4 import BeautifulSoup
import argparse
import sys

def parse_args():
    """
    Extract parameter values provided by user.
    """
    program_desc = "Scrape the contents of all paragraph elements on a web page and write them to a text file."
    url = "The url of the web page you would like to scrape."
    file_name = "The name to provide to the output file. If omitted, then a default name is given."

    parser = argparse.ArgumentParser(description=program_desc)
    parser.add_argument("--url", help=url, dest="url", type=str, required=True)
    parser.add_argument("--file_name", help=file_name, dest="file_name", type=str, default=None, required=False)
    
    return parser.parse_args()
    
    
# Do the parsing
args = parse_args()
url = args.url 
file_name = args.file_name

if file_name is None:
    file_name = url.split("/")[-1]

# Getting the data
try:
    r = requests.get(url)
except Exception:
    print("\n")
    print("The provided url could not be reached. Please ensure that the url is valid and try again.")
    print("\n")
    sys.exit()

# Loading page into BeautifulSoup
soup = BeautifulSoup(r.text, 'html.parser') 

contents = ''

# Getting the paragraphs
for p in soup.find_all('p'): 
    
    contents = contents + p.text
    
if contents == '':
    print("\n")
    print("No content was extracted. Script has ben aborted.")
    print("\n")
    contents = ' '
    # sys.exit()
    
# Opening a text file
file = open(file_name,"w")

# Writing the ps to the text file
file.write(contents)

# Closing the text file
file.close() 

#print("\n")
#print(f"Script complete. Article contents have been saved to {file_name}.txt")
#print("\n")


# 59976 - Automated Articles/Article-

# 59976 - Automated Articles/Bad-Article-

# python3 scrape_article.py --url https://apnews.com/cf80c5e08e6c4bba2557d221d7530a45 --file_name "59976 - Automated Articles/Article-89999-test.txt"