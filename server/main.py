import logging
import threading

from utils import logger
from api import app

def run():
    logger.config_logger()
    logging.getLogger(__name__)
    threading.Thread(target=app.init).start()

if __name__ == '__main__':
    run()
