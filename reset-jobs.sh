#ps -aux | grep -v grep | grep "queue:work" get process id and kill it
process_id=$(ps -aux | grep -v grep | grep "queue:work" | awk '{print $2}')
if [ ! -z "$process_id" ]; then
    kill $process_id
    echo "Killed process with ID: $process_id"
else
    echo "No process found with 'queue:work'"
fi