<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");

    function App() {      //위 const Container와 같음
        const [counter, setCounter] = React.useState(0);     // <-- React.useState(초기값, <-의 값을 바꾸는 함수)
        const onClick = () => {
            // setCounter(counter + 1);
            setCounter((current) => current + 1);       // current --> 현재 있는 값
        }
        return (
            <div>
                <h3>Total Clicks : {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App />, root);
</script>
</html>
