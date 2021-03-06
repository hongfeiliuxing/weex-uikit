<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>weex-vue-demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="format-detection" content="telephone=no, email=no">
  <style scoped>
  ._btn {
    display: none;
    position: fixed;
    right: 40px;
    bottom: 40px;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #ff3083;
    border-radius: 50%;
    box-shadow: 1px 3px 13px 0px #ce4e81;
  }

  ._mask {
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
  }

  ._box {
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  .tip {
    display: none;
    padding: 20px;
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
    background-color: #489cff;
    border-radius: 4px 4px 0 0;
    color: #fff;
  }
  #qr {
    max-width: 320px;
    margin: 10px auto 2px;
    display: none;
  }
  #link {
    margin: 2px auto 10px;
    text-align: center;
  }
  </style>
</head>
<body>
  <p class="_btn" id="btn">
    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fill="#fff" d="M91.74 64.065h359.402c36.543 3.564 27.732 66.995 27.732 108.206v196.197c0 42.646 8.146 94.91-20.498 107.023-18.657 7.884-68.726 2.376-92.867 2.376h-190.546c-44.054 0-104.198 10.362-110.96-27.349v-359.105c4.926-13.374 13.588-23.068 27.736-27.349zm49.452 80.858v255.654h259.294v-259.223h-258.086c-1.41.197-1.316 1.88-1.208 3.569zm432.959-80.858h359.401c14.661 5.363 24.733 15.25 27.737 32.105v349.593c-3.29 14.529-10.982 26.929-25.327 30.913-23.439 6.508-62.398 1.193-90.452 1.193h-184.523c-27.828 0-69.069 5.777-91.657-1.193-31.895-9.837-22.913-71.214-22.913-114.152v-183.119c0-49.57-11.038-108.413 27.733-115.339zm49.45 80.858v255.654h259.3v-259.223h-258.095c-1.403.197-1.309 1.88-1.205 3.569zm-364.22 74.915c36.111-6.722 64.507 17.335 65.127 49.936.808 43.003-43.733 66.619-78.391 48.757-39.66-20.438-37.051-89.336 13.264-98.693zm482.409 0c85.067-15.671 83.434 117.147 0 103.446-53.091-8.713-54.804-93.354 0-103.446zm-293.058 740.807h-355.787c-14.772-4.47-24.746-13.657-28.942-28.541v-357.918c3.512-10.477 11.619-22.694 24.118-26.16 23.609-6.551 62.171-1.192 90.455-1.192h184.518c27.273 0 66.962-6 91.661 1.192 33.417 9.722 24.119 70.106 24.119 112.963v189.065c-.001 46.253 10.105 106.459-30.142 110.591zm-307.541-332.953v255.659h259.294v-259.229h-258.086c-1.41.207-1.316 1.885-1.208 3.57zm820.097-48.75v99.882c-2.812 33.69-.402 72.534-1.201 108.207h-256.889v-58.262c-24.123-2.782-53.467-.402-79.594-1.197-2.816 75.312-.401 155.772-1.209 233.066h-47.036c-40.441-7.996-28.942-67.825-28.942-115.344v-184.307c0-27.713-5.692-69.265 1.205-91.563 8.23-26.605 43.903-22.593 79.602-22.593h174.87v158.148h80.807c.799-52.318-1.607-107.81 1.201-158.148 38.887-2.268 74.907-1.708 77.188 32.11zm-695.877 122.47c38.562-4.209 70.433 32.336 55.48 72.543-20.738 55.723-119.873 34.775-101.308-35.677 5.126-19.474 19.956-34.037 45.828-36.866zm524.623 259.232h-86.836c.803-30.529-1.607-64.218 1.209-92.755h85.627v92.755zm171.254-92.755v60.646c-3.354 16.905-13.379 27.229-28.943 32.105h-61.508c.803-30.524-1.607-64.214 1.209-92.751h89.242v-.001zm0 0"/>
    </svg>
  </p>
  <div class="_mask">
  <div class="_box">
    <p class="tip">用playground扫码打开</p>
    <img id="qr" src="" alt="qrcode">
    <a id="link" href=""></a>
  </div>
  </div>
  <div id="root"></div>
</body>
<script src="//unpkg.com/jr-qrcode"></script>
<script>
  if (WXEnvironment.platform === 'Web') {
    var link
    if (/github.io/.test(location.href)) {
      link = location.href.replace(/#\//, 'app.weex.js')
    } else {
      var ip = '<%= process.env.IP %>:' + location.port
      link = 'http://' + ip + '/app.weex.js'
    }
    var code = jrQrcode.getQrBase64(link);
    document.getElementById('qr').src = code;
    document.getElementById('qr').style.display = 'block'
    document.getElementById('link').setAttribute('href', link)
    document.getElementById('link').textContent = link

    //添加悬浮
    document.getElementsByClassName('tip')[0].style.display = 'block'
    document.getElementById('btn').style.display = 'flex'
    var mask = document.getElementsByClassName("_mask")[0];
    document.getElementById('btn').onclick = function () {
        mask.style.display = "flex";
        if(event && event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
    document.onclick = function (event) {
        if(event.target.className != ""){
            mask.style.display = "none";
        }
    }
  }

</script>
</html>
