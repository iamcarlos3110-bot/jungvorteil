import urllib.request
import urllib.parse
import http.cookiejar
import json
import re

cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')]

try:
    resp = opener.open('https://login.ionos.es')
    html = resp.read().decode('utf-8')
    print("Page fetched successfully. Status:", resp.status)
except Exception as e:
    print("Error:", e)
