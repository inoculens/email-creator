function generateEmailCode() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;

    let profileName = document.getElementById("profileName");
    let profileId = document.getElementById("profileId");
    let profileId2 = document.getElementById("profileId2");

    let combiner = document.getElementById("combiner");

    let inputProfileName = document.getElementById("inputProfileName");
    let inputProfileId = document.getElementById("inputProfileId");

    profileName.value = inputProfileName.value;
    profileId.value = inputProfileId.value;
    profileId2.value = inputProfileId.value;

    let templateCode = input1+profileName.value+input2+profileId.value+input3+profileId2.value+input4;

    combiner.value = templateCode;

    /* Select the text field */
    combiner.select();
    combiner.setSelectionRange(0, 9999999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(combiner.value);

    /* Alert the copied text */
    alert("Template was copied!");
};