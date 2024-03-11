function Button({ children, className, ...restProps }) {
  let colr ='facebook'
  return (
    <button
      className={`rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700 bg-${colr}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default function Ex1bis() {
  return (
    <div className="grid h-screen place-content-center">
      <Button style={"bg-red-500"}>Click</Button>
    </div>
  );
}
