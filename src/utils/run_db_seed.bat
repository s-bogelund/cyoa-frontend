@echo off

REM Set the current directory as the script directory
set SCRIPT_DIR=%~dp0

REM Create a virtual environment in the current directory
python -m venv "%SCRIPT_DIR%venv"

REM Activate the virtual environment
call "%SCRIPT_DIR%venv\Scripts\activate"

REM Install necessary Python packages
pip install Faker
pip install requests

REM Run the script using a relative path
python "%SCRIPT_DIR%cyoa_database_seed.py"

REM Deactivate the virtual environment
call "%SCRIPT_DIR%venv\Scripts\deactivate"

REM Clean up: Remove the virtual environment
rmdir /s /q "%SCRIPT_DIR%venv"

REM Optional: Add additional cleanup commands here for other generated files

echo Script execution completed and cleaned up!
pause
