# React 19 useEffect Cleanup Function

This repository demonstrates a common error related to the `useEffect` hook in React 19: improper handling of the cleanup function, leading to potential memory leaks.

## Bug Description
The bug occurs when a timer, such as `setInterval`, is started inside a `useEffect` hook, and the cleanup function that should stop the timer is improperly implemented or missing. This can result in a memory leak because the timer continues to run even after the component unmounts.

## Solution
The solution involves correctly implementing the cleanup function within the `useEffect` hook's return statement. The cleanup function should clear any intervals or timeouts created inside the effect, ensuring that no unnecessary processes continue to run after the component is no longer needed. 

## How to reproduce
1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the application using `npm start`.
4. Observe that the counter continues to increment even after navigating away from the component. This indicates a memory leak.