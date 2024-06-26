# Feijiang Han's Portfolio

## Table of Contents
- [Feijiang Han's Portfolio](#feijiang-hans-portfolio)
  - [About Me](#about-me)
  - [Skills](#skills)
- [My Opinion and Way of Studying](#my-opinion-and-way-of-studying)
  - [Research List](#research-list)
  - [Patents](#patents)
  - [Projects](#projects)
    - [EasyView - Profiling Tool for Golang Applications](#easyview---profiling-tool-for-golang-applications)
    - [Dead Code Analyzer](#dead-code-analyzer)
    - [Web Shell Detection and Visualization](#web-shell-detection-and-visualization)
    - [Innovative Function Call Visualization \[Paper PDF\]](#innovative-function-call-visualization-paper-pdf)
    - [Pulmonary Embolism Detection System](#pulmonary-embolism-detection-system)
    - [Trie Performance Optmization](#trie-performance-optmization)
    - [Teaching Assistant Notes](#teaching-assistant-notes)
    - [Open CS Courses](#open-cs-courses)
  - [Honors And Awards](#honors-and-awards)
  - [Student Affairs](#student-affairs)
  - [Leaderships And Activities](#leaderships-and-activities)
  - [Voluntary Activity](#voluntary-activity)
  - [Latest News](#Jun-2024-Happy-Graduation)


## About Me

I recently graduated from Central South University with a strong academic background and practical experience in Deep Learning, Data Science and Software Development. This fall, I'll begin studying Data Science at the University of Pennsylvania.

* **Academic Performance**
  * **Totle GPA:** 92.31/100
  * **Ranked 1st** out of 240 students in the 2020-2021 academic year
  * **A total of 20 courses scored above 95, and 48 courses scored above 90.**
    * Object-Oriented Programming (C++) 99, Calculus 98, Data Warehousing and Data Mining 98, Advanced Mathematics 97, Linux System and Applications 97, Introduction to Innovation and Entrepreneurship 97, Computer Architecture 96, Embedded Systems 96, Data Structures 96, Distributed Systems and Cloud Computing 96, Analog Electronic Technology 96, Software Architecture 95, Human-Computer Interaction 94, Web Technology 94, Parallel Computing 94, Data Analysis And Fusion 94, Training of Career Planning 94, Database Principle 94, Computer Network 94, Linear Algebra 94, Fundamental of Engineering Drawing 94, ……
* **Interests & Research topics:** AI based Everything, LLM , HCI, Data Science, Visualization, Crowdsourcing, Internet of Things, Computer Education, Deep learning (NLP&CV)
* **Supervisor:** [Prof. Xu Liu (NCSU HPC Lab)](https://xl10.github.io/), [Prof. Ying Zhao (CSU Visualization Lab)](https://faculty.csu.edu.cn/zhaoying/en/index.htm), [Prof. Anfeng Liu (CSU IoT Lab)](https://faculty.csu.edu.cn/liuanfeng/en/index/4266/list/), [Dr. Qidong Zhao (NCSU)](https://www.linkedin.com/in/qidong-zhao)
* **My Github Link:** https://github.com/FeijiangHan
* **My Google Scholar:** [scholar.google.com](https://scholar.google.com/citations?user=PEJ5x3EAAAAJ&hl=zh-CN&oi=ao)
* **Our IoT Team Website**:   https://feijiang.info/team-en/
* CSU-CSE Undergraduate Course Review Repository: Shared Materials and Resources - https://github.com/FeijiangHan/CSU-review-materials/



## Skills

* **Programming Language:** Proficient in C/C++, Web Assembly, Python, JavaScript, Html/CSS; Familiar with Shell, Go
* **Framework:** Proficient in React, Vue, D3.js, PyTorch; Familiar with MPI, OpenMP, Django, Ajax
* **Other Skill Set:** Proficient in Git, Linux, Docker



# My Opinion and Way of Studying



<center class="half">
    <img src="markdown/assets/image-20231225223505829.png" width="40%"/>
    <img src="markdown/assets/image-20231225223529274.png" width="40%"/>
</center>



<center class="half">
    <img src="markdown/assets/image-20231225223608040.png" width="80%"/>
</center>




## Research List

**I've done an introductory slide to my reaserch, if you're interested you can read this document**, **but the content is mostly the same as below**：[Click here to see slide](https://docs.google.com/presentation/d/1VUGfG8Gexeikz-J4mJliqujFif8x3kMJ/edit?usp=sharing&ouid=106857639894919772271&rtpof=true&sd=true)

J. Tang, **F. Han**, K. Fan, W. Xie, P. Yin, Z. Qu, Anfeng Liu, Neal N. Xiong, [Credit and Quality Intelligent Learning based Multi-armed Bandit Scheme for Unknown Worker Selection in Multimedia MCS](https://drive.google.com/file/d/1169FD3QCUWwrvt0I0WRd0RqRYSh2p-Qv/view). *Information Sciences*. Volume 647, November 2023, 119444 (JCR Q1, IF=8.1)

* DIO: 10.1016/j.ins.2023.119444

* **Abstract:** The field of intelligent multimedia systems, which rely heavily on multimodal models trained on large amounts of high-quality data, has been revolutionized by deep learning. One promising approach to collecting such multimodal data is Mobile Crowd Sensing (MCS). However, MCS platforms face a significant challenge in selecting both high-credit and high-quality workers at low cost due to the Post-Unknown Worker Recruitment (PUWR) problem. The PUWR problem makes it difficult to determine the credits and qualities of workers in advance, which can lead to the recruitment of dishonest or low-quality workers. This problem severely affects the quality and quantity of MCS data collection, posing a serious threat to the security and robustness of large-scale multimedia models. To address this issue, we propose a Credit and Quality Learning based Multi-Armed Bandit (CQL-MAB) scheme, which consists of a novel credit identification algorithm, a fine-grained worker quality calculation method, and a two-stage reward-based Multi-Armed Bandit (MAB) for worker selection in reverse auction. The theoretical proof shows that the CQL-MAB scheme achieves the truthfulness, [individual rationality](https://www.sciencedirect.com/topics/engineering/individual-rationality), and efficiency of the auction mechanism. A large number of simulation experiments on real data traces are conducted to demonstrate the outstanding performance of CQL-MAB.

<center class="half">
    <img src="markdown/assets/image-20231111214203872.png" width="50%"/><img src="markdown/assets/image-20231111214941735.png" width="50%"/> </center>

<center class="half">
    <img src="markdown/assets/image-20231111220012495.png" width="50%"/><img src="markdown/assets/image-20231111220100931.png" width="50%"/> </center>


**F. Han**, Y. Zhao, S. Lv, [FCTree: Visualization of Function Calls in Execution](https://drive.google.com/file/d/19Y9thDHZa_Kelvbm1T7rO1n_DUK_ZA7b/view?usp=sharing) (Frontiers of Computer Science, Under review)

* **Abstrac:** Function calls in execution contain rich bivariate, hierarchical, and chronological information. Many visualizations have been adopted to analyze function calls in execution for program testing, vulnerability locating, and malware detection. However, we conducted a pilot study and revealed that existing single-viewed function call visualizations fail to present the bivariate, hierarchical, and chronological information comprehensively. A new function call visualization named FCTree is proposed in this work to deal with this situation. Learned from advantages of existing visualizations and iterative discussions with actual users, FCTree uses a compact and aligned hierarchical layout design to present the bivariate and hierarchical information and adopts a glyph design to present the chronological information. Subjective and objective experiments in the laboratory and a field study in a real-world scenario were conducted to evaluate the effectiveness of FCTree.

<center class="half">
    <img src="markdown/assets/image-20231111214430989.png" width="50%"/><img src="markdown/assets/image-20231111214537986.png" width="50%"/> </center>


J. Tang, **F. Han**, K. Fan, W. Xie, [Minority is all you need: Eliciting the Minority Report in Crowdsourcing](https://drive.google.com/file/d/1Uyv9-2lzSgxMm8mXRTY3Ts7Lh2CTdTw0/view?usp=sharing). (*Expert Systems with Applications*, Under review) 

* **Abstract:** Have you ever questioned the assumption that the majority always holds the truth? In the realm of crowdsourcing-based data collection, such as data labeling for supervised ML models, the prevailing practice relies on majority voting to determine the ground truth. However, traditional majoritybased methods suffer from certain inherent flaws that have long been overlooked. Specifically, majority voting has already been proven to be inadequate when the truth is held by a minority, which can lead to inaccurate labeling. Additionally, traditional majority-based methods predominantly depend on redundant workers to improve accuracy, not only causing high and inefficient costs but also introducing potential biases. To address the issues of majority-based methods, we propose a novel Minority Learning-based Worker Recruitment (MiLWR) scheme, consisting of Minority Report Elicitation (MRE), Minority Worker Discovery (MWD), and Minority Winner Recruitment (MWR). Through extensive simulations, we demonstrate that our MiLWR scheme effectively reduces system overhead and eliminates wasteful redundancy while improving accuracy. To the best of our knowledge, we are the first to propose a minority-based worker recruitment scheme, providing an effective approach to crowdsourcing by harnessing the wisdom of the minority.

<center class="half">
    <img src="markdown/assets/image-20231111215757875.png" width="80%"/> </center>

<center class="half">
    <img src="markdown/assets/image-20231111214714600.png" width="80%"/> </center>

<center class="half">
    <img src="markdown/assets/image-20231111214714600.png" width="80%"/> </center>

<center class="half">
    <img src="markdown/assets/image-20231111214730451.png" width="80%"/> </center>


<center class="half">
    <img src="markdown/assets/image-20231111214758724.png" width="26.66%"/><img src="markdown/assets/image-20231111214808170.png" width="26.66%"/><img src="markdown/assets/image-20231111214821445.png" width="26.66%"/> </center>




Y. Yuwei, J. Tang, **F. Han**, Anfeng Liu, Neal N. Xiong, [MAB-RP: A Multi-Armed Bandit based Scheme for Accurate Data Collection in Crowdsensing](https://drive.google.com/file/d/1hsdOhoHCiULRcT6ijiHqcq1_4hHHFwML/view?usp=sharing). (INS 2024, Accepted)

* **Abstract:** Accurate data collection from workers is crucial for the success of Mobile Crowd Sensing (MCS) applications. However, the current study suffers from several drawbacks:

  1. The workers' sensing qualities remain unknown even after the platform acquires the data submitted by the workers, known as the Post Unknown Worker Selection (PUWS) problem.
  2. Systematic deviations between worker data and the Ground Truth Data (GTD) reduce the quality of MCS applications.
  3. The data collected by workers for different tasks may vary in accuracy, resulting in low-quality data collection.

  We propose a novel Multi-Armed Bandit-based worker selection scheme with Reputation and Preference (MAB-RP) to address these challenges. The proposed scheme aims at selecting credible workers for high-quality data collection through trust identification, thus addressing the PUWS issue after worker recruitment. Additionally, the scheme employs a learning-based approach to identify and correct the gaps between the sensed data and the GTD, ultimately improving the accuracy of data collection. Lastly, a matching-based approach is used to identify workers' sensing qualities for different tasks, further enhancing the accuracy of data collection in MCS. Extensive simulations on real-world datasets demonstrate that the proposed MAB-RP scheme outperforms previous strategies in terms of both data quality and cost.

<center class="half">
    <img src="markdown/assets/image-20231112004154397.png" width="60%"/></center>





J. Tang, K. Fan, W. Xie, **F. Han**, Y. Zhai, T. Su, Anfeng Liu, Neal N. Xiong, [ A Bi-directional Trust Verification Based Combinatorial Multi-Armed Bandit Scheme for Mobile Crowdsourcing](https://ieeexplore.ieee.org/document/10302275/), *IEEE Internet of Things Journal,* DOI: 10.1109/JIOT.2023.3325274 (IF=10.238)

<center class="half">
    <img src="markdown/assets/image-20231111215848910.png" width="40%"/><img src="markdown/assets/image-20231111215922826.png" width="40%"/> </center>




Fan, Kejia; Tang, Jianheng; Xie, Wenxuan; **Han, Feijiang**; Huang, Yajiang; Qu, Zhenzhe; Liu, Anfeng; Xiong, Naixue; Wang, Tian; Zhang, Shaobo, [CRL-MABA: A Completion Rate Learning based Accurate Data Collection Scheme in Large-scale Energy Internet](https://drive.google.com/file/d/1M_sdZweWia-u0r8_FpO6wgYzi3skcCyd/view?usp=sharing), *IEEE Internet of Things Journal*, DOI: 10.1109/JIOT.2023.3347746 (IF=10.238)

<center class="half">
    <img src="markdown/assets/image-20231215233636284.png" width="20%"/><img src="markdown/assets/image-20231215233713887.png" width="60%"/> </center>



J. Tang, K. Fan, W. Xie, **F. Han**, Pengzhi Yin, Zhenzhe Qu, [A Semi-supervised Sensing Rate Learning based CMAB Scheme to Combat COVID-19 by Trustful Data Collection in the Crowd](https://www.sciencedirect.com/science/article/pii/S0140366423001433). *Computer Communications.* *Volume 206, 1 June 2023, Pages 85-100* (JCR Q1, IF=6.0)

* **Abstract:** The recruitment of trustworthy and high-quality workers is an important research issue for MCS. Previous studies either assume that the qualities of workers are known in advance, or assume that the platform knows the qualities of workers once it receives their collected data. In reality, to reduce costs and thus maximize revenue, many strategic workers do not perform their sensing tasks honestly and report fake data to the platform, which is called False data attacks. And it is very hard for the platform to evaluate the authenticity of the received data In this paper, an incentive mechanism named Semi-supervision based Combinatorial Multi-Armed Bandit reverse Auction (SCMABA) is proposed to solve the recruitment problem of multiple unknown and strategic workers in MCS. First, we model the worker recruitment as a multi-armed bandit reverse [auction problem](https://www.sciencedirect.com/topics/computer-science/auction-problem) and design an UCB-based algorithm to separate the exploration and exploitation, regarding the Sensing Rates (SRs) of recruited workers as the gain of the bandit Next, a Semi-supervised Sensing Rate Learning (SSRL) approach is proposed to quickly and accurately obtain the workers’ SRs, which consists of two phases, supervision and self-supervision. Last, SCMABA is designed organically combining the SRs acquisition mechanism with multi-armed bandit reverse auction, where supervised [SR learning](https://www.sciencedirect.com/topics/computer-science/learning-rate) is used in the exploration, and the self-supervised one is used in the exploitation. We theoretically prove that our SCMABA achieves truthfulness and [individual rationality](https://www.sciencedirect.com/topics/engineering/individual-rationality) and exhibits outstanding performances of the SCMABA mechanism through in-depth simulations of real-world data traces.

<center class="half">
    <img src="markdown/assets/image-20231112004054698.png" width="28%"/><img src="markdown/assets/image-20231112004255187.png" width="28%"/><img src="markdown/assets/image-20231112004312258.png" width="28%"/> </center>




------

## Patents                            

* A Visualization Method for Dynamic Function Calls. China. Patent No. (Public): CN115952230A. April 11, 2023.
* A Flexible Charging Method for Tramcars. China. Patent No. (Public): CN115891697A. April 4, 2023.
* A Method for Characterizing Malware Behaviors Based on Morpheme Vector Model. China. Patent No. (Public): CN115587361A. October 14, 2022.

<center class="half">
    <img src="markdown/assets/image-20231114200025219.png" width="80%"/> </center>



------

## Projects

### [EasyView - Profiling Tool for Golang Applications](https://www.easyview.dev/)

* **C++ & Web Assembly &  JavaScript & React & WebGL**
* EasyView is a user-friendly, versatile, high-performance and intelligent local performance analysis and visualization tool. It balances ease of use, analytical flexibility and data security.
  * **Easy:** EasyView is easy to install, use and customize. It can meet the needs of performance engineers at all levels
  * **General:** EasyView is not designed to support specific profilers. Instead, it aims to provide a general solution that widely supports a broad range of profilers.
  * **Portable:** EasyView is implemented with web frontend techniques, making it portable across different platforms and allowing it to be integrated into IDEs as a plugin or extension.
  * **Private:** EasyView analyzes and visualizes performance data locally without uploading data to a remote server, minimizing security and privacy concerns.
  * **Efficient:** EasyView is extremely efficient. It handles profilers of gigabytes in size and is significantly faster than existing solutions. For example, it shows a ~50x speedup over PProf.
  * **Intelligent:** EasyView can easily integrate various data mining and machine learning models to analyze profiles and correlate the analysis results with source code.


<center class="half">
    <img src="markdown/img/demo2.a7673cc1.gif" width="80%"/> </center>




### [Dead Code Analyzer](https://github.com/FeijiangHan/dead_code_analyzer)

* **C++ & CMake & DynamoRIO & XED**

Using DynamoRIO and XED to find redundant executions (Dead code)
* This project can be used as a framework for dead code analysis.
* This project can also be seen as introductory training to help students or beginners explore some instruction-level programming work

> 1. This tool aims to detect and analyze dead code (redundant executions) in binary files using DynamoRIO and XED.
> 2. Here, I only implement a basic logic to detect dead writes and reads
> 3. You have the freedom to modify the detection logic in [dead_code_analysis.cpp](https://github.com/FeijiangHan/DeadCodeDetection/blob/main/src/trace/cpps/dead_code_analysis.cpp) to achieve better dead code detection than what is currently implemented.
> 4. You can also modify the code output logic to use CSV or any other file you want
> 5. This project does not read files using C++, so you need to configure the compiler to specify the binary path in order to get the binary into the program. I feel that Clion is more convenient, VScode is slightly more complicated

**The process can be summarized as follows:**

1. Obtain the binary file (trace) that needs to be parsed.
2. Extract the necessary code from DynamoRIO for parsing the target binary. This step gathers detailed information about instructions, such as read/write operations and parameter details.
3. Utilize [Intel XED](https://intelxed.github.io/) to decode register details and analyze fine-grained parameters.
4. Modify the dead code detection logic in [dead_code_analysis.cpp](https://github.com/FeijiangHan/DeadCodeDetection/blob/main/src/trace/cpps/dead_code_analysis.cpp). The implementation includes detecting redundant reads and redundant writes.
5. The analysis results will be output to the 'out' file, which can be further analyzed.

**Here is a poster of me showcasing my work during NCSU GEARE training:**

<center class="half">
    <img src="markdown/assets/image-20231220184411591.png" width="80%"/> </center>



### [Web Shell Detection and Visualization](https://github.com/FeijiangHan/Malware-Family-Vis-Platform/)

* **D3.js & React & Redux & Django**
* **Implemented Clustering Algorithms**
  - [G Class: Clustering algorithm based on Graph2Vec graph embedding g_graph2vec_clustering.py](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#g-class-clustering-algorithm-based-on-graph2vec-graph-embedding-g_graph2vec_clusteringpy)
  - [G Class: Clustering algorithm based on graph edit distance](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#g-class-clustering-algorithm-based-on-graph-edit-distance)
  - [G Class: Clustering based on graph kernel g_graph_kernel.py](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#g-class-clustering-based-on-graph-kernel-g_graph_kernelpy)
  - [T Class: Clustering based on tree edit distance t_tree_edit_distance.py](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#t-class-clustering-based-on-tree-edit-distance-t_tree_edit_distancepy)
  - [S Class: Clustering based on Word2Vec s_cbow.py](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#s-class-clustering-based-on-word2vec-s_cbowpy)
  - [S Class: Clustering based on Bert s_bert.py](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#s-class-clustering-based-on-bert-s_bertpy)
  - [S Class: Clustering based on GloVe s.glove_clustering.py](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#s-class-clustering-based-on-glove-sglove_clusteringpy)
  - [S Class: Clustering based on SimCSE s.simcse_clustering.py](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#s-class-clustering-based-on-simcse-ssimcse_clusteringpy)
* **Fronend Platform Introduction**
  - [Screenshots](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#screenshots)
  - [New Feature - FCTree Visualization](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#new-feature---fctree-visualization)
  - [Online Demo](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#online-demo)
  - [Intellectual Property](https://github.com/FeijiangHan/MFVP?tab=readme-ov-file#intellectual-property)

<center class="half">
    <img src="markdown/img/web-01.png" width="40%"/> 
    <img src="markdown/img/web-02.png" width="40%"/> 
    <img src="markdown/assets/image-20231111214519387.png" width="80%"/>
    </center>


### [Innovative Function Call Visualization](https://github.com/FeijiangHan/Function-Visualization/) [[Paper PDF](https://drive.google.com/file/d/19Y9thDHZa_Kelvbm1T7rO1n_DUK_ZA7b/view?usp=sharing)]

* **D3.js & Vue & Django**
* [Graph Visualization](https://github.com/FeijiangHan/Function-Visualization/#graph-visualization)
* [Hierarchy Graph](https://github.com/FeijiangHan/Function-Visualization/#hierarchy-graph)
* [Hierarchy Matrix](https://github.com/FeijiangHan/Function-Visualization/#hierarchy-matrix)
* [Hierarchy Tree](https://github.com/FeijiangHan/Function-Visualization/#hierarchy-tree)
* [Icicle Graph](https://github.com/FeijiangHan/Function-Visualization/#icicle-graph)
* [Matrix](https://github.com/FeijiangHan/Function-Visualization/#matrix)
* [MSV](https://github.com/FeijiangHan/Function-Visualization/#msv)
* [FCTree](https://github.com/FeijiangHan/Function-Visualization/#fctree)
* [Platform Overview](https://github.com/FeijiangHan/Function-Visualization/#platform-overview)

<center class="half">
    <img src="markdown/img/image-20231011185448410.png" width="80%"/> 
    <img src="markdown/img/image-20231011192344897.png" width="40%"/>
    <img src="markdown/img/fct-04.png" width="40%"/> </center>


### [Pulmonary Embolism Detection System](https://github.com/FeijiangHan/CT-image-segmentation-for-pulmonary-embolism/)

* **Python & Pytorch & OpenCv & Cuda**
* As team leader, I led a 5-member group to develop a CT image detection model for identifying pulmonary embolisms. We built an ensemble model combining YOLO and UNet that achieved top 5% ranking in a Kaggle competition, improving on the UNet baseline by 8%. I spearheaded innovative data augmentation techniques that expanded our training dataset by 30%.

<center class="half">
    <img src="markdown/img/schema.png" width="25%"/> 
<img src="markdown/img/cut.png" width="25%"/> 
    <img src="markdown/img/improve.png" width="25%"/>
    <img src="markdown/img/finall.png" width="65%"/> </center>

​    

### [Trie Performance Optmization](https://github.com/FeijiangHan/tire-match/)

* **Js & Wasm & C++ & PHP**

A few days ago at work, I encountered the following problem:

> There are 600,000 short message log records, each around 50 characters, and 50,000 keywords, 2-8 characters in length, mostly Chinese. The task is to extract all keywords contained in the 600,000 records and count the number of hits for each keyword.

**I wrote a detailed blog about how I used Trie to improve the keyword matching speed from 10 hours to 10 minutes, please click the project hyperlink above. **This article fully introduces my implementation approach, showing how I optimized a task that took 10 hours to run to under 10 minutes. Although the implementation language is PHP, this article focuses more on the concepts, which should be helpful to everyone.



### Teaching Assistant Notes

* Collected and graded assignments for 100+ students, providing feedback and evaluating their understanding of the course
* Authored comprehensive English course notes for students; **See:**  [**feijiang/RA-course-notes**](https://gitee.com/han-feijiang/code-and-notes-for-course) 
* Designed experiments for *Object-Oriented Analysis and Design (AC22004)*, taught by *Prof. Ping Zhong* in Fall 2023
* Refactored [**muduo**](https://github.com/chenshuo/muduo) networking library with **C++11,** removing dependency on the Boost; [muduo_c11](https://github.com/FeijiangHan/muduo_c11)
* Developed **cluster server** using **C++11** and **Redis** for group chat; [group-chat](https://github.com/FeijiangHan/group-chat-app)
* Developed **mprpc** distributed framework using **C++11** and **Protobuf** protocols; [mprpc](https://github.com/FeijiangHan/mprpc)



### Open CS Courses 

**See famous online courses I've taken before:** https://github.com/FeijiangHan/cs_courses





------

## Honors And Awards

**Academic Honors:** 

* National Scholarship, CSU, 2021 (rank 1)
* Xiaomi Outstanding Scholarship, Xiaomi Public Welfare Foundation, 2023 (top 0.1%, the highest award)
* The First Prize Scholarship, CSU, 2021, 2023 (top 1.5%)
* SENDI TECHNOLOGY Scholarships, CSU, 2021 (rank 1)
* Dean's list, CSU, 2021, 2022, 2023

**Competition Awards:**

* M Award, The International Mathematical Contest in Modeling (MCM), 2023
* Silver Medal, Kaggle Competition in Pulmonary Embolism Detection, 2023 (rank 126/2745)
* National 1st Prize, Chinese College Students Computer Design Contest, 2023 
* National 2st Prize, Competition of Service Outsourcing and Entrepreneurship Innovation, 2022
* National 2st Prize, “Internet+” Innovation and Entrepreneurship Competition, 2022
* Most popular paper award, National Training Program of Innovation and Entrepreneurship, 2021 (top 3%)

<center class="half">  
    <img src="markdown/assets/image-20231111223202878.png" width="35%"/> 
<img src="markdown/assets/image-20231111223231540.png" width="35%"/>  </center>


## Student Affairs

* Class Committee Member
* Office Assistant of Peer Psychological Mutual Aid Association (Outstanding Individual)
* Counseling and Exchange Center Lecturer at Central South University (Certified 6 times)
* Student lecturer at  Computer School Study Service and Star Study Association(Certified 6 times), teaching the following courses: 
  * Advanced Mathematics A1, A2  [2020-2021]
  * Inorganic Chemistry [2020]
  * Linear Algebra [2021]
  * Digital Circuits [2022]
  * Discrete Mathematics [2022]
* Teaching assistant for Algorithms & AI course

<center class="half">  
    <img src="markdown/assets/image-20231114193752457.png" width="80%"/>  </center>



## Leaderships And Activities

* Serve as a host for school-level events [2020-2021]
* Participated in the organization and planning of the garden party [2020-2021-2022]
* Participated in organizing patriotic education activities [2022]
* Participating in debate teams and competitions [2022]

<center class="half">  
    <img src="markdown/assets/image-20231114194905625.png" width="80%"/>  </center>



## Voluntary Activity

**70 hours volunteering during the COVID-19 pandemic**

**Lead Tutor of Student Service Organization**

* Offered in-person and video lectures on courses including Calculus, Linear Algebra, Probability and Statistics, Discrete Mathematics, College Physics, Digital Circuits, and Inorganic Chemistry to help students pass final exams
* Provided individually tailored tutoring sessions to help students grasp challenging concepts
* Hosted three experience-sharing sessions and webinars for computer science students to discuss study strategies, programming experiences, and study abroad experiences



## Jun 2024 Happy Graduation

<center class="half">  
**Below is a modern poem I wrote in Chinese, which earned the first prize in the essay competition for graduates at Central South University.**

《中南梦轨：岁月如诗》（*去除文章主体部分*）

星河璀璨映中南，梦逐流光步未停。 化生情缘始初绽，材料光芒引我行。

探索迷途觉风寒，夜望苍穹思前程。 纸上勾勒优劣势，计算机梦启新征。

荣光褪尽从头起，智海泛舟启新篇。 图书馆内探幽径，编程世界绘蓝图。

实习科研相辉映，保研留学路迢迢。 赵师实验室中悟，哲思程序两相融。

背水一战绩点升，留学梦想日渐明。 托福GRE高分过，科研论文共辉煌。

舍弃保研签誓言，留学之路终启程。 名校青睐喜讯至，宾大深造志坚贞。

中南岁月成追忆，转折飞跃铸辉煌。 愿为母校增光辉，归来仍是少年狂。

  </center>





<center class="half">  
    <img src="markdown/assets/c937a6043831384705e67ac6255e083.png" width="40%"/> 
<img src="markdown/assets/314a059080510c9c08b6500a8f6889b.png" width="40%"/> </center>



<center class="half">  
    <img src="markdown/assets/697ad357a3d3cf9c591fe34b907eaff.png" width="40%"/> 
<img src="markdown/assets/5b0ec8a2cba84fc1c10ef1880c6ec9c.png" width="40%"/> </center>

