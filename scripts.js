"use strict";
/////VARIABLES////
const originalHTML = document.getElementById("list").innerHTML;
const originalTitle = document.getElementById("title").innerHTML;
const originalInfo = document.getElementById("img_info").innerHTML;
const list = document.getElementById("list");
const icons = document.querySelectorAll(".icon");
const originalPara1 = document.getElementById("para1").innerHTML;
const originalPara1_1 = document.getElementById("para1_1").innerHTML;
const originalPara2 = document.getElementById("para2").innerHTML;
const originalPara2_2 = document.getElementById("para2_2").innerHTML;
const originalPara2_3 = document.getElementById("para2_3").innerHTML;
const originalPara3 = document.getElementById("para3").innerHTML;
const originalPara3_2 = document.getElementById("para3_2").innerHTML;
const originalPara3_3 = document.getElementById("para3_3").innerHTML;
const originalPara4 = document.getElementById("para4").innerHTML;
const originalOl = document.getElementById("steps").innerHTML;
const items = document.querySelectorAll(".item");

////GITHUB LINK////
const githubLink = document.createElement("a");
githubLink.href =
  "https://github.com/Hackplayers/PsCabesha-tools/blob/master/Privesc/Acl-FullControl.ps1";
githubLink.textContent = "here";
githubLink.target = "_blank";

////CLOSE ACCORDION////
function closeAccordion() {
  items.forEach(function (item) {
    const icon = item.querySelector(".icon");
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>`;
    }
  });
}

////BUTTON COLOR RESET////
function resetButtons() {
  stage1.style.backgroundColor = "#162b38";
  stage2.style.backgroundColor = "#162b38";
  stage3.style.backgroundColor = "#162b38";
  stage4.style.backgroundColor = "#162b38";
  stage5.style.backgroundColor = "#162b38";
}

////INTRODUCTION FUNCTION (Reset to the original HTML) ////
function resetParagraph() {
  title.innerHTML = originalTitle;
  img.src = "images/Cicada.png";
  para1.innerHTML = originalPara1;
  para1_1.innerHTML = originalPara1_1;
  para2.innerHTML = originalPara2;
  para2_2.innerHTML = originalPara2_2;
  para2_3.innerHTML = originalPara2_3;
  para3.innerHTML = originalPara3;
  para3_2.innerHTML = originalPara3_2;
  para3_3.innerHTML = originalPara3_3;
  para4.innerHTML = originalPara4;
  step1.innerHTML = "What is Hack The Box?";
  step2.innerHTML = "What is VirtualBox?";
  step3.innerHTML = "How do I get connected?";
  img_info.innerHTML = originalInfo;
  list.innerHTML = originalHTML;
  steps.innerHTML = originalOl;
}
////IMAGE FUNCTION ////
function resetImages() {
  [img1, img2, img2_2, img2_3, img3, img3_2, img3_3, img4].forEach(
    (imgElement) => {
      imgElement.src = "";
    }
  );
}
////CONTENT FUNCTION ////
function resetContent() {
  title.innerHTML = "";

  img_info.innerHTML = "";
  list.innerHTML = "";
  list.style.display = "block";
  steps.innerHTML = "";
  para2_2.innerHTML = "";
  para2_3.innerHTML = "";
  para3_2.innerHTML = "";
  para3_3.innerHTML = "";
}

////STAGE2 SCAN////
function stage2Content() {
  title.innerHTML = "Scan";

  img_info.innerHTML =
    "Start your initial enumeration of the target IP. This is your nmap scan! Adding -sVC will scan for the open ports as well as the running services and their version numbers";
  img.src = "images/Picture2.png";
  document.getElementById("list").style.display = "none";
  step1.innerHTML = "Nmap";
  step2.innerHTML = "Enumerate SMB";
  step3.innerHTML = "Find Password in Public Share";
  para1.innerHTML = "The first step you should always do is run an nmap scan.";
  para1_1.innerHTML =
    "-sVC scans for version numbers and runs basic scripts. <br>-oA outputs the scan results in all formats into a filename of your choosing. In this case, cicada. <br>This part isn't necessary but it is good practice and helps if you need to keep going back to the results.";
  img1.src = "images/Picture2.png";

  para2.innerHTML =
    "You then need to start to enumerate the SMB shares.<br>You can log in anonymously to the share and find a file you can download. ";
  img2.src = "images/Picture5.png";

  para3.innerHTML = "You can log into the HR share anonymously. ";
  para3_3.innerHTML =
    "Once you've downloaded the file from the share you can find a password in it!";
  img3.src = "images/Picture7.png";
  img3_3.src = "images/Picture8.png";
}

////STAGE3 FOOTHOLD////
function stage3Content() {
  title.innerHTML = "Foothold";
  img.src = "images/Picture17.png";
  img_info.innerHTML =
    "Foothold is just a term used to describe the initial entrance as an external source to become an internal source. Some examples of a foothold could be:<br>- Login credentials that you can use to ssh into the machine<br>- An XSS exploit that gives you a shell<br>- A spot to upload a reverse shell that executes<br>- Misconfigured service used to gain access";
  step1.innerHTML = "Credentialed SMB Enumeration";
  step2.innerHTML = "Lateral Movement";
  step3.innerHTML = "Find Remote Access Password";
  para1.innerHTML =
    "You now need to find the user that this password belongs to. Use netexec to find user accounts.";
  para1_1.innerHTML = "";
  para2.innerHTML =
    "With a script, or manually testing, you will find that micheal.wrightson is the user that the password belongs to. ";
  para2_2.innerHTML =
    "Unfortunately, Micheal does not have the permissions needed to read anything from the DEV share.<br>So, you must use his credentials to further enumerate the environment.";
  para2_3.innerHTML =
    "In the descriptions of the users you can find another set of credentials.";

  para3.innerHTML =
    "You can use the new username and password combination to access the /DEV share now.";
  para3_2.innerHTML =
    "Inside it you will find a script. Inside that script you will find credentials to a user who has remote access to our target.";
  para3_3.innerHTML = "Log in as emily.oscars and you get your user flag!";

  img1.src = "images/Picture10.png";
  img2.src = "images/Picture11.png";
  img2_2.src = "images/Picture12.png";
  img2_3.src = "images/Picture13.png";
  img3.src = "images/Picture14.png";
  img3_2.src = "images/Picture15.png";
  img3_3.src = "images/Picture16.png";
  img4.src = "images/Picture17.png";
}

////STAGE4 ESCALATION////
function stage4Content() {
  title.innerHTML = "Escalation";
  img.src = "images/Picture24.png";
  img_info.innerHTML =
    "The process of going from a user with limited privileges to a user with more privileges is called escalation.<br>This box deals with SeBackupPrivilege and  SeRestorePrivilege.";
  step1.innerHTML = "User Enumeration";
  step2.innerHTML = "Exploit Research";
  step3.innerHTML = "Upload Payload to Target";
  para1.innerHTML =
    "By listing emily.oscars privileges you can see that she has SeBackupPrivilege and SeRestorePrivilege.<br> These types of privileges are able to be abused. ";
  para2.innerHTML =
    "Looking online you can find there is a Github that will do what we want. You can find the link ";
  para2.appendChild(githubLink);
  para3.innerHTML = `Upload it to the target machine. If you connected with evil-winrm, you can simply type "upload filename"`;
  img1.src = "images/Picture18.png";
  img2.src = "images/Picture24.png";
  img3.src = "images/Picture19.png";
}
////STAGE5 ROOT////
function stage5Content() {
  title.innerHTML = "Root";
  img.src = "images/Picture23.png";
  img_info.innerHTML =
    "Success! After submitting both your flags, be sure to rate the difficulty of the machine so that other players know what they're getting into.<br>You should also remember to shut down the machine on the Hack The Box website.";
  document.getElementById("list").style.display = "none";
  items.forEach(function (item) {
    item.classList.remove("open");
    step1.innerHTML = "Execute Payload";
    step2.innerHTML = "Verify it Worked";
    step3.innerHTML = "Submit your flags!";
    para1.innerHTML =
      "First, load the functions from the .ps1 file.<br>Then use the imported function to give your current user access to the administrators desktop directory.";
    para2.innerHTML = "Verify that you can read the root flag";
    para3.innerHTML = "Submit your flag!! 😁";
    img1.src = "images/Picture20.png";
    img2.src = "images/Picture21.png";
    img3.src = "images/Picture22.png";
  });
}

stage1.addEventListener("click", function () {
  resetButtons();
  stage1.style.backgroundColor = "#8cc63f";
  resetImages();
  resetContent();
  resetParagraph();
  closeAccordion();
});
stage2.addEventListener("click", function () {
  resetButtons();
  stage2.style.backgroundColor = "#8cc63f";
  resetImages();
  resetContent();
  stage2Content();
  closeAccordion();
});

stage3.addEventListener("click", function () {
  resetButtons();
  stage3.style.backgroundColor = "#8cc63f";
  resetImages();
  resetContent();
  stage3Content();
  closeAccordion();
});
stage4.addEventListener("click", function () {
  resetButtons();
  stage4.style.backgroundColor = "#8cc63f";
  resetImages();
  resetContent();
  stage4Content();
  closeAccordion();
});
stage5.addEventListener("click", function () {
  resetButtons();
  stage5.style.backgroundColor = "#8cc63f";
  resetImages();
  resetContent();
  stage5Content();
  closeAccordion();
});

////CLOSE ACCORDION WITH ICON////
items.forEach((item) => {
  const icon = item.querySelector(".icon");

  icon.addEventListener("click", function () {
    item.classList.toggle("open");
    if (item.classList.contains("open")) {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 15.75-7.5-7.5-7.5 7.5"/>`;
    } else {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>`;
    }
  });
});
