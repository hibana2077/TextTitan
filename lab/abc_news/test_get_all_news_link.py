import requests
from bs4 import BeautifulSoup

target_url = "https://www.abc.net.au/news"

response = requests.get(target_url)

soup = BeautifulSoup(response.text, "html.parser")

links = soup.find_all("a", class_="GenericCard_link__7kJcn Link_link__5eL5m ScreenReaderOnly_srLinkHint__OysWz Link_showFocus__ALyv2 Link_underlineNone__To6aJ")

for l in links:
    print(l["href"])