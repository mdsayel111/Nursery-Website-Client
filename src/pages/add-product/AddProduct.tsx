import ProductForm from "../../components/shared/product-form/ProdctForm";


const AddProduct = () => {
    return (
        <div className="mt-16">
            {/* <Title name="Add Product" /> */}
            <ProductForm type="create" title="Add Product" />
        </div>
    );
};

export default AddProduct;