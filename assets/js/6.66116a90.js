(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{351:function(t,n,s){"use strict";s.r(n);var a=s(42),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0-1-0-2-0-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-0-2-0-3"}},[t._v("#")]),t._v(" 0.1+0.2 !=0.3")]),t._v(" "),s("p",[t._v("在 js 中 "),s("code",[t._v("0.1 + 0.2 != 0.3")]),t._v(" 而是输出 : 0.30000000000000004 ,这是为什么呢？\n在计算机执行计算的时候，需要把十进制转换成二进制，执行计算，计算完成后输出。\n我们分析一下 0.1 的二进制， 0 是整数位，1 是小数位。")]),t._v(" "),s("p",[t._v("整数转换二级制的流程:")]),t._v(" "),s("p",[t._v("当前位值 * 2^(n-1)\n1010 = 1* 2^3 +0*2^2 +1"),s("em",[t._v("2^1+0")]),t._v("2^0 = 10")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1010'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n")])])]),s("p",[t._v("小数部分转二级制流程:\n把当前位不停*2 取整\n0.1 转换成二进制\n0.1 * 2 = 0.2 无整数 二进制为:0.0\n0.2 * 2 = 0.4 无整数 二进制为:0.00\n0.4 * 2 = 0.8 无整数 二进制为:0.000\n0.8 * 2 = 0.6 取 1 余 0.6 二进制为:0.0001\n0.6 * 2 = 0.2 取 1 余 0.2 二进制为:0.00011\n0.2 * 2 = 0.4 无整数 二进制为:0.000110\n无限循环....\n所有 0.1 转换二进制是无限循环的：0.00110011001100110011....\n在计算机取值双精度浮点数（可以理解为四舍五入）取值为如下：")]),t._v(" "),s("p",[t._v("0.0001100110011001100110011001100110011001100110011001101")]),t._v(" "),s("p",[t._v("同理 0.2 转成二级制是")]),t._v(" "),s("p",[t._v("0.001100110011001100110011001100110011001100110011001101")]),t._v(" "),s("p",[t._v("0.1 + 0.2 的二级制 相加得到二级制结果是：\n0.0100110011001100110011001100110011001100110011001100111\n输出 十进制：")]),t._v(" "),s("p",[t._v("parseInt('0.0100110110010100110011001100110011001100110011001100111', 2); 这个不支持小数\n可以使用这个网站校验： https://tool.oschina.net/hexconvert/\n输出： 0.30000000000000004")]),t._v(" "),s("p",[t._v("所有 0.1+ 0.2 ！=0.3")]),t._v(" "),s("p",[t._v("转换成二级制可以通过 实现\n(0.1).toString(2)\n(0.2).toString(2)")])])}),[],!1,null,null,null);n.default=e.exports}}]);