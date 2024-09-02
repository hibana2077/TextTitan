import requests
from bs4 import BeautifulSoup
import os
from langchain_groq import ChatGroq
from typing import Optional

from langchain_core.pydantic_v1 import BaseModel, Field

os.environ["GROQ_API_KEY"] = ""
llm = ChatGroq(model="llama-3.1-70b-versatile")
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

article_a = ""

for t in texts:
    if t.text not in REPLACE_LIST:
        article_a += t.text

# Pydantic
class Article(BaseModel):

    Topic: str = Field(description="The topic of the article.")
    Rewrite: str = Field(description="The rewritten article.")

structured_llm = llm.with_structured_output(Article)

out = structured_llm.invoke(f"Please rewrite this article that make it more suitable for IELTS academic reading article. The original article : {article_a}")

print(out)