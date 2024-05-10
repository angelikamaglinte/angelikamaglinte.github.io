function sendEmail () {
    var email = 'maglinteangelika@gmail.com';
    var subject = 'Subject of the email';
    var body = 'Body of the email';

    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Create a temporary link element and trigger a click
    var tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none'; // Hide the link
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}