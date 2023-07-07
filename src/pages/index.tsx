import MainLayout from "src/infrastructure/common/layout/MainLayout";
import { PageKeys } from "src/core/application/common/domain/enums/MenuKeys";
import homePageImg from "assets/images/home-page-header.png";
import Image from "next/image";
import { Box, Container, Paper } from "@mui/material";
import styles from "assets/css/pages/home.module.css";
import { NormalText } from "src/infrastructure/common/components/controls/text";
import { NormalButton } from "src/infrastructure/common/components/controls/button";
export default function Home(context) {
  return (
    <>
      <MainLayout context={context}>
       <div className={styles.header_image}>
          <div className={styles.header_image_banner}>
            <NormalText className={styles.new_arrival}>New Arrival</NormalText>
            <NormalText className={styles.discoverOut_newCollection}>Discover Our</NormalText>
            <NormalText className={styles.discoverOut_newCollection}>New Collection</NormalText>
            <NormalText className={styles.banner_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</NormalText>
            <NormalButton className={styles.banner_btn} variant="contained" sx={{backgroundColor:"#B88E2F"}}>
              BUY NOW
            </NormalButton>
          </div>
       </div>
       <div>
        
       </div>
        </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      defaultSelectedKeys: PageKeys.Home,
    },
  };
}
