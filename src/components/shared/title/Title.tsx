
const Title = ({ name }: { name: string }) => {
    return (
        <div>
            <h1 className='text-4xl text-primary font-bold text-center mb-8'>{name}</h1>
        </div>
    );
};

export default Title;