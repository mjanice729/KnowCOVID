import os
import subprocess 
from datetime import datetime
import re
import PYT_dictionary
import time

 
all_160_articles=[
    ['Article-1-vox', 'Article-2-vox', 'Article-3-vox', 'Article-4-vox', 'Article-5-vox', 
      'Article-6-vox', 'Article-7-vox', 'Article-8-vox', 'Article-9-vox', 'Article-10-vox',
      'Article-11-vox', 'Article-12-vox', 'Article-13-vox', 'Article-14-vox', 'Article-15-vox', 
      'Article-16-vox', 'Article-17-vox', 'Article-18-vox', 'Article-19-vox', 'Article-20-vox'],
     ['Article-21-bbc', 'Article-22-bbc', 'Article-23-bbc', 'Article-24-bbc', 'Article-25-bbc', 
      'Article-26-bbc', 'Article-27-bbc', 'Article-28-bbc', 'Article-29-bbc', 'Article-30-bbc',
      'Article-31-bbc', 'Article-32-bbc', 'Article-33-bbc', 'Article-34-bbc', 'Article-35-bbc', 
      'Article-36-bbc', 'Article-37-bbc', 'Article-38-bbc', 'Article-39-bbc', 'Article-40-bbc'],
     ['Article-41-buzzfeednews', 'Article-42-buzzfeednews', 'Article-43-buzzfeednews', 'Article-44-buzzfeednews', 'Article-45-buzzfeednews', 
      'Article-46-buzzfeednews', 'Article-47-buzzfeednews', 'Article-48-buzzfeednews', 'Article-49-buzzfeednews', 'Article-50-buzzfeednews',
      'Article-51-buzzfeednews', 'Article-52-buzzfeednews', 'Article-53-buzzfeednews', 'Article-54-buzzfeednews', 'Article-55-buzzfeednews', 
      'Article-56-buzzfeednews', 'Article-57-buzzfeednews', 'Article-58-buzzfeednews', 'Article-59-buzzfeednews', 'Article-60-buzzfeednews'],
     ['Article-61-nbcnews', 'Article-62-nbcnews', 'Article-63-nbcnews', 'Article-64-nbcnews', 'Article-65-nbcnews', 
      'Article-66-nbcnews', 'Article-67-nbcnews', 'Article-68-nbcnews', 'Article-69-nbcnews', 'Article-70-nbcnews',
      'Article-71-nbcnews', 'Article-72-nbcnews', 'Article-73-nbcnews', 'Article-74-nbcnews', 'Article-75-nbcnews', 
      'Article-76-nbcnews', 'Article-77-nbcnews', 'Article-78-nbcnews', 'Article-79-nbcnews', 'Article-80-nbcnews'],
     ['Article-81-apnews', 'Article-82-apnews', 'Article-83-apnews', 'Article-84-apnews', 'Article-85-apnews', 
      'Article-86-apnews', 'Article-87-apnews', 'Article-88-apnews', 'Article-89-apnews', 'Article-90-apnews',
      'Article-91-apnews', 'Article-92-apnews', 'Article-93-apnews', 'Article-94-apnews', 'Article-95-apnews', 
      'Article-96-apnews', 'Article-97-apnews', 'Article-98-apnews', 'Article-99-apnews', 'Article-100-apnews'],
     ['Article-101-npr', 'Article-102-npr', 'Article-103-npr', 'Article-104-npr', 'Article-105-npr', 
      'Article-106-npr', 'Article-107-npr', 'Article-108-npr', 'Article-109-npr', 'Article-110-npr',
      'Article-111-npr', 'Article-112-npr', 'Article-113-npr', 'Article-114-npr', 'Article-115-npr', 
      'Article-116-npr', 'Article-117-npr', 'Article-118-npr', 'Article-119-npr', 'Article-120-npr']
                 ]

print("Automating en masse ...")

# create a date folder in this directory
path = os.getcwd() + '/Test-Runs-Articles/'
today_date = datetime.today().strftime('%Y_%m_%d-%H_%M_%S')

os.mkdir(path + today_date)

# open Looking-for-good.txt and read the lines to list

with open('Looking-for-good.txt') as f:
    url_list = f.readlines()
url_list = [x.strip() for x in url_list] 

# for link in list 
    # create file name "Test-Runs-Articles/12092020/filename.txt"
    # run scrape script 

n = 0

for url in url_list:

    if url.count('www.') > 0:
        if url.count('.com') > 0:
            if url.count('www.') > 1:
                file_name = re.search(r'http://www.(.*?).com', url).group(1)
            else:
                file_name = re.search(r'https://www.(.*?).com', url).group(1)
        elif url.count('.org') > 0:
            file_name = re.search(r'https://www.(.*?).org', url).group(1)
    else:
        if url.count('.com') > 0:
            file_name = re.search(r'https://(.*?).com', url).group(1)
        elif url.count('.org') > 0:
            file_name = re.search(r'https://(.*?).org', url).group(1)

    file_name = f'Article-{n+1}-{file_name}'
    file_full_name = 'Test-Runs-Articles/' + today_date + '/' + file_name
    subprocess.Popen(['python3', 'scrape_article.py', '--url', url, '--file_name', file_full_name])
    n += 1
    if (n==121):
        break

print("The most recent news was successfully scraped!")

(time.sleep(20))

PYT_dictionary.classify_article(today_date, all_160_articles, url_list)


