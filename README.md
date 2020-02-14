# About project

Project được làm theo khoá học reactjs trên kênh youtube nghiepuit kết hợp với việc đọc các documentation để bổ trợ:
Dưới đây là tóm tắt kiến thức học được sau khoá học:

-   **[ReactJs](https://redux.js.org/introduction/getting-started)**: :)) không cần nói nhiều, là thư viện hỗ trợ buil ứng dụng SPA
-   **[Redux](https://react-redux.js.org/6.x/introduction/quick-start)**(react-redux) Giúp quản lí các state độc lập với các component. Redux sinh ra nhằm giải quyết vấn đề về việc chia sẻ state các Component khác nhau (đặc biệt là các component khác nhánh). Tuy nhiên, có những Component chỉ cần xử lí các logic trong Component đó nên không cần dùng redux, chỉ dùng internal state.
    ![enter image description here](https://miro.medium.com/max/1024/1*XHMeHrC4tdwTSHWRalm_lQ.png)
    ![Luồng xử lí của redux](https://viblo.asia/uploads/5c72ff3e-859a-457a-ae11-e1392baa90af.gif)

> Trong redux để ý các method quan trọng: connect, mapStateToPorps, mapDispatchToProps, Provider. Ở reactjs thì có thêm các method combineReducer giúp gộp các slice reducer lại với nhau

-   **[Redux-thunk](https://github.com/reduxjs/redux-thunk)** giúp tạo các middleware asyn action(là các creator action trả về các hàm như callApi thay vì plain object như action thường). Middleware hoạt động sau khi dispatch(action) và trước khi redux nhận action để phân loại và xử lí. Action creator --> action --> dispatch(action) --> middleware-reduxthunk (ở đây thường là nơi call API) --> reducer --> thay đổi state của Store --> tất cả hàm mapStateToProps đều được gọi và bắt đầu từ thằng Root(file App.js) rồi đến các Component con, chút, chắc giúp truyền các state ở store thành các props --> hàm renders trong các component có props thay đổi sẽ được gọi lại (theo life cycle) --> update thành công view
-   **[React-router](https://reacttraining.com/react-router/web/example/basic)**
    Phân biệt đươc sự khác nhau giữa **Link**, **NavLink**, **Custom Link**. Link như là thẻ a trong HTML vậy, còn NavLink là một bản nâng cấp của Link khi có props activeClassName giúp add class khi người dùng active link đó(click vào link đó). Còn custom link thì cao cấp hơn, có thể bọc cái Link đó bên ngoài nhiều thẻ và class khác nhau.
    Rồi **Route** giúp render các Component tương ứng với cac URL hiện tại, ví dụ URL /home thì sẽ hiển thị Component của Homepage. Còn 3 cái thẻ _Link_ trên giúp cập nhật lại URL nhưng không làm load trang
-   **[Axios](https://www.npmjs.com/package/axios)** giúp gọi API ở phía client giống như Jquery ajax vậy

## Note:

-   Hi vọng là trong thời gian tới mình có thể tự tạo được một ứng dụng SPA từ đầu đến cuối, tự phân tích, thiết kế, vẽ diagram, UI, rồi tự viêt API bằng ExpressJS :3

# Me

-   Mình là Vy, chưa vợ chưa con, vẫn còn trẻ tru, đây là thông tin contact của mình:
-   Email: hovanvydut@gmail.com
-   Fb: fb.com/hovanvydut
