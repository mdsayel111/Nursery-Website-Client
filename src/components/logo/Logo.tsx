

const Logo = () => {
    return (
        <div className='cursor-pointer flex items-center gap-4'>
            <img src="/logo.png" alt="LOGO" className='w-10 h-10' />
            <h2 className='text-2xl font-bold text-black'>Tree <span className='text-primary'>Hub</span></h2>
        </div>
    );
};

export default Logo;