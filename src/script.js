const { useState } = React;

const counters = Array.from({ length: 10 }, (_, index) => index);

const Counter = () => {
  const [count, setCount] = useState(6);

  const handleClick = (type) => () => {
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
  
  return (
    <div
      className="container"
      style={{
        boxShadow: '0 0 10px 10px #eaeaea',
        padding: 20,
      }}
    >
      
      <div 
        className={`chevron chevron-up ${count >= 10 && 'visibility-hidden'}`}
        
        /*className="chevron chevron-up"
        style={{
          visibility: count >= 10 && 'hidden',
        }}*/
        
        onClick={handleClick('increment')}
      /> 
      
      <div className="number">{count}</div>  
      
      {count > 0 && (
        <div 
          className="chevron chevron-down"
          onClick={handleClick('decrement')}
        />
      )}
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
  >
    {counters.map((item) => (
      <Counter key={item} />
    ))}
  </div>
);
