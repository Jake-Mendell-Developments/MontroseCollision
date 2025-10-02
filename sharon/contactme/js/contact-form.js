'use strict';

const emails = ['marcochavezco@outlook.com', 'whenderson@gomontrose.com'];

const sendEmail = async (emails, values) => {
  const { name, email, phone, address, car, message } = values;
  const location = 'Montrose Collision Center of Sharon';
  const _subject = 'New Collision Center of Sharon submission!';

  await Promise.all(
    emails.map((e) => {
      fetch(`https://formsubmit.co/ajax/${e}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          car,
          message,
          location,
          _subject,
        }),
      }).then((response) => response.json());
    })
  ).catch((error) => console.error(error));
};

const submitBtn = document.getElementById('submitBtn');

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const values = Object.fromEntries(data.entries());

  sendEmail(emails, values);
  submitBtn.style['background-color'] = 'green';
  submitBtn.style['border'] = 'white';
});
