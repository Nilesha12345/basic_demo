@echo off 
echo %1 
echo %2
echo %3
echo %4
echo %5
cd %2 
md /app
git clone %1 %2
ping 127.0.0.1 -n 10 > nul
docker build -t %3 . --no-cache
docker tag %3 %5:%4
ping 127.0.0.1 -n 20 > nul
docker push %5:%4 --disable-content-trust