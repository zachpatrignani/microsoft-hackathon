import logging
import sys

def config_logger():
    str_format = (
        '[%(asctime)s:%(msecs)03d] [p-%(process)05d] '
        '[%(levelname)s] [%(filename)s:%(lineno)s] %(message)s'
    )
    date_format = '%Y-%m-%d %H:%M:%S'
    logging.basicConfig(
        format=str_format,
        datefmt=date_format,
        level=logging.INFO
    )

    old_factory = logging.getLogRecordFactory()
    def change_record_factory():
        def record_factory(*args, **kwargs):
            record = old_factory(*args, **kwargs)
            return record
        return record_factory

    logging.setLogRecordFactory(change_record_factory())
