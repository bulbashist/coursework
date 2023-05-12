import Header from "../../components/header/header";
import AsideBar from "./components/aside-bar/aside-bar";
import GoodsList from "./components/goods-list/goods-list";
import { PageInfo } from "./page-style";

const MainPage = () => {
  return (
    <>
      <Header />
      <PageInfo>
        <AsideBar />
        <GoodsList />
      </PageInfo>
    </>
  );
};

export default MainPage;
