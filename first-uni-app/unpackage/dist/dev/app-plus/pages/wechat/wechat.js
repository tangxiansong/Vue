
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content { text-align: center; height: ",[0,400],"; }\n.",[1],"title { font-size: ",[0,36],"; color: #8f8f94; }\n",],undefined,{path:"./pages/wechat/wechat.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/wechat/wechat.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      