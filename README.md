# Emojipedia
This is an exercise foccusing on mapping components in react, creating a site that explain the meanings of some emojis.

## The problem
I used the starter code from a Udemy challenge that from the beginning contained all the emojis and descriptions hardcoded in the the same App.jsx-file. The goal of the exercise is to be able to dynamically add new data to an array, and for the website to simply update with the new entry. 

## How I did it
* I created a seperate card component that contained all the classes and styling for every "card".
* Created props to replace the hardcoded data.
* Exported and imported an array with emojis and associated descriptions.
* Used .map to loop through the array and render card components.

## What I learned
I found the challenge to be an excellent repetition of how react props works and how to split up code in reusable components. 

## View it live
Netlify link: https://kriss-emojipedia.netlify.app
