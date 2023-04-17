# ReactMeals

This is a dummy project to practice React which user can choose meals and add quantity. The selected meals are added to a Shopping Cart where user can add more or remove.

<img src="./Preview/preview.gif" />


## Technologies

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" width="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express" width="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="50" alt="sass" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50" alt="nodejs" />

## Installation

* Clone the repository to your local machine.
* Navigate to the project directory in your terminal.
* Run ``npm install`` to install all required dependencies.
* Create a .env file in the frontend directory and add the following environment variables:

```env
REACT_APP_API_PATH=<your Express.js API URL>
REACT_APP_API_KEY=<A string that the backend will validate as Authorization in Headers>
```

* Create another .env file in the backend directory with the following enviroment variables:

```env
CLOUDINARY_API_KEY=<your Cloudinary API key>
CLOUDINARY_API_SECRET=<your Cloudinary API secret>
CLOUDINARY_CLOUD_NAME=<your Cloudinary cloud name>
```

* Run ``npm start`` in frontend directory or ``npm run dev`` in backend directory to start the development server.

## Usage

* Navigate to localhost:8080 in your web browser.
* Browse the homepage and click in "View gallery" in services section to browse and interact with the image gallery.
* Scroll down to load more images.
* Change category in the left sidebar.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

* Cloudinary for providing the API that allows this website to fetch images.
* React Lazy Load Image Component for the lazy loading functionality used in the image gallery.
* React Infinite Scroll Component for the infinite scroll functionality used in the image gallery.
