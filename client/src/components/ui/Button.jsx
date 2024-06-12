export function Button({ onClick, children }) {
  return (
    <button
      className="bg-black px-4 py-1 rounded-md my-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
