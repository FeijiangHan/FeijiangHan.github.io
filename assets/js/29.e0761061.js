(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{347:function(t,_,v){"use strict";v.r(_);var e=v(17),r=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"理解浏览器-从url到页面显示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#理解浏览器-从url到页面显示"}},[t._v("#")]),t._v(" 理解浏览器: 从URL到页面显示")]),t._v(" "),_("h1",{attrs:{id:"浏览器-从url到页面显示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-从url到页面显示"}},[t._v("#")]),t._v(" 浏览器: 从URL到页面显示")]),t._v(" "),_("p",[t._v("加上文件的编码和解码过程,  utf-8")]),t._v(" "),_("h2",{attrs:{id:"无线鼠标输入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无线鼠标输入"}},[t._v("#")]),t._v(" 无线鼠标输入")]),t._v(" "),_("p",[t._v("鼠标的工作原理简述：鼠标按其工作原理的不同可以分为机械鼠标和光电鼠标。机械鼠标主要由滚球、辊柱和光栅信号传感器组成。当你拖动鼠标时，带动滚球转动，滚球又带动辊柱转动，装在辊柱端部的光栅信号传感器产生的光电脉冲信号反映出鼠标器在垂直和水平方向的位移变化，再通过电脑程序的处理和转换来控制屏幕上光标箭头的移动。光电鼠标器是通过检测鼠标器的位移，将位移信号转换为电脉冲信号，再通过程序的处理和转换来控制屏幕上的光标箭头的移动。光电鼠标用光电传感器代替了滚球。这类传感器需要特制的、带有条纹或点状图案的垫板配合使用。")]),t._v(" "),_("p",[t._v("DRF(Digital radio frequency,数字无线电频率)技术能够对短距离通讯提供充足的带宽,非常适合鼠标和键盘这样的外围设备使用,其原理非常简单,鼠标部分工作与传统鼠标相同,再用无线发射器把鼠标在X或Y轴上的移动,按键按下或抬起的信息转换成无线信号并发送出去,无线接收器收到信号后经过解码传递给主机,驱动程序告诉操作系统鼠标的动作,该把鼠标指针移向哪个方向或是执行何种指令。")]),t._v(" "),_("p",[t._v("电脑鼠标也称为光电鼠标，内部有一套发光二极管发射与接收装置，发光二极管发射光谱后，通过一组光学透镜后，传输到一个光感应器件，也叫微成像器内成像。当移动鼠标时，其移动轨迹便会被记录成为一组高速拍摄的连贯图像，被光电鼠标内部的一块专用图像微处理器的DSP芯片，对经过芯片处理后的这些图像上特征点位置的变化进行分析，来判断鼠标的移动方向和移动距离，从而完成光标的定位。")]),t._v(" "),_("p",[t._v("无线鼠标内部结构与普通有线鼠标相同，就是多了一套无线发射与接收装置；鼠标在X或Y轴上的移动时，每按一次的键按下或抬起的位置移动，都会产生一种信息，这种信息会通过内置芯片转换成无线信号，并且通过内部蓝牙将信号发射到USB接口的无线接收器，当收到信号后立马经过电脑内部中的解码器解码，再传递给主板CPU，这些信号会根据预制好的驱动程序，告诉操作系统鼠标的动作,该把鼠标指针移向哪个方向或是执行何种指令。")]),t._v(" "),_("p",[t._v("有线鼠标也称为光学鼠标，人为地点击X轴或Y轴，或者滚动位置时，移动时的光学传感器不断采集到桌面上的每个点，再将采集的点送到主控芯片中进行记忆并比较，对比下一个点的位置，主控芯片比较出来的信号转换为相应的信号传输大电脑从而达到光标上下移动的动作。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://www.muyuhao.com/wp-content/uploads/2022/11/2022110315112185.webp",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"cpu对信号的处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu对信号的处理"}},[t._v("#")]),t._v(" CPU对信号的处理")]),t._v(" "),_("p",[t._v("可以通过电气信号来进行通信，也就是电压高低的变化，如下面的时序图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/han-feijiang/img-store/raw/master/2023/i2c-wave.png",alt:"i2c-wave"}})]),t._v(" "),_("p",[t._v("在时钟的控制下，这些电流会经过 "),_("a",{attrs:{href:"http://en.wikipedia.org/wiki/MOSFET",target:"_blank",rel:"noopener noreferrer"}},[t._v("MOSFET"),_("OutboundLink")],1),t._v(" 晶体管，晶体管中包含 N 型半导体和 P 型半导体，通过电压就能控制线路开闭，然后这些 MOSFET 构成了 "),_("a",{attrs:{href:"http://en.wikipedia.org/wiki/CMOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMOS"),_("OutboundLink")],1),t._v("，接着再由 CMOS 实现「与」「或」「非」等逻辑电路门，最后由逻辑电路门上就能实现加法、位移等计算，整体如下图所示（来自《计算机体系结构》）：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://fex.baidu.com/img/what-happen/cpu.png",alt:"cpu"}})]),t._v(" "),_("p",[t._v("除了计算，在 CPU 中还需要存储单元来加载和存储数据，这个存储单元一般通过触发器(Flip-flop)来实现，称为寄存器。")]),t._v(" "),_("h2",{attrs:{id:"从cpu到操作系统内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从cpu到操作系统内核"}},[t._v("#")]),t._v(" 从CPU到操作系统内核")]),t._v(" "),_("p",[t._v("以Windows平台为例:")]),t._v(" "),_("ul",[_("li",[t._v("键鼠等外设产生电子信号，"),_("strong",[t._v("触发中断")])]),t._v(" "),_("li",[_("strong",[t._v("驱动程序")]),t._v("响应中断并通知系统层面")]),t._v(" "),_("li",[t._v("当前Windowstation进行响应(比如重新绘制光标)，产生对应的系统消息")]),t._v(" "),_("li",[t._v("Windowstation检查是否应该把消息推送给特定窗口，如果是，产生对应的系统消息并加入到窗口的消息队列")]),t._v(" "),_("li",[t._v("窗口所在线程响应消息队列")]),t._v(" "),_("li",[t._v("相关程序进一步处理")])]),t._v(" "),_("p",[t._v("Windows平台提供了mouse_event和keybd_event的函数，可以用来模拟键盘和鼠标的操作。更上层一点的是SendInput函数，用于模拟硬件输入(包括键鼠等)至特定的窗口。而对于移动鼠标位置的操作，SetCursorPos在使用上要比SendInput简单，所以更建议用这种方式。")]),t._v(" "),_("p",[t._v("浏览器内核（Rendering Engine），是指浏览器最核心的部分，"),_("strong",[t._v("负责对网页语法的解释（如 标准通用标记语言 下的一个应用 HTML 、 JavaScript ）并渲染（显示）网页")]),t._v("。 所以，通常所谓的浏览器内核也就是浏览器所采用的 渲染引擎 ，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。")]),t._v(" "),_("p",[_("strong",[t._v("以下是主流浏览器的所使用的内核：")])]),t._v(" "),_("p",[t._v("1、IE浏览器内核：Trident内核，也是俗称的IE内核；")]),t._v(" "),_("p",[t._v("2、Chrome浏览器内核：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核；")]),t._v(" "),_("p",[t._v("3、Firefox浏览器内核：Gecko内核，俗称Firefox内核；")]),t._v(" "),_("p",[t._v("4、苹果Safari浏览器内核：Webkit内核，特点是不受IE、Firefox等内核的约束，比较安全；")]),t._v(" "),_("p",[t._v("5、Opera浏览器内核：最初是自己的Presto内核，后来加入谷歌大军，从Webkit又到了Blink内核；")]),t._v(" "),_("p",[t._v("6、360浏览器、猎豹浏览器内核：IE+Chrome双内核；")]),t._v(" "),_("p",[t._v("7、搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；")]),t._v(" "),_("p",[t._v("8、百度浏览器、世界之窗内核：IE内核；")]),t._v(" "),_("p",[t._v("9、2345浏览器内核：好像以前是IE内核，现在也是IE+Chrome双内核了；")]),t._v(" "),_("p",[t._v("10、UC浏览器内核：这个众口不一，UC说是他们自己研发的U3内核，但好像还是基于Webkit和Trident，还有说是基于火狐内核。")]),t._v(" "),_("p",[t._v("参考链接：https://blog.csdn.net/qq_36135335/article/details/95166490")]),t._v(" "),_("p",[t._v("复杂、底层：http://fex.baidu.com/blog/2014/05/what-happen/")]),t._v(" "),_("p",[t._v("补计算机网络知识：https://xiaolincoding.com/network/#%E8%A6%81%E6%80%8E%E4%B9%88%E9%98%85%E8%AF%BB")]),t._v(" "),_("p",[t._v("详细、但是讲的烂：https://blog.csdn.net/Newbie___/article/details/107212575")]),t._v(" "),_("p",[t._v("​\t\t1、浏览器的地址栏输入URL并按下回车。")]),t._v(" "),_("p",[t._v("2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。")]),t._v(" "),_("p",[_("strong",[t._v("3、DNS解析URL对应的IP。")])]),t._v(" "),_("p",[_("strong",[t._v("4、根据IP建立TCP连接（三次握手）。")])]),t._v(" "),_("p",[_("strong",[t._v("5、HTTP发起请求。")])]),t._v(" "),_("p",[t._v("6、服务器处理请求，浏览器接收HTTP响应。")]),t._v(" "),_("p",[t._v("7、渲染页面，构建DOM树。")]),t._v(" "),_("p",[t._v("8、关闭TCP连接（四次挥手）")])])}),[],!1,null,null,null);_.default=r.exports}}]);