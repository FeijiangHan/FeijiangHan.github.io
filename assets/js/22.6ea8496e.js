(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{340:function(e,a,t){"use strict";t.r(a);var s=t(17),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"linux-页表总结-when-why-what-how"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-页表总结-when-why-what-how"}},[e._v("#")]),e._v(" [Linux] 页表总结：When/Why/What/How！")]),e._v(" "),a("p",[a("strong",[e._v("先来问几个基础问题，看看你有没有掌握吧！")])]),e._v(" "),a("p",[e._v("页表是什么时候创建的呢？")]),e._v(" "),a("p",[e._v("页表占用内存么？")]),e._v(" "),a("p",[e._v("什么时候可以把页表项映射为真实到物理地址？")]),e._v(" "),a("p",[e._v("有什么方式可以优化页表对内存到占用？这些方式有无其他缺点？")]),e._v(" "),a("p",[a("strong",[e._v("下面是一些要点到总结：")])]),e._v(" "),a("ul",[a("li",[e._v("进程运行时需要从磁盘上被载入到内存中，但是不运行到进程存在磁盘里就行了。")]),e._v(" "),a("li",[e._v("进程中数据访问和内存分配时用到的地址都是虚拟地址。比如说在某句代码中访问变量，在链接时这句代码中到变量就会被修正为虚拟地址；比如使用malloc函数申请内存时，底层是调用mmap申请页面，本质上申请到的不是真实到物理内存而仅仅是虚拟内存。")]),e._v(" "),a("li",[e._v("Linux把进程载入内存准备运行到时候，是将其按照分页的方式存储，目的是减小外部碎片。")]),e._v(" "),a("li",[e._v("进程运行过程中访问到虚拟地址时，可以通过页表的映射转换为真实物理地址。这个转换过程由OS调控，对程序员是透明的。")]),e._v(" "),a("li",[e._v("当一个进程创建时，这个进程的页表也会被创建并载入kernel memory中，用户无法直接访问。此时页表处于一种没有被激活到状态，并没有完全建立所有虚拟地址到物理地址到映射。所以页表也会占用内存，因为它们需要存储在内存中以便于方便映射。")]),e._v(" "),a("li",[e._v("每个进程都会有一个独一无二的页表存放在内存中。因为每个进程都认为自己有一整个虚拟存储空间，因此用一个完整的独立页表存放。OS负责调度页面的载入避免多个进程的页面发生存储冲突。现在，在许多操作系统中，进程都有单独的(换句话说，不与其他进程共享)虚拟地址空间，这有助于保护进程之间不受影响。")]),e._v(" "),a("li",[e._v("当进程需要开始运行时，它的页表就会逐渐被激活，此时可以通过缺页中断和请求调页可以在真实的物理内存中创建页面，将外存中的进程载入到内存中分配的页面里，并在页表中建立虚拟地址到物理页面地址的映射。")]),e._v(" "),a("li",[e._v("当工作集满时，再想要把外存的进程调入内存时就没有足够到物理空间了，此时OS需要使用LRU算法把内存中到一页swap到交换区（外存的一个特殊区域，访问速率比其他部分快），然后载入新到部分到内存中，同时更新页表。")]),e._v(" "),a("li",[e._v("使用fork创建子进程时，子进程只需要复制一份父进程的页表即可。如果只是读取数据，并不需要给子进程分配实际物理页面。只有当写入数据时，才会给子进程分配一个物理页面，这就是COW---写时复制。")]),e._v(" "),a("li",[e._v("使用多级页表可以优化页表的内存占用。")]),e._v(" "),a("li",[e._v("使用Huge page也可以减少页表的内存占用。Normal pages are 4096 bytes long. Hugepages have a size of 2 Megabytes. By enabling huge pages, the system has fewer page tables to deal with and hence less overhead to access/maintain them!")])]),e._v(" "),a("p",[a("strong",[e._v("针对最后一点到补充：虽然使用Huge Page可以减少页表的内存占用，但在某些情况下使用Huge Page也可能会带来缺陷，主要包括以下几个方面：")])]),e._v(" "),a("p",[e._v("内存浪费：由于Huge Page的大小通常比普通页面大得多，因此在某些情况下使用Huge Page可能会导致内存浪费。例如，如果应用程序需要分配大量的小块内存，使用Huge Page可能会导致浪费大量的未使用内存。\n内存碎片：由于Huge Page的大小比普通页面大，因此在某些情况下，如果系统内存中没有足够的连续物理内存来分配Huge Page，则可能会出现内存碎片的情况。\n额外开销：由于Huge Page的大小通常比普通页面大得多，因此在某些情况下，对Huge Page的管理可能会带来额外的开销，例如，增加了页表的大小和维护开销。\n不适用于所有应用程序：Huge Page通常适用于需要大块内存的应用程序，例如，数据库服务器和内存缓存。对于其他类型的应用程序，使用Huge Page可能不是最佳选择，甚至可能会导致性能下降。")]),e._v(" "),a("p",[e._v("------------------------下面到回答来自STACK OVERFLOW------------------------")]),e._v(" "),a("p",[e._v("How are page tables generated by the operating system per process?")]),e._v(" "),a("p",[e._v("至少在 linux 中，页表是在运行时加载程序为新进程创建内存映射期间创建的。在运行时加载程序完成并将执行传输到应用程序的起始地址之前，它们不会被激活。")]),e._v(" "),a("p",[e._v("当这种情况发生时，将会发生一个或多个页面错误——内核必须分配实际的页面来将数据从磁盘加载到。然后，此分配将替换初始页表中的条目，应用程序将继续运行。当它运行时，会分配越来越多的页面(达到配额限制)。在此之后，将根据需要删除/添加页面，数据页面使用交换空间，程序页面使用只读的可执行文件/库文件。用于数据和可执行文件的页面(例如由 JIT 翻译器创建的页面)将被视为数据页面并保存在交换中。")]),e._v(" "),a("p",[e._v("When is the page table of a process loaded in memory?")]),e._v(" "),a("p",[e._v("If a process has any pages in memory, the page table needs to be in (kernel) memory. The page table needs to be available for the process to run at all, when that process is selected to run the page table has to be activated. On some machines the entire page table for a running process is actually loaded into the hardware as part of the process activation. On others the page table stays in memory and a pointer to it is loaded into a hardware register.")]),e._v(" "),a("p",[e._v("But, if a process gets completely swapped out and no longer has any real memory allocated to it, there is actually no need for a page table at all. When pages start getting paged in to run the program, the relevant page table can be reconstructed. Some systems to not do that optimization and keep an active page table in kernel space for every process.")])])}),[],!1,null,null,null);a.default=n.exports}}]);