/*!build time : 2013-10-15 5:34:04 PM*/
KISSY.add("gallery/blur/1.0/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a),b._init()}var e,f,g,h,i=b.all,j=document.createElement("canvas"),k=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],l=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];return a.extend(d,c,{_init:function(){var a=this;j.getContext&&a._render()},_render:function(){var a=this,b=a.getAttrVals(),c=i(b.source);if(c.length){var d=c.one("img");d.length&&d.attr("src")&&(g=d.width(),h=d.height(),i(j).css({width:g,height:h,position:"absolute",top:"0",left:"0"}).appendTo(c),e=j.getContext("2d"),f=new Image,f.src=d.attr("src"),f.onload=function(){j.width=g,j.height=h,e.clearRect(0,0,g,h),e.drawImage(f,0,0),a._stackBlurCanvasRGB(j,0,0,g,h,b.radius)})}},refresh:function(a){var b=this;e.clearRect(0,0,g,h),e.drawImage(f,0,0),b._stackBlurCanvasRGB(j,0,0,g,h,a.radius)},destroy:function(){j.remove(),j="",e="",f=""},_stackBlurCanvasRGB:function(a,b,c,d,e,f){var g=this;if(!(isNaN(f)||1>f)){f|=0;var h,i=j.getContext("2d");try{try{h=i.getImageData(b,c,d,e)}catch(m){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),h=i.getImageData(b,c,d,e)}catch(m){throw alert("Cannot access local image"),new Error("unable to access local image data: "+m)}}}catch(m){throw alert("Cannot access image"),new Error("unable to access image data: "+m)}var n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H=h.data,I=f+f+1,J=d-1,K=e-1,L=f+1,M=L*(L+1)/2,N=g._blurStack(),O=N;for(p=1;I>p;p++)if(O=O.next=g._blurStack(),p==L)var P=O;O.next=N;var Q=null,R=null;t=s=0;var S=k[f],T=l[f];for(o=0;e>o;o++){for(A=B=C=u=v=w=0,x=L*(D=H[s]),y=L*(E=H[s+1]),z=L*(F=H[s+2]),u+=M*D,v+=M*E,w+=M*F,O=N,p=0;L>p;p++)O.r=D,O.g=E,O.b=F,O=O.next;for(p=1;L>p;p++)q=s+((p>J?J:p)<<2),u+=(O.r=D=H[q])*(G=L-p),v+=(O.g=E=H[q+1])*G,w+=(O.b=F=H[q+2])*G,A+=D,B+=E,C+=F,O=O.next;for(Q=N,R=P,n=0;d>n;n++)H[s]=u*S>>T,H[s+1]=v*S>>T,H[s+2]=w*S>>T,u-=x,v-=y,w-=z,x-=Q.r,y-=Q.g,z-=Q.b,q=t+((q=n+f+1)<J?q:J)<<2,A+=Q.r=H[q],B+=Q.g=H[q+1],C+=Q.b=H[q+2],u+=A,v+=B,w+=C,Q=Q.next,x+=D=R.r,y+=E=R.g,z+=F=R.b,A-=D,B-=E,C-=F,R=R.next,s+=4;t+=d}for(n=0;d>n;n++){for(B=C=A=v=w=u=0,s=n<<2,x=L*(D=H[s]),y=L*(E=H[s+1]),z=L*(F=H[s+2]),u+=M*D,v+=M*E,w+=M*F,O=N,p=0;L>p;p++)O.r=D,O.g=E,O.b=F,O=O.next;for(r=d,p=1;f>=p;p++)s=r+n<<2,u+=(O.r=D=H[s])*(G=L-p),v+=(O.g=E=H[s+1])*G,w+=(O.b=F=H[s+2])*G,A+=D,B+=E,C+=F,O=O.next,K>p&&(r+=d);for(s=n,Q=N,R=P,o=0;e>o;o++)q=s<<2,H[q]=u*S>>T,H[q+1]=v*S>>T,H[q+2]=w*S>>T,u-=x,v-=y,w-=z,x-=Q.r,y-=Q.g,z-=Q.b,q=n+((q=o+L)<K?q:K)*d<<2,u+=A+=Q.r=H[q],v+=B+=Q.g=H[q+1],w+=C+=Q.b=H[q+2],Q=Q.next,x+=D=R.r,y+=E=R.g,z+=F=R.b,A-=D,B-=E,C-=F,R=R.next,s+=d}i.putImageData(h,b,c)}},_blurStack:function(){var a={};return a.r=0,a.g=0,a.b=0,a.a=0,a.next=null,a}},{ATTRS:{source:{value:""},radius:{value:5}}}),d},{requires:["node","base"]});