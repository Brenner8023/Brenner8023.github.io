(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{200:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作系统")]),t._v(" "),a("p",[t._v("Updated December 25, 2018")]),t._v(" "),a("p",[a("a",{attrs:{name:"1a73ba25"}})]),t._v(" "),a("h1",{attrs:{id:"操作系统引论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统引论","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作系统引论")]),t._v(" "),a("p",[a("a",{attrs:{name:"512ad8f7"}})]),t._v(" "),a("h3",{attrs:{id:"多道程序设计的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多道程序设计的基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 多道程序设计的基本概念")]),t._v(" "),a("p",[t._v("在多道批处理系统中, 用户所提交的作业先存放在外存上, 并且排成一个队列, 称为后备队列, 由作业调度程序按一定的算法, 从后备队列中选择若干个作业调入内存, 使它们共享CPU和系统中的各种资源. 由于同时在内存中装有若干道程序, 可以利用程序在I/O操作时的CPU空挡时间, 使多道程序交替地运行, 这样便可以保持CPU处于忙碌状态.")]),t._v(" "),a("p",[a("a",{attrs:{name:"938a7700"}})]),t._v(" "),a("h3",{attrs:{id:"多道批处理系统的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多道批处理系统的优缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 多道批处理系统的优缺点")]),t._v(" "),a("ol",[a("li",[t._v("资源利用率高: CPU可以保持忙碌状态, 可提高内存的利用率, 可提高I/O设备的利用率")]),t._v(" "),a("li",[t._v("系统吞吐量大: CPU和其它资源保持忙碌状态, 作业仅当完成或运行不下去时才进行切换, 系统开销小")]),t._v(" "),a("li",[t._v("平均周转时间长: 由于作业要排队依次进行处理, 因而作业的周转时间较长")]),t._v(" "),a("li",[t._v("无交互能力: 用户一旦把作业提交给系统, 直至作业完成, 用户都不能与自己的作业进行交互")])]),t._v(" "),a("p",[a("a",{attrs:{name:"ace787a8"}})]),t._v(" "),a("h3",{attrs:{id:"操作系统的基本特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的基本特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作系统的基本特性")]),t._v(" "),a("ol",[a("li",[t._v("并发: 指两个或多个事件在同一时间间隔内发生. 这些事件宏观上是同时发生的, 但是微观上是交替发生的. 一个单核处理机同一时刻只能执行一个程序, 因此操作系统会负责协调多个程序交替执行")]),t._v(" "),a("li",[t._v("共享: 是指系统中的资源可供内存中多个并发执行的进程共同使用")])]),t._v(" "),a("ul",[a("li",[t._v("互斥共享方式: 系统中的某些资源, 虽然可以提供给多个进程使用, 但一个时间段内只允许一个进程访问该资源")]),t._v(" "),a("li",[t._v("同时共享方式: 系统中的某些资源, 允许同一个时间段内由多个进程对它们进行访问")])]),t._v(" "),a("ol",[a("li",[t._v("虚拟: 通过某种技术将一个物理实体变为若干个逻辑上的对应物")])]),t._v(" "),a("ul",[a("li",[t._v("时分复用技术")]),t._v(" "),a("li",[t._v("空分复用技术")])]),t._v(" "),a("ol",[a("li",[t._v("异步: 在多道程序环境下, 允许多个程序并发执行, 但由于资源有限, 进程的执行不是一贯到底的, 而是走走停停, 以不可预知的速度向前推进, 这就是进程的异步性")])]),t._v(" "),a("p",[a("a",{attrs:{name:"6a2eb75c"}})]),t._v(" "),a("h3",{attrs:{id:"系统调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统调用")]),t._v(" "),a("p",[t._v("应用程序通过系统调用请求操作系统的服务.")]),t._v(" "),a("p",[t._v("系统调用是操作系统提供给应用程序(开发人员)使用的接口, 可以理解为一种可供应用程序调用的特殊函数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("应用程序")]),t._v(" "),a("th",[t._v("可直接进行系统调用, 也可使用库函数. 有的库函数涉及系统调用, 有的不涉及")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("编程语言")]),t._v(" "),a("td",[t._v("向上提供库函数. 有时会将系统调用封装成库函数, 隐藏系统调用的一些细节, 使上层进行系统调用更加方便")])]),t._v(" "),a("tr",[a("td",[t._v("操作系统")]),t._v(" "),a("td",[t._v("向上提供系统调用")])]),t._v(" "),a("tr",[a("td",[t._v("裸机")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("系统调用的过程")]),t._v(" "),a("ol",[a("li",[t._v("传递系统调用参数")]),t._v(" "),a("li",[t._v("执行陷入指令(用户态)")]),t._v(" "),a("li",[t._v("执行系统调用相应服务程序(核心态)")]),t._v(" "),a("li",[t._v("返回用户程序")])]),t._v(" "),a("p",[t._v("注意:  陷入指令是在用户态执行的, 执行陷入指令之后立即引发一个内中断, 从而CPU进入核心态. 发出系统调用请求是在用户态, 而对系统调用的相应处理在核心态下进行")]),t._v(" "),a("p",[a("a",{attrs:{name:"8fdf5b94"}})]),t._v(" "),a("h3",{attrs:{id:"中断和异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中断和异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 中断和异常")]),t._v(" "),a("p",[t._v("发生中断就意味着需要操作系统介入, 开展管理工作. 当中断发生后, CPU立即进入内核态, 当前运行的进程暂停运行, 并由操作系统内核对中断进行处理")]),t._v(" "),a("p",[t._v("中断的分类")]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("p",[t._v("内中断(异常): 信号的来源是CPU内部, 与当前执行的指令有关")]),t._v(" "),a("ul",[a("li",[t._v("自愿中断--指令中断")]),t._v(" "),a("li",[t._v("强迫中断(如硬件故障(缺页), 整数除以0)")]),t._v(" "),a("li")]),t._v(" "),a("p",[t._v("外中断: 信号来源是CPU外部, 与当前执行的指令无关")]),t._v(" "),a("ul",[a("li",[t._v("外设请求(I/O操作完成发出的中断信号)")]),t._v(" "),a("li",[t._v("人工干预")])]),t._v(" "),a("p",[a("a",{attrs:{name:"f88522cf"}})]),t._v(" "),a("h1",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),a("p",[t._v("进程实体: 由程序段, 数据段, PCB三部分构成")]),t._v(" "),a("p",[t._v("进程: 进程实体的运行过程, 是系统进行资源分配和调度的一个独立单位")]),t._v(" "),a("p",[t._v("创建撤销进程, 实质上是创建撤销进程实体中的PCB")]),t._v(" "),a("p",[a("a",{attrs:{name:"ce02b6be"}})]),t._v(" "),a("h3",{attrs:{id:"pcb-记录型数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcb-记录型数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" PCB(记录型数据结构)")]),t._v(" "),a("p",[t._v("作为独立运行基本单位的标志. 能实现间断性运行方式, 系统可将CPU现场信息保存在被中断进程的PCB中, 供该进程再次被调度执行时恢复CPU现场时使用")]),t._v(" "),a("ul",[a("li",[t._v("进程描述信息: 进程标识符PID和用户标识符UID")]),t._v(" "),a("li",[t._v("进程控制和管理信息: 进程的当前状态, 进程优先级")]),t._v(" "),a("li",[t._v("处理机状态: 处理机的各种寄存器的内容")]),t._v(" "),a("li",[t._v("资源清单: 键盘, 鼠标等")])]),t._v(" "),a("p",[a("a",{attrs:{name:"c65f2dc0"}})]),t._v(" "),a("h5",{attrs:{id:"pcb的组织方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcb的组织方式","aria-hidden":"true"}},[t._v("#")]),t._v(" PCB的组织方式")]),t._v(" "),a("p",[t._v("在一个系统中, 通常有数十数百乃至更多的PCB, 为了能对它们加以有效的管理, 应该用适当的方式把这些PCB组织起来")]),t._v(" "),a("ol",[a("li",[t._v("线性方式: 将系统中所有的PCB都组织在一张线性表中, 将该表的首址存放在内存的一个专用区域中")]),t._v(" "),a("li",[t._v("链接方式: 把具有相同状态进程的PCB分别通过PCB中的链接字链接成一个队列. 可以形成就绪队列, 若干个阻塞队列和空白队列")]),t._v(" "),a("li",[t._v("索引方式: 系统根据所有进程状态的不同, 建立几张索引表, 如就绪索引表, 阻塞索引表, 并把各索引表在内存的首地址记录在内存的专用单元中")])]),t._v(" "),a("p",[t._v("进程的状态")]),t._v(" "),a("ol",[a("li",[t._v("就绪态: 已经具备运行条件, 但是由于没有空闲CPU, 暂时不能运行")]),t._v(" "),a("li",[t._v("执行态: 进程已经占有CPU, 并在CPU上执行")]),t._v(" "),a("li",[t._v("阻塞态: 指正在执行的进程由于发生某事件暂时无法执行时的状态")]),t._v(" "),a("li",[t._v("创建态: 由进程申请一个空白PCB, 并向PCB中填写用于控制进程的信息")]),t._v(" "),a("li",[t._v("终止态: 将PCB清零, 并将PCB返还系统")])]),t._v(" "),a("p",[a("a",{attrs:{name:"c120f910"}})]),t._v(" "),a("h5",{attrs:{id:"进程同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程同步","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程同步")]),t._v(" "),a("p",[t._v("进程同步是对多个相关进程在执行次序上进行协调, 使并发执行的诸进程之间能按照一定的规则共享系统资源.")]),t._v(" "),a("p",[t._v("为了实现对临界资源的互斥访问, 需遵循以下原则:")]),t._v(" "),a("ol",[a("li",[t._v("空闲让进: 当无进程处于临界区时, 应允许一个请求进入临界区的进程立即进入临界区")]),t._v(" "),a("li",[t._v("忙则等待: 当已有进程进入临界区时, 其它试图进入临界区的进程必须等待")]),t._v(" "),a("li",[t._v("有限等待: 对请求访问临界资源的进程, 应保证在有限时间内进入临界区(保证不会饥饿)")]),t._v(" "),a("li",[t._v("让权等待: 当进程不能进入临界区时, 应立即释放处理机, 以免进程陷入忙等状态")])]),t._v(" "),a("p",[t._v("硬件方法实现进程互斥:")]),t._v(" "),a("ol",[a("li",[t._v("关中断")]),t._v(" "),a("li",[t._v("Test and Set指令")]),t._v(" "),a("li",[t._v("Swap指令")])]),t._v(" "),a("p",[t._v("信号量机制")]),t._v(" "),a("p",[t._v("可以用一个信号量表示系统中某种资源的数量, 用户进程可以通过使用操作系统提供的一对原语来对信号量进行操作.")]),t._v(" "),a("ul",[a("li",[t._v("整型信号量")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ul",[a("li",[t._v("记录型信号量")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//记录型信号量的定义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剩余资源数")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待队列")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("semaphore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("semaphore "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("semaphore "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wakeup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("ul",[a("li",[t._v("生产者消费者问题")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" item buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsemaphore mutex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" empty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" full "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("producer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        producer an item nextp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("True"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        nextc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        consumer the item in nextc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("True"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("ul",[a("li",[t._v("哲学家进餐问题")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("semaphore chopstick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsemaphore mutex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//互斥地取筷子")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//i号哲学家的进程")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chopstick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拿左")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chopstick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拿右")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      吃饭\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chopstick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chopstick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      思考\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[a("a",{attrs:{name:"24da6400"}})]),t._v(" "),a("h5",{attrs:{id:"进程通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程通信","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程通信")]),t._v(" "),a("p",[t._v("指进程之间的信息交换")]),t._v(" "),a("p",[t._v("高级通信机制:")]),t._v(" "),a("ol",[a("li",[t._v("共享存储器系统: 相互通信的进程共享某些数据结构或共享存储区")]),t._v(" "),a("li",[t._v("管道通信系统: 管道, 是指用于连接一个读进程和一个写进程以实现它们之间通信的一个共享文件, 又叫pipe文件. 写进程以字符流形式将大量的数据送入管道, 读进程则从管道中接收数据.")]),t._v(" "),a("li",[t._v("消息传递系统: 不必借助任何共享存储区或数据结构, 而是以格式化的消息为单位, 将通信的数据封装在消息中, 并利用操作系统提供的一组通信命令原语, 在进程间进行消息传递")]),t._v(" "),a("li",[t._v("客户机-服务器系统")])]),t._v(" "),a("p",[a("a",{attrs:{name:"d276123c"}})]),t._v(" "),a("h5",{attrs:{id:"线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),a("p",[t._v("引入进程的目的是为了使多个程序能并发执行, 以提高资源利用率和系统吞吐量.")]),t._v(" "),a("p",[t._v("引入线程的目的是为了减少程序在并发执行时所付出的时空开销.")]),t._v(" "),a("p",[t._v("线程是一个基本的CPU执行单元, 也是程序执行流的最小单位")]),t._v(" "),a("p",[t._v("线程是调度的基本单位")]),t._v(" "),a("p",[t._v("由于进程是一个资源的拥有者, 因而在创建, 撤销和切换中, 系统必须为之付出较大的时空开销. 线程间并发, 如果是同一进程内的线程切换, 则不需要切换进程环境, 系统开销小")]),t._v(" "),a("p",[a("a",{attrs:{name:"a106c837"}})]),t._v(" "),a("h1",{attrs:{id:"处理机调度与死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理机调度与死锁","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理机调度与死锁")]),t._v(" "),a("p",[t._v("调度的实质是一种资源分配, 处理机调度是对处理机资源进行分配.")]),t._v(" "),a("p",[t._v("饥饿: 某进程/作业长期得不到服务")]),t._v(" "),a("ul",[a("li",[t._v("作业调度(高级调度):")])]),t._v(" "),a("p",[t._v("根据某种算法, 从外存上处于后备队列的作业中挑选一个或多个作业, 给它们分配内存等资源, 建立相应的进程(建立PCB).")]),t._v(" "),a("ul",[a("li",[t._v("内存调度(中级调度):")])]),t._v(" "),a("p",[t._v("引入中级调度的目的是提高内存利用率和系统吞吐量")]),t._v(" "),a("p",[t._v("中级内存实际上就是存储器管理中的对换功能")]),t._v(" "),a("p",[t._v("把那些暂时不能运行的进程调至外存等待, 此时进程的状态称为挂起状态, 当它们已具备运行条件且内存又稍有空闲时, 由中级调度决定重新调入内存.")]),t._v(" "),a("ul",[a("li",[t._v("进程调度(低级调度):")])]),t._v(" "),a("p",[t._v("按照某种算法, 从就绪队列中选择一个进程为其分配处理机")]),t._v(" "),a("p",[t._v("进程切换是指一个进程让出处理机, 另一个进程占有处理机的过程, 对原来运行的进程保存各种数据, 对新的进程恢复各种数据")]),t._v(" "),a("p",[t._v("处理机的利用率")]),t._v(" "),a("p",[t._v("CPU的利用率=CPU有效工作时间/(CPU有效工作时间+CPU空闲等待时间)")]),t._v(" "),a("p",[a("a",{attrs:{name:"0d1d27f8"}})]),t._v(" "),a("h3",{attrs:{id:"调度算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调度算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 调度算法")]),t._v(" "),a("ul",[a("li",[t._v("先来先服务(first-come first-served)调度算法")])]),t._v(" "),a("p",[t._v("该算法可用于作业调度和进程调度, 系统按照作业到达的先后次序来进行调度, 优先考虑在系统中等待时间最长的作业")]),t._v(" "),a("ul",[a("li",[t._v("短作业优先(short job first)调度算法")])]),t._v(" "),a("p",[t._v("该算法以作业/进程的长短来计算优先级, 作业/进程越短, 优先级越高.")]),t._v(" "),a("p",[t._v("对短作业有利, 长作业不利, 还可能造成饥饿.")]),t._v(" "),a("ul",[a("li",[t._v("优先级调度算法(priority-scheduling algorithm)")])]),t._v(" "),a("p",[t._v("在优先级调度算法中, 基于作业的紧迫程度, 由外部赋予作业相应的优先级, 调度算法根据该优先级进行调度.")]),t._v(" "),a("ul",[a("li",[t._v("高响应比优先调度算法(Highest Response Ratio Next)")])]),t._v(" "),a("p",[t._v("为每个作业引入一个动态优先级, 即令优先级随等待时间延长而增加, 避免了长作业饥饿的问题. 该优先级的变化规律可描述为: 优先权=(等待时间+要求服务时间)/要求服务时间")]),t._v(" "),a("ul",[a("li",[t._v("基于时间片的轮转(round robin)调度算法")])]),t._v(" "),a("p",[t._v("系统根据FCFS策略, 将所有的就绪进程排成一个就绪队列, 并设置每隔一定时间间隔(如30ms)产生一次中断, 激活系统中的进程调度程序, 如果进程尚未运行完毕, 调度程序把它送往就绪队列的末尾, 将CPU分配给队首进程.")]),t._v(" "),a("ul",[a("li",[t._v("多队列调度算法")])]),t._v(" "),a("p",[t._v("该算法将系统中的进程就绪队列从一个拆分为若干个, 将不同类型或性质的进程固定分配在不同的就绪队列, 不同的就绪队列采用不同的调度算法")]),t._v(" "),a("ul",[a("li",[t._v("多级反馈队列(multileved feedback queue)调度算法")])]),t._v(" "),a("ol",[a("li",[t._v("在系统中设置多个就绪队列, 并为每个队列赋予不同的优先级. 第一队列优先级最高, 第二个次之. 该算法为不同队列中的进程所赋予的执行时间片的大小也不相同, 在优先级越高的队列中, 其时间片越小.")]),t._v(" "),a("li",[t._v("新进程进入内存后, 先将其放入第一队列的末尾, 每个队列都采用FCFS算法, 当轮到该进程执行时, 若用完时间片进程还未结束, 则将该进程放入下一级队列队尾")]),t._v(" "),a("li",[t._v("只有第k级队列为空时, 才会为第k+1级队头的进程分配时间片")])]),t._v(" "),a("p",[a("a",{attrs:{name:"60461afa"}})]),t._v(" "),a("h3",{attrs:{id:"死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#死锁","aria-hidden":"true"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),a("p",[t._v("在并发环境下, 各进程因竞争资源而造成的一种互相等待对方手里的资源, 导致各进程都阻塞, 都无法向前推进的现象")]),t._v(" "),a("ul",[a("li",[t._v("产生死锁的必要条件")])]),t._v(" "),a("p",[t._v("互斥条件, 请求和保持条件, 不可抢占条件, 循环等待条件")]),t._v(" "),a("ul",[a("li",[t._v("处理策略")])]),t._v(" "),a("p",[t._v("预防死锁: 破坏产生死锁的四个必要条件")]),t._v(" "),a("p",[t._v("避免死锁: 银行家算法")]),t._v(" "),a("p",[t._v("死锁的检测与解除")])])}],!1,null,null,null);s.default=e.exports}}]);