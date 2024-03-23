export default function AddButton({ className, buttonName, onClick }) {
  return (
    <div className="flex justify-center items-center">
      <button
        type="submit"
        onClick={onClick}
        className={`p-2 w-[10rem] rounded-3xl ${className}`}
      >
        {buttonName}
      </button>
    </div>
  );
}
