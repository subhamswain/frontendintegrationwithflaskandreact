import requests
BASE="http://127.0.0.1:5000/"
# data=[{"likes":10,"name":"Tim","views":20000},
#       {"likes":70,"name":"becky","views":40000},
#       {"likes":80,"name":"seth","views":80000}]
# for i in range(len(data)):
#     response=requests.put(BASE + "video/"+str(i),data[i])
#     print(response.json())

# input()
response=requests.patch(BASE + "video/2",{"views":7544,"likes":100})
print(response.json())

