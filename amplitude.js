(function(e,t){
  var n=e.amplitude||{_q:[],_iq:{}};
  var r=t.createElement("script");
  r.type="text/javascript";r.async=true;
  r.src="https://cdn.amplitude.com/libs/amplitude-8.17.0-min.gz.js";
  r.onload=function(){
    if(e.amplitude.runQueuedFunctions){
      e.amplitude.runQueuedFunctions();
    } else {
      console.log("[Amplitude] Error: could not load SDK");
    }
  };
  var i=t.getElementsByTagName("script")[0];
  i.parentNode.insertBefore(r,i);
  function s(e,t){
    e.prototype[t]=function(){
      this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
      return this;
    }
  }
  var o=function(){this._q=[];return this;};
  var a=["add","append","clearAll","prepend","set","setOnce","unset"];
  for(var c=0;c<a.length;c++){s(o,a[c]);}
  n.Identify=o;
  var u=["init","logEvent","setUserId"];
  function l(e){return function(){
    n._q.push([e].concat(Array.prototype.slice.call(arguments,0)));
  }}
  for(var p=0;p<u.length;p++){n[u[p]]=l(u[p]);}
  e.amplitude=n;
})(window,document);

// Initialize Amplitude with your API Key
amplitude.init("YOUR_API_KEY_HERE");

document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.getElementById("register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", function () {
      amplitude.getInstance().logEvent("Register Button Clicked");
      alert("Amplitude event tracked!");
    });
  }
});
