(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{336:function(t,a,s){"use strict";s.r(a);var i=s(17),e=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"论域u上的关系思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#论域u上的关系思考"}},[t._v("#")]),t._v(" 论域U上的关系思考")]),t._v(" "),a("h1",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("论域U上的等价关系、偏序关系、线序关系、良序关系，分别是什么，分别对论域U起到了什么作用")]),t._v(" "),a("h1",{attrs:{id:"answer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer"}},[t._v("#")]),t._v(" Answer")]),t._v(" "),a("ul",[a("li",[t._v("等价关系：用来进行分类或者划分，把一个集合分成了若干不相交的子集。")]),t._v(" "),a("li",[t._v("偏序关系：比较元素之间的关系，但是不能比较所有元素。在论域上做"),a("strong",[t._v("拓扑排序、依赖关系的分析、任务调度")]),t._v("等。")]),t._v(" "),a("li",[t._v("线序关系：更好地理解集合中元素之间的顺序，实现排序和查找算法，如快速排序、归并排序、二分查找等算法都需要基于元素之间的大小关系进行操作。")]),t._v(" "),a("li",[t._v("良序关系：构造递归算法；被用于归纳证明和构造证明。良序原理的意义主要在于,在证明时可以使用所谓的 “最小反例法”,它相当于反证法和数学归纳法的结合。")])]),t._v(" "),a("ol",[a("li",[t._v("等价关系")])]),t._v(" "),a("p",[t._v("在一个论域 U 上，等价关系是一种满足以下三个性质的关系：")]),t._v(" "),a("ul",[a("li",[t._v("自反性：对于 U 中的任何元素 x，x 与自身相等。")]),t._v(" "),a("li",[t._v("对称性：对于 U 中的任何元素 x 和 y，如果 x 与 y 相等，则 y 也与 x 相等。")]),t._v(" "),a("li",[t._v("传递性：对于 U 中的任何元素 x、y 和 z，如果 x 与 y 相等，且 y 与 z 相等，则 x 与 z 相等。")])]),t._v(" "),a("p",[t._v("​\t"),a("strong",[t._v("等价关系经常被用来进行分类或者划分。具体来说，如果一个等价关系把一个集合分成了若干个子集，那么这些子集就称为等价类，每个等价类都包含一些相互等价的元素。因此，等价关系可以被用来把一个集合划分成若干个不相交的等价类，从而对集合中的元素进行分类。")])]),t._v(" "),a("p",[t._v("​\t在计算机科学中，等价关系常常被用于算法设计和数据结构设计中。例如，在"),a("strong",[t._v("并查集")]),t._v("中，就使用了等价关系来处理不相交集合的问题。具体来说，每个等价类被看作是一个集合，而每个集合中的元素都是相互等价的。因此，可以使用并查集来进行集合的合并和查询等操作，从而更好地解决不相交集合的问题。")]),t._v(" "),a("p",[t._v("​\t在机器学习中，等价关系也常常被用来进行分类。例如，在"),a("strong",[t._v("聚类算法")]),t._v("中，就使用了等价关系来把数据点划分成不同的簇。具体来说，每个簇都被看作是一个等价类，而每个等价类中的数据点都具有相似的特征。因此，可以使用聚类算法来将数据点进行分组，从而更好地对数据进行分类和分析。")]),t._v(" "),a("p",[t._v("​\t我初中学过“"),a("strong",[t._v("等比例分层抽样")]),t._v("”，用到的也是等价类的划分。具体来说，首先根据某个等价关系把总体分成若干个等价类，然后从每个等价类中按照一定的比例进行抽样。由于每个等价类中的元素具有相似的特征或属性，因此这种抽样方法可以在一定程度上保证样本的代表性和可靠性。例如，假设要对某个城市的居民进行调查，可以根据不同的职业对居民进行分类，然后从每个职业中抽取一定比例的样本。这样可以保证样本的代表性和可靠性，同时也可以避免样本中某个职业过多或过少的情况。不过需要注意的是，在使用等比例分层抽样时，必须保证每个等价类中的元素比例足够大，否则可能会导致样本的偏差或抽样误差。因此，在确定等价关系和样本比例时，需要充分考虑总体特征和样本大小等因素。")]),t._v(" "),a("p",[t._v("怎么衡量等价关系？相似性度量、聚类、构建图、经验知识。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("偏序关系")])]),t._v(" "),a("p",[t._v("在一个论域 U 上，偏序关系是一种满足以下三个性质的关系：")]),t._v(" "),a("ul",[a("li",[t._v("自反性：对于任意元素 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("∈")]),a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\in S")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72243em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),t._v("，有 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≤")]),a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\leq a")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.63597em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("a")])])])]),t._v("；")]),t._v(" "),a("li",[t._v("反对称性：对于任意元素 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("b")]),a("mo",[t._v("∈")]),a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a,b\\in S")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),t._v("，如果 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≤")]),a("mi",[t._v("b")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\leq b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("b")])])])]),t._v(" 且 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mo",[t._v("≤")]),a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b\\leq a")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("a")])])])]),t._v("，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("=")]),a("mi",[t._v("b")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a=b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("b")])])])]),t._v("；")]),t._v(" "),a("li",[t._v("传递性：对于任意元素 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("b")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("c")]),a("mo",[t._v("∈")]),a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a,b,c\\in S")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("c")]),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),t._v("，如果 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≤")]),a("mi",[t._v("b")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\leq b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("b")])])])]),t._v(" 且 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mo",[t._v("≤")]),a("mi",[t._v("c")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b\\leq c")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("c")])])])]),t._v("，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≤")]),a("mi",[t._v("c")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\leq c")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.63597em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("c")])])])]),t._v("。")])]),t._v(" "),a("p",[a("strong",[t._v("偏序关系也称为“半序关系”，它是一种比较元素之间的关系，但是不能比较所有元素")]),t._v("，例如: 集合的包含关系就是半序,也就是偏序,因为两个集合也可以互不包含。在计算机科学中，偏序关系可以用于图搜索算法、排序算法和约束满足问题等。")]),t._v(" "),a("p",[t._v("常见的应用就是"),a("strong",[t._v("拓扑排序")]),t._v("，其是一种针对有向无环图（DAG）的排序算法，它根据有向边的方向建立了一个偏序关系。具体地，对于一个有向无环图 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("G")]),a("mo",[t._v("=")]),a("mo",[t._v("(")]),a("mi",[t._v("V")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("E")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("G=(V,E)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("G")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，偏序关系 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("<")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("<")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mrel"},[t._v("<")])])])]),t._v(" 可以定义为：若存在一条从节点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v(" 到节点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v(" 的有向边 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("u")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("v")]),a("mo",[t._v(")")]),a("mo",[t._v("∈")]),a("mi",[t._v("E")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(u,v)\\in E")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")])])])]),t._v("，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")]),a("mo",[t._v("<")]),a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u < v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("，表示节点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v(" 必须排在节点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v(" 的前面。")]),t._v(" "),a("p",[t._v("这个偏序关系的定义不具有传递性，即对于三个节点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v("、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v(" 和 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("w")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v("，如果 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")]),a("mo",[t._v("<")]),a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u < v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v(" 且 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")]),a("mo",[t._v("<")]),a("mi",[t._v("w")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v < w")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v("，则并不能推出 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")]),a("mo",[t._v("<")]),a("mi",[t._v("w")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u < w")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.5391em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v("。因为在 DAG 中，存在从 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v(" 到 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("w")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v(" 的一条路径不一定是从 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v(" 到 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v(" 再到 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("w")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v("。因此，拓扑排序是偏序关系而不是全序关系。")]),t._v(" "),a("p",[t._v("拓扑排序可以解决许多实际问题，例如"),a("strong",[t._v("依赖关系的分析、任务调度")]),t._v("等。它的时间复杂度为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",[t._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("V")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",[t._v("+")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("E")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(|V|+|E|)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，其中 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("V")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("|V|")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")])])])]),t._v(" 是节点数，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("E")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("|E|")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")])])])]),t._v(" 是边数。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("线序关系")])]),t._v(" "),a("p",[t._v("在一个论域 U 上，线序关系是一种满足以下四个性质的关系：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("反自反性：任意元素 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")])])])]),t._v(" 都不能大于等于自身，即 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≰")]),a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a \\nleq a")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.79383em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.09657em","vertical-align":"-0.30274em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel amsrm"},[t._v("≰")]),a("span",{staticClass:"mord mathit"},[t._v("a")])])])]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("反对称性：如果 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≤")]),a("mi",[t._v("b")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\leq b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("b")])])])]),t._v(" 且 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mo",[t._v("≤")]),a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b\\leq a")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("a")])])])]),t._v("，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("=")]),a("mi",[t._v("b")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a=b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("b")])])])]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("传递性：如果 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≤")]),a("mi",[t._v("b")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\leq b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("b")])])])]),t._v(" 且 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mo",[t._v("≤")]),a("mi",[t._v("c")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b\\leq c")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("c")])])])]),t._v("，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("≤")]),a("mi",[t._v("c")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a\\leq c")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.63597em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mord mathit"},[t._v("c")])])])]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("连通性：对于 U 中的任何元素 x 和 y，至少存在一种情况满足 x 与 y 有关系，或者 y 与 x 有关系。")]),t._v(" "),a("p",[t._v("线序关系也称为“全序关系”，它是一种能够比较任意两个元素的关系。线序关系在数学中的应用非常广泛，例如在实数的定义中就使用了线序关系。在计算机科学中，线序关系可以用于排序算法、搜索算法和数据库查询等。")]),t._v(" "),a("p",[a("strong",[t._v("线序关系本质上是一种把集合中的元素按照大小关系排成一条线的方式。通过定义线序关系，我们可以在集合中确定任意两个元素之间的大小关系，从而更好地理解集合中元素之间的顺序。")])])])]),t._v(" "),a("p",[a("strong",[t._v("线序关系对论域U的作用主要体现在以下几个方面：")])]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("确定元素的大小关系：通过定义线序关系，我们可以确定任意两个元素之间的大小关系，从而更好地理解集合中元素之间的顺序。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现排序和查找算法：线序关系常常被用于排序和查找算法中，如快速排序、归并排序、二分查找等算法都需要基于元素之间的大小关系进行操作。")])])]),t._v(" "),a("li",[a("p",[t._v("良序关系")])])]),t._v(" "),a("p",[t._v("在一个论域 U 上，良序关系是一种满足以下两个性质的关系：")]),t._v(" "),a("ul",[a("li",[t._v("线序性：良序关系必须是线序关系。")]),t._v(" "),a("li",[t._v("极小性：对于 U 中的任何非空子集 S，必须存在一个 S 中的元素 x，使得 x 是 S 中的最小元素。")])]),t._v(" "),a("p",[t._v("​\t若一个全序关系中，存在一个最小元，则称为良序关系。例如小于等于关系在整数集中不是良序关系，因为没有最小元，而在正整数集中是良序关系，因为存在最小元1。")]),t._v(" "),a("p",[t._v("​\t**良序集合的排序方式是一种特殊的全序关系，它满足任意子集都有最小元素。**这种排序方式可以让我们按照一定的顺序逐个考虑集合中的元素。具体来说，我们可以从集合中任意选择一个元素开始，然后逐次考虑集合中的下一个元素，直到所有的元素都被考虑过为止。在这个过程中，由于良序集合的排序方式满足每个子集都有最小元素，所以我们总是可以找到一个唯一的下一个元素可考虑。这个特性在构造递归算法和数据结构时非常有用。")]),t._v(" "),a("p",[t._v("​\t良序关系在数学中经常被用于"),a("strong",[t._v("归纳证明和构造证明")]),t._v("等。"),a("strong",[t._v("良序原理的意义主要在于,在证明时可以使用所谓的 “最小反例法”,它相当于反证法和数学归纳法的结合。")])]),t._v(" "),a("p",[t._v("​\t"),a("strong",[t._v("如果我们能把一个计算的状态 x 映射到属于良序集 S 的一个元素 f (x)，且使得计算的每一步把一个状态 x 转换成状态 y，并有 f (y)<f (x), 则算法必然终止。")]),t._v(" 更具体来说，假设我们有一个算法，想要证明它一定会在有限时间内停止，我们可以先定义一个良序集合S，并将算法所有可能的状态映射到S中的元素上。接下来，我们需要证明如果从当前状态开始执行算法，每一步都会产生一个比当前状态更小的状态，那么算法必然会停止。这里“比当前状态更小”可以是根据定义的良序关系进行比较。")]),t._v(" "),a("p",[t._v("​\t这个证明的思路类似于数学归纳法。我们假设算法永远不会停止，然后构造一个良序集合S，将所有可能的状态映射到S中的元素上。如果我们可以证明对于任何一个状态，它都有一个比它更小的状态，那么我们就可以使用良序原理得出，不存在无限递归的状态序列，从而证明算法一定会在有限时间内停止。这种证明方法在计算机科学中非常常用，特别是对于递归算法和数据结构的证明。")])])}),[],!1,null,null,null);a.default=e.exports}}]);