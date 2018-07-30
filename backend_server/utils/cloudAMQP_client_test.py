from cloudAMQP_client import CloudAMQPClient
from dotenv import find_dotenv, load_dotenv
import os

load_dotenv(find_dotenv())

CLOUDAMQP_URL = os.environ.get('CLOUDAMQP_URL')

TEST_QUEUE_NAME = 'test'


def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test': 'demo'}
    client.sendMessage(sentMsg)
    client.sleep(10)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print 'test_basic passed!'


if __name__ == "__main__":
    test_basic()
