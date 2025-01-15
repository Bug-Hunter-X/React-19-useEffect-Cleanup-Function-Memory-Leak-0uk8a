```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the cleanup function
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // The return statement in useEffect should only return a cleanup function
    // and should be responsible for clearing the interval. 
    // This is crucial to prevent memory leaks and unexpected behavior.
    return () => clearInterval(intervalId); 
  }, []);

  return <div>Count: {count}</div>;
}
```