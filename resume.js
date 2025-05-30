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

    var job = "Unversity of Marland Globle Compass"
    var message = "RUNNING SECURITY ARCHITECH RESUME FOR MR.BONEY";
    var $identityDiv = $("#identity-results");
    var greeting = "";
    var $edu = "Unversity of Marland Globle Compass";
    var $name = "Education";
    var $alias = " Aug 2023 - Present"
    var $occupation  = "Software Development and Security";
    var $frontEnd  = "SOFTWARE DEVELOPMENT EDUCATION";
    var $dev = "* Enhanced productivity through refined code and architectural patterns.";
    var $enhance = "* Diminished development time by 30% through efficient algorithm selection and implementation.";
    var $diminish = "* Developed expertise in Microservices architecture and containerization for 600+ users.";
    var $develop = "* Boosted system reliability through proven design patterns.";
    var $boost = "* Enhanced database performance through indexing and query optimization.";
    var $database = "* Applied data storage solutions meeting regulatory requirements.";
    var $applied = "SECURITY EDUCATION";
    var $protect = "* Protected sensitive data through advanced encryption protocol.";
    var $create = "* Created security architectures meeting NIST framework guidelines.";
    var $conduct = "* Conducted risk assessments using NIST framework methodology.";
    var $identy = "* Identified and mitigated critical vulnerabilities through proactive monitoring.";
    var $compliy = "* Compliance Frameworks & Regulatory Requirements.";
    var $ensure = "* Ensured HIPAA compliance in simulated healthcare environments.";
    var $maintain = "* Maintained PCI-DSS standards for simulated financial systems.";
    var $impose = "* Imposed OWASP security guidelines.";
    var $JSFrameworks = "Austin Community College";
    var $JSLibs = "Aug 2018 - Aug 2020";
    var $CSSFrameworks = "Associate degree of Applied Science in Local Area Network\n" +
        "Administration";
    var $CSSPre = "NETWORK ADMINISTRATION EDUCATION";
    var $forge = "* Forged  networks supporting 500+ concurrent users.";
    var $optimized = "* Optimized network throughput through proper VLAN segmentation.";
    var $deploy = "* Deployed WAN solutions connecting multiple geographic locations.";
    var $protected = "* Protected against common network attacks through security measures.";
    var $rate = "* Optimized protocol performance improving packet delivery rates.";
    var $firewall = "* Enforced  firewalls rules reducing unauthorized access.";
    var $layer2 = "* Analyzed layer 2 packages using Wireshark."
    var $frontEndAnimation = "WORK EXPERIENCE";
    var $cmsDevelopment = "Charter Communication - Spectrum";
    var $wordpress = "April 2022–present";
    var $design = "Business Class level 5+";
    var $webDesign = "• Install and maintain internet, voice, and cable services.\n \n" +
        "• Troubleshoot technical issues at customer premises.\n \n" +
        "• Optimize network performance and reliability.\n \n" +
        "• Deliver exceptional customer service in residential and business\n \n" +
        "settings.";
    var $branding = "Everise";
    var $designAnimation = "May 17, 2021–April 2022";
    var $rise = "Tier 1 Technical Support Agent";
    var $para = "• Worked with a wireless mesh system.\n" +
        "• Effectively troubleshoot the mesh system through a framework and\n" +
        "explain technical information to users of all levels.\n" +
        "• Find ways for customers to get the most out of their wireless\n" +
        "network.";
    var $h = "Profile";
    var $habitpara = "Comprehensive expertise in software development lifecycle and cybersecurity frameworks has been evolved through studies in Cyber Operations with specialization in software development and security. Designed Secure enterprise architectures, implementing threat modeling to cut down risk exposure, and configuring security controls across network devices. Weekly managed code audits and vulnerability assessment projects. Proficiency in C++, Java, and Python has been demonstrated, with expertise in NIST Cybersecurity Framework and MITRE ATT&CK, and experience with Windows Server, Linux, and security tools including Burp Suite, Nessus, and Metasploit.";
    var $myname = "* Name: Boney Warikozi";
    var $myemail = "* Email: Boney.Warikozi@gmail.com";
    var $website = "* Website: https://security-engineer.com --> Coming soon";
    var $github = " GitHub: ";
    var $resume = "Resume: ";
    var $phone = "* Phone : 501-333-4371";
    var $title = "Habits"
    var $myhabits = "Dedicated technologist combining rigorous analytical thinking with disciplined physical training practices. Through consistent engagement in competitive combat sports (Boxing and Muay Thai), I've developed exceptional mental resilience and strategic problem-solving abilities. These athletic pursuits complement my technical expertise in Computer Science, fostering a unique combination of logical precision and creative solution development. Regular participation in high-intensity training sessions has honed my time management skills, allowing me to maintain peak academic performance while pursuing advanced technical projects";
    var $skills = "Technical Skills";
    var $skill1 = "* Reinforced and maintained a security vulnerability tracking system.";
    var $skill2 = "* Created automated scripts to continuously monitor security configurations.";
    var $skill3 = " * Designed a Zero Trust dashboard for real-time monitoring and threat detection.";
    var $skill4 = "* Administered automated code scanning tools that reduced security vulnerabilities.";
    var $skill5 = "* Understand data & impact of encrypt all' strategies.";
    var $skill6 = "* Instituted automated workflows for continuous verification of identity and context.";
    var $skill7 = "* identified coverage gaps in the Wi-Fi mesh system and implemented strategic AP placement improvements.";
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
                        initHabitPara(0);
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
                    inithabit(0);
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
                //$('#h').removeClass("cursor");
                //setTimeout(function (){
                   // initHabitPara(0);
               // }, 150);
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
                }, );
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
                $('#phone').removeClass("cursor");
                setTimeout(function () {
                    initTitleMyHabit(0);
                }, 150);
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
                $('#myhabits').removeClass("cursor");
                setTimeout(function (){
                    initSkills(0);
                }, 150);
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


