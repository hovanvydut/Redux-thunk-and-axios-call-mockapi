import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../actions/indexAction";

class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            status: false
        };
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            this.props.getProductMiddleWare(id);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("recieve props life cycle");
        this.setState(nextProps.editProduct);
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    };

    onSave = e => {
        e.preventDefault();
        let { history } = this.props;
        let { id, name, price, status } = this.state;
        let product = {
            id,
            name,
            price,
            status
        };
        if (id) {
            // update case
            this.props.saveProductUpdateInDB(product);
            history.goBack();
        } else {
            // add case
            this.props.addProductMiddleware(product);
            history.goBack();
        }
    };

    render() {
        let { name, price, status } = this.state;
        console.log(this.state);
        return (
            <div className="col-md-6 offset-md-3">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="status"
                            checked={status}
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label">Còn hàng</label>
                    </div>
                    <Link to="/productlist" className="btn btn-danger mr-1">
                        Trở lại
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        Lưu
                    </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        editProduct: state.editProduct
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProductMiddleware: product =>
            dispatch(actions.addProductMiddleware(product)),
        getProductMiddleWare: id => dispatch(actions.getProductMiddleWare(id)),
        saveProductUpdateInDB: product =>
            dispatch(actions.saveProductUpdateInDB(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
