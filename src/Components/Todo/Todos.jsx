export default function Todos(props) {
  return (
    <>
      <div
        key={props.key}
        className="w-[400px] p-2 m-2 flex justify-center items-center rounded bg-gray-400"
      >
        <div className="text-bold m-2 text-slate-900">{props.text}</div>
      </div>
    </>
  );
}
