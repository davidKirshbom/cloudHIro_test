function ErrorMessage({ message }) {
    return (
        <div className=" min-h-[100vh] min-w-[100vw] flex justify-center items-middle">
            <p className=" text-red-800">{message}</p>
        </div>
    );
}

export default ErrorMessage;
