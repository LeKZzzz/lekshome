nohup gatsby develop -H 0.0.0.0 -p 8001 > myout.file 2>&1 &
echo $! > server.pid 