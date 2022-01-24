<?php 
    session_start();
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
if(isset($_POST['submit'])):
    $email = $_POST['email'];
    $body = "

    Thank you for your interest in the KuCoin Exchange, please fill out the application form with valid information, we will review your project based on the information you provided, if anything is found to be invalid or false, your project will not be considered for listing on KuCoin.

    Please submit this application and your project will be sent for review by the Research Department. After you pass the initial review, we will share with you the listing workflow and tips, additionally, an account manager will be assigned to you, to walk you through the listing process.
    
    kindly fill the form below, having difficulty in filling it or having any questions, please kindly get back to us by replying.
     
    Submission of Token for Listing. please Click here.  
    https://forms.gle/oQKKG5XGi8M21H1M7


    Sincerely,
    KuCoin Listing Team.
    ";

    
    $subject = "Listing proposal";
    //Send mail using phpMailer
    require_once 'mail/Exception.php';
    require_once 'mail/PHPMailer.php';
    require_once 'mail/SMTP.php';

    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;                               // Enable verbose debug output

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'mail.paddifysolutions.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'info@paddifysolutions.com';                 // SMTP username
        $mail->Password = 'Paddifys234#';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to
        
        $mail->setFrom('info@paddifysolutions.com', 'KuCoin');
        $mail->addAddress($email);    // Add a recipient
        //$mail->addAddress('ellen@example.com');               // Name is optional
        //$mail->addReplyTo('listing@sucoin.xyz');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        //$mail->isHTML(true);                                  // Set email format to HTML


        $mail->Subject = $subject;//$_POST['subject'];
        //$mail->Body    = "</br>"; //'This is the HTML message body <b>in bold!</b>';
        $mail->Body = $body;  
        $mail->Priority = 1;
        $mail->AddCustomHeader("MIME-version", "1.0");
        //$mail->AltBody = $_POST['message'];

        $mail->smtpConnect([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ]);

        $mail->send();
        //echo "Message has been sent";
        $errors['message'] = "Check your email to reset your password.";   
    } 
    catch(Exception $e){
        echo "Message could not be sent: {$mail->ErrorInfo}";
    }
endif;
?>
    <section class="m-b-30 m-t-80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-xl-5 col-md-6 col-sm-7" style="padding:20px;">
                    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                        <h3 class="text-center" style="font-weight:bolder;">Listing Proposal</h3>
                        <p class="text-center">Enter the email to send proposal.</p>
                        <p class="text-center" style="color:green;"><?php if(isset($errors['message'])){echo $errors['message']; } ?></p>
                        <div class="d-flex flex-column">
                            <input type="email" placeholder="Email" name="email" class="form-control form-control-border" value="<?php if(isset($email)){ echo $email; }?>">
                            <span class="error"><?php if(isset($errors['email'])){echo $errors['email']; } ?></span>
                        </div>
                        <div class="d-flex justify-content-end m-t-30">
                            <button type="submit" name="submit" class="btn btn-primary rounded-all w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    </section>