(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{352:function(t,a,s){"use strict";s.r(a);var e=s(17),c=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"页表映射与压缩思想的思考与扩展延伸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页表映射与压缩思想的思考与扩展延伸"}},[t._v("#")]),t._v(" 页表映射与压缩思想的思考与扩展延伸")]),t._v(" "),a("h1",{attrs:{id:"页表图示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页表图示"}},[t._v("#")]),t._v(" 页表图示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pics4.baidu.com/feed/7a899e510fb30f2476c524540b9f2245ad4b031f.jpeg?token=9c7fd014cb204eed2a57ce275b610311",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pics0.baidu.com/feed/63d9f2d3572c11df1f6c3364a52d91d6f603c2ce.jpeg?token=2ae904ca8ddf72cf0adf490722525334",alt:""}})]),t._v(" "),a("img",{staticStyle:{zoom:"150%"},attrs:{src:"https://pics3.baidu.com/feed/72f082025aafa40fe0fe6a3a696ef04978f0192a.jpeg?token=e83dc7a940d0c8bb2984363831a053c7"}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("逻辑地址  -> 页号  -> 页表项(地址) -> 地址块号 -> 物理地址")])]),t._v(" "),a("li",[a("p",[t._v("每个进程都维护一张页表，初始在PCB中，进程执行时才载入内存")])]),t._v(" "),a("li",[a("p",[t._v("页表需要一段连续的空间存储(32位逻辑空间需要有1M个页面，每个页面存储4KB，每个页面对应一个页表项，每个页表项是4B大小，页表总共占用1024*4B，换算成页面个数就是1024个页面，即内存载入进程时还需要载入1024个页面)，而内存不一定有这么大的连续空间，因此将页表再次采用映射表的机制分散映射，外部页表有1024项，每一项对应一张存放1024个页面的内部页表，因此总共还是能存放1024*1024个页面的。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190428184415107.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXFpbmdfY2FzdGxl,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),a("h1",{attrs:{id:"使用映射思想压缩-连续大内存载入优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用映射思想压缩-连续大内存载入优化"}},[t._v("#")]),t._v(" 使用映射思想压缩-连续大内存载入优化")]),t._v(" "),a("ol",[a("li",[t._v("深度学习载入大文件时，内存没有连续空间，此时可以用一个数组存放文件名，需要用到这个文件时通过这个文件名载入这个文件")]),t._v(" "),a("li",[t._v("给进程连续分配内存造成内部、外部的碎片，且碎片的压缩耗费大，因此采用映射表把进程中连续的逻辑地址映射到内存中不连续的物理地址")]),t._v(" "),a("li",[t._v("无法连续载入连续页表时，建立一个页表的索引（页表的页表），只需要把外部页表载入内存，需要用到那一块内部页表再载入那个页表即可")])]),t._v(" "),a("h1",{attrs:{id:"分块思想-大量事件的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分块思想-大量事件的处理"}},[t._v("#")]),t._v(" 分块思想-大量事件的处理")]),t._v(" "),a("ol",[a("li",[t._v("深度学习的迷你-batch，数据量大是，分成很多个小batch，实现并行计算")]),t._v(" "),a("li",[t._v("信道访问控制协议，如果终端数量多，则先进行分组，组间采用无冲突协议（令牌轮询、预约信道），组内采用有冲突随机协议（csma、cd、ca）")]),t._v(" "),a("li",[t._v("层次路由，如果网络规模大，则分成多个自治系统，自治系统内部采用内部网关协议（ospf，rip），外部采用外部网关协议（BGP）")])])])}),[],!1,null,null,null);a.default=c.exports}}]);