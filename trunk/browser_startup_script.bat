timeout 10

cd "C:\wamp\www\kioskv2\trunk"
"C:\cygwin64\bin\svn.exe" update

timeout 10
"C:\Users\lab\Desktop\Kiosk Mode - Chrome.lnk"
::start /d "C:\Program Files (x86)\Mozilla Firefox" firefox.exe