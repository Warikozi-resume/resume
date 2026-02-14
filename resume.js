var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if(initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 250); // Dot Speed

var $loadingMessage = $('#loadingH1');

setTimeout(function() {
    clearInterval(loading);
    $loadingMessage.hide();
}, 150);

var initProgram = setTimeout(function(){

    var job = "University of Maryland Global Campus"
    var message = "RUNNING SECURITY ENGINEER RESUME FOR MR.BONEY WARIKOZI";
    var $identityDiv = $("#identity-results");
    var greeting = "";
    var $edu = "University of Maryland Global Campus";
    var $name = "Education";
    var $alias = " Aug 2023 - Present"
    var $occupation  = "Bachelor of Science - Software Development and Security";
    var $frontEnd  = "SOFTWARE DEVELOPMENT";
    var $dev = "* Engineered secure applications using object-oriented design patterns in C++, Java, and Python.";
    var $enhance = "* Reduced development time by 30% through efficient algorithm selection and modular code architecture.";
    var $diminish = "* Architected microservices-based applications with containerized deployment for 600+ concurrent users.";
    var $develop = "* Implemented CI/CD pipelines integrating automated security testing at each stage of the SDLC.";
    var $boost = "* Optimized database performance through indexing, query tuning, and secure access controls.";
    var $database = "* Designed data storage solutions compliant with regulatory requirements including encryption at rest.";
    var $applied = "CYBERSECURITY";
    var $protect = "* Implemented advanced encryption protocols (AES-256, TLS 1.3) to protect sensitive data in transit and at rest.";
    var $create = "* Designed security architectures aligned with NIST Cybersecurity Framework and MITRE ATT&CK methodologies.";
    var $conduct = "* Conducted comprehensive risk assessments and threat modeling using NIST SP 800-30 guidelines.";
    var $identy = "* Identified and remediated critical vulnerabilities through proactive scanning with Nessus and Burp Suite.";
    var $compliy = "* Applied compliance frameworks including HIPAA, PCI-DSS, and OWASP Top 10 security guidelines.";
    var $ensure = "* Configured SIEM platforms for real-time log aggregation, correlation, and threat detection.";
    var $maintain = "* Performed penetration testing on simulated enterprise environments using Metasploit and custom scripts.";
    var $impose = "* Developed incident response playbooks following NIST SP 800-61 methodology.";
    var $JSFrameworks = "Austin Community College";
    var $JSLibs = "Aug 2018 - Aug 2020";
    var $CSSFrameworks = "Associate of Applied Science - Local Area Network Administration";
    var $CSSPre = "NETWORK SECURITY & ADMINISTRATION";
    var $forge = "* Engineered and secured enterprise networks supporting 500+ concurrent users with 99.9% uptime.";
    var $optimized = "* Optimized network segmentation through VLAN configuration to isolate sensitive traffic and reduce attack surface.";
    var $deploy = "* Deployed and hardened WAN solutions connecting multiple geographic locations with IPSec VPN tunnels.";
    var $protected = "* Implemented IDS/IPS rules and ACLs to defend against common network-based attacks.";
    var $rate = "* Configured firewall policies (pfSense, Cisco ASA) reducing unauthorized access attempts by 85%.";
    var $firewall = "* Enforced network access control (NAC) policies and 802.1X port-based authentication.";
    var $layer2 = "* Analyzed network traffic and captured packets using Wireshark for threat hunting and forensic analysis."
    var $frontEndAnimation = "WORK EXPERIENCE";
    var $cmsDevelopment = "Charter Communication - Spectrum";
    var $wordpress = "April 2022 - Present";
    var $design = "Business Class Technical Support Engineer - Level 5+";
    var $webDesign = "* Diagnosed and resolved complex network security issues for enterprise and business-class customers.";
    var $manged = "* Conducted on-site technical assessments identifying security misconfigurations and network vulnerabilities.";
    var $install = "* Implemented quality assurance protocols ensuring secure resolution of escalated technical incidents.";
    var $faciliate = "* Performed enterprise site surveys analyzing network topology and recommending security improvements.";
    var $custmer = "* Collaborated cross-functionally with engineering teams to resolve high-severity security incidents.";
    var $top = "* Achieved top-tier performance metrics with 96% productivity, specializing in complex business-class network troubleshooting.";
    var $escal = "* Developed and implemented process improvements reducing escalation rates by 40%.";
    var $branding = "Everise";
    var $designAnimation = "May 2021 - April 2022";
    var $rise = "Technical Support Agent - Network Security";
    var $para = "* Analyzed and resolved complex mesh network topology issues including node authentication and encryption failures.";
    var $issue = "* Led a team of 12+ technical specialists in systematic diagnostic approaches for network communication failures.";
    var $advance = "* Developed comprehensive diagnostic methodology for identifying and resolving node-to-node security issues.";
    var $rank = "* Ranked among top performers with 92% first-call resolution rate on complex network security cases.";
    var $amazon = "* Managed Amazon Eero partnership, resolving 250+ high-priority security and connectivity cases monthly.";
    var $back = "* Reduced customer callback rate by 75% through thorough root cause analysis and permanent remediation.";
    var $high = "* Maintained 95%+ customer satisfaction through clear technical communication of security best practices.";
    var $led = "* Led mesh network optimization project implementing security hardening that reduced vulnerabilities by 40%.";
    var $reso = "* Documented and standardized troubleshooting procedures for recurring network security incidents.";
    var $h = "Profile";
    var $habitpara = "Security Engineer with comprehensive expertise in software development lifecycle security and cybersecurity frameworks. Specializing in secure enterprise architecture design, threat modeling, vulnerability assessment, and security controls implementation. Proficient in Python, C++, and Java with hands-on experience in penetration testing, SIEM configuration, and incident response. Deep knowledge of NIST Cybersecurity Framework, MITRE ATT&CK, OWASP Top 10, and compliance standards (HIPAA, PCI-DSS). Experienced with security tools including Burp Suite, Nessus, Metasploit, Wireshark, and Splunk. Background in network administration provides strong foundation in infrastructure security and defense-in-depth strategies.";
    var $myname = "* Name: Boney Warikozi";
    var $myemail = "* Email: Boney.Warikozi@gmail.com";
    var $website = "* GitHub: github.com/warikozi-resume";
    var $github = " GitHub: ";
    var $resume = "Resume: ";
    var $phone = "* Phone: 501-333-4371";
    var $title = "Certifications & Development"
    var $myhabits = "CompTIA Security+ (In Progress) | NIST Cybersecurity Framework | MITRE ATT&CK | OWASP Top 10 | Active participation in CTF competitions and security research. Committed to continuous professional development through hands-on lab environments, vulnerability research, and engagement with the cybersecurity community.";
    var $skills = "Technical Skills";
    var $skill1 = "* Security Tools: Burp Suite, Nessus, Metasploit, Wireshark, Nmap, Splunk, Snort, OSSEC";
    var $skill2 = "* Programming: Python, C++, Java, Bash scripting, SQL, PowerShell";
    var $skill3 = "* Network Security: Firewalls, IDS/IPS, VPN, VLAN, NAC, 802.1X, TCP/IP, DNS, DHCP";
    var $skill4 = "* Cloud & DevOps: AWS, Azure, Docker, Kubernetes, CI/CD, Terraform, Git";
    var $skill5 = "* Frameworks: NIST CSF, NIST SP 800-53, MITRE ATT&CK, OWASP, CIS Benchmarks, ISO 27001";
    var $skill6 = "* Operating Systems: Kali Linux, Ubuntu, CentOS, Windows Server, Active Directory";
    var $skill7 = "* Practices: Penetration Testing, Threat Modeling, Incident Response, Vulnerability Management, Zero Trust Architecture";
    function initIdentityResults(i){
        $("#message").addClass("sign cursor").text(message.substring(0, i));
        if(i < message.length){
            setTimeout(function(){
                initIdentityResults(i + 1);
            }, 25);
        }else{
            $('#message').removeClass("cursor");
            var loadingResume = function(){
                $("#loadingMessage2").show()
                var dotAlpha = document.getElementById("alpha-loading");
                var loadingAlpha = setInterval(function() {
                    if(dotAlpha.innerHTML.length == 6) {
                        dotAlpha.innerHTML = "";
                    } else {
                        dotAlpha.innerHTML += ".";
                        setTimeout(function() {
                            clearInterval(loadingAlpha);
                            $("#loadingMessage2").hide();
                        }, 2000);
                    }
                }, 250);  // Dot Speed
            }
            loadingResume();


            function initName(i){
                $("#name").addClass("sign cursor").text($name.substring(0, i));
                if(i < $name.length){
                    setTimeout(function(){
                        initName(i + 1);
                    }, 25);
                }else{
                    $("#name").removeClass("cursor");
                    setTimeout(function() {
                        initEducation(0);
                        inithabit(0);
                    }, 150);
                }
            }
            setTimeout(function() {
                initName(0);
            }, 2500);

        }

        function initEducation(i){
            $("#edu").addClass("sign cursor").text($edu.substring(0, i));
            if(i < $edu.length){
                setTimeout(function(){
                    initEducation(i + 1);
                }, 25);
            }else{
                $("#edu").removeClass("cursor");
                setTimeout(function() {
                    initAlias(0);
                }, 150);
            }
        }

        function initAlias(i){
            $("#alias").addClass("sign cursor").text($alias.substring(0, i));
            if(i < $alias.length){
                setTimeout(function(){
                    initAlias(i + 1);
                }, 25);
            }else{
                $("#alias").removeClass("cursor");
                setTimeout(function() {
                    initOccupation(0);
                }, 150);
            }
        }
        function initOccupation(i){
            $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
            if(i < $occupation.length){
                setTimeout(function(){
                    initOccupation(i + 1);
                }, 25);
            }else{
                $("#occupation").removeClass("cursor");
                setTimeout(function() {
                    initFrontEnd(0);
                }, 150);
            }
        }

        function initFrontEnd(i){
            $('#front-end-span').addClass('fa fa-wrench');
            $('#frontEnd').addClass("fa").text($frontEnd.substring(0, i));
            if(i < $frontEnd.length){
                setTimeout(function(){
                    initFrontEnd(i + 1);
                }, 25);
            }else{
                $('#frontEnd').removeClass("cursor");
                setTimeout(function() {
                    initDev(0);
                }, 150);
            }
        }

        function initDev(i){
            $('#dev').addClass('sign cursor');
            $('#dev').addClass("cursor").text($dev.substring(0, i));
            if(i < $dev.length){
                setTimeout(function(){
                    initDev(i + 1);
                }, 25);
            }else{
                $('#dev').removeClass("cursor");
                setTimeout(function() {
                    initEnh(0);
                }, 150);
            }
        }

        function initEnh(i){
            $('#enhance').addClass('sign cursor');
            $('#enhance').addClass("cursor").text($enhance.substring(0, i));
            if(i < $enhance.length){
                setTimeout(function(){
                    initEnh(i + 1);
                }, 25);
            }else{
                $('#enhance').removeClass("cursor");
                setTimeout(function() {
                    initDim(0);
                }, 150);
            }
        }

        function initDim(i){
            $('#diminish').addClass('sign cursor');
            $('#diminish').addClass("cursor").text($diminish.substring(0, i));
            if(i < $diminish.length){
                setTimeout(function(){
                    initDim(i + 1);
                }, 25);
            }else{
                $('#diminish').removeClass("cursor");
                setTimeout(function() {
                    initDeve(0);
                }, 150);
            }
        }

        function initDeve(i){
            $('#develop').addClass('sign cursor');
            $('#develop').addClass("cursor").text($develop.substring(0, i));
            if(i < $develop.length){
                setTimeout(function(){
                    initDeve(i + 1);
                }, 25);
            }else{
                $('#develop').removeClass("cursor");
                setTimeout(function() {
                    initBoo(0);
                }, 150);
            }
        }

        function initBoo(i){
            $('#boost').addClass('sign cursor');
            $('#boost').addClass("cursor").text($boost.substring(0, i));
            if(i < $boost.length){
                setTimeout(function(){
                    initBoo(i + 1);
                }, 25);
            }else{
                $('#boost').removeClass("cursor");
                setTimeout(function() {
                    initData(0);
                }, 150);
            }
        }

        function initData(i){
            $('#database').addClass('sign cursor');
            $('#database').addClass("cursor").text($database.substring(0, i));
            if(i < $database.length){
                setTimeout(function(){
                    initData(i + 1);
                }, 25);
            }else{
                $('#database').removeClass("cursor");
                setTimeout(function() {
                    initApp(0);
                }, 150);
            }
        }

        function initApp(i){
            $('#applied').addClass('fa ');
            $('#applied').addClass("cursor").text($applied.substring(0, i));
            if(i < $applied.length){
                setTimeout(function(){
                    initApp(i + 1);
                }, 25);
            }else{
                $('#applied').removeClass("cursor");
                setTimeout(function() {
                    initPro(0);
                }, 150);
            }
        }

        function initPro(i){
            $('#protect').addClass('sign cursor');
            $('#protect').addClass("cursor").text($protect.substring(0, i));
            if(i < $protect.length){
                setTimeout(function(){
                    initPro(i + 1);
                }, 25);
            }else{
                $('#protect').removeClass("cursor");
                setTimeout(function() {
                    initCre(0);
                }, 150);
            }
        }

        function initCre(i){
            $('#create').addClass('sign cursor');
            $('#create').addClass("cursor").text($create.substring(0, i));
            if(i < $create.length){
                setTimeout(function(){
                    initCre(i + 1);
                }, 25);
            }else{
                $('#create').removeClass("cursor");
                setTimeout(function() {
                    initCon(0);
                }, 150);
            }
        }

        function initCon(i){
            $('#conduct').addClass('sign cursor');
            $('#conduct').addClass("cursor").text($conduct.substring(0, i));
            if(i < $conduct.length){
                setTimeout(function(){
                    initCon(i + 1);
                }, 25);
            }else{
                $('#conduct').removeClass("cursor");
                setTimeout(function() {
                    initIden(0);
                }, 150);
            }
        }

        function initIden(i){
            $('#identy').addClass('sign cursor');
            $('#identy').addClass("cursor").text($identy.substring(0, i));
            if(i < $identy.length){
                setTimeout(function(){
                    initIden(i + 1);
                }, 25);
            }else{
                $('#identy').removeClass("cursor");
                setTimeout(function() {
                    initComp(0);
                }, 150);
            }
        }

        function initComp(i){
            $('#compliy').addClass('sign cursor');
            $('#compliy').addClass("cursor").text($compliy.substring(0, i));
            if(i < $compliy.length){
                setTimeout(function(){
                    initComp(i + 1);
                }, 25);
            }else{
                $('#compliy').removeClass("cursor");
                setTimeout(function() {
                    initEns(0);
                }, 150);
            }
        }

        function initEns(i){
            $('#ensure').addClass('sign cursor');
            $('#ensure').addClass("cursor").text($ensure.substring(0, i));
            if(i < $ensure.length){
                setTimeout(function(){
                    initEns(i + 1);
                }, 25);
            }else{
                $('#ensure').removeClass("cursor");
                setTimeout(function() {
                    initMain(0);
                }, 150);
            }
        }

        function initMain(i){
            $('#maintain').addClass('sign cursor');
            $('#maintain').addClass("cursor").text($maintain.substring(0, i));
            if(i < $maintain.length){
                setTimeout(function(){
                    initMain(i + 1);
                }, 25);
            }else{
                $('#maintain').removeClass("cursor");
                setTimeout(function() {
                    initImp(0);
                }, 150);
            }
        }

        function initImp(i){
            $('#impose').addClass('sign cursor');
            $('#impose').addClass("cursor").text($impose.substring(0, i));
            if(i < $impose.length){
                setTimeout(function(){
                    initImp(i + 1);
                }, 25);
            }else{
                $('#impose').removeClass("cursor");
                setTimeout(function() {
                    initJSFrameworks(0);
                }, 150);
            }
        }
        function initJSFrameworks(i){
            $('#JSFrameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
            if(i < $JSFrameworks.length){
                setTimeout(function(){
                    initJSFrameworks(i + 1);
                }, 25);
            }else{
                $('#JSFrameworks').removeClass("cursor");
                setTimeout(function() {
                    initJSLibs(0);
                }, 150);
            }
        }
        function initJSLibs(i){
            $('#JSLibs').addClass("sign cursor").text($JSLibs.substring(0, i));
            if(i < $JSLibs.length){
                setTimeout(function(){
                    initJSLibs(i + 1);
                }, 25);
            }else{
                $('#JSLibs').removeClass("cursor");
                setTimeout(function() {
                    initCSSFrameworks(0);
                }, 150);
            }
        }
        function initCSSFrameworks(i){
            $('#CSSFrameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
            if(i < $CSSFrameworks.length){
                setTimeout(function(){
                    initCSSFrameworks(i + 1);
                }, 25);
            }else{
                $('#CSSFrameworks').removeClass("cursor");
                setTimeout(function() {
                    initCSSPre(0);
                }, 150);
            }
        }
        function initCSSPre(i){
            $('#CSSPre').addClass('fa ');
            $('#CSSPre').addClass("sign cursor").text($CSSPre.substring(0, i));
            if(i < $CSSPre.length){
                setTimeout(function(){
                    initCSSPre(i + 1);
                }, 25);
            }else{
                $('#CSSPre').removeClass("cursor");
                setTimeout(function() {
                    initFrog(0);
                }, 150);
            }
        }

        function initFrog(i){
            $('#forge').addClass('sign cursor');
            $('#forge').addClass("cursor").text($forge.substring(0, i));
            if(i < $forge.length){
                setTimeout(function(){
                    initFrog(i + 1);
                }, 25);
            }else{
                $('#forge').removeClass("cursor");
                setTimeout(function() {
                    initOpti(0);
                }, 150);
            }

        }function initOpti(i){
            $('#optimized').addClass('sign cursor');
            $('#optimized').addClass("cursor").text($optimized.substring(0, i));
            if(i < $optimized.length){
                setTimeout(function(){
                    initOpti(i + 1);
                }, 25);
            }else{
                $('#optimized').removeClass("cursor");
                setTimeout(function() {
                    initDep(0);
                }, 150);
            }

        }function initDep(i){
            $('#deploy').addClass('sign cursor');
            $('#deploy').addClass("cursor").text($deploy.substring(0, i));
            if(i < $deploy.length){
                setTimeout(function(){
                    initDep(i + 1);
                }, 25);
            }else{
                $('#deploy').removeClass("cursor");
                setTimeout(function() {
                    initProt(0);
                }, 150);
            }

        }function initProt(i){
            $('#protected').addClass('sign cursor');
            $('#protected').addClass("cursor").text($protected.substring(0, i));
            if(i < $protected.length){
                setTimeout(function(){
                    initProt(i + 1);
                }, 25);
            }else{
                $('#protected').removeClass("cursor");
                setTimeout(function() {
                    initRate(0);
                }, 150);
            }

        }function initRate(i){
            $('#rate').addClass('sign cursor');
            $('#rate').addClass("cursor").text($rate.substring(0, i));
            if(i < $rate.length){
                setTimeout(function(){
                    initRate(i + 1);
                }, 25);
            }else{
                $('#rate').removeClass("cursor");
                setTimeout(function() {
                    initFire(0);
                }, 150);
            }

        }function initFire(i){
            $('#firewall').addClass('sign cursor');
            $('#firewall').addClass("cursor").text($firewall.substring(0, i));
            if(i < $firewall.length){
                setTimeout(function(){
                    initFire(i + 1);
                }, 25);
            }else{
                $('#firewall').removeClass("cursor");
                setTimeout(function() {
                    initLayer(0);
                }, 150);
            }

        }function initLayer(i){
            $('#layer2').addClass('sign cursor');
            $('#layer2').addClass("cursor").text($layer2.substring(0, i));
            if(i < $layer2.length){
                setTimeout(function(){
                    initLayer(i + 1);
                }, 25);
            }else{
                $('#layer2').removeClass("cursor");
                setTimeout(function() {
                    initFrontEndAnimation(0);
                }, 150);
            }
        }

        function initFrontEndAnimation(i){
            $('#frontEndAnimation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
            if(i < $frontEndAnimation.length){
                setTimeout(function(){
                    initFrontEndAnimation(i + 1);
                }, 25);
            }else{
                $('#frontEndAnimation').removeClass("cursor");
                setTimeout(function() {
                    initCMSDevelopment(0);
                }, 150);
            }
        }
        function initCMSDevelopment(i){
            $('#cms-span').addClass("fa fa-wordpress")
            $('#cmsDevelopment').addClass("cursor").text($cmsDevelopment.substring(0, i));
            if(i < $cmsDevelopment.length){
                setTimeout(function(){
                    initCMSDevelopment(i + 1);
                }, 25);
            }else{
                $('#cmsDevelopment').removeClass("cursor");
                setTimeout(function() {
                    initWordpress(0);
                }, 150);
            }
        }
        function initWordpress(i){
            $('#wordpress').addClass("sign cursor").text($wordpress.substring(0, i));
            if(i < $wordpress.length){
                setTimeout(function(){
                    initWordpress(i + 1);
                }, 25);
            }else{
                $('#wordpress').removeClass("cursor");
                setTimeout(function() {
                    initDesign(0);
                }, 150);
            }
        }
        function initDesign(i){
            $('#design-span').addClass('fa fa-paint-brush');
            $('#design').addClass("cursor").text($design.substring(0, i));
            if(i < $design.length){
                setTimeout(function(){
                    initDesign(i + 1);
                }, 25);
            }else{
                $('#design').removeClass("cursor");
                setTimeout(function() {
                    initWebDesign(0);
                }, 150);
            }
        }
        function initWebDesign(i){
            $('#webDesign').addClass("sign cursor").text($webDesign.substring(0, i));
            if(i < $webDesign.length){
                setTimeout(function(){
                    initWebDesign(i + 1);
                }, 25);
            }else{
                $('#webDesign').removeClass("cursor");
                setTimeout(function() {
                    initMan(0);
                }, 150);
            }
        }
        function initMan(i){
            $('#manged').addClass("sign cursor").text($manged.substring(0, i));
            if(i < $manged.length){
                setTimeout(function(){
                    initMan(i + 1);
                }, 25);
            }else{
                $('#manged').removeClass("cursor");
                setTimeout(function() {
                    initCond(0);
                }, 150);
            }
        }

        function initCond(i){
            $('#install').addClass("sign cursor").text($install.substring(0, i));
            if(i < $install.length){
                setTimeout(function(){
                    initCond(i + 1);
                }, 25);
            }else{
                $('#install').removeClass("cursor");
                setTimeout(function() {
                    initFaci(0);
                }, 150);
            }
        }

        function initFaci(i){
            $('#faciliate').addClass("sign cursor").text($faciliate.substring(0, i));
            if(i < $faciliate.length){
                setTimeout(function(){
                    initFaci(i + 1);
                }, 25);
            }else{
                $('#faciliate').removeClass("cursor");
                setTimeout(function() {
                    initCus(0);
                }, 150);
            }
        }

        function initCus(i){
            $('#custmer').addClass("sign cursor").text($custmer.substring(0, i));
            if(i < $custmer.length){
                setTimeout(function(){
                    initCus(i + 1);
                }, 25);
            }else{
                $('#custmer').removeClass("cursor");
                setTimeout(function() {
                    initTop(0);
                }, 150);
            }
        }

        function initTop(i){
            $('#top').addClass("sign cursor").text($top.substring(0, i));
            if(i < $top.length){
                setTimeout(function(){
                    initTop(i + 1);
                }, 25);
            }else{
                $('#top').removeClass("cursor");
                setTimeout(function() {
                    initEsc(0);
                }, 150);
            }
        }

        function initEsc(i){
            $('#escal').addClass("sign cursor").text($escal.substring(0, i));
            if(i < $escal.length){
                setTimeout(function(){
                    initEsc(i + 1);
                }, 25);
            }else{
                $('#escal').removeClass("cursor");
                setTimeout(function() {
                    initBranding(0);
                }, 150);
            }
        }

        function initBranding(i){
            $('#branding').addClass("sign cursor").text($branding.substring(0, i));
            if(i < $branding.length){
                setTimeout(function(){
                    initBranding(i + 1);
                }, 25);
            }else{
                $('#branding').removeClass("cursor");
                setTimeout(function() {
                    initDesignAnimation(0);
                }, 150);
            }
        }
        function initDesignAnimation(i){
            $('#designAnimation').addClass("sign cursor").text($designAnimation.substring(0, i));
            if(i < $designAnimation.length){
                setTimeout(function(){
                    initDesignAnimation(i + 1);
                }, 25);
            }else{
                $('#designAnimation').removeClass("cursor");
                setTimeout(function () {
                    initJobDesForEveris(0);
                }, 150);
            }
        }

        function initJobDesForEveris(i) {
            $('#rise').addClass("sign cursor").text($rise.substring(0, i));
            if(i < $rise.length){
                setTimeout(function() {
                    initJobDesForEveris( i + 1);
                }, 25);
            }else{
                $('#rise').removeClass("cursor");
                setTimeout(function (){
                    initparagraph(0);
                }, 150);
            }
        }

        function initparagraph(i){
            $('#para').addClass("sign cursor").text($para.substring(0, i));
            if(i < $para.length){
                setTimeout(function(){
                    initparagraph(i + 1);
                }, 25);
            }else{
                $('#para').removeClass("cursor");
                setTimeout(function () {
                    initIssue(0);
                }, 150);

            }
        }


        function initIssue(i){
            $('#issue').addClass("sign cursor").text($issue.substring(0, i));
            if(i < $issue.length){
                setTimeout(function(){
                    initIssue(i + 1);
                }, 25);
            }else{
                 $('#issue').removeClass("cursor");
                setTimeout(function () {
                 initAdva(0);
                 }, 150);

            }
        }


        function initAdva(i){
            $('#advance').addClass("sign cursor").text($advance.substring(0, i));
            if(i < $advance.length){
                setTimeout(function(){
                    initAdva(i + 1);
                }, 25);
            }else{
                $('#advance').removeClass("cursor");
                setTimeout(function () {
                 initRank(0);
                 }, 150);

            }
        }


        function initRank(i){
            $('#rank').addClass("sign cursor").text($rank.substring(0, i));
            if(i < $rank.length){
                setTimeout(function(){
                    initRank(i + 1);
                }, 25);
            }else{
                 $('#rank').removeClass("cursor");
                 setTimeout(function () {
                 initAmazon(0);
                 }, 150);

            }
        }


        function initAmazon(i){
            $('#amazon').addClass("sign cursor").text($amazon.substring(0, i));
            if(i < $amazon.length){
                setTimeout(function(){
                    initAmazon(i + 1);
                }, 25);
            }else{
                $('#amazon').removeClass("cursor");
                setTimeout(function () {
                 initBack(0);
                 }, 150);

            }
        }


        function initBack(i){
            $('#back').addClass("sign cursor").text($back.substring(0, i));
            if(i < $back.length){
                setTimeout(function(){
                    initBack(i + 1);
                }, 25);
            }else{
                $('#back').removeClass("cursor");
                setTimeout(function () {
                 initHigh(0);
                 }, 150);

            }
        }

        function initHigh(i){
            $('#high').addClass("sign cursor").text($high.substring(0, i));
            if(i < $high.length){
                setTimeout(function(){
                    initHigh(i + 1);
                }, 25);
            }else{
                $('#high').removeClass("cursor");
                setTimeout(function () {
                 initLed(0);
                 }, 150);

            }
        }


        function initLed(i){
            $('#led').addClass("sign cursor").text($led.substring(0, i));
            if(i < $led.length){
                setTimeout(function(){
                    initLed(i + 1);
                }, 25);
            }else{
                 $('#led').removeClass("cursor");
                 setTimeout(function () {
                     initTitleMyHabit(0);
                     initSkills(0);
                 }, 150);

            }
        }


        function inithabit(i) {
            $('#h').addClass("sign cursor").text($h.substring(0, i));
            if(i < $h.length){
                setTimeout(function() {
                    inithabit( i + 1);
                }, 25);
            }else{
                $('#h').removeClass("cursor");
                setTimeout(function (){
                    initHabitPara(0);
                }, 150);
            }
        }

        function initHabitPara(i) {
            $('#habitpara').addClass("sign cursor").text($habitpara.substring(0, i));
            if(i < $habitpara.length){
                setTimeout(function() {
                    initHabitPara( i + 1);
                }, 25);
            }else{
                $('#habitpara').removeClass("cursor");
                setTimeout(function (){
                   initMyName(0);
                }, 150);
            }
        }

        function initMyName(i) {
            $('#myname').addClass("sign cursor").text($myname.substring(0, i));
            if(i < $myname.length){
                setTimeout(function() {
                    initMyName( i + 1);
                }, 25);
            }else{
                $('#myname').removeClass("cursor");
                setTimeout(function (){
                    initMyEmail(0);
                }, 150);
            }
        }


        function initMyEmail(i) {
            $('#myemail').addClass("sign cursor").text($myemail.substring(0, i));
            if(i < $myemail.length){
                setTimeout(function() {
                    initMyEmail( i + 1);
                }, 25);
            }else{
                $('#myemail').removeClass("cursor");
                setTimeout(function (){
                    initWebsite(0);
                }, 150);
            }
        }

        function initWebsite(i) {
            $('#website').addClass("sign cursor").text($website.substring(0, i));
            if(i < $website.length){
                setTimeout(function() {
                    initWebsite( i + 1);
                }, 25);
            }else{
                $('#website').removeClass("cursor");
                setTimeout(function (){
                    initPhoneNum(0);
                }, 150);
            }
        }

        function initPhoneNum(i) {
            $('#phone').addClass("sign cursor").text($phone.substring(0, i));
            if (i < $phone.length) {
                setTimeout(function () {
                    initPhoneNum(i + 1);
                }, 25);
            }else{
               //
            }
        }

        function initTitleMyHabit(i) {
            $('#title').addClass("sign cursor").text($title.substring(0, i));
            if (i < $title.length) {
                setTimeout(function () {
                    initTitleMyHabit(i + 1);
                }, 25);
            }else{
                $('#title').removeClass("cursor");
                setTimeout(function () {
                    initMyHabit(0);
                }, 150);
            }
        }

        function initMyHabit(i){
            $('#myhabits').addClass("sign cursor").text($myhabits.substring(0, i));
            if (i < $myhabits.length) {
                setTimeout(function (){
                    initMyHabit(i + 1);
                }, 25);
            }else{
               //
            }
        }

        function initSkills(i) {
            $('#skills').addClass("sign cursor").text($skills.substring(0, i));
            if (i < $skills.length) {
                setTimeout(function () {
                    initSkills(i + 1);
                }, 25);
            }else{
                $('#skills').removeClass("cursor");
                setTimeout(function () {
                    initSkill1(0);
                }, 150);
            }
        }

        function initSkill1(i){
            $('#skill1').addClass("sign cursor").text($skill1.substring(0, i));
            if (i < $skill1.length) {
                setTimeout(function (){
                    initSkill1(i + 1);
                }, 25);
            }else{
                $('#skill1').removeClass("cursor");
                setTimeout(function (){
                    initSkill2(0);
                }, 150);
            }
        }

        function initSkill2(i){
            $('#skill2').addClass("sign cursor").text($skill2.substring(0, i));
            if (i < $skill2.length) {
                setTimeout(function (){
                    initSkill2(i + 1);
                }, 25);
            }else{
                $('#skill2').removeClass("cursor");
                setTimeout(function (){
                    initSkill3(0);
                }, 150);
            }
        }

        function initSkill3(i){
            $('#skill3').addClass("sign cursor").text($skill3.substring(0, i));
            if (i < $skill3.length) {
                setTimeout(function (){
                    initSkill3(i + 1);
                }, 25);
            }else{
                $('#skill3').removeClass("cursor");
                setTimeout(function (){
                    initSkill4(0);
                }, 150);
            }
        }

        function initSkill4(i){
            $('#skill4').addClass("sign cursor").text($skill4.substring(0, i));
            if (i < $skill4.length) {
                setTimeout(function (){
                    initSkill4(i + 1);
                }, 25);
            }else{
                $('#skill4').removeClass("cursor");
                setTimeout(function (){
                    initSkill5(0);
                }, 150);
            }
        }

        function initSkill5(i){
            $('#skill5').addClass("sign cursor").text($skill5.substring(0, i));
            if (i < $skill5.length) {
                setTimeout(function (){
                    initSkill5(i + 1);
                }, 25);
            }else{
                $('#skill5').removeClass("cursor");
                setTimeout(function (){
                    initSkill6(0);
                }, 150);
            }
        }

        function initSkill6(i){
            $('#skill6').addClass("sign cursor").text($skill6.substring(0, i));
            if (i < $skill6.length) {
                setTimeout(function (){
                    initSkill6(i + 1);
                }, 25);
            }else{
                $('#skill6').removeClass("cursor");
                setTimeout(function (){
                initSkill7(0);
                 }, 150);
            }
        }

        function initSkill7(i){
            $('#skill7').addClass("sign cursor").text($skill7.substring(0, i));
            if (i < $skill7.length) {
                setTimeout(function (){
                    initSkill7(i + 1);
                }, 25);
            }else{
              //
            }
        }

    }

    function initProgramAlpha(i){
        $("#greeting").addClass("cursor").text(greeting.substring(0, i));
        if(i < greeting.length){
            setTimeout(function(){
                initProgramAlpha(i + 1);
            }, 25);
        }else{
            $("#greeting").removeClass("cursor");
            initIdentityResults(0);
        }
    }

    initProgramAlpha(0)

}, 150);

initProgram()