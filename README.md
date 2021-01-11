# React Blog Rendering Frontend

This Repository contains a Project which has the React Frontend for Blogs Rendering.\
This Project is created using a Modular approach, where various functionalities are divided into various Components & Pages.

> # Backend/Data-Source:

The Backend/Data-Source for getting the Blogs Data is located at:\
https://node-blogs-backend.herokuapp.com/blogs/

This Backend Project is created & uploaded on:\
https://github.com/KHardik1698/NodeBlogsBackend.git

> # Navigation:

**http://localhost:3000/blogs** will be the Home Page for Blogs.\
**http://localhost:3000/blogs/blogId** will be the Home Page for Individual Blog.

> # Api Calls Component:

This File contains the Backend Link from where the data will be fetched.

> # Components:

The Components Folder contains all the smaller Components which contains some small parts of the entire Project, which are common to multiple pages.\
It contains Loading Component, Header Component, Footer Component, Tiles Markup Component & Blog Markup Component.\
The Loading Component contains a Loading Spinner, which is created using the **react-loader-spinner** Library.\
The Header Component contains a Header Logo & a Navigation Link to Home Page.\
The Footer Component contains Copyright Information & Social Media Icons, which are created using **react-icons** Library.\
The Tiles Markup Component contains contents for Blog Tile, i.e. a Blog Title, Blog Author & Blog Image.\
The Blog Markup Component contains contents for Blog Page, i.e. a Blog Title, Blog Author, Blog Image, Blog Content, & a set of Related Links.

> # Images:

The Images Folder contains all the Images needed for the Website.\
Currently, there is only the Header Logo in this Folder.

> # Pages:

The Pages Folder contains all the Pages Components to be served for any given URL Route.\
It contains Blog Tile Page Component, Blog Page Component & Not Found Component.\
The Blog Tile Page Component contains the Component which will have the Blog Tiles in it.\
It contains Loading Component, Header Component, Footer Component, Tiles Markup Component & Not Found Component.\
The Blog Page Component contains the Component which will have the Blog Page in it.\
This component will be used for every Blog Tile clicked as well as every Related Link clicked.\
It contains Loading Component, Header Component, Footer Component, Blog Markup Component & Not Found Component.\
The Not Found Component contains a 404 Page Not Found Image as well as a Button to go back to the Blog Tiles Page.

> # Routers:

The Routers Folder contains the Router File which has all the Valid Routes which are to be used on the Website.\
Also, it maps which component will be used for which Route.

> # Styles:

The Styles Folder contains all the Style Files for the Pages & Components.

> # Demo:

The Project is Hosted on Vercel.\
This will be the Home Page for Blogs.\
**https://react-blog-rendering.vercel.app/blogs**
