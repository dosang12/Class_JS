
        const cursor=document.querySelector("#cursor");
        const cStyle=window.getComputedStyle(cursor);
        const kitty1=document.querySelector("#m1")
        const kitty2=document.querySelector("#m2")
        const kitty3=document.querySelector("#m3")

        console.log(cStyle.width.split("px","1"))
        window.addEventListener("mousemove", function () {
            //마우스가 움직일때 포인터의 좌표값 얻기.
            //얻은 좌표값을 dom요소에 할당. 
            let cSize = [cStyle.width.split("px", "1"), cStyle.height.split("px", "1")];
      let pointer = event;
      let pP=[pointer.clientX,pointer.clientY];
      let pObj={
        x:pointer.clientX,
        y:pointer.clientY
      }
      console.log(pP, pObj);

      cursor.style.marginLeft = -(cSize[0] / 2) + 'px';
      cursor.style.marginTop = -(cSize[1] / 2) + 'px';
      cursor.style.left = pP[0] + 'px';
      cursor.style.top = pP[1]  + 'px';

      kitty1.style.left= pP[0]+50 +'px';
      kitty1.style.top= pP[1]+50 +'px';

      kitty2.style.left= pP[0]*1.5 +'px';
      kitty2.style.top= pP[1]/2 +'px';

      kitty3.style.left= pP[0]*0.8+'px';
      kitty3.style.top= pP[1]-100 +'px';
      
    })
  