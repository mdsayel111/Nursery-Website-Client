import { Button } from "@mui/material";
import BasicTable from "../../components/manage-products/table/table";
import Title from "../../components/shared/title/Title";
import { primary, secondary } from "../../constants/color";
import { NavLink } from "react-router-dom";

const ManageProducts = () => {
    return (
        <div className="mt-16">
            <Title name="Manage Products" />
            <div className="my-8 w-fit ml-auto">
                <NavLink to={"/add-product"}>
                    <Button sx={{
                        background: primary.main, color: "white", "&:hover": {
                            backgroundColor: secondary.main
                        }
                    }}>Add New Product</Button>
                </NavLink>
            </div>
            <div>
                <BasicTable />
            </div>
        </div>
    );
};

export default ManageProducts;