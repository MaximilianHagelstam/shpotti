import CustomError from "../components/CustomError";

const Custom404 = () => {
  return <CustomError statusCode={404} title="Page Not Found" />;
};

export default Custom404;
