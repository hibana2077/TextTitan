import requests
from bs4 import BeautifulSoup
import os
from langchain_groq import ChatGroq
from typing import Optional

from langchain_core.pydantic_v1 import BaseModel, Field