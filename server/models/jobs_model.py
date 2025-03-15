from dataclasses import dataclass
from enum import Enum

@dataclass
class JobEmploymentType(str, Enum):
    PART_TIME = 'Part-Time'
    FULL_TIME = 'Full-Time'
    CONTRACT = 'Contract'

@dataclass
class JobWorkType(str, Enum):
    REMOTE = 'Remote'
    HYBRID = 'Hybrid'
    ON_SITE = 'On-Site'
