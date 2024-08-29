import requests
from bs4 import BeautifulSoup

REPLACE_LIST = [
    " ",
    "Search the news, stories & people",
    "Personalise the news and",
    "stay in the know",
    "Emergency",
    "Backstory",
    "Newsletters",
    "中文新闻",
    "BERITA BAHASA INDONESIA",
    "TOK PISIN"
]

target_url = "https://www.abc.net.au/news/2024-08-28/inflation-july-2024-declines-to-3-5-per-cent/104274908"

response = requests.get(target_url)

soup = BeautifulSoup(response.text, "html.parser")

texts = soup.find_all("p")

for t in texts:
    if t.text not in REPLACE_LIST:
        print(t.text)