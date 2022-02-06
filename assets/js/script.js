function generateEmailCode() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let input5 = document.getElementById("input5").value;

    let profileName = document.getElementById("profileName");
    let profileId = document.getElementById("profileId");
    let profileId2 = document.getElementById("profileId2");
    
    let qrFallbackInfo = document.getElementById("qrFallbackInfo");
    let qrFallbackLink = document.getElementById("qrFallbackLink");

    let combiner = document.getElementById("combiner");

    let inputProfileName = document.getElementById("inputProfileName");
    let inputProfileId = document.getElementById("inputProfileId");

    profileName.value = inputProfileName.value;
    profileId.value = inputProfileId.value;
    profileId2.value = inputProfileId.value;
    qrFallbackLink.value = inputProfileId.value;

    let templateCode = input1+profileName.value+input2+profileId.value+input3+profileId2.value+input4+qrFallbackInfo.value+qrFallbackLink.value+input5;

    combiner.value = templateCode;

    combiner.select();
    combiner.setSelectionRange(0, 9999999);

    navigator.clipboard.writeText(combiner.value);

    console.log("Email generated!");

    let status = document.getElementById("status");
    status.style.visibility = "visible";
    status.innerHTML = "Email generated!";
    
    setTimeout(function() {
        status.style.visibility = "hidden";
    }, 2000);
};

function copySubject() {
    let subject = document.getElementById("subject");
    let status = document.getElementById("status");

    subject.select();
    subject.setSelectionRange(0, 9999999);

    navigator.clipboard.writeText(subject.value);
    console.log("Subject was copied!");

    status.style.visibility = "visible";
    status.innerHTML = "Subject copied!";
    setTimeout(function() {
        status.style.visibility = "hidden";
    }, 2000);
};