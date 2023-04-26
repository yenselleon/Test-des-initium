import RegisterForm from "../components/RegisterForm";

const HomeScreen = () => {
    return (
    <div className="bg-contact100" style={{ backgroundImage: "url('src/images/bg-01.jpg')" }}>
        <div className="container-contact100">
            {/* <UploadImageForm/> */}
            <RegisterForm/>
        </div>
    </div>
    )
}

export default HomeScreen;
