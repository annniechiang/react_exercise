const { useState } = React;

const counters = Array.from({ length: 10 }, (_, index) => index);

const Counter = () => {
  const [count, setCount] = useState(6);

  const handleClick = type => () => {
    setCount(type === 'increment' ? count + 1 : count - 1);
  };

  /*const handleIncrement = () => setCount(count + 1);  
  const handleDecrement = () => setCount(count - 1);
  const handleClick = (type) => {
    if (type === 'increment') {
      setCount(count + 1);
    }
    else if (type === 'decrement') {
      setCount(count - 1);
    }
  };*/

  return /*#__PURE__*/(
    React.createElement("div", {
      className: "container",
      style: {
        boxShadow: '0 0 10px 10px #eaeaea',
        padding: 20 } }, /*#__PURE__*/



    React.createElement("div", {
      className: `chevron chevron-up ${count >= 10 && 'visibility-hidden'}`

      /*className="chevron chevron-up"
      style={{
        visibility: count >= 10 && 'hidden',
      }}*/,

      onClick: handleClick('increment') }), /*#__PURE__*/


    React.createElement("div", { className: "number" }, count),

    count > 0 && /*#__PURE__*/
    React.createElement("div", {
      className: "chevron chevron-down",
      onClick: handleClick('decrement') })));




};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/
React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around' } },


counters.map((item) => /*#__PURE__*/
React.createElement(Counter, { key: item }))));