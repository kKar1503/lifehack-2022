# Lifehack 2022: Boomer Kept Safe

Lifehack 2022 by NUS Computing. This is the project done by Team SPECIAL FORCES. The project highlights a home system that monitor elderly at home with visual sensors such as CCTV. However, it is also equipped with additional features to ensure that notifications or warning can be sent to a frontend dashboard to warn users to track RTMP feed data.

## Stack Used in Project

We will be utilizing various stacks targetted at each part of the system separately.

### Frontend

For Frontend, we will be developing with React to create a monitoring dashboard

-   React - Frontend Framework
-   SCSS - Styling
-   Axios - API calling to our backend
-   React Icons - To utilize web-based icons such as bootstrap icons
-   React Router - For frontend routing
-   Yup - For login validation

### Backend

For Backend, we will be developig a REST API to take in data from the Python OpenCV program for video feed analysis and also trasmits data to our frontend React dashboard.

-   Express - REST API web framework
-   JWT - Authentication
-   Yup - Validation of Request data
-   Morgan - Request logging
-   Winston - General purpose logging
-   Bcrypt - Password hashing
-   Dotenv - Environmental Variables configurations

### OpenCV Video Feed Processing

For the video feed processing, we will set up a basic Nginx Web Server to take in RTMP feed data from our system's video source. The video source is passed from a hardware built to integrate our system. The received video feed will pass through our trained OpenCV Model to analyse if our monitoring user is safe.

-   Python OpenCV - To train a ML model and analyze the video feed from the RTMP server
-   Nginx Web Server - To setup the basic RTMP Web Server
-   FFMPeg RTMP Library - To process multimedia data stream for Python OpenCV
