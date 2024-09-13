export default function LoadingButton({ children, loading }) {
  return (
    <button
      disabled={loading && true}
      className={`btnSubmit  mt-4 w-full flex items-center gap-2 justify-center ${
        loading ? "bg-disablePrimary" : "bg-primary active:scale-[95%]"
      }`}
    >
      {loading && <span className="btnLoader"></span>}{" "}
      {loading ? "Loading..." : children}
    </button>
  );
}
