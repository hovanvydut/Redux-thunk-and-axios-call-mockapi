import React from "react";
import { Link } from "react-router-dom";

class ProductItemComponent extends React.Component {
    handleDelete = id => {
        if (window.confirm("Bạn chắc chắc muốn xoá ?")) {
            this.props.onDelete(id);
        }
    };

    render() {
        let { idx, product } = this.props;
        let statusName = product.status ? "Còn hàng" : "Hết hàng";
        let statusBadge = product.status ? "warning" : "danger";

        return (
            <tr>
                <th scope="row">{idx + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${statusBadge}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`product/${product.id}/edit`}
                        className="btn btn-primary mr-1"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(product.id)}
                    >
                        Xoá
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItemComponent;
