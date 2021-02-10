#!/bin/sh
cd $HOME
mkdir spck
clear
echo "Copying all files from spck folder to termux. All files edited will be taken over by new files. If there's any new file in termux, it will be saved anyways."
cp ./storage/shared/Android/data/io.spck/files/* ./spck/ -r
echo "Completed copying from spck to termux!"
