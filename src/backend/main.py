from contextlib import asynccontextmanager
from langchain.text_splitter import RecursiveCharacterTextSplitter
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import redis
import random
import os
import time
import uvicorn
import requests
from fastapi.middleware.cors import CORSMiddleware

redis_server = os.getenv("REDIS_SERVER", "localhost")
redis_port = os.getenv("REDIS_PORT", 6379)
HOST = os.getenv("HOST", "127.0.0.1")

counter_db = redis.Redis(host=redis_server, port=redis_port, db=0) # string
user_rec_db = redis.Redis(host=redis_server, port=redis_port, db=1) # hash
question_str_db = redis.Redis(host=redis_server, port=redis_port, db=2) # list

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # pull model from ollama
    pass

@app.get("/")
def read_root():
    """
    A function that handles the root endpoint.

    Returns:
        dict: A dictionary with the message "Hello: World".
    """
    return {"Hello": "World"}

@app.get("/api/v1/welcome_message")
def welcome_message():
    """
    A function that handles the welcome_message endpoint.

    Returns:
        dict: message: "welcome message"
    """
    welcome_messages = [
        "Welcome Back!",
    ]
    random_message = random.choice(welcome_messages)
    return {"message": random_message}

if __name__ == "__main__":
    uvicorn.run(app, host=HOST, port=8081) # In docker need to change to 0.0.0.0