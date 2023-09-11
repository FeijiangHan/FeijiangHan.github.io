(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{351:function(t,a,e){"use strict";e.r(a);var n=e(17),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"d3-js绘制柱状图教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d3-js绘制柱状图教程"}},[t._v("#")]),t._v(" D3.js绘制柱状图教程")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("https://www.jb51.net/article/266954.htm")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label0",target:"_blank",rel:"noopener noreferrer"}},[t._v("获取处理数据"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label1",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置图表大小位置信息"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label2",target:"_blank",rel:"noopener noreferrer"}},[t._v("绘制画布"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label3",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建比例尺"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label4",target:"_blank",rel:"noopener noreferrer"}},[t._v("绘制数据"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label5",target:"_blank",rel:"noopener noreferrer"}},[t._v("绘制坐标轴"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label6",target:"_blank",rel:"noopener noreferrer"}},[t._v("优化"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/266954.htm#_label7",target:"_blank",rel:"noopener noreferrer"}},[t._v("tickSize 和 nice 属性"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在了解了svg和d3的基础知识以及画图最重要的比例尺，接下来就可以开始画图表了。本章我们以柱状图为例，尽可能的按照图表的"),a("strong",[t._v("绘制步骤")]),t._v("实现下面的柱状图。"),a("a",{attrs:{href:"https://codesandbox.io/s/bar-chart-qd748k",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看demo。"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043116.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"获取处理数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取处理数据"}},[t._v("#")]),t._v(" 获取处理数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 定义数据，d3有d3.json 和 d3.csv 获取json和表格数据，后面章节会涉及\nconst data = [\n    { name: "外包", value: 3000 },\n    { name: "金融", value: 4754 },\n    { name: "制造", value: 1120 },\n    { name: "咨询", value: 4032 }\n];\n\n// 获取y轴的值\nconst yValue = (d) => d.value;\n// 获取x轴的值\nconst xValue = (d) => d.name;\n\n')])])]),a("h2",{attrs:{id:"设置图表大小位置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置图表大小位置信息"}},[t._v("#")]),t._v(" 设置图表大小位置信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const dimensions = {\n    width: 600, // 画布宽度\n    height: 600, // 画布高度\n    margin: {\n        top: 15,\n        right: 15,\n        bottom: 40,\n        left: 60\n    }\n}\n// 图表宽度\ndimensions.boundedWidth =\ndimensions.width - dimensions.margin.left - dimensions.margin.right;\n// 图表高度\ndimensions.boundedHeight =\ndimensions.height - dimensions.margin.top - dimensions.margin.bottom;\n\n")])])]),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043117.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"绘制画布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制画布"}},[t._v("#")]),t._v(" 绘制画布")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('const svg = d3\n    .select("#root")\n    .append("svg")\n    .attr("width", dimensions.width)\n    .attr("height", dimensions.height);\n\n')])])]),a("h2",{attrs:{id:"创建比例尺"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建比例尺"}},[t._v("#")]),t._v(" 创建比例尺")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// y轴为线性比例尺\nconst yScale = d3.scaleLinear()\n    .domain([0, d3.max(data, (d) => yValue(d))])\n    .range([dimensions.boundedHeight, 0]);\n    \n// d3.max 取最大值，d3.min 取最小值\n \n// 序数比例尺 可以通过 xScale.bandwidth() 获取柱状图的宽度\nconst xScale = d3.scaleBand() \n    .domain(data.map((d) => xValue(d)))\n    .range([0, dimensions.boundedWidth])\n\n// 颜色比例尺\nconst color = d3.scaleOrdinal(d3.schemePastel2);\n\n")])])]),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043118.png",alt:"img"}})]),t._v(" "),a("p",[t._v("因为y轴是向下,所以"),a("code",[t._v("range(max, min)")]),t._v("输出域应该由大到小。")]),t._v(" "),a("h2",{attrs:{id:"绘制数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制数据"}},[t._v("#")]),t._v(" 绘制数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('const chartG = svg\n    .append("g")\n    .style("transform",`translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`\n);\n\nchartG.selectAll("rect")\n    .data(data)\n    .join("rect")\n    .attr("x", (d) => xScale(xValue(d)))\n    .attr("y", (d) => yScale(yValue(d)))\n    .attr("width", xScale.bandwidth())\n    .attr("height", (d) => yScale(yValue(d)))\n    .attr("fill", (d, i) => color(i));\n\n')])])]),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043119.png",alt:"img"}})]),t._v(" "),a("p",[t._v("为啥会出现上图的效果：")]),t._v(" "),a("ul",[a("li",[t._v("y轴从上而下，y的定位"),a("code",[t._v("yScale(yValue(d))")]),t._v("，"),a("code",[t._v("range([dimensions.boundedHeight, 0])")]),t._v(",值越大，y越小。"),a("code",[t._v("金融4754")]),t._v("是最大值，所以高度为0，看不到")]),t._v(" "),a("li",[t._v("由下图可知，"),a("code",[t._v("y + height = boundedHeight")]),t._v("，所以"),a("code",[t._v("height = boundedHeight - y")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043120.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('chartG.selectAll("rect")\n    .data(data)\n    .join("rect")\n    ...\n    .attr("height", (d) => dimensions.boundedHeight - yScale(yValue(d)))\n\n')])])]),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043121.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"绘制坐标轴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制坐标轴"}},[t._v("#")]),t._v(" 绘制坐标轴")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// d3 提供了 axisBottom axisLeft 来绘制坐标轴\nconst xAxis = d3.axisBottom(xScale);\n\nchartG.append("g")\n    .call(xAxis)\n    // x 轴 默认位置在(0,0)，所以需要往下移\n    .attr("transform", `translate(0, ${dimensions.boundedHeight})`);\n\nconst yAxis = d3.axisLeft(yScale);\nchartG.append("g").call(yAxis);\n\n')])])]),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043122.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("p",[t._v("完成以上步骤一个柱状图就算制作好了，剩下的就是可以加一下图例、交互等优化方面的，但是本章先不涉及，我们可以优化一下柱状图的间距。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const xScale = d3\n    .scaleBand()\n    .domain(data.map((d) => xValue(d)))\n    .range([0, dimensions.boundedWidth])\n    .padding(0.2); // padding 百分比的值\n\n")])])]),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043123.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"ticksize-和-nice-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ticksize-和-nice-属性"}},[t._v("#")]),t._v(" tickSize 和 nice 属性")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 我们把 y轴的 刻度线延长(tickSize)``const yAxis = d3.axisLeft(yScale).tickSize(-dimensions.boundedWidth);\n")])])]),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043124.png",alt:"img"}})]),t._v(" "),a("p",[t._v("我们可以看到除了最上面的刻度线的间距，其他的都是均匀的，这是由于我们设置的最大值是"),a("code",[t._v("4754")]),t._v(",为了美观我们可以加上"),a("code",[t._v("nice")]),t._v("属性：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const yScale = d3\n    .scaleLinear()\n    .domain([0, d3.max(data, (d) => yValue(d))])\n    .range([dimensions.boundedHeight, 0])\n    .nice();\n\n")])])]),a("p",[t._v("如果域是根据实际数据自动计算的，则开始值和结束值可能不是整数。这不一定是个问题，但它可能看起来有点不整洁，因此，d3.nice() 提供一个刻度函数，它将域四舍五入到一个不错的值。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.jbzj.com/file_images/article/202211/202211894043125.png",alt:"img"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);