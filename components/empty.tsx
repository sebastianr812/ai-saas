import Image from "next/image";

interface EmptyProps {
    label: string;

}

const Empty: React.FC<EmptyProps> = ({
    label
}) => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-20 ">
            <div className="relative h-72 w-72">
                <Image
                    fill
                    alt='Empty'
                    src='/empty.png' />
            </div>
            <p className="text-sm text-center text-muted-foreground">
                {label}
            </p>
        </div>
    );
}

export default Empty;