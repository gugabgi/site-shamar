@echo off
echo ==========================
echo 🚀 Deploy Git
echo ==========================

set /p msg=Digite a mensagem do commit: 

git add .
git commit -m "%msg%"
git push

echo ==========================
echo ✅ Deploy concluido!
echo ==========================
pause