import { ConfigProvider } from "antd";

const AntContext = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "green"
                }
            }}
        >
            {children}
        </ConfigProvider>
    );
}

export default AntContext;