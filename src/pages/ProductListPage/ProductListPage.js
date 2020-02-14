import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductList from "./../../components/ProductList/Product_ListComp";
import ProductItem from "./../../components/ProductItem/Product_ItemComp";
// import callApi from "./../../utils/apiCaller";
import * as actions from "./../../actions/indexAction";

class ProductListPage extends React.Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = id => {
        this.props.deleteProductReques(id);
    };

    render() {
        let { products } = this.props;

        return (
            <>
                <div className="col-md-12">
                    <Link
                        to="/product/add"
                        exact="true"
                        type="button"
                        className="btn btn-info"
                    >
                        Thêm sản phẩm
                    </Link>
                </div>
                <ProductList>{this.showProductItem(products)}</ProductList>
            </>
        );
    }

    showProductItem = products => {
        let result = null;
        if (products && products.length > 0) {
            result = products.map((product, idx) => (
                <ProductItem
                    key={idx}
                    product={product}
                    idx={idx}
                    onDelete={this.onDelete}
                />
            ));
        }
        return result;
    };
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => {
            dispatch(actions.fetchProductRequest());
        },
        deleteProductReques: id => {
            dispatch(actions.deleteProductReques(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
