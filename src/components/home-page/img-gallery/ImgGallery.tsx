import Title from "../../shared/title/Title";

const ImgGallery = () => {
    return (
        <div className="mt-16">
            <Title name="Gellary" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree3.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree5.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="tree6.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree7.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree8.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree9.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree10.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree11.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg object-cover" src="/tree12.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ImgGallery;