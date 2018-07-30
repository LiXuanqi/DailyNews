from dotenv import load_dotenv, find_dotenv
from pymongo import MongoClient
import os

load_dotenv(find_dotenv())
MONGO_DB_HOST = os.environ.get('MONGO_DB_HOST')
MONGO_DB_PORT = os.environ.get('MONGO_DB_PORT')
DB_NAME = os.environ.get('DB_NAME')

client = MongoClient("%s:%s" % (MONGO_DB_HOST, MONGO_DB_PORT))


def get_db(db=DB_NAME):
    db = client[db]
    return db
