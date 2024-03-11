import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex justify-center items-center mt-16">
            <Image
            src={"/loading.svg"}
            width={52}
            height={52}
            alt="loading"
            />
        </div>
    );
}

export default Loading;