'use strict';

const emails = [
  'marcochavezco@outlook.com',
  'jpease@gomontrose.com',
  'jandrews@gomontrose.com',
];

const sendEmail = async (emails, values) => {
  const { name, email, phone, car, message } = values;
  const location = 'Montrose Collision Center Ford of Fairlawn';
  const _subject = 'New Collision Center Ford of Fairlawn submission!';

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
