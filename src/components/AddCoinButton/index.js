function AddCoinButton({ props }) {
  return (
    <div className="h-20 items-center content-center text-center">
      <button
        onClick={() => {
          props.setOpenModal((s) => !s);
        }}
        className="h-12 w-32 mt-4 text-md border rounded-full hover:bg-green-100"
      >
        Add Coin
      </button>
    </div>
  );
}

export default AddCoinButton;
