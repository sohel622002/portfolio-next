CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image varchar(255),
    name varchar(255),
    tech varchar(255),
    description varchar(255),
    detail TINYTEXT
);
INSERT INTO projects (image, name, tech, description)
VALUES (
        'https://firebasestorage.googleapis.com/v0/b/zyklo-react-app.appspot.com/o/projects%2Fzyklo-react-app.png?alt=media&token=56e3239d-653c-45db-b774-5cea5c345d20',
        'Zyklo React App',
        'React, CSS, Firebase',
        'Zyklo is react app similar to social media app where user can create account login/register, posts post, comment on other users, like other users posts.'
    );
INSERT INTO projects (detail)
VALUES (
        'I have developed a dynamic React project that offers users a
        comprehensive social media-like experience. In this application, users
        can create an account and log in securely. Once logged in, they can
        create and delete their posts, interact with other users by commenting
        on and liking their posts, and see a list of logged-in users. The user
        interface is designed to be intuitive and responsive, ensuring a
        seamless experience across various devices. \n To manage data and
        authentication processes efficiently, Firebase is integrated as the
        backend service. Firebase provides robust and scalable solutions for
        real-time database management, user authentication, and storage, making
        it an ideal choice for this project. With Firebase \'s backend
        capabilities, the application can handle multiple users and large
        amounts of data efficiently, ensuring a smooth and reliable user
        experience.'
    ) WHERE id = '688322fa-e825-4ede-87b2-2a185645a4c1';

UPDATE projects
SET detail = 'I have developed a dynamic React project that offers users a comprehensive social media-like experience. In this application, users can create an account and log in securely. Once logged in, they can create and delete their posts, interact with other users by commenting on and liking their posts, and see a list of logged-in users. The user interface is designed to be intuitive and responsive, ensuring a seamless experience across various devices.

            To manage data and authentication processes efficiently, Firebase is integrated as the backend service. Firebase provides robust and scalable solutions for real-time database management, user authentication, and storage, making it an ideal choice for this project. With Firebase ''s backend capabilities, the application can handle multiple users and large amounts of data efficiently, ensuring a smooth and reliable user experience.'
WHERE id = '688322fa-e825-4ede-87b2-2a185645a4c1';

UPDATE projects
SET githublink = 'https://github.com/sohel622002/Zyklo-react-app',
    liveat = 'https://zyklo-react-app.web.app/'
WHERE id = '688322fa-e825-4ede-87b2-2a185645a4c1';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";