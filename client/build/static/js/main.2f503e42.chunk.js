(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(n,o,t){},54:function(n,o,t){"use strict";t.r(o);var i=t(0),e=t(1),l=t.n(e),r=t(25),s=t.n(r),p=(t(35),t(6)),c=t(5),a=t(2),g=t(7),f=t.n(g),u=t(3),E="pick teams",C="quiz ongoing",b="quiz result",y="#191b20",d="#000",j="#536481",x="#666",h="#00dd6d",A="#dd0000",m={BIF:"#000",DIF:"#1e2652",FBK:"#d3cbab",FHC:"#6d2620",HV71:"#214878",IKO:"#1b3766",LHC:"#08305e",LHF:"#ffcc00",LIF:"#FFF",MIF:"#4f010a",OHK:"#81000f",RBK:"#0a441c",SAIK:"#8a661a",VLH:"#ca6028"};function F(){var n=Object(a.a)(["\n  color: white;\n  background: ",";\n  font-weight: bold;\n  width: 15%;\n  padding: 8px;\n  border-radius: 4px;\n  box-shadow: none;\n  font-size: 1em;\n  display: block;\n  border: none;\n  white-space: none;\n  margin: 0.25rem;\n\n  &:disabled {\n    background: #eee;\n    color: ",";\n  }\n"]);return F=function(){return n},n}var O=u.b.button(F(),(function(n){return n.selected?d:j}),x);function I(){var n=Object(a.a)(["\n  color: ",";\n  text-align: center;\n  margin: 1rem;\n"]);return I=function(){return n},n}var D=u.b.h1(I(),(function(n){return n.color||y}));function k(){var n=Object(a.a)(["\n  padding: 1rem;\n  margin: 2rem;\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n  //border-top: calc(","% - 22) solid blue;\n  border-top: 2px solid darkcyan;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid darkcyan;\n  border-left: 4px solid cyan;\n  background: transparent;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"]);return k=function(){return n},n}function v(){var n=Object(a.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return v=function(){return n},n}var w=Object(u.c)(v()),Q=u.b.div(k(),w,(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size}));function S(){var n=Object(a.a)(["\n  width: ",";\n  min-height: ",";\n  background-color: #d4ddeb;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(106,500,312)'%3E%3Cstop offset='0' stop-color='%23d4ddeb'/%3E%3Cstop offset='1' stop-color='%23ffffff'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='1660' height='1383.3' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.04'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  border-radius: 10px;\n  display: flex;\n  flex-wrap: ",";\n  flex-direction: ",";\n  align-items: center;\n  justify-content: ",";\n  align-content: center;\n  margin: 1rem;\n  padding: 1rem;\n"]);return S=function(){return n},n}var B=u.b.div(S(),(function(n){return n.width||"90%"}),(function(n){return n.minHeight||"2rem"}),(function(n){return n.flexWrap?n.flexWrap:"wrap"}),(function(n){return n.flexDirection?n.flexDirection:"row"}),(function(n){return n.justifyContent?n.justifyContent:"center"}));function P(){var n=Object(a.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ",";\n  background: seashell;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n"]);return P=function(){return n},n}var J=u.b.input(P(),(function(n){return n.inputColor||y}));function R(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: ",";\n  width: 100%;\n"]);return R=function(){return n},n}var z=u.b.div(R(),(function(n){return n.flexDirection||"column"}));function W(){var n=Object(a.a)(["\n  src: ",";\n  background-color: ",";\n  border-radius: 10px;\n  box-shadow: 0px -12px 0px 0px,\n    0px 12px 0px 0px ",";\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  margin: 1rem;\n"]);return W=function(){return n},n}var G=u.b.img(W(),(function(n){return n.src}),(function(n){return n.color||y}),(function(n){return n.color||y}));function U(){var n=Object(a.a)(["\n  flex: 100%;\n  background-color: ",";\n  margin: 2px;\n  height: 8px;\n\n  &:first-child {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n  }\n\n  &:last-child {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n  }\n"]);return U=function(){return n},n}function H(){var n=Object(a.a)(["\n  display: flex;\n  height: 10px;\n"]);return H=function(){return n},n}function q(){var n=Object(a.a)(["\n  width: 95%;\n"]);return q=function(){return n},n}var M={0:A,1:h,2:"lightgray"},K=u.b.div(q()),N=u.b.div(H()),X=u.b.div(U(),(function(n){return M[n.state]})),Y=function(n){var o=n.handleSelectTeam,t=n.selectedTeams,l=Object(e.useState)(null),r=Object(c.a)(l,2),s=r[0],p=r[1];return Object(e.useEffect)((function(){f.a.get("/api/v1/get-teams").then((function(n){var o=n.data.body;p(o)}))}),[]),Object(i.jsx)(z,{children:Object(i.jsx)(B,{children:Object(i.jsxs)(z,{children:[Object(i.jsx)("h1",{children:"Pick some teams!"}),Object(i.jsx)("p",{children:"All players from the selected teams will be included in the quiz."}),s?Object(i.jsx)(B,{children:s.map((function(n,e){return Object(i.jsx)(O,{selected:t.includes(n.team_code),onClick:function(){return o(n.team_code)},children:n.team_code},e)}))}):Object(i.jsx)(Q,{size:"2rem"})]})})})},L=t(15),T=t(13),V=t.n(T),Z=t(29),_=function(n){var o=n.playerImg,t=n.playerName,e=n.playerNumber,l=n.showPlayerNumber,r=n.correctAnswerGiven,s=n.width,p=n.team;return Object(i.jsxs)(B,{minHeight:l&&"30rem",flexDirection:"column",width:s,justifyContent:"flex-start",children:[Object(i.jsx)(G,{src:o||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADwCAYAAABFcSteAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABveSURBVHja7F13lBzFnf66e3La2Z3Nq11FlJCEhEAi6UQONhxnbDiCzUPGWIDPdwb7sEEY7kjmOMDW4+xHENjPMpbAgGw9ogVIBCORpFVCKK82S9q8OzM7se+PBbESG7pnOlR1/z7ePN5qumuqqr+vfqErCLIsyyAQCENCpC4gEEggBEJOcFAXGIdsVkZ9/UHs3t2InbsasHt3Izo7+3DDDRdjwRkzqYMYhEAxiH7o6urDpxt3obZ2Dz79ZCc21e5BX1/8yPfnnjMXt912JZxOB2KxfnT3xJBIJNHfnwQApJJpxOIJhEJ+CAIgiSIKCgIoKgqiqqoYwaCPOpkEwg9SqTQ2fLgDb735Kd55dzP27m2Gnt1bUhLGrJkTMP34cTj++HE44YSJGFNVQg+CBMIWNm/eiz+veBMvv7wBPT1RU+tSXl6E+fOn4aS5UzB//jRMnVoDQRDoIZFAjMfGjbvxqwefxYYNnzFbx6KiIE47dQZOP2MGFpwxC2PHltGDI4Hoi0QihXvu/SOWL/87eOu+cePKcfZZc3DxJafhpLmTybqQQLRFZ2cvvnftA9i8eS/3bamsjODb316IRdddiJKSMD1cEkh+6O2N4TuX343PPjtgqXY5nQ78y6Wn4/rrv4njjx9HD5oEkht+uPgRvPbah5Zu49lnz8Evfn41pk0bSw+cBKIcr7y6ATfe+Kgt2iqKAq644iwsueO7CIcDJBCi/+i48KLbsH17na3aXFxcgAfu/wEuumi+bZ87zcUaBe3tPbj55l/bThwA0NbWjR8ufgS33/4UUqk0WRA7IR5P4PDhLnT3xABZRjYrQxQFBAJeOF0ORIpCeHvtJty55Gm0tXfbfqA4+aQpePzxW1FaWkgCsRoamw5j7dpafPrJTuz4/ACam9vR1dVH5lElxowpwfPP3Y3q6lISiBXw/j+2YunSF/HhhztAoZY2KCsrxMoVd2HSpCoSCK/o6urDkjufxurV/yBG64CioiCeW3k3pk6tIYHwho0bd2PxjY+gtbUDAFBQ4MfUqTWI9vVj2/b9xG6NUFISxksv3oNx48pJILzg9dc/wo/+bSmSyRROOWU6brrxUixceAIkaSBZt2rVe/j3/3iM2K0RKisjWPXSfaisjJBAWMe6dbX4/vUPYcyYEtzz34tw5pmzj3yXzcp49bUNePzx1ZaYQ8USxo0rx19X3YdIJEQCYRV79jbhyivvwQ9vuBiLFl0Ep3NgJbEsy1iz5hM8/Mjz2LHjALFZJ8yZcxyeW3kXvF43CYRFrFjxFi64YB6KioJH/m3t2k14+JHnsWULWQwjcN55J+GpJ392xJ0lgTCKDz7YjocfXomPP9lJrDUYN990KW6//RoSCItobe3AHUuWYc2aT4ipJmLpb36Myy5bQAJhCevXb8dNN/8a7e09xFCT4XI58cJf/gtz5hxHAmEBr7/+EW7+0W9sO5mORRQXF+DVVx5ERQX/6V+uI6q3395E4mAQbW3duP4H/4tEIkUCMQvbt9fhxpseJXEwiq1b9+HOXz5NAjEDnZ29uP4HDyEeTxATGQa5WCZAlmX89Ke/Q1NTGzGQYdxyy+W49ZbLSSBG488r3sKaNz8lBjKO3bsaj9qHmFdwlcVqbm7HOefeaomOtwMmTazC00/fhgkTKsiCGIG77n6GxMER9uxtwmXf/iV27mwggeiN997fijfe+JhYxxna23vwvWsf4HZdPxcCyWZl3H//cmIbp2hpacctt/yWBKIXXnzpXVtuu2MlrFtXy+U8OeYFkslk8dhjLxHDLID/++0qEojWeOWV9di/v4XYZQFs3Libu30BmBfIE0++TMyyEFaufJsEohV27DiArVv34brrLsRTT/7MNnsxWRmrVr3PVaqe6ReFDz20AiUlYSxadBEAYMuWvfjmxbcTyzjHT37yHfz01iu4qCvT56QvXDgb8+dPO/J3eXmReR3lEBAKSSgISQgGJfh8Enw+Ec3NSeza3Y9slnZuHA2bNj6F4uICrurMtEAGiwMANm/ZZ5zvKQKFhQ5EIk5Eihzw+yUMdZxfdbUbkYgTO3fF0daWIhWM4jIvWDCLBKIXtm7VVyCCMCCKygoXSkqccDiUHXDp84mYM9uPzs406g4k0NGRQjZLgjgWn39eTwLRE3q9LHQ4BFRVulBd7YbXm3veorDQgcJCBzIZGdFoFum0DFkGJAcgiQIcjoGPJAkQRSCbBeLxDDo702hrT6OtLQUr77G9Z28Td3XmSiBab/4mSQKqq10YN9YDp1PQtNxQSFLkxvn9Evx+CWPGuNHfn8WB+gQaGhKWFMqBuoMkEL3Q1xdHY+NhzcorLnZi2lQvPB52Mt0ej4gpk70YU+XCtu0x9PRk8nYZnc4Bi/XlACCKAiADWXnAuiWTMlIp2ZAkQ3NLOwlEL+zc2aDJGR+SJGDqFC8qK13MttXvlzDv5CB27oyjoTExLPk9HhE+nwifV4LXK8LtFuD2iHC7RbhcA8JQilRKRjSaQVdXGu3taXR2ar/Wv62tmwSim/+6J3//1e0eCKaDQYn59goCMHWqF06XgKamJIJBCYGABL9fPPJ/UdTOLXQ6BYTDDoTDDowbC0SjGezbn8DBg0nNfqO3N0YC0Qt79zXn5764RZx0UiCvIFwvjGQXJ0zwYMIEj/4/NIQVmznDh/IyJ7ZtjyGT0cYF6+uLIxDwciMQbhZM7d7VmHsjRQGzZ/sNFYes4sPyD5WUODH3xIDilPdoiMX6ubIg3AgknxThlMkezdwqQ0hv6A+NjlBIwrSpPk3KcrtdJBCtkU5ncs5gFRY6UDXGPSqX8uajUtIyRHw1KCtzoqTEmXc5Pp+bBKI1WlrakU7nlvKcONGjiJuaui8cEV9VX+YZC3m97iOHG5FANEQ+C6bCYYdlRnGzEQhIKAznTvCSkjB3beZCIAfqD+V0nyAQ8bVGaVnubtbgE8B4ARf2rr4+tykKal6U2R1KX8JGiuxlQbgQCO3Dqz/xlccRIrxeEfG4+unKZEF0QmuOc3hE0eak18mAhsMOxOPJHO4LUAyii0AOduYoEIEZQo/0UXqd/MUEQ8Xq0CneChdIOQqLP4Ewb0FkWUZrawdzMYiiUVxQlhRQ5wbJGl+XS7CdG20KC8nF0hzt7T05nyIlCDoRH6Zz1FR4PCI8HhH9/eriEHKxdEBzc+4B+uD5Q8rcF8oBKye7ejcrFPRx107mLUhbW+5HO0sSiPQ6Gb9AQAKgbpOKIAlED4F05SEQeg+il9fn9+dgQUJ+EogeMYhdBSIPivWZCXXkgQrlsnQgFCILojk6Ons1iUF4HsVl1iolDyxAUwseXSzmg/Surr6c73UaKBDDFkgxUilRHFjCrAb9/UkSiNbo7o7mbkE02MqHyYm/jFTKq3JHmPqGQyQQrdGTh0BGsiBEfA0EojIOqatrpRhEa/RFc98q3+kSzOeThbPMPr86gTRyaEGYF0g0mvsif12DdHq9ojrVSxvH6YB4PJHzvS6XoIzMAhFf8bgwqH+CAXUCyXVOHcUgOlkQl1NURnhabQhZVvY5dgDy+UQSiJnIZHI7R8DlEiy7HkRv4qtBUZHyJbg9PVESiOZBeo7n2bndou1Jb8Q0tLJSNQKJkUC0J0NuT5mlXdtZGe31QCgkKQ7WSSAMgaU9eHkkvhpMmKBsM7hkMkUC0RoOR27LO705WhA1ZLU68ZWiOOLMeZUhCSRvS5DbVpX+Y15iqSUzEX+IAWGEz9ixbhKIGXA6c7MgPp9kazJrRXylGfCCAoeqlC8JRCPkstDf4xE1PXPQzsRXU3BxsZMEYjSKikKq7+HhBCm9SS+boKjiyOgCyTVtb1oMzHoFIxH1AgmHHVwSn8/CBw1MIQkul4BkUh4hscGXv8u8BamoiKgXFUMZFdNHewP5KAB57f5OAskBNTWlKoNzMed3IEq5lhM3tS6cURQUWEsgzLemplqdQIYKFLXkk6yn62KBbFvBKBaEtwN0mK/t+PEVKoN6hzYHYxJygs87kEFMpYbuRI+HzijUXCBKRx1JEhAKOUwICKwPNS9aQxbKInIx1WTy5DGKrg2FJIgCEV9r0qtNPAWDDhKIkZg5c4Ki68IFDmI9zJ8jFiALYizmnjhZmUDCErdk1oX4qiYTqDlWYeRPMGCdKSdcDLlz544uEFFky7SrHaF1GdFltRkHbSrhcglwuwUkEvz7tVxIfdKkKhRHCka8xu+XDFliy8YUdxbeEgqjPg+yIAZBEAScdvoMrF79jxECQykv0jNid3hyDkcWiE9ExxB7NLzx97fwwgt/QywWg9/vQ01NNU49dR7OXLgAksTeeM2Ns/hPC2aNkjmRGB3tAeWvzHmEMGRLfMNYkBUr/oJYbGDpbTQaw44dO/HMM8vx6K8fY3KeFjcCOffcuSOOMAG/xJGbw4cYlLVOHsbF+vqzqqpyIZVMD1lQ7aat+OCDD0kgStHc3ILa2i04fHjgCLZIJISTT546TIAuaOjzWvttom7RyzE3H7vkORJxYOIEz4hFvPfeeopBRkN3dw+efPL32Lx525H445RTTsaiRd/FBRecjA0bPvu69QiIEAR5lIBS5pbQSsJlWetC8+w2SRLg9YqIx7PweERMmewd9Z79++tIICMhlUrhwQcfRUND46A4Qsb69R+iubkZ1133/aHjj1G3wJS5I31O5TE2edLnGxDIpEkeRfsk9/VFEY/H4fV6mXlWTLlY7723/ihxDMaBAw1YvXrVkG5WICAxQ3wWV/qZBZ9PQjAooahQ+Tjc359gqg1MCWTjxtoRv9+0aQtOnFOtKCBknvgyLD950ucTUaJynXo2m2WqDUy5WE1NzaNeU3dgG3w+D2Kx/qMehNluDqPenKnwekT4FHhLgzOOXq+HLMhIPuioJjgexayZVUf+9njEo06zJTeHIYF4RXg8oqr3UG43W/trMWVBRFFQNDCLUtdR1kMe6mJBBfEJkGVAEJRfq4hcKg8wcrvdkCS2pqgwZUG8Pt/IA/MXfzikFGYcX/2Ve2XBtd1aEl/pbAKzZx4UFoaZ6z+mBOL3+RWTuaxM/OIeCXaEFfcFLigIkUBGHkEKFF+bSnUiFJKY2sXdKNJbdSvVcJg9gTAVgxQXq9sDa9xYNxf7wdLewPy6WEwJpKioUOWI4yDi82QhR/k+VEAWRFOBEOn5IL5iDyISIYFoLRBZl9l8RGYzKqDWxbadQAb7oLJsJVbYm/h6xaC2E4jb7SYXhyXiG/jjkiSiqIiC9BHh8XiI9LaowNcRiRRBZPBge6YEwtpENSK+cVUtLStlsp5MCUQQBDidDqRSaSI9p/FTrtUtZ1QgzNk0v99v2IM0daoWA3PFZIaqW1paTBZECYLBILq6umkkN5D4LPRXaWkJWRAlKIoUGjeQcraqj4mq6lSJsjISiCKMHz/WIkyyoLunYyVKSsjFUoQJIwnEom6O3d1Cr9cDv99HAlGCSZMmQIDA7HHBFAtpDxZn8TLrYoXDBdq4Wby7OYBFVkCO3quRSCEJRA3mzp2tmctsyCYOI5GZq+171VRW+bWjXVHI4BQTpgUyb96JfAWrMuvukNbmSdZ08GE1QGdWIGPGVI4crHPnP7HmGMrGd9UIhZUx+g6EWYEAwDnnLrQp8dW4M/oaRqMKrqgoJ4GoxYIzTkEwELAw8Y0Y7QWV3SQYPvAIgoDq6ioSiFq4XC5cfPEFFia+ESXKKguWDR94qqur4PG4SSC54MILz0YoFNSYzNr6DtqXqFtVdYCQdwnTp09hevhjWiButxvf+tY3NR5ztUlNqi9Rt6qabD3V63TwZ968E0kg+eD8889GTU0Vg+4LK6O4+c5jrs0qLS0mC5IvJEnE4sXXjXiAp+lZGpukC7SuwFVXXgZBEEgg+WLixPG4/IpvcX6UgcAE6VlZBHbeeQtx2mnzmOeeA5zg0n++CI2NzcOfhMr8SC4beJdBVVe531g4XICZM6fj/PPPxJQpk7jgnSDL/Gy0k81msWzZcrz11rvgHVaeFbx8+e/gdrsRjcbQ1xeFKIoIh0NwOp3cPSeuBPIlamu3YcWKF1FXV28PMnNhIb/C0qUPoKKiDFaAg8dKz549A7Nnz0BDQxP27t2P7u5eBIMBHHfcBDzxxB+we/c+Ir6JUHKUHgnEAFRXV31tmsJF3zgPu5Y+YT7pbbwfsMvltExbRKs9nPnzTkQwGNCP+Gpe8tkUDoeDBMLywznj9Pn6Ed/mUNJNPiVnP5NAzMOCBada9u22mcRX2lWBgJ8EwjImTRqPMka3sjQyrjdjgmRRYSGX6VxbCQQATj99HpfE532C5MC8OZBASCA6jeKmF5wfamrGkEB4QHV1FUpKIqYTn52CjcHYsSQQbjB16mQivsEW0moulsPKAqmurlQd2OoSLVs4ETAYkiSiqqqSBMILqqoqch/tifiqC60oL4fT6SCB8IJIpOgrRnA49cPUszty6C+rxR82EEghk1aBC3cvh/JIIJwhFApCkiRkMhlrj/aMYNas6ZbjkKWzWIIgIBwuyJuflNWyrwWxtEAADHs4Pe1uoi3cbrelppjYRiCFRWHa3cQIIokCEokkxSDcxSHBoCX8e3YSDEN3WiweNyTWI4FojGDQb1shyAY3PBaLWWotiC0EEggEiPj6VcT6rqPVG8jq6anDEV/Jf7qTXulU+GMQjcbJxeLPgvhNJz1bo32OUwps6qaSQKzo5oyoAf3qHYuRBbG8i8UE8WUj7rfxvkQkkMEWxKc/8TWZ/Gc0YWXNm0cWhEP4fL7cxGH45D/jR3OZ0bJIIAbC6/XYKtg0c9JkLBazXH9aPs0rCALcLjf300Fo0iQJxDgrQsTXhfhWfA9CAjGR9DRbmGIQSwkkJ0IPefLaMRkrixCaslicwuP1aMdBWYvraYgngbAkEI9bB/NAOLb7ohbMYtlDIG4PCcAIl5IsCJ+w2l5NrBKfYhAru1hE/LwLl7MyCYRHuFwuIr0BPxCP95NAyMXKn285T0tUWrhJAQSHJ4qTQADA6/XqTvq8yrPIrEGKQbh1sZzcuy88uIBWbK4tBOJwOMx7UWij2IcsCKdQtBWNGcQ3YVGfzG3hJBBdLQiTD0+2FjdjcbIgXMLtdjGnC4EV0g8+PyXPytB7EE5h1ItCWadrDTEpGlSI3oPw7GJZwa1mfICm9yAWsiBEfO2rH6UsFp+QHJI5HLQI8e0MewTpWs/Fkon0Q4Heg/BqQSSJRnuDsOTOh3DVVZci4C/AO+9sxuYte7FrVwPa2rrR1xeHy+VEdXUJ5s+fjmuvPR9jqkqY7ldBtmJkNcTIdvXVP+KKzALnug0Gy1Bb24ru7ujwo7NDwi9+fjUWL76E2XbYYlcTQRAMI75WG45wszmJLA/56e1pRU21jPLy4U/4SqczuO/+5Vi58m0SiJnId1cTW+60MyTxh/j3EeB0Cqgoz6KiwgVRHH6QumPJMtTW7iEXSw06O3uxb18L6usP4vDhLhw63IXe3hh6umPo7u5DT28Mvb0xpNNZAEAikUR//1eHSPb1xZHJZI/87XIJmDnDb5WQIz/im4CeniyaW7KIxRJDfl9REcFrr/4PIpEQCWQ4bNq0Gy++9C7Wrq1Fff1BTcsuKnJg3DgPkd5EpFICmpoFdHT0Dvn9ggWz8KflS0a0NrYTiCzLeOONj/Hb3/1VVzNbU+NGcbGTiK8ddXKyw6LkQnOziObm9iG/v+0/r8SPf3wZCQQA1q/fjnvvW46tW/fp/lvTpvng9Yr6k1lJQsBiiUO18x1dLh/270/h0KGur10jSSJWrrgLp5wy3b4Cqatrxf0P/Amvv/6RMZkIUcAJJ/iRUzJLtme0onerA4EwPv748FFx45eIREJY9dK9GD++wl4CicUSWLr0BTy17BWkUmnDGhkMSjjuOO8IxLfPcWQyQz/idBXio48ah/yurKwQy/94B6ZNG2sPgaxZ8wl+edczaGpqM7yR5WVOVFa6iPgM/khrq4iW1qGDdqfTgRsXX4JrrjkPVVXFX/u+vz85kNnsiSEajaO7J4a+3hj6ov1IJlNIpzKIxgam4Hs8LrjdTng9blRVFWPipEoURwrMF0hzczvuvHMZ1rz5qWnkmTDejXDYQaRX9SPGWNW+vgx27xl9HYnL5YTf70E2O5C67+mJ5T29vqamDGedNRuXXHwa5s2bOuQLZd0Ekk5n8Ps/vI5HHnkO0ai5C2mOn+6F2y0S8RnFtu0xpFLmVnjixEr86xVn4ZprzkUo5NdXIBs37saSJcuwbft+0ztfFAXMPsFHxGcY++sS6OpKM1GXQMCLRdddiO9f/w0URwq0FUh7ew9+9eCzeP75dcysLvP7JUyZ7FHNM00mCxryI/y6iV82v7kliYMHU0zV2+t14+qrztFGINFoP5YtewVPPvUyenqiTDW0uNiJ6moLrAdhKNGmdTUOHUqhuTnJpMDzilx37WrA31Z/gGefXYP29h4mG+jxCGwTn6G6mdV8keEps4oFkslk8dlndVi/fjs++vhzbN68F62tHcybeLdLtP3aUdabn81yKpCWlnasW1eLde/U4v33tzHnPikSiFsg4pNAtBFIOp3Bhx/tGBDFulp8/nk9950vSQKRnnFkMuy22tHR0Yu16zbhrTc/xbp3NqO311oHMeotEA03JrSOORPUdUQmzbBATpx7w1ELiyz33GRZ9ZJbOU9+2N6PU3lPimWBWFkcAJBMykcyWbTPE5tqZtnFsvya9P6EbM0148MRn8PF85k0SCBmIRbLEPEZR5rlIN3qAolGs+ySnvBFnAgSiHkCySCTkY1L9xLxVXdJNksxiKmjU09PJjfXxUZuzmjNzNXrkzkfUGyxcVx3VyY3Mo90rWAN4ivtEtWkV/hhfcm/LTav7ulNI5NxaetmyWyQnvcfTCTYfs1gCwuSzQLtHWlu6mu4N2ei+9jblyGBsIC2thQRn8G4qbubBMIEkkl5+GCdJx7KsEzCIN6fRTRKAmEGBw+lFPNH0yxNLlGwDbaQbzucYr6OthJINJpBb29GESd1U48tzk4YvVv6E1l0dqVJIKyhtTVJozgD7uTBgykudnW1nUBisSw6O9JEfBPHhmg0w8w2PySQIdDSmmR6irWV43lZBrM7mJBAvkAqJaO1NWV54jMZmLelEI9nSSCso70jhWgsS8Q3EMlkFgcPJrmqs20FIstAQ0Mi5x01DJ/Ux6p6h7v2mHvkLNDQkGR6BxMSyDFIJLJobkloOopzN9pr3WD5GJF8gcNtKeZfCpJAhnK12tPo7EpbL5HFkNmKx/lzrUggg9DYmGR+Vimv/lo2O+DK8nqSHQkEAyva6uoS5qV+uQ9Shq90S2sC/Ql+d84hgQyKRw4c0HikszDxlTSgqyuD9vY017wggQxCX18GTY0JZVka5oivJsWkfQOGmmvV2JTgnhMOksXR6OhMQ3IIqCh3DZmNMWcUN+Pe3EvIZoH6ev5SuiQQhTh8OAVJFFBa6jSZ4Hz+elNTEv391tixkwQyDFoPJgEBGojE3N0dhHwVJahTXltbipuJiErw/wMA7Tgsa3oUb30AAAAASUVORK5CYII=",alt:"player",color:m[p]}),Object(i.jsxs)(D,{children:[t.first,Object(i.jsx)("br",{}),t.last]}),l&&Object(i.jsxs)("h2",{style:{color:r?h:A,marginTop:"1rem"},children:["# ",e]})]})};var $=function(n){var o=n.questions;return Object(i.jsx)(z,{children:Object(i.jsx)(K,{children:Object(i.jsx)(N,{children:o.map((function(n,o){return Object(i.jsx)(X,{state:n.score},o)}))})})})},nn=function(n){var o=n.teams,t=n.endQuiz,l=Object(e.useState)([]),r=Object(c.a)(l,2),s=r[0],a=r[1],g=Object(e.useState)(0),u=Object(c.a)(g,2),E=u[0],C=u[1],b=Object(e.useState)(""),y=Object(c.a)(b,2),d=y[0],x=y[1],h=Object(e.useState)(0),A=Object(c.a)(h,2),m=A[0],F=A[1],O=function(){s.length<=E+1?t(s):C(E+1)};Object(e.useEffect)((function(){(function(){var n=Object(Z.a)(V.a.mark((function n(){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(o.map((function(n){return f.a.get("/api/v1/get-players-by-team",{params:{team_code:n.trim()}})}))));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()().then((function(n){n.map((function(n){return a((function(o){return function(n){for(var o=(n=Object(p.a)(n)).length-1;o>0;o--){var t=Math.floor(Math.random()*(o+1)),i=[n[t],n[o]];n[o]=i[0],n[t]=i[1]}return n}([].concat(Object(p.a)(o),Object(p.a)(n.data.body.map((function(o){return Object(L.a)(Object(L.a)({},o),{},{score:2,team:n.config.params.team_code})})))))}))}))}))}),[o]);return Object(i.jsx)(z,{className:"Quiz",children:s.length?Object(i.jsxs)(z,{children:[Object(i.jsx)(B,{children:Object(i.jsx)($,{questions:s})}),Object(i.jsx)(_,{playerImg:s[E].player_image_url&&s[E].player_image_url,playerName:{first:s[E].first_name,last:s[E].last_name},playerNumber:s[E].default_jersey,showPlayerNumber:!1,team:s[E].team}),Object(i.jsx)(B,{flexWrap:"nowrap",children:Object(i.jsx)("form",{onSubmit:function(n){n&&(n.preventDefault(),function(){var n=m;d.replace(/^0+/,"")===s[E].default_jersey.toString()?(s[E].score=1,F(n+1)):s[E].score=0}(),x(""),O())},children:Object(i.jsx)(J,{onChange:function(n){x(n.target.value)},pattern:"[A-Za-z0-9]{1,50}",required:!0,value:d,placeholder:"player number"})})})]}):Object(i.jsxs)(z,{style:{color:j},children:[Object(i.jsx)(Q,{size:"2rem"}),Object(i.jsx)("h3",{style:{color:j},children:"Preparing your quiz..."})]})})};function on(){var n=Object(a.a)(["\nbody{\n  background-color: #1a1b24;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(0,500,312)'%3E%3Cstop offset='0' stop-color='%231a1b24'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.04'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n}\n"]);return on=function(){return n},n}var tn=Object(u.a)(on()),en=function(){var n=Object(e.useState)([]),o=Object(c.a)(n,2),t=o[0],l=o[1],r=Object(e.useState)(E),s=Object(c.a)(r,2),a=s[0],g=s[1],u=Object(e.useState)([]),y=Object(c.a)(u,2),d=y[0],j=y[1],x=Object(e.useState)(0),h=Object(c.a)(x,2),A=h[0],m=h[1];Object(e.useEffect)((function(){f.a.get("/api/v1/connect-to-shl")}),[]);Object(e.useEffect)((function(){m(d.filter((function(n){return 1===n.score})).length)}),[d]);return Object(i.jsxs)(z,{style:{class:"row"},children:[Object(i.jsx)(tn,{}),a===E&&Object(i.jsxs)(z,{children:[Object(i.jsx)(Y,{handleSelectTeam:function(n){var o=t.filter((function(o){return o!==n}));l(o.length===t.length?[].concat(Object(p.a)(o),[n]):o)},selectedTeams:t}),Object(i.jsx)(O,{disabled:0===t.length,onClick:function(){g(C)},children:"Start"})]}),a===C&&Object(i.jsx)(nn,{teams:t,endQuiz:function(n){j(n),g(b)}}),a===b&&Object(i.jsx)(B,{style:{height:"auto"},children:Object(i.jsxs)(z,{children:[Object(i.jsxs)("h1",{children:["Total Score: ",A+" / "+d.length+" ",A>d.length-10&&"\ud83c\udf89"]}),Object(i.jsx)(B,{children:d.map((function(n,o){return Object(i.jsx)(_,{width:"12rem",playerImg:n.player_image_url&&n.player_image_url,playerName:{first:n.first_name,last:n.last_name},playerNumber:n.default_jersey,showPlayerNumber:!0,correctAnswerGiven:n.score,team:n.team},o)}))}),Object(i.jsx)(z,{children:Object(i.jsx)(O,{onClick:function(){return l([]),j([]),void g(E)},children:"Re-Quiz"})})]})})]})},ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(o){var t=o.getCLS,i=o.getFID,e=o.getFCP,l=o.getLCP,r=o.getTTFB;t(n),i(n),e(n),l(n),r(n)}))};s.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(en,{})}),document.getElementById("root")),ln()}},[[54,1,2]]]);
//# sourceMappingURL=main.2f503e42.chunk.js.map