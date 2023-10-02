#!/usr/bin/python

# -*- coding: UTF-8 -*-

# The Access log file to write to. '-' means log to stdout.
accesslog = '-'

# The access log format.
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s"'

# The Error log file to write to. Using '-' for FILE makes gunicorn log to stderr.
errorlog = '-'

# The granularity of Error log outputs.
# Valid level names are: 'debug' | 'info' | 'warning' | 'error' | 'critical'
loglevel = 'info'

# The logger you want to use to log events in Gunicorn.
logger_class = 'gunicorn.glogging.Logger'
