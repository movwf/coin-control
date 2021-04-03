function DataList({ props }) {
  return (
    <>
      <input
        className="max-w-sm mx-auto md:w-2/3 border rounded-full p-3"
        list={props.list}
        name={props.name}
        id={props.name}
        onChange={e=>props.record(props.key+"key",e.target.value)}
      ></input>
      <datalist id={props.list}>
        {props.symbol.map((item, index) => (
              <option key={props.key+index} value={item} />
            ))}
      </datalist>
    </>
  );
}

export default DataList;
