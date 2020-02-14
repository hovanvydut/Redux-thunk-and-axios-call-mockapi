import React from "react";

class ProductListComp extends React.Component {
    render() {
        return (
            <div className="col-md-12 mt-3">
                <div className="card">
                    <div className="card-header">Danh sách sản phẩm</div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Mã</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>{this.props.children}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListComp;
