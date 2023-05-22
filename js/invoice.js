// Global Variables
let query = window.location.search;

// App Init
window.onload = function() {
    // Clear Inputs
    document.getElementById("clientName").value = "";
    document.getElementById("contentID").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("combiner").value = "";

    if (query == (0)) {
        document.getElementById("creator").style.display = 'none';
    }
    else {
        document.getElementById("launcher").style.display = 'none';
        document.querySelector(".content .creator .instructions").style.padding = "70px 0px 30px 0px";
    }
}

// App
function generateEmail() {
    // Email Code
    let emailCodeI = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, "helvetica neue", helvetica, sans-serif"> <head> <meta charset="UTF-8"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta content="telephone=no" name="format-detection"> <title>Invoice</title><!--[if (mso 16)]> <style type="text/css"> a {text-decoration: none;} </style> <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style type="text/css"> #outlook a { padding:0; } .es-button { mso-style-priority:100!important; text-decoration:none!important; } a[x-apple-data-detectors] { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; } .es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all; } [data-ogsb] .es-button.es-button-1 { padding:10px 60px!important; } </style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> <div class="es-wrapper-color" style="background-color:transparent"><!--[if gte mso 9]> <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="transparent" origin="0.5, 0" position="0.5, 0"></v:fill> </v:background> <![endif]--> <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:transparent"> <tr class="gmail-fix" height="0"> <td style="padding:0;Margin:0"> <table cellpadding="0" cellspacing="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:400px"> <tr> <td cellpadding="0" cellspacing="0" border="0" height="0" style="padding:0;Margin:0;line-height:1px;min-width:400px"><img src="https://lggkca.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" width="400" height="1" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:400px;width:400px" alt></td> </tr> </table></td> </tr> <tr> <td valign="top" style="padding:0;Margin:0"> <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> <tr> <td align="center" style="padding:0;Margin:0"> <table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:400px"> <tr> <td align="left" bgcolor="#0e1111" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:20px;padding-bottom:20px;background-color:#0e1111;border-radius:20px 20px 0px 0px"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> <tr> <td valign="top" align="center" style="padding:0;Margin:0;width:380px"> <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> <tr> <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://src.inoculens.com/RrH" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#2CB543;font-size:14px"><img class="adapt-img" src="https://static.inoculens.com/logo" alt="INOCULENS MEDIA" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="85" title="INOCULENS MEDIA" height="85"></a></td> </tr> <tr> <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:33px;color:#efefef;font-size:22px"><strong>INOCULENS</strong></p></td> </tr> <tr> <td align="center" style="padding:20px;Margin:0;font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> <tr> <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td> </tr> </table></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:21px;color:#cccccc;font-size:14px">TOTAL:</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:54px;color:#cccccc;font-size:36px">€';

    // Amount

    let emailCodeII = '</p></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:18px;color:#cccccc;font-size:12px">';

    // languageI

    // Name

    let emailCodeIII = ',</p></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:18px;color:#cccccc;font-size:12px">';

    // languageII

    let emailCodeIV = '<strong>#';

    // ID (the one visible in email)

    let emailCodeV = '&nbsp;</strong>';

    // languageIII

    let emailCodeVI = '</p></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:18px;color:#cccccc;font-size:12px">';

    // languageIV

    let emailCodeVII = '</p></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p></td> </tr> <tr> <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#2cb543;background:#333333;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="';

    // Checkout link

    let emailCodeVIII = '" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#ffffff;font-size:12px;display:inline-block;background:#333333;border-radius:5px;font-family:tahoma, verdana, segoe, sans-serif;font-weight:normal;font-style:normal;line-height:14px;width:auto;text-align:center;padding:10px 60px;mso-padding-alt:0;mso-border-alt:10px solid #333333">';

    // languageVI

    let emailCodeIX = '</a></span></td> </tr> <tr> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p></td> </tr> <tr> <td align="center" style="padding:20px;Margin:0;font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> <tr> <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td> </tr> </table></td> </tr> <tr> <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:27px;color:#efefef;font-size:18px"><strong>INOCULENS</strong></p></td> </tr> <tr> <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:15px;color:#999999;font-size:10px">Seek innovation.</p></td> </tr> </table></td> </tr> </table></td> </tr> </table></td> </tr> </table> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> <tr> <td align="center" style="padding:0;Margin:0"> <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:400px" bgcolor="#FFFFFF"> <tr> <td align="left" bgcolor="#666666" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;background-color:#666666;border-radius:0px 0px 20px 20px"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> <tr> <td align="center" valign="top" style="padding:0;Margin:0;width:400px"> <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> <tr> <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;line-height:14px;color:#efefef;font-size:9px">©';

    // Year

    let emailCodeX = '. All rights reserved.</p></td> </tr> </table></td> </tr> </table></td> </tr> </table></td> </tr> </table></td> </tr> </table> </div> </body> </html>';

    // Invoice Details
    let amount = document.getElementById("amount").value;
    let contentID = document.getElementById("contentID").value;

    // Client Details
    let clientName = document.getElementById("clientName").value;
    let checkoutLink = 'https://checkout.inoculens.com/' + contentID;

    // Client Language
    let enI = 'Dear ';
    let ROI = 'Bună ';
    let ROfMI = 'Stimate dle. ';
    let ROfFI = 'Stimată dnă. ';

    let enII = 'Invoice ';
    let ROII = 'Factura ';
    let ROfMII = 'Factura ';
    let ROfFII = 'Factura ';

    let enIII = 'is now ready for you.';
    let ROIII = 'este acum disponibilă.';
    let ROfMIII = 'este acum disponibilă.';
    let ROfFIII = 'este acum disponibilă.';

    let enIV = 'Please find it attached to this email.';
    let ROIV = 'O poți găsi atașată în acest email.';
    let ROfMIV = 'O puteți găsi atașată în acest email.';
    let ROfFIV = 'O puteți găsi atașată în acest email.';

    let enVI = 'CHECKOUT';
    let ROVI= 'ACHITĂ';
    let ROfMVI = 'ACHITĂ';
    let ROfFVI= 'ACHITĂ';

    // The Year
    let year = new Date().getFullYear();

    // Code Generator
    let templateCodeEN = emailCodeI+amount+emailCodeII+enI+clientName+emailCodeIII+enII+emailCodeIV+contentID+emailCodeV+enIII+emailCodeVI+enIV+emailCodeVII+checkoutLink+emailCodeVIII+enVI+emailCodeIX+year+emailCodeX;
    let templateCodeRO = emailCodeI+amount+emailCodeII+ROI+clientName+emailCodeIII+ROII+emailCodeIV+contentID+emailCodeV+ROIII+emailCodeVI+ROIV+emailCodeVII+checkoutLink+emailCodeVIII+ROVI+emailCodeIX+year+emailCodeX;
    let templateCodeROfM = emailCodeI+amount+emailCodeII+ROfMI+clientName+emailCodeIII+ROfMII+emailCodeIV+contentID+emailCodeV+ROfMIII+emailCodeVI+ROfMIV+emailCodeVII+checkoutLink+emailCodeVIII+ROfMVI+emailCodeIX+year+emailCodeX;
    let templateCodeROfF = emailCodeI+amount+emailCodeII+ROfFI+clientName+emailCodeIII+ROfFII+emailCodeIV+contentID+emailCodeV+ROfFIII+emailCodeVI+ROfFIV+emailCodeVII+checkoutLink+emailCodeVIII+ROfFVI+emailCodeIX+year+emailCodeX;

    // The Combiner
    let combiner = document.getElementById("combiner");

    // Email Identification
    if (query.includes('lang=en')) {
        combiner.value = templateCodeEN;
        document.getElementById("copySubject").onclick = function() {
            document.getElementById("status").innerHTML = "Copied to clipboard!";
            document.getElementById("status").style.visibility = "visible";
            setTimeout(function() {
                document.getElementById("status").style.visibility = "hidden";
            }, 2000);
            return navigator.clipboard.writeText('Your invoice is ready for you!');
        }
    }
    else if (query.includes('lang=ro')) {
        if (query.includes('type=normal')) {
            combiner.value = templateCodeRO;
            document.getElementById("copySubject").onclick = function() {
                document.getElementById("status").innerHTML = "Copied to clipboard!";
                document.getElementById("status").style.visibility = "visible";
                setTimeout(function() {
                    document.getElementById("status").style.visibility = "hidden";
                }, 2000);
                return navigator.clipboard.writeText('Factura ta este acum disponibilă!');
            }
        }
        else if (query.includes('type=formal')) {
            let subject = 'Factura dvs. este acum disponibilă!';
            if (query.includes('gender=M')) {
                combiner.value = templateCodeROfM;
                document.getElementById("copySubject").onclick = function() {
                    document.getElementById("status").innerHTML = "Copied to clipboard!";
                    document.getElementById("status").style.visibility = "visible";
                    setTimeout(function() {
                        document.getElementById("status").style.visibility = "hidden";
                    }, 2000);
                    return navigator.clipboard.writeText(subject);
                }
            }
            else if (query.includes('gender=F')) {
                combiner.value = templateCodeROfF;
                document.getElementById("copySubject").onclick = function() {
                    document.getElementById("status").innerHTML = "Copied to clipboard!";
                    document.getElementById("status").style.visibility = "visible";
                    setTimeout(function() {
                        document.getElementById("status").style.visibility = "hidden";
                    }, 2000);
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

    // Copy Process for Checkout Link
    document.getElementById("copyCheckoutLink").onclick = function copyCheckoutLink() {
        document.getElementById("status").innerHTML = "Copied to clipboard!";
        document.getElementById("status").style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("status").style.visibility = "hidden";
        }, 2000);
        return navigator.clipboard.writeText(checkoutLink);
    }
}

// App Instructions
function instructionsExtras() {
    document.getElementById("status").style.visibility = "visible";
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Generate email first.";
    setTimeout(function() {
        document.getElementById("status").style.visibility = "hidden";
    }, 2000);
}