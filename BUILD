cd .../emsdk
./emsdk install latest-upstream
./emsdk activate latest-upstream
source ...
cd .../pocketsphinx.js
cmake -DEMSCRIPTEN=1 -DCMAKE_TOOLCHAIN_FILE=/home/mineorpe/voicedetect/emscripten/cmake/Modules/Platform/Emscripten.cmake -DWASM=ON -DDICT_BASE=./dicts -DDICT_FILES=keyphrase.dict -DHMM_EMBED=OFF
make
* EDITING keyphrase.list *
python3 ../emscripten/tools/file_packager.py ./pocketsphinx.js --embed keyphrase.list --js-output=keyphrase-list.js

COPY ALL TO scripts
