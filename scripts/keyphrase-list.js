
  var Module = typeof Module !== 'undefined' ? Module : {};
  
  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  var fileData0 = [];
fileData0.push.apply(fileData0, [79, 68, 73, 78, 32, 47, 49, 101, 45, 50, 48, 47, 10, 68, 86, 65, 32, 47, 49, 101, 45, 49, 48, 47, 10, 84, 82, 73, 32, 47, 49, 101, 45, 49, 50, 47, 10, 67, 72, 69, 84, 89, 82, 69, 32, 47, 49, 101, 45, 52, 48, 47, 10, 79, 84, 86, 69, 84, 32, 47, 49, 101, 45, 50, 48, 47, 10, 73, 71, 82, 65, 32, 47, 49, 101, 45, 50, 53, 47, 10]);
Module['FS_createDataFile']('/', 'keyphrase.list', fileData0, true, true, false);

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": []});
  
  })();
  