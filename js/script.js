// Global Variables
let query = window.location.search;

// App Init
window.onload = function() {
    // Clear Inputs
    document.getElementById("clientName").value = "";
    document.getElementById("clientID").value = "";
    document.getElementById("combiner").value = "";

    if (query == (0)) {
        document.getElementById("creator").style.display = 'none';
    }
    else {
        document.getElementById("identification").style.display = 'none';
    }
}

// App
function generateEmail() {
    // Email Code
    let emailCodeI = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, "helvetica neue", helvetica, sans-serif">   <head>    <meta charset="UTF-8">    <meta name="x-apple-disable-message-reformatting">    <meta http-equiv="X-UA-Compatible" content="IE=edge">    <meta content="telephone=no" name="format-detection">    <title>New Profile</title><!--[if (mso 16)]>     <style type="text/css">     a {text-decoration: none;}     </style>     <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]> <xml>     <o:OfficeDocumentSettings>     <o:AllowPNG></o:AllowPNG>     <o:PixelsPerInch>96</o:PixelsPerInch>     </o:OfficeDocumentSettings> </xml> <![endif]-->    <style type="text/css"> #outlook a {  padding:0; } .es-button {  mso-style-priority:100!important;  text-decoration:none!important; } a[x-apple-data-detectors] {  color:inherit!important;  text-decoration:none!important;  font-size:inherit!important;  font-family:inherit!important;  font-weight:inherit!important;  line-height:inherit!important; } .es-desk-hidden {  display:none;  float:left;  overflow:hidden;  width:0;  max-height:0;  line-height:0;  mso-hide:all; } [data-ogsb] .es-button {  border-width:0!important;  padding:10px 20px 10px 20px!important; } </style>   </head>   <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">    <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">     <v:fill type="tile" color="#f6f6f6"></v:fill>    </v:background>   <![endif]-->     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">       <tr class="gmail-fix" height="0">        <td style="padding:0;Margin:0">         <table cellpadding="0" cellspacing="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:400px">           <tr>            <td cellpadding="0" cellspacing="0" border="0" height="0" style="padding:0;Margin:0;line-height:1px;min-width:400px"><img src="https://lggkca.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" width="400" height="1" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:400px;width:400px" alt></td>           </tr>         </table></td>       </tr>       <tr>        <td valign="top" style="padding:0;Margin:0">         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">           <tr>            <td align="center" style="padding:0;Margin:0">             <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:400px">               <tr>                <td align="left" background="https://static.inoculens.com/cdn/img/covers/email/white-dotted-shape.jpg" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;background-image:url(https://static.inoculens.com/cdn/img/covers/email/white-dotted-shape.jpg);background-repeat:no-repeat;background-position:center top">                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                   <tr>                    <td valign="top" align="center" style="padding:0;Margin:0;width:400px">                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                       <tr>                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><a target="_blank" href="https://src.inoculens.com/RrH" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#2CB543;font-size:14px"><img class="adapt-img" src="https://static.inoculens.com/logo" alt="INOCULENS MEDIA" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="85" title="INOCULENS MEDIA"></a></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:33px;color:#333333;font-size:22px"><strong>INOCULENS</strong> MEDIA</p></td>                       </tr>                       <tr>                        <td align="center" style="padding:20px;Margin:0;font-size:0">                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                           <tr>                            <td style="padding:0;Margin:0;border-bottom:2px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>                           </tr>                         </table></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px">';
    
    // languageI     
    // clientName

    let emailCodeII = ',</p></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px">';
    
    // languageII
    
    let emailCodeIII = '</p></td>                       </tr>                       <tr>                        <td align="center" style="padding:20px;Margin:0;font-size:0">                         <table border="0" width="10%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                           <tr>                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>                           </tr>                         </table></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://profile.inoculens.com/';

    // clientID
    
    let emailCodeIV = '" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#2CB543;font-size:14px"><img class="adapt-img" src="https://static.inoculens.com/cdn/img/qr/profile/';
    
    // clientID

    let emailCodeV = '.png" alt="INOCULENS MEDIA" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="185" title="INOCULENS MEDIA"></a></td>                       </tr>                       <tr>                        <td align="center" style="padding:20px;Margin:0;font-size:0">                         <table border="0" width="10%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                           <tr>                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>                           </tr>                         </table></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px">';
    
    // languageIII
    
    let emailCodeVI = '</p></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px">'
    
    // languageIV
    
    let emailCodeVII = '</p></td>                       </tr>                       <tr>                        <td align="center" style="padding:20px;Margin:0;font-size:0">                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                           <tr>                            <td style="padding:0;Margin:0;border-bottom:2px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>                           </tr>                         </table></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:27px;color:#333333;font-size:18px"><strong>INOCULENS</strong> MEDIA</p></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:15px;color:#333333;font-size:10px"><a target="_blank" href="mailto:create@inoculens.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:10px;font-family:tahoma, verdana, segoe, sans-serif">create@inoculens.com</a></p></td>                       </tr>                       <tr>                        <td align="center" style="padding:0;Margin:0;padding-top:15px;font-size:0">                         <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                           <tr>                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:15px"><a target="_blank" href="https://src.inoculens.com/0tT" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#2CB543;font-size:14px"><img title="Facebook" src="https://lggkca.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:15px"><a target="_blank" href="https://src.inoculens.com/1yT" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#2CB543;font-size:14px"><img title="Instagram" src="https://lggkca.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>                            <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://src.inoculens.com/Vun" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#2CB543;font-size:14px"><img title="Youtube" src="https://lggkca.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>                           </tr>                         </table></td>                       </tr>                     </table></td>                   </tr>                 </table></td>               </tr>             </table></td>           </tr>         </table>         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">           <tr>            <td align="center" style="padding:0;Margin:0">             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:400px">               <tr>                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;background-color:#efefef">                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                   <tr>                    <td align="center" valign="top" style="padding:0;Margin:0;width:400px">                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                       <tr>                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:15px;color:#666666;font-size:10px">©2022. All rights reserved.</p></td>                       </tr>                     </table></td>                   </tr>                 </table></td>               </tr>             </table></td>           </tr>         </table></td>       </tr>     </table>    </div>    </body> </html>';
    
    // Client Details
    let clientName = document.getElementById("clientName").value;
    let clientID = document.getElementById("clientID").value;

    // Client Language
    let enI = 'Dear ';
    let ROI = 'Bună ';
    let ROfMI = 'Stimate dle. ';
    let ROfFI = 'Stimată dnă. ';

    let enII = 'Your media files are now available for you.';
    let ROII = 'Fișierele tale media sunt disponibile pe platformă.';
    let ROfMII = 'Fișierele dvs. media sunt disponibile pe platformă.';
    let ROfFII = 'Fișierele dvs. media sunt disponibile pe platformă.';

    let enIII = 'To access them, just scan the QR code';
    let ROIII = 'Îți poți accesa profilul scanând codul QR';
    let ROfMIII = 'Vă puteți accesa profilul scanând codul QR';
    let ROfFIII = 'Vă puteți accesa profilul scanând codul QR';

    let enIV = 'or simply click on it.';
    let ROIV = 'sau făcând click direct pe el.';
    let ROfMIV = 'sau făcând click direct pe el.';
    let ROfFIV = 'sau făcând click direct pe el.';

    // Code Generator
    let templateCodeEN = emailCodeI+enI+clientName+emailCodeII+enII+emailCodeIII+clientID+emailCodeIV+clientID+emailCodeV+enIII+emailCodeVI+enIV+emailCodeVII;
    let templateCodeRO = emailCodeI+ROI+clientName+emailCodeII+ROII+emailCodeIII+clientID+emailCodeIV+clientID+emailCodeV+ROIII+emailCodeVI+ROIV+emailCodeVII;
    let templateCodeROfM = emailCodeI+ROfMI+clientName+emailCodeII+ROfMII+emailCodeIII+clientID+emailCodeIV+clientID+emailCodeV+ROfMIII+emailCodeVI+ROfMIV+emailCodeVII;
    let templateCodeROfF = emailCodeI+ROfFI+clientName+emailCodeII+ROfFII+emailCodeIII+clientID+emailCodeIV+clientID+emailCodeV+ROfFIII+emailCodeVI+ROfFIV+emailCodeVII;
        
    // The Combiner
    let combiner = document.getElementById("combiner");

    // Email Identification
    if (query.includes('lang=en')) {
        combiner.value = templateCodeEN;
        document.getElementById("copySubject").onclick = function() {
            return navigator.clipboard.writeText('Your media files are now available for you.');
        }
    }
    else if (query.includes('lang=ro')) {
        if (query.includes('type=normal')) {
            combiner.value = templateCodeRO;
            document.getElementById("copySubject").onclick = function() {
                return navigator.clipboard.writeText('Fișierele tale media sunt disponibile pe platformă.');
            }
        }
        else if (query.includes('type=formal')) {
            let subject = 'Fișierele dvs. media sunt disponibile pe platformă.';
            if (query.includes('gender=M')) {
                combiner.value = templateCodeROfM;
                document.getElementById("copySubject").onclick = function() {
                    return navigator.clipboard.writeText(subject);
                }
            }
            else if (query.includes('gender=F')) {
                combiner.value = templateCodeROfF;
                document.getElementById("copySubject").onclick = function() {
                    return navigator.clipboard.writeText(subject);
                }
            }
        }
    }

    // Copy Process
    combiner.select();
    combiner.setSelectionRange(0, 9999999); // For Mobile
    navigator.clipboard.writeText(combiner.value); // Other Devices
    
    // App Respone
    document.getElementById("status").style.visibility = "visible";
    document.getElementById("status").style.color = "green";
    document.getElementById("status").innerHTML = "Email generated!";
    console.log("Email generated!");
    setTimeout(function() {
        document.getElementById("status").style.visibility = "hidden";
    }, 2000);

    // Copy Process for ClientID
    document.getElementById("copyClientID").onclick = function copyClientID() {
        return navigator.clipboard.writeText(clientID);
    }
}

// App Instructions
function instructionsExtras() {
    document.getElementById("status").style.visibility = "visible";
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Generate email first.";
}